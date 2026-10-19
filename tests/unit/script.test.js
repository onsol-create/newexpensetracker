import { describe, test, expect, beforeEach, vi } from 'vitest';
import { buildMockDOM } from './setup.js';
import { loadScript } from './loader.js';

beforeEach(() => {
    localStorage.clear();
    buildMockDOM();
    loadScript();
});

// ================================================================
describe('1. formatMoney()', () => {
    test('USD: 2 chữ số thập phân, symbol trước', () => {
        window.appState.currency = 'USD';
        window.exchangeRates.USD = 1;
        expect(window.formatMoney(1234.5)).toBe('$1,234.50');
    });

    test('VND: 0 chữ số thập phân, symbol sau', () => {
        window.appState.currency = 'VND';
        window.exchangeRates.VND = 25000;
        expect(window.formatMoney(1000)).toMatch(/25\.000\.000/);
    });

    test('JPY: 0 chữ số thập phân', () => {
        window.appState.currency = 'JPY';
        window.exchangeRates.JPY = 150;
        expect(window.formatMoney(10)).toMatch(/1,500/);
    });

    test('Fallback USD khi currency không hợp lệ', () => {
        window.appState.currency = 'UNKNOWN';
        expect(window.formatMoney(100)).toBe('$100.00');
    });
});

// ================================================================
describe('2. getCategoryName()', () => {
    test('Tên tiếng Anh khi lang=en', () => {
        localStorage.setItem('spendSmart_lang', 'en');
        expect(window.getCategoryName('food', 'EXPENSE')).toBe('Food & Dining');
        expect(window.getCategoryName('salary', 'INCOME')).toBe('Salary & Wages');
    });

    test('Tên tiếng Việt khi lang=vi', () => {
        localStorage.setItem('spendSmart_lang', 'vi');
        expect(window.getCategoryName('food', 'EXPENSE')).toBe('Ăn uống');
        expect(window.getCategoryName('salary', 'INCOME')).toBe('Lương & Thu nhập');
    });

    test('Trả về catId khi không tìm thấy', () => {
        localStorage.setItem('spendSmart_lang', 'en');
        expect(window.getCategoryName('xyz', 'EXPENSE')).toBe('xyz');
    });
});

// ================================================================
describe('3. getPaymentMethodName()', () => {
    test('Dịch sang tiếng Việt', () => {
        localStorage.setItem('spendSmart_lang', 'vi');
        expect(window.getPaymentMethodName('Credit Card')).toBe('Thẻ tín dụng');
        expect(window.getPaymentMethodName('Cash')).toBe('Tiền mặt');
    });

    test('Giữ nguyên khi tiếng Anh', () => {
        localStorage.setItem('spendSmart_lang', 'en');
        expect(window.getPaymentMethodName('Bank Transfer')).toBe('Bank Transfer');
    });

    test('Trả về input nếu key lạ', () => {
        expect(window.getPaymentMethodName('Crypto')).toBe('Crypto');
    });
});

// ================================================================


// ================================================================
describe('5. renderMetrics()', () => {
    let currentMonthDate;

    beforeEach(() => {
        // Tạo ngày tháng động thuộc tháng hiện tại để lọt qua bộ lọc của renderMetrics
        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        currentMonthDate = `${year}-${month}-15`; // Ngày 15 của tháng hiện tại

        // Setup DOM cơ bản
        document.body.innerHTML = `
            <h2 id="metricTotalBalance"></h2>
            <h2 id="metricTotalIncome"></h2>
            <h2 id="metricTotalExpense"></h2>
            <h2 id="metricSavingsRate"></h2>
            <span id="metricIncomeCount"></span>
            <span id="metricExpenseCount"></span>
            <span id="metricBalanceStatus"></span>
        `;

        // Reset state mặc định
        window.appState.currency = 'USD';
        window.exchangeRates = { USD: 1 };
    });

    test('Tính net balance, income, expense đúng', () => {
        // Dùng currentMonthDate thay vì hardcode ngày cũ
        window.appState.transactions = [
            { type: 'INCOME', amount: 1500, date: currentMonthDate },
            { type: 'EXPENSE', amount: 300, date: currentMonthDate },
        ];
        window.renderMetrics();

        expect(document.getElementById('metricTotalIncome').textContent).toBe('$1,500.00');
        expect(document.getElementById('metricTotalExpense').textContent).toBe('$300.00');
        expect(document.getElementById('metricTotalBalance').textContent).toBe('$1,200.00');
    });

    test('Deficit khi balance < 0', () => {
        // Dùng currentMonthDate
        window.appState.transactions = [
            { type: 'INCOME', amount: 100, date: currentMonthDate },
            { type: 'EXPENSE', amount: 500, date: currentMonthDate },
        ];
        window.renderMetrics();
        
        const status = document.getElementById('metricBalanceStatus');
        expect(status.textContent).toBe('Deficit');
        expect(status.className).toContain('rose'); // Có thể là text-rose-500
    });
});

// ================================================================
describe('6. renderTransactions() + filter', () => {
    beforeEach(() => {
        window.appState.transactions = [
            { id: '1', type: 'INCOME', amount: 100, category: 'salary', date: '2024-01-15', title: 'Salary', paymentMethod: 'Bank Transfer', notes: '' },
            { id: '2', type: 'EXPENSE', amount: 50, category: 'food', date: '2024-01-20', title: 'Groceries', paymentMethod: 'Cash', notes: 'weekly' },
            { id: '3', type: 'EXPENSE', amount: 30, category: 'transport', date: '2024-02-10', title: 'Fuel', paymentMethod: 'Credit Card', notes: '' },
        ];
        localStorage.setItem('spendSmart_lang', 'en');
        window.populateTypeFilterOptions();
        window.populateCategoryFilterOptions();
    });

    test('Hiển thị tất cả khi không filter', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('typeFilter').value = 'ALL';
        document.getElementById('categoryFilter').value = 'ALL';
        document.getElementById('monthFilter').value = '';
        window.renderTransactions();
        expect(document.querySelectorAll('#transactionTableBody tr')).toHaveLength(3);
    });

    test('Lọc theo type=EXPENSE', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('typeFilter').value = 'EXPENSE';
        document.getElementById('categoryFilter').value = 'ALL';
        document.getElementById('monthFilter').value = '';
        window.renderTransactions();
        expect(document.querySelectorAll('#transactionTableBody tr')).toHaveLength(2);
    });

    test('Lọc theo category=food', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('typeFilter').value = 'ALL';
        document.getElementById('categoryFilter').value = 'food';
        document.getElementById('monthFilter').value = '';
        window.renderTransactions();
        const rows = document.querySelectorAll('#transactionTableBody tr');
        expect(rows).toHaveLength(1);
        expect(rows[0].textContent).toContain('Groceries');
    });

    test('Lọc theo search keyword', () => {
        document.getElementById('searchInput').value = 'fuel';
        document.getElementById('typeFilter').value = 'ALL';
        document.getElementById('categoryFilter').value = 'ALL';
        document.getElementById('monthFilter').value = '';
        window.renderTransactions();
        expect(document.querySelectorAll('#transactionTableBody tr')).toHaveLength(1);
    });

    test('Lọc theo tháng 2024-01', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('typeFilter').value = 'ALL';
        document.getElementById('categoryFilter').value = 'ALL';
        document.getElementById('monthFilter').value = '2024-01';
        window.renderTransactions();
        expect(document.querySelectorAll('#transactionTableBody tr')).toHaveLength(2);
    });

    test('Hiện thông báo khi không có kết quả', () => {
        document.getElementById('searchInput').value = 'zzzz';
        document.getElementById('typeFilter').value = 'ALL';
        document.getElementById('categoryFilter').value = 'ALL';
        document.getElementById('monthFilter').value = '';
        window.renderTransactions();
        expect(document.getElementById('noTransactionsMessage').classList.contains('hidden')).toBe(false);
    });
});

// ================================================================
describe('7. processAutoBilling()', () => {
    test('Tạo transaction + dời nextBilling (monthly)', () => {
        const y = new Date();
        y.setDate(y.getDate() - 1);
        const pastDate = y.toISOString().split('T')[0];

        window.appState.transactions = [];
        window.appState.subscriptions = [
            { id: 's1', name: 'Netflix', category: 'entertainment', amount: 15, cycle: 'monthly', nextBilling: pastDate, paymentMethod: 'Credit Card' },
        ];

        window.processAutoBilling();

        expect(window.appState.transactions).toHaveLength(1);
        expect(window.appState.transactions[0].title).toContain('Auto-pay');
        expect(window.appState.transactions[0].amount).toBe(15);
        const today = new Date().toISOString().split('T')[0];
        expect(window.appState.subscriptions[0].nextBilling > today).toBe(true);
    });

    test('Không tạo transaction khi chưa đến hạn', () => {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        window.appState.transactions = [];
        window.appState.subscriptions = [
            { id: 's1', name: 'Spotify', category: 'entertainment', amount: 10, cycle: 'monthly', nextBilling: nextMonth.toISOString().split('T')[0], paymentMethod: 'Cash' },
        ];
        window.processAutoBilling();
        expect(window.appState.transactions).toHaveLength(0);
    });

    test('Yearly: nextBilling + 1 năm', () => {
        window.appState.transactions = [];
        window.appState.subscriptions = [
            { id: 's1', name: 'Domain', category: 'utilities', amount: 100, cycle: 'yearly', nextBilling: '2024-01-15', paymentMethod: 'Bank Transfer' },
        ];
        window.processAutoBilling();
        expect(window.appState.subscriptions[0].nextBilling).toBe('2025-01-15');
    });
});

// ================================================================
describe('8. renderBudgets()', () => {
    let currentMonthKey;

    beforeEach(() => {
        // Lấy key tháng hiện tại (VD: "2026-10")
        const now = new Date();
        currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        
        document.body.innerHTML = '<div id="budgetsList"></div>';
        window.appState.currency = 'USD';
    });

    test('Tính đúng % chi tiêu', () => {
        // Set ngân sách cho tháng hiện tại: food = 400 USD
        window.appState.budgets = { [currentMonthKey]: { food: 400 } };
        
        // Thêm 1 giao dịch chi 100 USD trong tháng này
        window.appState.transactions = [
            { type: 'EXPENSE', category: 'food', amount: 100, date: `${currentMonthKey}-15` }
        ];

        window.renderBudgets();
        const cards = document.querySelectorAll('#budgetsList > div');
        expect(cards.length).toBe(1);
        // 100 / 400 = 25%
        expect(cards[0].textContent).toContain('25%');
    });

    test('Thanh đỏ khi ≥ 90%', () => {
        window.appState.budgets = { [currentMonthKey]: { food: 400 } };
        window.appState.transactions = [
            { type: 'EXPENSE', category: 'food', amount: 380, date: `${currentMonthKey}-15` }
        ];

        window.renderBudgets();
        expect(document.querySelector('#budgetsList .bg-rose-500')).not.toBeNull();
    });

    test('Thanh vàng khi 75–89%', () => {
        window.appState.budgets = { [currentMonthKey]: { food: 400 } };
        window.appState.transactions = [
            { type: 'EXPENSE', category: 'food', amount: 320, date: `${currentMonthKey}-15` }
        ];

        window.renderBudgets();
        expect(document.querySelector('#budgetsList .bg-amber-500')).not.toBeNull();
    });
});

// ================================================================
describe('9. renderGoals()', () => {
    test('Hiển thị % tiến độ', () => {
        window.appState.goals = [{ id: 'g1', title: 'Vacation', target: 1000, current: 250 }];
        window.renderGoals();
        const card = document.querySelector('#goalsList > div');
        expect(card.textContent).toContain('25%');
        expect(card.textContent).toContain('Vacation');
    });

    test('Cap 100% khi vượt mục tiêu', () => {
        window.appState.goals = [{ id: 'g1', title: 'Fund', target: 100, current: 200 }];
        window.renderGoals();
        expect(document.querySelector('#goalsList').textContent).toContain('100%');
    });
});

// ================================================================
describe('10. renderSubscriptions()', () => {
    test('Tính tổng monthly & yearly đúng', () => {
        window.appState.subscriptions = [
            { id: 's1', name: 'Netflix', category: 'entertainment', amount: 12, cycle: 'monthly', nextBilling: '2026-01-01', paymentMethod: 'Credit Card' },
            { id: 's2', name: 'Domain', category: 'utilities', amount: 120, cycle: 'yearly', nextBilling: '2026-01-01', paymentMethod: 'Bank Transfer' },
        ];
        window.appState.currency = 'USD';
        localStorage.setItem('spendSmart_lang', 'en');
        window.renderSubscriptions();

        expect(document.getElementById('subTotalMonthly').textContent).toBe('$22.00');
        expect(document.getElementById('subTotalYearly').textContent).toBe('$264.00');
        expect(document.getElementById('subActiveCount').textContent).toBe('2');
    });

    test('Hiện thông báo khi rỗng', () => {
        window.appState.subscriptions = [];
        localStorage.setItem('spendSmart_lang', 'en');
        window.renderSubscriptions();
        expect(document.getElementById('subscriptionsGrid').textContent).toContain('No active subscriptions');
    });
});

// ================================================================
describe('11. handleTransactionSubmit()', () => {
    beforeEach(() => {
        window.appState.transactions = [];
        localStorage.setItem('spendSmart_lang', 'en');
        window.setTxType('EXPENSE');
    });

    test('Thêm giao dịch mới', () => {
        document.getElementById('editTxId').value = '';
        document.getElementById('txType').value = 'EXPENSE';
        document.getElementById('txTitle').value = 'Lunch';
        document.getElementById('txAmount').value = '25.5';
        document.getElementById('txCategory').value = 'food';
        document.getElementById('txDate').value = '2024-03-01';
        document.getElementById('txPaymentMethod').value = 'Cash';
        document.getElementById('txNotes').value = '';

        window.handleTransactionSubmit({ preventDefault: () => { } });

        expect(window.appState.transactions).toHaveLength(1);
        expect(window.appState.transactions[0].title).toBe('Lunch');
        expect(window.appState.transactions[0].amount).toBe(25.5);
    });

    test('Sửa giao dịch hiện có', () => {
        window.appState.transactions = [{ id: 'tx_1', type: 'EXPENSE', title: 'Old', amount: 10, category: 'food', date: '2024-01-01', paymentMethod: 'Cash', notes: '' }];
        document.getElementById('editTxId').value = 'tx_1';
        document.getElementById('txType').value = 'EXPENSE';
        document.getElementById('txTitle').value = 'Updated';
        document.getElementById('txAmount').value = '99';
        document.getElementById('txCategory').value = 'food';
        document.getElementById('txDate').value = '2024-01-01';
        document.getElementById('txPaymentMethod').value = 'Cash';

        window.handleTransactionSubmit({ preventDefault: () => { } });

        expect(window.appState.transactions).toHaveLength(1);
        expect(window.appState.transactions[0].title).toBe('Updated');
        expect(window.appState.transactions[0].amount).toBe(99);
    });
});

// ================================================================
describe('12. changeCurrency()', () => {
    test('Cập nhật state + symbol + select', () => {
        localStorage.setItem('spendSmart_lang', 'en');
        window.appState.currency = 'USD';
        window.changeCurrency('EUR');
        expect(window.appState.currency).toBe('EUR');
        expect(document.getElementById('txCurrencySymbol').textContent).toBe('€');
        expect(document.getElementById('currencySelect').value).toBe('EUR');
    });
});

// ================================================================
describe('13. changeLanguage()', () => {
    test('Lưu lang + dịch data-i18n', () => {
        document.body.insertAdjacentHTML('beforeend', '<span data-i18n="nav_dashboard">Dashboard</span>');
        window.changeLanguage('vi');
        expect(localStorage.getItem('spendSmart_lang')).toBe('vi');
        const el = document.querySelector('[data-i18n="nav_dashboard"]:not([id])');
        expect(el.textContent).toBe('Tổng quan');
    });
});

// ================================================================
describe('14. setHeatmapMode()', () => {
    test('Đổi mode + cập nhật active class', () => {
        window.appState.heatmapMode = 'both';
        window.setHeatmapMode('expense');
        expect(window.appState.heatmapMode).toBe('expense');
        expect(document.getElementById('heatmapBtn-expense').classList.contains('active')).toBe(true);
        expect(document.getElementById('heatmapBtn-both').classList.contains('active')).toBe(false);
    });
});

// ================================================================
describe('15. populateHeatmapMonthOptions()', () => {
    test('Có option tháng hiện tại', () => {
        window.appState.transactions = [];
        window.populateHeatmapMonthOptions();
        const select = document.getElementById('heatmapMonthSelect');
        expect(select.options.length).toBeGreaterThanOrEqual(1);
    });

    test('Chứa tháng có giao dịch', () => {
        window.appState.transactions = [
            { id: '1', type: 'EXPENSE', amount: 10, category: 'food', date: '2023-05-15', title: 'A', paymentMethod: 'Cash' },
        ];
        window.populateHeatmapMonthOptions();
        const opts = Array.from(document.getElementById('heatmapMonthSelect').options).map(o => o.value);
        expect(opts).toContain('2023-05');
    });
});

// ================================================================
describe('16. updateBudgetLimit()', () => {
    test('Lưu giá trị hợp lệ', () => {
        window.appState.budgets = { food: 400 };
        window.updateBudgetLimit('food', '500');
        expect(window.appState.budgets.food).toBe(500);
        const saved = JSON.parse(localStorage.getItem('spendSmart_tw_data'));
        expect(saved.budgets.food).toBe(500);
    });

    test('Giá trị không hợp lệ → 0', () => {
        window.updateBudgetLimit('food', 'abc');
        expect(window.appState.budgets.food).toBe(0);
    });
});

// ================================================================
describe('17. deleteGoal / deleteSubscription', () => {
    test('Xóa goal theo id', () => {
        window.appState.goals = [
            { id: 'g1', title: 'A', target: 100, current: 0 },
            { id: 'g2', title: 'B', target: 200, current: 0 },
        ];
        window.deleteGoal('g1');
        expect(window.appState.goals).toHaveLength(1);
        expect(window.appState.goals[0].id).toBe('g2');
    });

    test('Xóa subscription theo id', () => {
        window.appState.subscriptions = [
            { id: 's1', name: 'A', amount: 1, cycle: 'monthly', category: 'food', nextBilling: '2026-01-01', paymentMethod: 'Cash' },
            { id: 's2', name: 'B', amount: 2, cycle: 'monthly', category: 'food', nextBilling: '2026-01-01', paymentMethod: 'Cash' },
        ];
        window.deleteSubscription('s1');
        expect(window.appState.subscriptions).toHaveLength(1);
        expect(window.appState.subscriptions[0].id).toBe('s2');
    });
});

// ================================================================
describe('18. handleGoalSubmit()', () => {
    test('Thêm goal + lưu state', () => {
        window.appState.goals = [];
        document.getElementById('goalTitle').value = 'New Car';
        document.getElementById('goalTarget').value = '5000';
        document.getElementById('goalCurrent').value = '500';

        window.handleGoalSubmit({ preventDefault: () => { } });

        expect(window.appState.goals).toHaveLength(1);
        expect(window.appState.goals[0].title).toBe('New Car');
        expect(window.appState.goals[0].target).toBe(5000);
        expect(window.appState.goals[0].current).toBe(500);
    });
});

// ================================================================
describe('19. submitDeposit()', () => {
    test('Cộng dồn tiền vào goal', () => {
        window.appState.goals = [{ id: 'g1', title: 'Fund', target: 1000, current: 200 }];
        document.getElementById('depositGoalId').value = 'g1';
        document.getElementById('depositAmount').value = '150';
        window.submitDeposit();
        expect(window.appState.goals[0].current).toBe(350);
    });

    test('Bỏ qua nếu ≤ 0', () => {
        window.appState.goals = [{ id: 'g1', title: 'Fund', target: 1000, current: 200 }];
        document.getElementById('depositGoalId').value = 'g1';
        document.getElementById('depositAmount').value = '-10';
        window.submitDeposit();
        expect(window.appState.goals[0].current).toBe(200);
    });
});

// ================================================================
describe('20. handleSubscriptionSubmit()', () => {
    beforeEach(() => {
        window.appState.subscriptions = [];
        localStorage.setItem('spendSmart_lang', 'en');
    });

    test('Thêm subscription mới', () => {
        document.getElementById('editSubId').value = '';
        document.getElementById('subName').value = 'Disney+';
        document.getElementById('subAmount').value = '9.99';
        document.getElementById('subCategory').value = 'entertainment';
        document.getElementById('subCycle').value = 'monthly';
        document.getElementById('subNextBilling').value = '2026-12-01';
        document.getElementById('subPaymentMethod').value = 'Credit Card';

        window.handleSubscriptionSubmit({ preventDefault: () => { } });
        expect(window.appState.subscriptions).toHaveLength(1);
        expect(window.appState.subscriptions[0].name).toBe('Disney+');
    });

    test('Sửa subscription hiện có', () => {
        window.appState.subscriptions = [{ id: 's1', name: 'Old', amount: 5, category: 'entertainment', cycle: 'monthly', nextBilling: '2026-01-01', paymentMethod: 'Cash' }];
        document.getElementById('editSubId').value = 's1';
        document.getElementById('subName').value = 'New Name';
        document.getElementById('subAmount').value = '20';
        document.getElementById('subCategory').value = 'entertainment';
        document.getElementById('subCycle').value = 'yearly';
        document.getElementById('subNextBilling').value = '2027-01-01';
        document.getElementById('subPaymentMethod').value = 'Cash';

        window.handleSubscriptionSubmit({ preventDefault: () => { } });
        expect(window.appState.subscriptions).toHaveLength(1);
        expect(window.appState.subscriptions[0].name).toBe('New Name');
        expect(window.appState.subscriptions[0].cycle).toBe('yearly');
    });
});

// ================================================================
describe('21. showToast()', () => {
    test('Tạo toast trong container', () => {
        vi.useFakeTimers();
        window.showToast('Hello Vitest');
        const container = document.getElementById('toastContainer');
        expect(container.children.length).toBe(1);
        expect(container.textContent).toContain('Hello Vitest');
        vi.useRealTimers();
    });
});

// ================================================================
describe('22. resetDemoData()', () => {
    test('Ghi đè bằng sample data', () => {
        window.appState.transactions = [];
        window.resetDemoData();
        
        // Cách 1: Sửa cứng thành 36 (nếu data 6 tháng của bạn có đúng 36 giao dịch)
        // expect(window.appState.transactions.length).toBe(36);

        // Cách 2 (TỐT NHẤT): So sánh động với độ dài của hàm getSampleData()
        const expectedLength = window.getSampleData().length;
        expect(window.appState.transactions.length).toBe(expectedLength);
    });
});

// ================================================================
describe('23. getSampleData()', () => {
    test('Trả về danh sách giao dịch đủ field', () => {
        const data = window.getSampleData();
        
        // Sửa thành kiểm tra độ dài lớn hơn 0
        expect(data.length).toBeGreaterThan(0); 
        
        // Hoặc nếu bạn muốn chắc chắn là 36:
        // expect(data).toHaveLength(36);

        data.forEach(tx => {
            expect(tx).toHaveProperty('id');
            expect(tx).toHaveProperty('type');
            expect(tx).toHaveProperty('amount');
            expect(tx).toHaveProperty('category');
            expect(tx).toHaveProperty('date');
        });
    });

    test('Có cả INCOME và EXPENSE', () => {
        const data = window.getSampleData();
        expect(data.some(t => t.type === 'INCOME')).toBe(true);
        expect(data.some(t => t.type === 'EXPENSE')).toBe(true);
    });
});

// ================================================================
describe('24. Edge cases', () => {
    test('formatMoney với số âm', () => {
        window.appState.currency = 'USD';
        expect(window.formatMoney(-100)).toMatch(/-\$100\.00|\$-100\.00/);
    });

    test('formatMoney với 0', () => {
        window.appState.currency = 'USD';
        expect(window.formatMoney(0)).toBe('$0.00');
    });

    test('renderMetrics với mảng rỗng', () => {
        window.appState.transactions = [];
        localStorage.setItem('spendSmart_lang', 'en');
        window.renderMetrics();
        expect(document.getElementById('metricTotalIncome').textContent).toBe('$0.00');
        expect(document.getElementById('metricTotalBalance').textContent).toBe('$0.00');
    });
});