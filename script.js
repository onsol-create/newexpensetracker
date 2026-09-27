// --- TRANSLATIONS DICTIONARY ---
const translations = {
  en: {
    nav_dashboard: "Dashboard",
    nav_transactions: "Transactions",
    nav_analytics: "Analytics & Reports",
    nav_budgets: "Budgets & Goals",
    nav_settings: "Settings & Data",
    
    page_dashboard_title: "Dashboard Overview",
    page_dashboard_subtitle: "Summary of financial balance, activity, and key metrics",
    page_transactions_title: "Transaction Records",
    page_transactions_subtitle: "Manage, search, and audit your income and expenses",
    page_analytics_title: "Analytics & Financial Insights",
    page_analytics_subtitle: "Detailed visual breakdown of spending habits and trends",
    page_budgets_title: "Budgets & Savings Targets",
    page_budgets_subtitle: "Control category spending caps and track savings goals",
    page_settings_title: "Settings & Data Management",
    page_settings_subtitle: "Currency configurations and JSON data backups",
    
    net_balance: "Net Balance",
    total_income: "Total Income",
    total_expenses: "Total Expenses",
    savings_rate: "Savings Rate",
    status: "Status",
    positive: "Surplus",
    negative: "Deficit",
    inflow: "Inflow",
    outflow: "Outflow",
    target: "Target",
    
    recent_activity: "Recent Financial Activity",
    expense_distribution: "Expense Distribution",
    by_category: "By Category",
    recent_preview: "Recent Transactions Preview",
    view_all: "View All \u2192",
    details: "Details \u2192",
    
    th_transaction: "Transaction",
    th_category: "Category",
    th_date: "Date",
    th_payment: "Payment Method",
    th_amount: "Amount",
    th_actions: "Actions",
    
    search_placeholder: "Search...",
    all_types: "All Types",
    expenses: "Expenses",
    income: "Income",
    all_categories: "All Categories",
    reset_filters: "Reset Filters",
    
    avg_daily_spend: "Avg Daily Spend",
    top_category: "Top Category",
    top_payment: "Top Payment",
    net_surplus: "Net Surplus",
    income_vs_expense: "Income vs Expense Trends",
    category_breakdown: "Expense Category Breakdown",
    
    monthly_budgets: "Monthly Budgets",
    budget_desc: "Control spending limits",
    manage_limits: "Manage Limits",
    savings_targets: "Savings Targets",
    goals_desc: "Track long term savings progress",
    new_goal: "+ New Goal",
    
    general_preferences: "General Preferences",
    default_currency: "Default Currency Symbol",
    currency_desc: "Used for formatting financial metrics",
    data_backup: "Data Backup & Restore",
    backup_desc: "Export your expense data to JSON file or restore from a previous backup.",
    export_data: "Export Data (JSON)",
    import_data: "Import Data (JSON)",
    reset_options: "Reset Data Options",
    reset_desc: "Reset app state to initial demo dataset or clear all records permanently.",
    load_demo: "Load Sample Demo Data",
    clear_all: "Clear All Data",
    
    add_transaction: "Add Transaction",
    add: "Add",
    modal_title_add: "Add Transaction",
    modal_title_edit: "Edit Transaction",
    label_title: "Title / Description",
    placeholder_title: "e.g. Grocery Shopping, Salary",
    label_amount: "Amount",
    label_category: "Category",
    label_date: "Date",
    label_payment: "Payment Method",
    label_notes: "Notes (Optional)",
    placeholder_notes: "Additional details...",
    btn_cancel: "Cancel",
    btn_save: "Save Transaction",
    btn_done: "Done",
    
    no_transactions: "No matching transactions found",
    no_recent: "No recent transactions"
  },
  vi: {
    nav_dashboard: "Tổng quan",
    nav_transactions: "Giao dịch",
    nav_analytics: "Phân tích & Báo cáo",
    nav_budgets: "Ngân sách & Mục tiêu",
    nav_settings: "Cài đặt & Dữ liệu",
    
    page_dashboard_title: "Tổng quan tài chính",
    page_dashboard_subtitle: "Tóm tắt số dư, hoạt động và các chỉ số tài chính chính",
    page_transactions_title: "Lịch sử giao dịch",
    page_transactions_subtitle: "Quản lý, tìm kiếm và kiểm tra các khoản thu chi của bạn",
    page_analytics_title: "Phân tích & Báo cáo tài chính",
    page_analytics_subtitle: "Chi tiết trực quan về thói quen chi tiêu và xu hướng",
    page_budgets_title: "Ngân sách & Mục tiêu tiết kiệm",
    page_budgets_subtitle: "Kiểm soát giới hạn chi tiêu và theo dõi mục tiêu tiết kiệm",
    page_settings_title: "Cài đặt & Quản lý dữ liệu",
    page_settings_subtitle: "Cấu hình tiền tệ và sao lưu dữ liệu JSON",
    
    net_balance: "Số dư ròng",
    total_income: "Tổng thu nhập",
    total_expenses: "Tổng chi tiêu",
    savings_rate: "Tỷ lệ tiết kiệm",
    status: "Trạng thái",
    positive: "Thặng dư",
    negative: "Thâm hụt",
    inflow: "Tiền vào",
    outflow: "Tiền ra",
    target: "Mục tiêu",
    
    recent_activity: "Hoạt động tài chính gần đây",
    expense_distribution: "Phân bổ chi tiêu",
    by_category: "Theo danh mục",
    recent_preview: "Xem trước giao dịch gần đây",
    view_all: "Xem tất cả \u2192",
    details: "Chi tiết \u2192",
    
    th_transaction: "Giao dịch",
    th_category: "Danh mục",
    th_date: "Ngày",
    th_payment: "Phương thức",
    th_amount: "Số tiền",
    th_actions: "Hành động",
    
    search_placeholder: "Tìm kiếm...",
    all_types: "Tất cả loại",
    expenses: "Khoản chi",
    income: "Thu nhập",
    all_categories: "Tất cả danh mục",
    reset_filters: "Đặt lại bộ lọc",
    
    avg_daily_spend: "Chi tiêu TB/ngày",
    top_category: "Danh mục hàng đầu",
    top_payment: "Thanh toán hàng đầu",
    net_surplus: "Thặng dư ròng",
    income_vs_expense: "Xu hướng Thu nhập & Chi tiêu",
    category_breakdown: "Chi tiết danh mục chi tiêu",
    
    monthly_budgets: "Ngân sách hàng tháng",
    budget_desc: "Kiểm soát giới hạn chi tiêu",
    manage_limits: "Quản lý hạn mức",
    savings_targets: "Mục tiêu tiết kiệm",
    goals_desc: "Theo dõi tiến độ tiết kiệm dài hạn",
    new_goal: "+ Mục tiêu mới",
    
    general_preferences: "Tùy chọn chung",
    default_currency: "Ký hiệu tiền tệ mặc định",
    currency_desc: "Dùng để định dạng các chỉ số tài chính",
    data_backup: "Sao lưu & Khôi phục dữ liệu",
    backup_desc: "Xuất dữ liệu chi tiêu ra file JSON hoặc khôi phục từ bản sao lưu trước đó.",
    export_data: "Xuất dữ liệu (JSON)",
    import_data: "Nhập dữ liệu (JSON)",
    reset_options: "Tùy chọn đặt lại dữ liệu",
    reset_desc: "Đặt lại trạng thái ứng dụng về dữ liệu mẫu ban đầu hoặc xóa vĩnh viễn tất cả bản ghi.",
    load_demo: "Tải dữ liệu mẫu demo",
    clear_all: "Xóa tất cả dữ liệu",
    
    add_transaction: "Thêm giao dịch",
    add: "Thêm",
    modal_title_add: "Thêm giao dịch",
    modal_title_edit: "Sửa giao dịch",
    label_title: "Tiêu đề / Mô tả",
    placeholder_title: "VD: Đi chợ, Lương tháng",
    label_amount: "Số tiền",
    label_category: "Danh mục",
    label_date: "Ngày",
    label_payment: "Phương thức thanh toán",
    label_notes: "Ghi chú (Tùy chọn)",
    placeholder_notes: "Chi tiết bổ sung...",
    btn_cancel: "Hủy",
    btn_save: "Lưu giao dịch",
    btn_done: "Xong",
    
    no_transactions: "Không tìm thấy giao dịch phù hợp",
    no_recent: "Chưa có giao dịch gần đây"
  }
};

// --- CATEGORIES DEFINITION ---
const CATEGORIES = {
    EXPENSE: [
        { id: 'food', name: 'Food & Dining', viName: 'Ăn uống', icon: 'fa-utensils', color: '#f59e0b', badgeClass: 'bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/20' },
        { id: 'transport', name: 'Transportation', viName: 'Đi lại', icon: 'fa-car', color: '#3b82f6', badgeClass: 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20' },
        { id: 'housing', name: 'Housing & Rent', viName: 'Nhà cửa & Thuê nhà', icon: 'fa-house', color: '#8b5cf6', badgeClass: 'bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20' },
        { id: 'utilities', name: 'Utilities & Bills', viName: 'Tiện ích & Hóa đơn', icon: 'fa-bolt', color: '#eab308', badgeClass: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' },
        { id: 'shopping', name: 'Shopping & Gear', viName: 'Mua sắm & Thiết bị', icon: 'fa-bag-shopping', color: '#ec4899', badgeClass: 'bg-pink-500/10 text-pink-500 dark:text-pink-400 border-pink-500/20' },
        { id: 'entertainment', name: 'Entertainment', viName: 'Giải trí', icon: 'fa-film', color: '#06b6d4', badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
        { id: 'health', name: 'Health & Fitness', viName: 'Sức khỏe & Thể hình', icon: 'fa-heart-pulse', color: '#10b981', badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
        { id: 'other_exp', name: 'Other Expenses', viName: 'Chi phí khác', icon: 'fa-ellipsis', color: '#64748b', badgeClass: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20' }
    ],
    INCOME: [
        { id: 'salary', name: 'Salary & Wages', viName: 'Lương & Thu nhập', icon: 'fa-briefcase', color: '#10b981', badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
        { id: 'freelance', name: 'Freelance & Side', viName: 'Freelance & Phụ', icon: 'fa-laptop-code', color: '#0284c7', badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' },
        { id: 'investments', name: 'Investments', viName: 'Đầu tư', icon: 'fa-chart-line', color: '#8b5cf6', badgeClass: 'bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20' },
        { id: 'gifts', name: 'Gifts & Refunds', viName: 'Quà tặng & Hoàn tiền', icon: 'fa-gift', color: '#f43f5e', badgeClass: 'bg-rose-500/10 text-rose-500 dark:text-rose-400 border-rose-500/20' },
        { id: 'other_inc', name: 'Other Income', viName: 'Thu nhập khác', icon: 'fa-wallet', color: '#64748b', badgeClass: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20' }
    ]
};

const PAYMENT_METHODS_TRANSLATION = {
    "Credit Card": { en: "Credit Card", vi: "Thẻ tín dụng" },
    "Debit Card": { en: "Debit Card", vi: "Thẻ ghi nợ" },
    "Cash": { en: "Cash", vi: "Tiền mặt" },
    "Bank Transfer": { en: "Bank Transfer", vi: "Chuyển khoản ngân hàng" },
    "Digital Wallet": { en: "Digital Wallet", vi: "Ví điện tử" }
};

// --- APP STATE ---
let appState = {
    currency: '$',
    currentPage: 'dashboard',
    transactions: [],
    budgets: {
        'food': 400,
        'transport': 200,
        'housing': 1200,
        'entertainment': 150,
        'shopping': 250
    },
    goals: [
        { id: 'goal_1', title: 'Vacation Fund', target: 1500, current: 850 },
        { id: 'goal_2', title: 'Emergency Savings', target: 5000, current: 3200 }
    ]
};

// Chart instances
let dashTrendChartInstance = null;
let dashCategoryChartInstance = null;
let analyticsBarChartInstance = null;
let analyticsDoughnutChartInstance = null;

// LANGUAGE SWITCHER LOGIC
function changeLanguage(lang) {
    localStorage.setItem('spendSmart_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput && translations[lang]['search_placeholder']) {
        searchInput.placeholder = translations[lang]['search_placeholder'];
    }

    const txTitle = document.getElementById('txTitle');
    if (txTitle) txTitle.placeholder = translations[lang]['placeholder_title'];
    const txNotes = document.getElementById('txNotes');
    if (txNotes) txNotes.placeholder = translations[lang]['placeholder_notes'];

    populateCategoryFilterOptions();
    renderAllViews();
}

function getCategoryName(catId, type = 'EXPENSE') {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const list = CATEGORIES[type] || [...CATEGORIES.EXPENSE, ...CATEGORIES.INCOME];
    const cat = list.find(c => c.id === catId);
    if (!cat) return catId;
    return lang === 'vi' ? (cat.viName || cat.name) : cat.name;
}

function getPaymentMethodName(pm) {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    if (PAYMENT_METHODS_TRANSLATION[pm]) {
        return PAYMENT_METHODS_TRANSLATION[pm][lang] || pm;
    }
    return pm;
}

// THEME TOGGLE LOGIC
function initTheme() {
    const savedTheme = localStorage.getItem('spendSmart_theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.classList.remove('dark');
    }
}
initTheme();

function toggleTheme() {
    const htmlClassList = document.documentElement.classList;
    if (htmlClassList.contains('dark')) {
        htmlClassList.remove('dark');
        localStorage.setItem('spendSmart_theme', 'light');
    } else {
        htmlClassList.add('dark');
        localStorage.setItem('spendSmart_theme', 'dark');
    }
    renderAllViews();
}

function getSampleData() {
    const today = new Date();
    const formatDate = (daysAgo) => {
        const d = new Date(today);
        d.setDate(d.getDate() - daysAgo);
        return d.toISOString().split('T')[0];
    };

    return [
        { id: 'tx_1', title: 'Monthly Salary', type: 'INCOME', category: 'salary', amount: 3800, date: formatDate(12), paymentMethod: 'Bank Transfer', notes: 'Direct deposit' },
        { id: 'tx_2', title: 'Apartment Rent', type: 'EXPENSE', category: 'housing', amount: 1100, date: formatDate(10), paymentMethod: 'Bank Transfer', notes: 'Monthly rent payment' },
        { id: 'tx_3', title: 'Supermarket Groceries', type: 'EXPENSE', category: 'food', amount: 142.50, date: formatDate(8), paymentMethod: 'Credit Card', notes: 'Weekly grocery restock' },
        { id: 'tx_4', title: 'Gasoline Station', type: 'EXPENSE', category: 'transport', amount: 45.00, date: formatDate(6), paymentMethod: 'Debit Card', notes: 'Full tank' },
        { id: 'tx_5', title: 'Freelance Web Design', type: 'INCOME', category: 'freelance', amount: 650, date: formatDate(5), paymentMethod: 'Digital Wallet', notes: 'Client milestone project' },
        { id: 'tx_6', title: 'Restaurant Dinner', type: 'EXPENSE', category: 'food', amount: 68.20, date: formatDate(3), paymentMethod: 'Credit Card', notes: 'Weekend dinner' },
        { id: 'tx_7', title: 'Movie & Snacks', type: 'EXPENSE', category: 'entertainment', amount: 32.00, date: formatDate(2), paymentMethod: 'Credit Card', notes: 'Cinema ticket' },
        { id: 'tx_8', title: 'Electricity & Water Bill', type: 'EXPENSE', category: 'utilities', amount: 115.80, date: formatDate(1), paymentMethod: 'Bank Transfer', notes: 'Monthly utility bill' }
    ];
}

window.addEventListener('DOMContentLoaded', () => {
    loadStateFromLocalStorage();
    populateCategoryFilterOptions();
    setTxType('EXPENSE');
    document.getElementById('txDate').value = new Date().toISOString().split('T')[0];
    
    const savedLang = localStorage.getItem('spendSmart_lang') || 'en';
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = savedLang;
    changeLanguage(savedLang);
    
    switchPage('dashboard');
});

function saveStateToLocalStorage() {
    localStorage.setItem('spendSmart_tw_data', JSON.stringify(appState));
    document.getElementById('sidebarTxCount').textContent = `${appState.transactions.length} transactions recorded`;
}

function loadStateFromLocalStorage() {
    const saved = localStorage.getItem('spendSmart_tw_data');
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch (e) {
            appState.transactions = getSampleData();
        }
    } else {
        appState.transactions = getSampleData();
    }
    document.getElementById('currencySelect').value = appState.currency || '$';
    document.getElementById('txCurrencySymbol').textContent = appState.currency || '$';
    document.getElementById('sidebarTxCount').textContent = `${appState.transactions.length} transactions recorded`;
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

function switchPage(pageId) {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const PAGE_META = {
        dashboard: { title: translations[lang].page_dashboard_title, subtitle: translations[lang].page_dashboard_subtitle },
        transactions: { title: translations[lang].page_transactions_title, subtitle: translations[lang].page_transactions_subtitle },
        analytics: { title: translations[lang].page_analytics_title, subtitle: translations[lang].page_analytics_subtitle },
        budgets: { title: translations[lang].page_budgets_title, subtitle: translations[lang].page_budgets_subtitle },
        settings: { title: translations[lang].page_settings_title, subtitle: translations[lang].page_settings_subtitle }
    };

    if (!PAGE_META[pageId]) return;
    appState.currentPage = pageId;

    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('bg-indigo-50', 'dark:bg-indigo-600/10', 'text-indigo-600', 'dark:text-indigo-400', 'border-r-2', 'border-indigo-500');
        el.classList.add('text-slate-500', 'dark:text-slate-400');
    });

    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) {
        activeNav.classList.add('bg-indigo-50', 'dark:bg-indigo-600/10', 'text-indigo-600', 'dark:text-indigo-400', 'border-r-2', 'border-indigo-500');
        activeNav.classList.remove('text-slate-500', 'dark:text-slate-400');
    }

    document.querySelectorAll('.bnav-item').forEach(el => {
        el.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
        el.classList.add('text-slate-500', 'dark:text-slate-400');
    });

    const activeBnav = document.getElementById(`bnav-${pageId}`);
    if (activeBnav) {
        activeBnav.classList.add('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
        activeBnav.classList.remove('text-slate-500', 'dark:text-slate-400');
    }

    document.getElementById('pageTitle').textContent = PAGE_META[pageId].title;
    document.getElementById('pageSubtitle').textContent = PAGE_META[pageId].subtitle;

    document.querySelectorAll('.page-view').forEach(p => p.classList.add('hidden'));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.classList.remove('hidden');

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderAllViews();
}

function renderAllViews() {
    renderMetrics();
    if (appState.currentPage === 'dashboard') {
        renderDashCharts();
        renderDashRecentTable();
    } else if (appState.currentPage === 'transactions') {
        renderTransactions();
    } else if (appState.currentPage === 'analytics') {
        renderAnalyticsView();
    } else if (appState.currentPage === 'budgets') {
        renderBudgets();
        renderGoals();
    }
}

function formatMoney(amount) {
    return `${appState.currency}${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function changeCurrency(newCurr) {
    appState.currency = newCurr;
    document.getElementById('currencySelect').value = newCurr;
    document.getElementById('txCurrencySymbol').textContent = newCurr;
    saveStateToLocalStorage();
    renderAllViews();
    showToast(`Currency updated to ${newCurr}`);
}

function renderMetrics() {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    let totalIncome = 0;
    let totalExpense = 0;
    let incomeCount = 0;
    let expenseCount = 0;

    appState.transactions.forEach(tx => {
        if (tx.type === 'INCOME') {
            totalIncome += parseFloat(tx.amount);
            incomeCount++;
        } else {
            totalExpense += parseFloat(tx.amount);
            expenseCount++;
        }
    });

    const netBalance = totalIncome - totalExpense;
    const savingsRate = totalIncome > 0 ? Math.max(0, ((totalIncome - totalExpense) / totalIncome) * 100) : 0;

    document.getElementById('metricTotalBalance').textContent = formatMoney(netBalance);
    document.getElementById('metricTotalIncome').textContent = formatMoney(totalIncome);
    document.getElementById('metricTotalExpense').textContent = formatMoney(totalExpense);
    document.getElementById('metricSavingsRate').textContent = `${savingsRate.toFixed(1)}%`;

    document.getElementById('metricIncomeCount').textContent = `${incomeCount} ${lang === 'vi' ? 'mục' : 'items'}`;
    document.getElementById('metricExpenseCount').textContent = `${expenseCount} ${lang === 'vi' ? 'mục' : 'items'}`;

    const statusEl = document.getElementById('metricBalanceStatus');
    if (netBalance >= 0) {
        statusEl.textContent = translations[lang].positive;
        statusEl.className = 'font-semibold text-emerald-500 dark:text-emerald-400 truncate';
    } else {
        statusEl.textContent = translations[lang].negative;
        statusEl.className = 'font-semibold text-rose-500 dark:text-rose-400 truncate';
    }
}

function renderDashCharts() {
    const isDark = document.documentElement.classList.contains('dark');
    const tickColor = isDark ? '#64748b' : '#94a3b8';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const donutBorderColor = isDark ? '#1e293b' : '#ffffff'; 
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    const catCtx = document.getElementById('dashCategoryChart').getContext('2d');
    const noDataEl = document.getElementById('dashNoChartData');

    const catTotals = {};
    appState.transactions.filter(tx => tx.type === 'EXPENSE').forEach(tx => {
        catTotals[tx.category] = (catTotals[tx.category] || 0) + parseFloat(tx.amount);
    });

    const labels = [];
    const data = [];
    const colors = [];

    Object.keys(catTotals).forEach(catId => {
        const catObj = CATEGORIES.EXPENSE.find(c => c.id === catId) || { color: '#94a3b8' };
        labels.push(getCategoryName(catId, 'EXPENSE'));
        data.push(catTotals[catId]);
        colors.push(catObj.color);
    });

    if (data.length === 0) {
        noDataEl.classList.remove('hidden');
        noDataEl.querySelector('p').textContent = lang === 'vi' ? 'Chưa có dữ liệu chi tiêu' : 'No expense data recorded';
        if (dashCategoryChartInstance) dashCategoryChartInstance.destroy();
    } else {
        noDataEl.classList.add('hidden');
        if (dashCategoryChartInstance) dashCategoryChartInstance.destroy();

        dashCategoryChartInstance = new Chart(catCtx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{ data: data, backgroundColor: colors, borderWidth: 2, borderColor: donutBorderColor }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: tickColor, font: { size: 9 }, boxWidth: 8 } },
                    tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${formatMoney(ctx.parsed)}` } }
                },
                cutout: '68%'
            }
        });
    }

    const trendCtx = document.getElementById('dashTrendChart').getContext('2d');
    const sortedTxs = [...appState.transactions].sort((a, b) => new Date(a.date) - new Date(b.date));

    const datesMap = {};
    sortedTxs.forEach(tx => {
        const dateKey = tx.date;
        if (!datesMap[dateKey]) datesMap[dateKey] = { income: 0, expense: 0 };
        if (tx.type === 'INCOME') datesMap[dateKey].income += parseFloat(tx.amount);
        else datesMap[dateKey].expense += parseFloat(tx.amount);
    });

    const dateLabels = Object.keys(datesMap).slice(-8);
    const incomeData = dateLabels.map(d => datesMap[d].income);
    const expenseData = dateLabels.map(d => datesMap[d].expense);

    if (dashTrendChartInstance) dashTrendChartInstance.destroy();

    dashTrendChartInstance = new Chart(trendCtx, {
        type: 'bar',
        data: {
            labels: dateLabels.map(d => d.substring(5)),
            datasets: [
                { label: translations[lang].income, data: incomeData, backgroundColor: '#10b981', borderRadius: 4 },
                { label: translations[lang].expenses, data: expenseData, backgroundColor: '#f43f5e', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 9 } } },
                y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 9 }, callback: (v) => `${appState.currency}${v}` } }
            },
            plugins: {
                legend: { position: 'top', labels: { color: tickColor, font: { size: 9 }, boxWidth: 8 } }
            }
        }
    });
}

function renderDashRecentTable() {
    const tableBody = document.getElementById('dashRecentTableBody');
    const recent = [...appState.transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    tableBody.innerHTML = '';
    if (recent.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-400 dark:text-slate-500">${translations[lang].no_recent}</td></tr>`;
        return;
    }

    recent.forEach(tx => {
        const isIncome = tx.type === 'INCOME';
        const catName = getCategoryName(tx.category, tx.type);
        const catList = isIncome ? CATEGORIES.INCOME : CATEGORIES.EXPENSE;
        const catObj = catList.find(c => c.id === tx.category) || { badgeClass: 'bg-slate-100 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/20' };

        const tr = `
            <tr class="hover:bg-slate-100 dark:hover:bg-slate-800/40 transition">
                <td class="py-2.5 px-4 font-semibold text-slate-900 dark:text-white truncate max-w-[140px]">${escapeHtml(tx.title)}</td>
                <td class="py-2.5 px-4">
                    <span class="px-2 py-0.5 rounded text-[10px] font-medium border ${catObj.badgeClass}">${catName}</span>
                </td>
                <td class="py-2.5 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">${tx.date}</td>
                <td class="py-2.5 px-4 text-right font-bold whitespace-nowrap ${isIncome ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-100'}">
                    ${isIncome ? '+' : '-'}${formatMoney(tx.amount)}
                </td>
            </tr>
        `;
        tableBody.innerHTML += tr;
    });
}

function renderAnalyticsView() {
    const expenses = appState.transactions.filter(tx => tx.type === 'EXPENSE');
    const totalExp = expenses.reduce((sum, tx) => sum + parseFloat(tx.amount), 0);
    const totalInc = appState.transactions.filter(tx => tx.type === 'INCOME').reduce((sum, tx) => sum + parseFloat(tx.amount), 0);
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    const uniqueDates = new Set(appState.transactions.map(tx => tx.date)).size || 1;
    document.getElementById('statAvgDaily').textContent = formatMoney(totalExp / uniqueDates);

    const catMap = {};
    expenses.forEach(tx => catMap[tx.category] = (catMap[tx.category] || 0) + parseFloat(tx.amount));
    let topCatId = Object.keys(catMap).reduce((a, b) => catMap[a] > catMap[b] ? a : b, null);
    document.getElementById('statTopCategory').textContent = topCatId ? getCategoryName(topCatId, 'EXPENSE') : 'N/A';

    const payMap = {};
    appState.transactions.forEach(tx => payMap[tx.paymentMethod] = (payMap[tx.paymentMethod] || 0) + 1);
    let topPay = Object.keys(payMap).reduce((a, b) => payMap[a] > payMap[b] ? a : b, 'None');
    document.getElementById('statTopPayment').textContent = topPay !== 'None' ? getPaymentMethodName(topPay) : topPay;

    const netSurplus = totalInc - totalExp;
    document.getElementById('statNetSurplus').textContent = formatMoney(netSurplus);

    const isDark = document.documentElement.classList.contains('dark');
    const tickColor = isDark ? '#64748b' : '#94a3b8';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const donutBorderColor = isDark ? '#1e293b' : '#ffffff';

    const barCtx = document.getElementById('analyticsBarChart').getContext('2d');
    const datesMap = {};
    [...appState.transactions].sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(tx => {
        if (!datesMap[tx.date]) datesMap[tx.date] = { income: 0, expense: 0 };
        if (tx.type === 'INCOME') datesMap[tx.date].income += parseFloat(tx.amount);
        else datesMap[tx.date].expense += parseFloat(tx.amount);
    });

    const labels = Object.keys(datesMap).slice(-10);
    if (analyticsBarChartInstance) analyticsBarChartInstance.destroy();

    analyticsBarChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                { label: translations[lang].income, data: labels.map(d => datesMap[d].income), backgroundColor: '#10b981', borderRadius: 4 },
                { label: translations[lang].expenses, data: labels.map(d => datesMap[d].expense), backgroundColor: '#f43f5e', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { ticks: { color: tickColor, font: { size: 9 } } },
                y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 9 } } }
            },
            plugins: { legend: { labels: { color: tickColor, font: { size: 9 } } } }
        }
    });

    const donutCtx = document.getElementById('analyticsDoughnutChart').getContext('2d');
    const catLabels = [];
    const catData = [];
    const catColors = [];

    Object.keys(catMap).forEach(catId => {
        const catObj = CATEGORIES.EXPENSE.find(c => c.id === catId) || { color: '#64748b' };
        catLabels.push(getCategoryName(catId, 'EXPENSE'));
        catData.push(catMap[catId]);
        catColors.push(catObj.color);
    });

    if (analyticsDoughnutChartInstance) analyticsDoughnutChartInstance.destroy();

    analyticsDoughnutChartInstance = new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: catLabels,
            datasets: [{ data: catData, backgroundColor: catColors, borderWidth: 2, borderColor: donutBorderColor }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: tickColor, font: { size: 9 } } } }
        }
    });
}

function renderBudgets() {
    const container = document.getElementById('budgetsList');
    container.innerHTML = '';
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    const spentMap = {};
    appState.transactions.filter(tx => tx.type === 'EXPENSE').forEach(tx => {
        spentMap[tx.category] = (spentMap[tx.category] || 0) + parseFloat(tx.amount);
    });

    const activeBudgets = Object.keys(appState.budgets);

    if (activeBudgets.length === 0) {
        container.innerHTML = `<div class="col-span-1 sm:col-span-2 text-center text-slate-500 text-xs py-4">${lang === 'vi' ? 'Chưa thiết lập hạn mức ngân sách.' : 'No budget limits set.'}</div>`;
        return;
    }

    activeBudgets.forEach(catId => {
        const limit = appState.budgets[catId];
        if (limit <= 0) return;

        const spent = spentMap[catId] || 0;
        const percent = Math.min(100, Math.round((spent / limit) * 100));
        const catName = getCategoryName(catId, 'EXPENSE');
        const catObj = CATEGORIES.EXPENSE.find(c => c.id === catId) || { icon: 'fa-circle-dot' };

        let barColor = 'bg-indigo-500';
        let statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">${percent}%</span>`;

        if (percent >= 100) {
            barColor = 'bg-rose-500';
            statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">${lang === 'vi' ? 'Vượt hạn mức' : 'Over Limit'}</span>`;
        } else if (percent >= 80) {
            barColor = 'bg-amber-500';
            statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">${lang === 'vi' ? 'Cảnh báo' : 'Warning'}</span>`;
        }

        const cardHtml = `
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5 truncate">
                        <i class="fa-solid ${catObj.icon} text-slate-400 text-xs"></i>
                        ${catName}
                    </span>
                    ${statusBadge}
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                    <span>${lang === 'vi' ? 'Đã chi' : 'Spent'}: <strong class="text-slate-700 dark:text-slate-200">${formatMoney(spent)}</strong></span>
                    <span>${lang === 'vi' ? 'Hạn mức' : 'Limit'}: ${formatMoney(limit)}</span>
                </div>
                <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full ${barColor} transition-all duration-300" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

function renderGoals() {
    const container = document.getElementById('goalsList');
    container.innerHTML = '';
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    if (appState.goals.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-500 text-xs py-6">${lang === 'vi' ? 'Chưa có mục tiêu tiết kiệm nào.' : 'No savings targets created yet.'}</div>`;
        return;
    }

    appState.goals.forEach(goal => {
        const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));

        const goalCard = `
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div class="flex items-center justify-between mb-1.5">
                    <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">${escapeHtml(goal.title)}</span>
                    <div class="flex items-center gap-1 flex-shrink-0">
                        <button onclick="openDepositModal('${goal.id}')" title="Deposit" class="px-2 py-0.5 text-[10px] font-medium bg-emerald-100 dark:bg-emerald-500/10 hover:bg-emerald-200 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 rounded-md transition">
                            ${lang === 'vi' ? '+ Nạp tiền' : '+ Deposit'}
                        </button>
                        <button onclick="confirmDeleteGoal('${goal.id}')" title="Delete Goal" class="p-1 text-slate-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition text-xs">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                    <span>${formatMoney(goal.current)} / ${formatMoney(goal.target)}</span>
                    <span class="font-bold text-emerald-500 dark:text-emerald-400">${percent}%</span>
                </div>
                <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full bg-emerald-500 transition-all duration-300" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
        container.innerHTML += goalCard;
    });
}

function populateCategoryFilterOptions() {
    const filterSelect = document.getElementById('categoryFilter');
    if (!filterSelect) return;
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const allText = translations[lang].all_categories;
    filterSelect.innerHTML = `<option value="ALL">${allText}</option>`;

    const allCats = [...CATEGORIES.EXPENSE, ...CATEGORIES.INCOME];
    allCats.forEach(cat => {
        const name = getCategoryName(cat.id, cat.id === 'salary' || cat.id === 'freelance' || cat.id === 'investments' || cat.id === 'gifts' || cat.id === 'other_inc' ? 'INCOME' : 'EXPENSE');
        filterSelect.innerHTML += `<option value="${cat.id}">${name}</option>`;
    });
}

function applyFilters() {
    renderTransactions();
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('typeFilter').value = 'ALL';
    document.getElementById('categoryFilter').value = 'ALL';
    renderTransactions();
}

function renderTransactions() {
    const tableBody = document.getElementById('transactionTableBody');
    const noTxMessage = document.getElementById('noTransactionsMessage');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const typeFilter = document.getElementById('typeFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;

    let filtered = [...appState.transactions];

    if (typeFilter !== 'ALL') filtered = filtered.filter(tx => tx.type === typeFilter);
    if (categoryFilter !== 'ALL') filtered = filtered.filter(tx => tx.category === categoryFilter);

    if (searchTerm !== '') {
        filtered = filtered.filter(tx =>
            tx.title.toLowerCase().includes(searchTerm) ||
            (tx.notes && tx.notes.toLowerCase().includes(searchTerm)) ||
            tx.paymentMethod.toLowerCase().includes(searchTerm)
        );
    }

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    tableBody.innerHTML = '';

    if (filtered.length === 0) {
        noTxMessage.classList.remove('hidden');
        noTxMessage.querySelector('p.font-medium').textContent = translations[lang].no_transactions;
        return;
    } else {
        noTxMessage.classList.add('hidden');
    }

    filtered.forEach(tx => {
        const catName = getCategoryName(tx.category, tx.type);
        const allCatList = tx.type === 'INCOME' ? CATEGORIES.INCOME : CATEGORIES.EXPENSE;
        const catObj = allCatList.find(c => c.id === tx.category) || { icon: 'fa-tag', badgeClass: 'bg-slate-100 dark:bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-500/20' };

        const isIncome = tx.type === 'INCOME';
        const amountFormatted = `${isIncome ? '+' : '-'}${formatMoney(tx.amount)}`;
        const amountColor = isIncome ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-100';
        const paymentDisplay = getPaymentMethodName(tx.paymentMethod);

        const trHtml = `
            <tr class="hover:bg-slate-100 dark:hover:bg-slate-800/40 transition">
                <td class="py-3 px-4">
                    <div class="font-semibold text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-xs">${escapeHtml(tx.title)}</div>
                    ${tx.notes ? `<div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate max-w-[150px] sm:max-w-xs">${escapeHtml(tx.notes)}</div>` : ''}
                </td>
                <td class="py-3 px-4">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border ${catObj.badgeClass}">
                        <i class="fa-solid ${catObj.icon}"></i>
                        ${catName}
                    </span>
                </td>
                <td class="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">${tx.date}</td>
                <td class="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">${escapeHtml(paymentDisplay || 'N/A')}</td>
                <td class="py-3 px-4 text-right font-bold whitespace-nowrap ${amountColor}">
                    ${amountFormatted}
                </td>
                <td class="py-3 px-4 text-center whitespace-nowrap">
                    <button onclick="editTransaction('${tx.id}')" title="Edit" class="p-1.5 text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button onclick="confirmDeleteTransaction('${tx.id}')" title="Delete" class="p-1.5 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition ml-1">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += trHtml;
    });
}

function setTxType(type) {
    document.getElementById('txType').value = type;
    const catSelect = document.getElementById('txCategory');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    const btnExpense = document.getElementById('btnTypeExpense');
    const btnIncome = document.getElementById('btnTypeIncome');

    const expText = `<i class="fa-solid fa-minus-circle"></i> ${lang === 'vi' ? 'Khoản chi' : 'Expense'}`;
    const incText = `<i class="fa-solid fa-plus-circle"></i> ${lang === 'vi' ? 'Thu nhập' : 'Income'}`;
    btnExpense.innerHTML = expText;
    btnIncome.innerHTML = incText;

    if (type === 'EXPENSE') {
        btnExpense.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 bg-rose-600 text-white shadow-md';
        btnIncome.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
        catSelect.innerHTML = CATEGORIES.EXPENSE.map(c => `<option value="${c.id}">${getCategoryName(c.id, 'EXPENSE')}</option>`).join('');
    } else {
        btnIncome.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 bg-emerald-600 text-white shadow-md';
        btnExpense.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
        catSelect.innerHTML = CATEGORIES.INCOME.map(c => `<option value="${c.id}">${getCategoryName(c.id, 'INCOME')}</option>`).join('');
    }
}

function openTransactionModal(editId = null) {
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('transactionForm');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    form.reset();
    document.getElementById('editTxId').value = '';
    document.getElementById('txDate').value = new Date().toISOString().split('T')[0];

    if (editId) {
        const tx = appState.transactions.find(t => t.id === editId);
        if (tx) {
            document.getElementById('editTxId').value = tx.id;
            setTxType(tx.type);
            document.getElementById('txTitle').value = tx.title;
            document.getElementById('txAmount').value = tx.amount;
            document.getElementById('txCategory').value = tx.category;
            document.getElementById('txDate').value = tx.date;
            document.getElementById('txPaymentMethod').value = tx.paymentMethod || 'Credit Card';
            document.getElementById('txNotes').value = tx.notes || '';

            modalTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-indigo-500 dark:text-indigo-400"></i> ${translations[lang].modal_title_edit}`;
        }
    } else {
        setTxType('EXPENSE');
        modalTitle.innerHTML = `<i class="fa-solid fa-circle-plus text-indigo-500 dark:text-indigo-400"></i> ${translations[lang].modal_title_add}`;
    }

    document.getElementById('transactionModal').classList.remove('hidden');
}

function closeTransactionModal() {
    document.getElementById('transactionModal').classList.add('hidden');
}

function handleTransactionSubmit(e) {
    e.preventDefault();
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    const editId = document.getElementById('editTxId').value;
    const type = document.getElementById('txType').value;
    const title = document.getElementById('txTitle').value.trim();
    const amount = parseFloat(document.getElementById('txAmount').value);
    const category = document.getElementById('txCategory').value;
    const date = document.getElementById('txDate').value;
    const paymentMethod = document.getElementById('txPaymentMethod').value;
    const notes = document.getElementById('txNotes').value.trim();

    if (!title || isNaN(amount) || amount <= 0) return;

    if (editId) {
        const index = appState.transactions.findIndex(t => t.id === editId);
        if (index !== -1) {
            appState.transactions[index] = { id: editId, type, title, amount, category, date, paymentMethod, notes };
            showToast(lang === 'vi' ? 'Đã cập nhật giao dịch' : 'Transaction updated');
        }
    } else {
        appState.transactions.push({
            id: 'tx_' + Date.now(),
            type, title, amount, category, date, paymentMethod, notes
        });
        showToast(lang === 'vi' ? 'Đã thêm giao dịch mới' : 'New transaction added');
    }

    saveStateToLocalStorage();
    closeTransactionModal();
    renderAllViews();
}

function editTransaction(id) {
    openTransactionModal(id);
}

function confirmDeleteTransaction(id) {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    showConfirmDialog(
        lang === 'vi' ? 'Xóa giao dịch' : 'Delete Transaction', 
        lang === 'vi' ? 'Bạn có chắc chắn muốn xóa giao dịch này không?' : 'Are you sure you want to delete this transaction?', 
        () => {
            appState.transactions = appState.transactions.filter(t => t.id !== id);
            saveStateToLocalStorage();
            renderAllViews();
            showToast(lang === 'vi' ? 'Đã xóa giao dịch' : 'Transaction deleted');
        }
    );
}

function openBudgetModal() {
    const listEl = document.getElementById('budgetFormList');
    listEl.innerHTML = '';

    CATEGORIES.EXPENSE.forEach(cat => {
        const currentLimit = appState.budgets[cat.id] || 0;
        const catName = getCategoryName(cat.id, 'EXPENSE');
        const itemHtml = `
            <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2 truncate pr-2">
                    <i class="fa-solid ${cat.icon} text-slate-400"></i> ${catName}
                </span>
                <div class="relative w-28 sm:w-32 flex-shrink-0">
                    <span class="absolute left-2.5 top-1.5 text-xs text-slate-400 pointer-events-none">${appState.currency}</span>
                    <input type="number" min="0" step="10" value="${currentLimit}" onchange="updateBudgetLimit('${cat.id}', this.value)" class="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-6 pr-2 py-1 text-xs text-right text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-indigo-500">
                </div>
            </div>
        `;
        listEl.innerHTML += itemHtml;
    });

    document.getElementById('budgetModal').classList.remove('hidden');
}

function closeBudgetModal() {
    document.getElementById('budgetModal').classList.add('hidden');
}

function updateBudgetLimit(catId, val) {
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) delete appState.budgets[catId];
    else appState.budgets[catId] = num;
    saveStateToLocalStorage();
    renderBudgets();
}

function openGoalModal() {
    document.getElementById('goalForm').reset();
    document.getElementById('goalModal').classList.remove('hidden');
}

function closeGoalModal() {
    document.getElementById('goalModal').classList.add('hidden');
}

function handleGoalSubmit(e) {
    e.preventDefault();
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const title = document.getElementById('goalTitle').value.trim();
    const target = parseFloat(document.getElementById('goalTarget').value);
    const current = parseFloat(document.getElementById('goalCurrent').value) || 0;

    if (!title || isNaN(target) || target <= 0) return;

    appState.goals.push({ id: 'goal_' + Date.now(), title, target, current });
    saveStateToLocalStorage();
    closeGoalModal();
    renderGoals();
    showToast(lang === 'vi' ? 'Đã tạo mục tiêu tiết kiệm' : 'Savings target created');
}

function openDepositModal(goalId) {
    const goal = appState.goals.find(g => g.id === goalId);
    if (!goal) return;
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    document.getElementById('depositGoalId').value = goalId;
    document.getElementById('depositGoalTitle').textContent = `${lang === 'vi' ? 'Mục tiêu' : 'Target'}: ${goal.title} (${formatMoney(goal.current)} / ${formatMoney(goal.target)})`;
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositModal').classList.remove('hidden');
}

function closeDepositModal() {
    document.getElementById('depositModal').classList.add('hidden');
}

function submitDeposit() {
    const goalId = document.getElementById('depositGoalId').value;
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    if (isNaN(amount) || amount <= 0) return;

    const goal = appState.goals.find(g => g.id === goalId);
    if (goal) {
        goal.current += amount;
        saveStateToLocalStorage();
        renderGoals();
        closeDepositModal();
        showToast(lang === 'vi' ? `Đã thêm ${formatMoney(amount)} vào ${goal.title}` : `Added ${formatMoney(amount)} to ${goal.title}`);
    }
}

function confirmDeleteGoal(goalId) {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    showConfirmDialog(
        lang === 'vi' ? 'Xóa mục tiêu tiết kiệm' : 'Delete Savings Goal', 
        lang === 'vi' ? 'Bạn có chắc chắn muốn xóa mục tiêu này không?' : 'Are you sure you want to delete this target?', 
        () => {
            appState.goals = appState.goals.filter(g => g.id !== goalId);
            saveStateToLocalStorage();
            renderGoals();
            showToast(lang === 'vi' ? 'Đã xóa mục tiêu' : 'Target deleted');
        }
    );
}

function exportData() {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `spendsmart_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast(lang === 'vi' ? 'Đã xuất dữ liệu sao lưu thành công' : 'Data backup exported successfully');
}

function triggerImport() {
    document.getElementById('importFileInput').click();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && imported.transactions) {
                appState = imported;
                saveStateToLocalStorage();
                renderAllViews();
                showToast(lang === 'vi' ? 'Nhập dữ liệu thành công!' : 'Data imported successfully!');
            } else {
                showToast(lang === 'vi' ? 'Định dạng file JSON không hợp lệ' : 'Invalid JSON file format');
            }
        } catch (err) {
            showToast(lang === 'vi' ? 'Không thể đọc file JSON' : 'Failed to parse JSON file');
        }
    };
    reader.readAsText(file);
}

function resetDemoData() {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    appState.transactions = getSampleData();
    saveStateToLocalStorage();
    renderAllViews();
    showToast(lang === 'vi' ? 'Đã tải lại bộ dữ liệu demo mẫu' : 'Sample demo dataset reloaded');
}

function confirmClearAll() {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    showConfirmDialog(
        lang === 'vi' ? 'Xóa toàn bộ dữ liệu' : 'Clear All Data', 
        lang === 'vi' ? 'Bạn có chắc muốn xóa tất cả giao dịch và mục tiêu không? Hành động này không thể hoàn tác.' : 'Are you sure you want to erase all transactions and goals? This action cannot be undone.', 
        () => {
            appState.transactions = [];
            appState.goals = [];
            saveStateToLocalStorage();
            renderAllViews();
            showToast(lang === 'vi' ? 'Đã xóa toàn bộ dữ liệu ứng dụng' : 'All app data cleared');
        }
    );
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'glass-modal text-slate-900 dark:text-white px-3.5 py-2 rounded-xl text-xs shadow-xl flex items-center gap-2 border border-slate-200 dark:border-slate-700/80 transform transition-all duration-300 translate-y-2 opacity-0';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-indigo-500 dark:text-indigo-400"></i> ${escapeHtml(message)}`;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showConfirmDialog(title, message, onConfirm) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;

    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const okBtn = document.getElementById('confirmOkBtn');
    const cancelBtn = document.getElementById('confirmCancelBtn');

    okBtn.textContent = lang === 'vi' ? 'Xóa' : 'Delete';
    cancelBtn.textContent = lang === 'vi' ? 'Hủy' : 'Cancel';

    const modal = document.getElementById('confirmModal');

    const cleanup = () => {
        modal.classList.add('hidden');
        okBtn.onclick = null;
        cancelBtn.onclick = null;
    };

    okBtn.onclick = () => {
        onConfirm();
        cleanup();
    };

    cancelBtn.onclick = cleanup;
    modal.classList.remove('hidden');
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}