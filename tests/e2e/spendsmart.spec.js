// e2e/spendsmart.spec.js
import { test, expect } from '@playwright/test';

// ============================================================
// HELPER: mock API + reset state trước mỗi test
// ============================================================
const MOCK_RATES = {
    EUR: 0.92, GBP: 0.79, JPY: 150, INR: 83, VND: 25000,
};

async function setupPage(page) {
    // Mock exchange rate API — tránh phụ thuộc mạng
    await page.route('**/open.er-api.com/**', (route) =>
        route.fulfill({ json: { rates: MOCK_RATES } })
    );

    // Clear localStorage trước khi trang load
    await page.addInitScript(() => localStorage.clear());

    await page.goto('/');

    // Đợi app init xong (metrics đã render)
    await page.waitForSelector('#metricTotalBalance:not(:empty)');
}

// ============================================================
// BLOCK 1: Dashboard — metrics, currency, theme
// ============================================================
test.describe('Dashboard', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
    });

    test('hiển thị metrics từ sample data', async ({ page }) => {
        // Sample data: income 3800 + 650 = 4450; expense ~1503.50
        await expect(page.locator('#metricTotalBalance')).toContainText('2,946.50');
        await expect(page.locator('#metricTotalIncome')).toContainText('4,450.00');
        await expect(page.locator('#metricTotalExpense')).toContainText('1,503.50');
        await expect(page.locator('#metricBalanceStatus')).toHaveText('Surplus');
    });

    test('hiển thị recent transactions table', async ({ page }) => {
        const rows = page.locator('#dashRecentTableBody tr');
        await expect(rows).toHaveCount(5);  // top 5 recent
    });

    test('đổi currency sang VND → metrics đổi theo tỉ giá', async ({ page }) => {
        await page.selectOption('#currencySelect', 'VND');
        // 2946.5 * 25000 = 73,662,500
        await expect(page.locator('#metricTotalBalance')).toContainText('73.662.500');
        // Symbol VND đặt sau
        await expect(page.locator('#metricTotalBalance')).toContainText('₫');
    });

    test('đổi currency sang EUR → symbol €', async ({ page }) => {
        await page.selectOption('#currencySelect', 'EUR');
        // 2946.5 * 0.92 = 2710.78
        await expect(page.locator('#metricTotalBalance')).toContainText('€');
        await expect(page.locator('#metricTotalBalance')).toContainText('2.710,78');
    });

    test('toggle dark/light theme', async ({ page }) => {
        const html = page.locator('html');
        // Mặc định (sample) là dark
        const initial = await html.getAttribute('class');
        const initiallyDark = initial?.includes('dark') ?? false;

        await page.click('button[onclick="toggleTheme()"]');
        const after = await html.getAttribute('class');
        const nowDark = after?.includes('dark') ?? false;

        expect(nowDark).toBe(!initiallyDark);
    });

    test('chuyển ngôn ngữ sang tiếng Việt', async ({ page }) => {
        await page.selectOption('#langSelect', 'vi');
        await expect(page.locator('#pageTitle')).toContainText('Tổng quan');
        await expect(page.locator('#metricBalanceStatus')).toHaveText('Thặng dư');
    });
});

// ============================================================
// BLOCK 2: Transactions — CRUD, filter, search
// ============================================================
test.describe('Transactions', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
        // Chuyển sang trang transactions
        await page.click('#nav-transactions');
        await expect(page.locator('#page-transactions')).toBeVisible();
    });

    test('hiển thị 8 giao dịch sample', async ({ page }) => {
        await expect(page.locator('#transactionTableBody tr')).toHaveCount(8);
    });

    test('thêm giao dịch mới', async ({ page }) => {
        await page.click('button:has-text("Add Transaction")');
        await expect(page.locator('#transactionModal')).toBeVisible();

        await page.fill('#txTitle', 'E2E Test Coffee');
        await page.fill('#txAmount', '4.50');
        await page.selectOption('#txCategory', 'food');
        await page.fill('#txDate', '2024-06-15');
        await page.selectOption('#txPaymentMethod', 'Cash');
        await page.click('button[type="submit"]:has-text("Save Transaction")');

        await expect(page.locator('#transactionModal')).toBeHidden();

        // Tìm giao dịch vừa thêm
        await page.fill('#searchInput', 'E2E Test Coffee');
        const rows = page.locator('#transactionTableBody tr');
        await expect(rows).toHaveCount(1);
        await expect(rows.first()).toContainText('E2E Test Coffee');
        await expect(rows.first()).toContainText('$4.50');
    });

    test('sửa giao dịch có sẵn', async ({ page }) => {
        // Tìm "Supermarket Groceries"
        await page.fill('#searchInput', 'Supermarket');
        const editBtn = page.locator('#transactionTableBody tr').first().locator('button').first();
        await editBtn.click();

        await expect(page.locator('#transactionModal')).toBeVisible();
        await page.fill('#txTitle', 'Edited Groceries');
        await page.fill('#txAmount', '999');
        await page.click('button[type="submit"]');

        await page.fill('#searchInput', 'Edited Groceries');
        await expect(page.locator('#transactionTableBody tr')).toHaveCount(1);
        await expect(page.locator('#transactionTableBody tr').first()).toContainText('$999.00');
    });

    test('xóa giao dịch có confirm', async ({ page }) => {
        const initialCount = await page.locator('#transactionTableBody tr').count();

        // Xóa dòng đầu tiên
        await page.locator('#transactionTableBody tr').first().locator('button').nth(1).click();
        await expect(page.locator('#confirmModal')).toBeVisible();
        await page.click('#confirmOkBtn');
        await expect(page.locator('#confirmModal')).toBeHidden();

        await expect(page.locator('#transactionTableBody tr')).toHaveCount(initialCount - 1);
    });

    test('lọc theo type EXPENSE', async ({ page }) => {
        await page.selectOption('#typeFilter', 'EXPENSE');
        const rows = page.locator('#transactionTableBody tr');
        const count = await rows.count();
        expect(count).toBeGreaterThan(0);
        // Không có dòng nào chứa dấu "+" (income)
        for (let i = 0; i < count; i++) {
            const text = await rows.nth(i).textContent();
            expect(text).not.toMatch(/\+\s*\$/);
        }
    });

    test('tìm kiếm theo từ khóa', async ({ page }) => {
        await page.fill('#searchInput', 'rent');
        const rows = page.locator('#transactionTableBody tr');
        await expect(rows).toHaveCount(1);
        await expect(rows.first()).toContainText('Apartment Rent');
    });

    test('tìm kiếm không có kết quả → hiển thị thông báo', async ({ page }) => {
        await page.fill('#searchInput', 'zzz_khong_ton_tai_zzz');
        await expect(page.locator('#noTransactionsMessage')).toBeVisible();
    });

    test('reset filters khôi phục toàn bộ danh sách', async ({ page }) => {
        await page.fill('#searchInput', 'rent');
        await page.selectOption('#typeFilter', 'EXPENSE');
        await page.click('button[onclick="resetFilters()"]');

        await expect(page.locator('#transactionTableBody tr')).toHaveCount(8);
        await expect(page.locator('#searchInput')).toHaveValue('');
        await expect(page.locator('#typeFilter')).toHaveValue('ALL');
    });
});

// ============================================================
// BLOCK 3: Persistence — reload giữ dữ liệu
// ============================================================
test.describe('Persistence', () => {
    test('dữ liệu còn sau khi reload', async ({ page }) => {
        // Thay vì gọi setupPage (vì setupPage có chứa lệnh clear localStorage lúc reload),
        // ta tự cấu hình cơ bản cho trang:
        await page.route('**/open.er-api.com/**', (route) =>
            route.fulfill({ json: { rates: MOCK_RATES } })
        );
        await page.goto('/');
        await page.waitForSelector('#metricTotalBalance:not(:empty)');

        // Thêm giao dịch
        await page.click('button:has-text("Add Transaction")');
        await page.fill('#txTitle', 'Persistence Test');
        await page.fill('#txAmount', '42');
        await page.selectOption('#txCategory', 'food');
        await page.fill('#txDate', '2024-06-15');
        await page.click('button[type="submit"]');

        // Đảm bảo dữ liệu đã được lưu xuống localStorage của trình duyệt trước khi reload
        await page.waitForTimeout(300);

        // Reload (lúc này KHÔNG bị dính lệnh clear localStorage nữa)
        await page.reload();
        await page.waitForSelector('#metricTotalBalance:not(:empty)');
        await page.click('#nav-transactions');

        // Kiểm tra dữ liệu vẫn còn sau khi reload
        const searchInput = page.locator('#searchInput');
        await expect(searchInput).toBeVisible();
        await searchInput.fill('Persistence Test');
        
        await expect(page.locator('#transactionTableBody tr')).toHaveCount(1);
    });
    
    test('currency được lưu sau reload', async ({ page }) => {
        await setupPage(page);
        await page.selectOption('#currencySelect', 'EUR');
        await page.reload();
        await page.waitForSelector('#metricTotalBalance:not(:empty)');
        await expect(page.locator('#currencySelect')).toHaveValue('EUR');
        await expect(page.locator('#metricTotalBalance')).toContainText('€');
    });

    test('clear all data → metrics về 0', async ({ page }) => {
        await setupPage(page);
        await page.click('#nav-settings');
        await page.click('button:has-text("Clear All Data")');
        await page.click('#confirmOkBtn');

        await expect(page.locator('#metricTotalBalance')).toContainText('$0.00');
        await expect(page.locator('#metricTotalIncome')).toContainText('$0.00');
    });
});

// ============================================================
// BLOCK 4: Budgets — hiển thị % theo category
// ============================================================
test.describe('Budgets', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
        await page.click('#nav-budgets');
        await expect(page.locator('#page-budgets')).toBeVisible();
    });

    test('hiển thị danh sách budget với % chi tiêu', async ({ page }) => {
        const cards = page.locator('#budgetsList > div');
        const count = await cards.count();
        expect(count).toBeGreaterThan(0);
        // Mỗi card có % (dạng "XX%")
        await expect(cards.first()).toContainText('%');
    });

    test('mở modal quản lý limits', async ({ page }) => {
        await page.click('button[onclick="openBudgetModal()"]');
        await expect(page.locator('#budgetModal')).toBeVisible();
        await page.click('button[onclick="closeBudgetModal()"]');
        await expect(page.locator('#budgetModal')).toBeHidden();
    });
});

// ============================================================
// BLOCK 5: Goals — tạo, nạp tiền, xóa
// ============================================================
test.describe('Goals', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
        await page.click('#nav-budgets');
    });

    test('tạo mục tiêu mới', async ({ page }) => {
        const initialCount = await page.locator('#goalsList > div').count();

        await page.click('button[onclick="openGoalModal()"]');
        await page.fill('#goalTitle', 'E2E Goal');
        await page.fill('#goalTarget', '1000');
        await page.fill('#goalCurrent', '100');
        await page.click('button[type="submit"]:has-text("Create Target")');

        await expect(page.locator('#goalsList > div')).toHaveCount(initialCount + 1);
        await expect(page.locator('#goalsList')).toContainText('E2E Goal');
    });

    test('nạp tiền vào mục tiêu', async ({ page }) => {
        // Mở deposit cho goal đầu tiên
        await page.locator('#goalsList > div').first().locator('button').first().click();
        await expect(page.locator('#depositModal')).toBeVisible();

        await page.fill('#depositAmount', '50');
        await page.click('button[onclick="submitDeposit()"]');
        await expect(page.locator('#depositModal')).toBeHidden();

        // Goal có current mới (850 + 50 = 900 với Vacation Fund)
        await expect(page.locator('#goalsList > div').first()).toContainText('Saved:');
    });
});

// ============================================================
// BLOCK 6: Subscriptions — hiển thị, thêm
// ============================================================
test.describe('Subscriptions', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
        await page.click('#nav-subscriptions');
        await expect(page.locator('#page-subscriptions')).toBeVisible();
    });

    test('hiển thị 3 subscriptions sample', async ({ page }) => {
        await expect(page.locator('#subscriptionsGrid > div')).toHaveCount(3);
        await expect(page.locator('#subActiveCount')).toHaveText('3');
    });

    test('thêm subscription mới', async ({ page }) => {
        await page.click('button[onclick="openSubscriptionModal()"]');
        await expect(page.locator('#subscriptionModal')).toBeVisible();

        await page.fill('#subName', 'E2E Disney+');
        await page.fill('#subAmount', '9.99');
        await page.selectOption('#subCategory', 'entertainment');
        await page.selectOption('#subCycle', 'monthly');
        await page.fill('#subNextBilling', '2026-12-01');
        await page.click('button[type="submit"]:has-text("Save Subscription")');

        await expect(page.locator('#subscriptionModal')).toBeHidden();
        await expect(page.locator('#subscriptionsGrid > div')).toHaveCount(4);
        await expect(page.locator('#subscriptionsGrid')).toContainText('E2E Disney+');
    });

    test('xóa subscription', async ({ page }) => {
        await page.locator('#subscriptionsGrid > div').first().locator('button').nth(1).click();
        await expect(page.locator('#subscriptionsGrid > div')).toHaveCount(2);
        await expect(page.locator('#subActiveCount')).toHaveText('2');
    });
});

// ============================================================
// BLOCK 7: Heatmap — tương tác cơ bản
// ============================================================
test.describe('Heatmap', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
    });

    test('heatmap có các ngày của tháng hiện tại', async ({ page }) => {
        const days = page.locator('#heatmapGrid button');
        const count = await days.count();
        expect(count).toBeGreaterThan(20);  // gần 30 ngày/tháng
        expect(count).toBeLessThanOrEqual(31);
    });

    test('đổi mode expense → nút active', async ({ page }) => {
        await page.click('#heatmapBtn-expense');
        await expect(page.locator('#heatmapBtn-expense')).toHaveClass(/active/);
        await expect(page.locator('#heatmapBtn-both')).not.toHaveClass(/active/);
    });

    test('chọn tháng từ dropdown', async ({ page }) => {
        const select = page.locator('#heatmapMonthSelect');
        const options = await select.locator('option').count();
        expect(options).toBeGreaterThanOrEqual(1);
        // Có ít nhất option tháng hiện tại
        const values = await select.locator('option').evaluateAll(opts => opts.map(o => o.value));
        expect(values[0]).toMatch(/^\d{4}-\d{2}$/);
    });
});

// ============================================================
// BLOCK 8: Analytics — charts + metrics
// ============================================================
test.describe('Analytics', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
        await page.click('#nav-analytics');
        await expect(page.locator('#page-analytics')).toBeVisible();
    });

    test('hiển thị 4 thẻ metrics', async ({ page }) => {
        await expect(page.locator('#statAvgDaily')).not.toBeEmpty();
        await expect(page.locator('#statTopCategory')).not.toBeEmpty();
        await expect(page.locator('#statTopPayment')).not.toBeEmpty();
        await expect(page.locator('#statNetSurplus')).not.toBeEmpty();
    });

    test('3 canvas charts được render', async ({ page }) => {
        await expect(page.locator('#analyticsBarChart')).toBeVisible();
        await expect(page.locator('#analyticsDoughnutChart')).toBeVisible();
        await expect(page.locator('#analyticsCumulativeChart')).toBeVisible();
    });

    test('forecast cuối tháng có số', async ({ page }) => {
        const forecast = await page.locator('#endOfMonthForecast').textContent();
        expect(forecast).toMatch(/\$|€|₫/);  // có symbol tiền
    });
});

// ============================================================
// BLOCK 9: Navigation — tất cả trang
// ============================================================
test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await setupPage(page);
    });

    const pages = [
        ['dashboard', 'Dashboard Overview'],
        ['transactions', 'Transaction History'],
        ['analytics', 'Analytics'],
        ['budgets', 'Budgets'],
        ['subscriptions', 'Recurring Subscriptions'],
        ['settings', 'Settings'],
    ];

    for (const [pageId, titleFragment] of pages) {
        test(`điều hướng tới ${pageId}`, async ({ page }) => {
            await page.click(`#nav-${pageId}`);
            await expect(page.locator(`#page-${pageId}`)).toBeVisible();
            await expect(page.locator('#pageTitle')).toContainText(titleFragment);
        });
    }
});