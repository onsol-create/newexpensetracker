// --- TRANSLATIONS DICTIONARY ---
const translations = {
    en: {
        app_subtitle: "Expense Tracker",
        local_sync: "Local Storage Sync",
        tx_recorded: "transactions recorded",
        nav_dashboard: "Dashboard",
        nav_transactions: "Transactions",
        nav_analytics: "Reports",
        nav_budgets: "Budgets",
        nav_subscriptions: "Subscriptions",
        nav_settings: "Settings & Data",
        page_dashboard_title: "Dashboard Overview",
        page_dashboard_subtitle: "Summary of financial balance, activity, and key metrics",
        page_transactions_title: "Transaction History",
        page_transactions_subtitle: "Filter, search, edit, and audit your records",
        page_analytics_title: "Analytics & Financial Insights",
        page_analytics_subtitle: "Detailed visual breakdown of spending habits and trends",
        page_budgets_title: "Budgets & Savings Targets",
        page_budgets_subtitle: "Control category spending caps and track savings goals",
        page_subscriptions_title: "Recurring Subscriptions",
        page_subscriptions_subtitle: "Track monthly and yearly recurring memberships and bills",
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
        target: "Target Amount",
        recent_activity: "Recent Financial Activity",
        expense_distribution: "Expense Distribution",
        by_category: "By Category",
        heatmap_title: "Income/Expense Calendar Heatmap",
        heatmap_subtitle: "Click on any day to view detailed transaction list",
        select_month: "Select Month:",
        legend_title: "Legend:",
        legend_income: "Income",
        legend_expense: "Expense",
        legend_mixed: "Both",
        legend_none: "None",
        heatmap_toggle_expense: "Expenses",
        heatmap_toggle_income: "Income",
        heatmap_toggle_both: "Both",
        day_sun: "Sun",
        day_mon: "Mon",
        day_tue: "Tue",
        day_wed: "Wed",
        day_thu: "Thu",
        day_fri: "Fri",
        day_sat: "Sat",
        tx_for_date: "Transactions for",
        no_tx_on_date: "No transactions recorded on this day.",
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
        all_months: "All Months",
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
        limits: "Limits",
        savings_targets: "Savings Targets",
        goals_desc: "Track long term savings progress",
        new_goal: "New Goal",
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
        btn_save_sub: "Save Subscription",
        btn_done: "Done",
        btn_create_target: "Create Target",
        add_funds: "Add Funds",
        btn_add_funds: "Add Funds",
        confirm_action: "Confirm Action",
        confirm_desc: "Are you sure you want to proceed?",
        no_transactions: "No matching transactions found",
        no_recent: "No recent transactions",
        // Subscriptions Translation Keys
        monthly_cost: "Monthly Cost",
        yearly_cost: "Yearly Cost",
        active_subs: "Active Subscriptions",
        new_subscription: "New Subscription",
        cycle_monthly: "Monthly",
        cycle_yearly: "Yearly",
        next_billing: "Next Billing",
        modal_title_add_sub: "Add Subscription",
        modal_title_edit_sub: "Edit Subscription",
        label_cycle: "Billing Cycle",
        no_subscriptions: "No active subscriptions found",
        forecast_title: "End-of-Month Financial Forecast",
        forecast_desc: "Based on your current spending pace",
        forecast_balance: "Projected Balance:",
        cumulative_chart_title: "Cumulative Net Worth Trend",
        cumulative_tooltip: "Balance:",
        range_3m: "Last 3 months",
        range_6m: "Last 6 months",
        range_12m: "Last 1 year",
        range_all: "All time"
    },
    vi: {
        app_subtitle: "Theo dõi chi tiêu",
        local_sync: "Đồng bộ bộ nhớ tạm",
        tx_recorded: "giao dịch đã ghi",
        nav_dashboard: "Tổng quan",
        nav_transactions: "Giao dịch",
        nav_analytics: "Báo cáo",
        nav_budgets: "Ngân sách",
        nav_subscriptions: "Dịch vụ định kỳ",
        nav_settings: "Cài đặt & Dữ liệu",
        page_dashboard_title: "Tổng quan tài chính",
        page_dashboard_subtitle: "Tóm tắt số dư, hoạt động và các chỉ số tài chính chính",
        page_transactions_title: "Lịch sử giao dịch",
        page_transactions_subtitle: "Quản lý, tìm kiếm và kiểm tra các khoản thu chi của bạn",
        page_analytics_title: "Phân tích & Báo cáo",
        page_analytics_subtitle: "Chi tiết trực quan về thói quen chi tiêu và xu hướng",
        page_budgets_title: "Ngân sách & Mục tiêu",
        page_budgets_subtitle: "Kiểm soát giới hạn chi tiêu và theo dõi mục tiêu tiết kiệm",
        page_subscriptions_title: "Quản lý gói dịch vụ định kỳ",
        page_subscriptions_subtitle: "Theo dõi các dịch vụ đăng ký, hóa đơn hàng tháng và hàng năm",
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
        heatmap_title: "Thống kê thu chi theo ngày (Heatmap)",
        heatmap_subtitle: "Nhấn vào từng ngày để xem danh sách giao dịch",
        select_month: "Chọn tháng:",
        legend_title: "Chú thích:",
        legend_income: "Thu nhập",
        legend_expense: "Chi tiêu",
        legend_mixed: "Cả hai",
        legend_none: "Không có",
        heatmap_toggle_expense: "Chi tiêu",
        heatmap_toggle_income: "Thu nhập",
        heatmap_toggle_both: "Cả hai",
        day_sun: "CN",
        day_mon: "T2",
        day_tue: "T3",
        day_wed: "T4",
        day_thu: "T5",
        day_fri: "T6",
        day_sat: "T7",
        tx_for_date: "Giao dịch ngày",
        no_tx_on_date: "Không có giao dịch nào trong ngày này.",
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
        all_months: "Tất cả các tháng",
        expenses: "Khoản chi",
        income: "Thu nhập",
        all_categories: "Tất cả danh mục",
        reset_filters: "Đặt lại bộ lọc",
        avg_daily_spend: "Chi tiêu TB/ngày",
        top_category: "Danh mục phổ biến",
        top_payment: "Thanh toán phổ biến",
        net_surplus: "Thặng dư ròng",
        income_vs_expense: "Xu hướng Thu nhập & Chi tiêu",
        category_breakdown: "Chi tiết danh mục chi tiêu",
        monthly_budgets: "Ngân sách hàng tháng",
        budget_desc: "Kiểm soát giới hạn chi tiêu",
        manage_limits: "Quản lý hạn mức",
        limits: "Hạn mức",
        savings_targets: "Mục tiêu tiết kiệm",
        goals_desc: "Theo dõi tiến độ tiết kiệm dài hạn",
        new_goal: "Mục tiêu mới",
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
        btn_save_sub: "Lưu gói dịch vụ",
        btn_done: "Xong",
        btn_create_target: "Tạo mục tiêu",
        add_funds: "Nạp tiền",
        btn_add_funds: "Thêm tiền",
        confirm_action: "Xác nhận hành động",
        confirm_desc: "Bạn có chắc chắn muốn tiếp tục hành động này không?",
        no_transactions: "Không tìm thấy giao dịch phù hợp",
        no_recent: "Chưa có giao dịch gần đây",
        // Subscriptions Translation Keys
        monthly_cost: "Chi phí hàng tháng",
        yearly_cost: "Chi phí hàng năm",
        active_subs: "Dịch vụ đang dùng",
        new_subscription: "Gói dịch vụ mới",
        cycle_monthly: "Hàng tháng",
        cycle_yearly: "Hàng năm",
        next_billing: "Ngày gia hạn tiếp",
        modal_title_add_sub: "Thêm gói dịch vụ",
        modal_title_edit_sub: "Sửa gói dịch vụ",
        label_cycle: "Chu kỳ thanh toán",
        no_subscriptions: "Chưa có gói dịch vụ định kỳ nào",
        forecast_title: "Dự báo tài chính cuối tháng",
        forecast_desc: "Dựa trên tốc độ chi tiêu hiện tại của bạn",
        forecast_balance: "Dự kiến số dư:",
        cumulative_chart_title: "Biểu đồ dòng tiền ròng tích lũy (Cumulative Net Worth)",
        cumulative_tooltip: "Số dư:",
        range_3m: "3 tháng gần nhất",
        range_6m: "6 tháng gần nhất",
        range_12m: "1 năm gần nhất",
        range_all: "Tất cả"
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

// --- CURRENCY & EXCHANGE RATE LOGIC ---
const CURRENCY_CONFIG = {
    'USD': { symbol: '$', locale: 'en-US', decimals: 2, prepend: true },
    'EUR': { symbol: '€', locale: 'de-DE', decimals: 2, prepend: true },
    'GBP': { symbol: '£', locale: 'en-GB', decimals: 2, prepend: true },
    'JPY': { symbol: '¥', locale: 'ja-JP', decimals: 0, prepend: true },
    'INR': { symbol: '₹', locale: 'en-IN', decimals: 2, prepend: true },
    'VND': { symbol: '₫', locale: 'vi-VN', decimals: 0, prepend: false }
};

// Fallback rates if API fails (Base: USD)
let exchangeRates = {
    'USD': 1,
    'EUR': 0.92,
    'GBP': 0.79,
    'JPY': 150.0,
    'INR': 83.0,
    'VND': 25000.0
};

async function fetchExchangeRates() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        if (data && data.rates) {
            exchangeRates['EUR'] = data.rates.EUR || exchangeRates['EUR'];
            exchangeRates['GBP'] = data.rates.GBP || exchangeRates['GBP'];
            exchangeRates['JPY'] = data.rates.JPY || exchangeRates['JPY'];
            exchangeRates['INR'] = data.rates.INR || exchangeRates['INR'];
            exchangeRates['VND'] = data.rates.VND || exchangeRates['VND'];
            renderAllViews();
        }
    } catch (error) {
        console.warn('Cannot fetch live exchange rates, using defaults.', error);
    }
}

// --- APP STATE ---
let appState = {
    currency: 'USD',
    currentPage: 'dashboard',
    selectedHeatmapMonth: '', // YYYY-MM
    selectedHeatmapDay: '',   // YYYY-MM-DD
    heatmapMode: 'both',      // 'expense' | 'income' | 'both'
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
    ],
    subscriptions: [
        { id: 'sub_1', name: 'Netflix Premium', category: 'entertainment', amount: 15.99, cycle: 'monthly', nextBilling: '2026-11-01', paymentMethod: 'Credit Card' },
        { id: 'sub_2', name: 'Spotify Duo', category: 'entertainment', amount: 12.99, cycle: 'monthly', nextBilling: '2026-10-25', paymentMethod: 'Digital Wallet' },
        { id: 'sub_3', name: 'FPT Fiber Internet', category: 'utilities', amount: 22.00, cycle: 'monthly', nextBilling: '2026-11-05', paymentMethod: 'Bank Transfer' }
    ]
};

// Chart instances
let dashTrendChartInstance = null;
let dashCategoryChartInstance = null;
let analyticsBarChartInstance = null;
let analyticsDoughnutChartInstance = null;
let analyticsCumulativeChartInstance = null;

// LANGUAGE SWITCHER LOGIC
function changeLanguage(lang) {
    localStorage.setItem('spendSmart_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Xử lý cho thẻ INPUT
            if (el.tagName === 'INPUT') {
                el.placeholder = translations[lang][key];
            }
            // Xử lý cho thẻ OPTION (Dành cho dropdown)
            else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            }
            // Xử lý cho các thẻ khác (DIV, SPAN, H3...)
            else {
                el.textContent = translations[lang][key];
            }
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
    populateTypeFilterOptions();
    updateSidebarTxCount();
    switchPage(appState.currentPage);
    updateMonthDisplayText();
    renderAllViews();
}

function updateSidebarTxCount() {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const txCountEl = document.getElementById('sidebarTxCount');
    if (txCountEl) {
        txCountEl.textContent = `${appState.transactions.length} ${translations[lang].tx_recorded}`;
    }
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
    processAutoBilling();
    populateCategoryFilterOptions();
    populateTypeFilterOptions();
    setTxType('EXPENSE');
    document.getElementById('txDate').value = new Date().toISOString().split('T')[0];

    const savedLang = localStorage.getItem('spendSmart_lang') || 'en';
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = savedLang;
    changeLanguage(savedLang);

    switchPage('dashboard');
    fetchExchangeRates();
});

function saveStateToLocalStorage() {
    localStorage.setItem('spendSmart_tw_data', JSON.stringify(appState));
    updateSidebarTxCount();
}

function loadStateFromLocalStorage() {
    const saved = localStorage.getItem('spendSmart_tw_data');
    if (saved) {
        try {
            appState = JSON.parse(saved);
            if (!appState.subscriptions) {
                appState.subscriptions = [
                    { id: 'sub_1', name: 'Netflix Premium', category: 'entertainment', amount: 15.99, cycle: 'monthly', nextBilling: '2026-11-01', paymentMethod: 'Credit Card' },
                    { id: 'sub_2', name: 'Spotify Duo', category: 'entertainment', amount: 12.99, cycle: 'monthly', nextBilling: '2026-10-25', paymentMethod: 'Digital Wallet' }
                ];
            }
        } catch (e) {
            appState.transactions = getSampleData();
        }
    } else {
        appState.transactions = getSampleData();
    }

    const validCurrency = appState.currency || 'USD';

    const currencySelectHeader = document.getElementById('currencySelect');
    if (currencySelectHeader) currencySelectHeader.value = validCurrency;

    const settingCurrencySelect = document.getElementById('settingCurrencySelect');
    if (settingCurrencySelect) settingCurrencySelect.value = validCurrency;

    const cfg = CURRENCY_CONFIG[validCurrency] || CURRENCY_CONFIG['USD'];
    document.getElementById('txCurrencySymbol').textContent = cfg.symbol;
    updateSidebarTxCount();
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
        subscriptions: { title: translations[lang].page_subscriptions_title, subtitle: translations[lang].page_subscriptions_subtitle },
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
        populateHeatmapMonthOptions();
        renderHeatmap();
        renderDashRecentTable();
    } else if (appState.currentPage === 'transactions') {
        renderTransactions();
    } else if (appState.currentPage === 'analytics') {
        renderAnalyticsView();
    } else if (appState.currentPage === 'budgets') {
        renderBudgets();
        renderGoals();
    } else if (appState.currentPage === 'subscriptions') {
        renderSubscriptions();
    }
}

// FORMAT MONEY WITH EXCHANGE RATE
function formatMoney(amountUSD) {
    const code = appState.currency || 'USD';
    const cfg = CURRENCY_CONFIG[code] || CURRENCY_CONFIG['USD'];
    const rate = exchangeRates[code] || 1;

    const converted = parseFloat(amountUSD) * rate;

    const formatted = new Intl.NumberFormat(cfg.locale, {
        minimumFractionDigits: cfg.decimals,
        maximumFractionDigits: cfg.decimals
    }).format(converted);

    return cfg.prepend ? `${cfg.symbol}${formatted}` : `${formatted} ${cfg.symbol}`;
}

function changeCurrency(newCurr) {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    appState.currency = newCurr;

    document.getElementById('currencySelect').value = newCurr;
    document.getElementById('settingCurrencySelect').value = newCurr;

    const cfg = CURRENCY_CONFIG[newCurr] || CURRENCY_CONFIG['USD'];
    document.getElementById('txCurrencySymbol').textContent = cfg.symbol;

    saveStateToLocalStorage();
    renderAllViews();
    showToast(lang === 'vi' ? `Đã cập nhật tiền tệ thành ${newCurr}` : `Currency updated to ${newCurr}`);
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
    const rate = exchangeRates[appState.currency] || 1;

    const catCtx = document.getElementById('dashCategoryChart').getContext('2d');
    const noDataEl = document.getElementById('dashNoChartData');

    const catTotals = {};
    appState.transactions.filter(tx => tx.type === 'EXPENSE').forEach(tx => {
        catTotals[tx.category] = (catTotals[tx.category] || 0) + (parseFloat(tx.amount) * rate);
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
                    tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${formatMoney(ctx.raw / rate)}` } }
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
        if (tx.type === 'INCOME') datesMap[dateKey].income += (parseFloat(tx.amount) * rate);
        else datesMap[dateKey].expense += (parseFloat(tx.amount) * rate);
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
                y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 9 }, callback: (v) => formatMoney(v / rate) } }
            },
            plugins: {
                legend: { position: 'top', align: 'end', labels: { color: tickColor, font: { size: 10 }, boxWidth: 10 } }
            }
        }
    });
}

// --- HEATMAP FEATURE LOGIC ---
function setHeatmapMode(mode) {
    appState.heatmapMode = mode;
    ['expense', 'income', 'both'].forEach(m => {
        const btn = document.getElementById(`heatmapBtn-${m}`);
        if (btn) {
            btn.classList.toggle('active', m === mode);
        }
    });
    closeHeatmapDayDetails();
    renderHeatmap();
}

function updateHeatmapToggleUI() {
    const mode = appState.heatmapMode || 'both';
    ['expense', 'income', 'both'].forEach(m => {
        const btn = document.getElementById(`heatmapBtn-${m}`);
        if (btn) btn.classList.toggle('active', m === mode);
    });
}

function populateHeatmapMonthOptions() {
    const select = document.getElementById('heatmapMonthSelect');
    if (!select) return;

    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const monthsSet = new Set();
    const now = new Date();
    const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    monthsSet.add(currentMonthKey);

    appState.transactions.forEach(tx => {
        if (tx.date) {
            monthsSet.add(tx.date.substring(0, 7));
        }
    });

    const sortedMonths = Array.from(monthsSet).sort().reverse();
    select.innerHTML = '';

    sortedMonths.forEach(mKey => {
        const [year, month] = mKey.split('-');
        const dateObj = new Date(parseInt(year), parseInt(month) - 1, 1);
        const label = dateObj.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', { year: 'numeric', month: 'long' });
        const opt = document.createElement('option');
        opt.value = mKey;
        opt.textContent = label;
        select.appendChild(opt);
    });

    if (!appState.selectedHeatmapMonth || !sortedMonths.includes(appState.selectedHeatmapMonth)) {
        appState.selectedHeatmapMonth = sortedMonths[0];
    }
    select.value = appState.selectedHeatmapMonth;
}

function renderHeatmap() {
    const monthSelect = document.getElementById('heatmapMonthSelect');
    if (!monthSelect) return;

    appState.selectedHeatmapMonth = monthSelect.value;
    const grid = document.getElementById('heatmapGrid');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    if (!grid) return;

    grid.innerHTML = '';

    const [yearStr, monthStr] = appState.selectedHeatmapMonth.split('-');
    const year = parseInt(yearStr);
    const month = parseInt(monthStr) - 1;

    updateHeatmapToggleUI();

    const mode = appState.heatmapMode || 'both';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    // Sửa logic: Dịch chuyển để Thứ 2 là ngày đầu tuần (index 0)
    // getDay() trả về: 0=CN, 1=T2, ..., 6=T7
    let startWeekday = firstDay.getDay() - 1;
    if (startWeekday === -1) {
        startWeekday = 6; // Nếu là Chủ Nhật (0 - 1 = -1) thì đẩy xuống vị trí số 6 (cột cuối)
    }

    const dailyData = {};
    let monthTotalIncome = 0;
    let monthTotalExpense = 0;

    appState.transactions.forEach(tx => {
        if (tx.date && tx.date.startsWith(appState.selectedHeatmapMonth)) {
            const dayNum = parseInt(tx.date.split('-')[2]);
            if (!dailyData[dayNum]) {
                dailyData[dayNum] = { income: 0, expense: 0, count: 0, txs: [], incomeTxs: [], expenseTxs: [] };
            }
            const amt = parseFloat(tx.amount);
            if (tx.type === 'INCOME') {
                dailyData[dayNum].income += amt;
                dailyData[dayNum].incomeTxs.push(tx);
                monthTotalIncome += amt;
            } else {
                dailyData[dayNum].expense += amt;
                dailyData[dayNum].expenseTxs.push(tx);
                monthTotalExpense += amt;
            }
            dailyData[dayNum].count++;
            dailyData[dayNum].txs.push(tx);
        }
    });

    const monthSummaryEl = document.getElementById('heatmapMonthSummary');
    if (monthSummaryEl) {
        if (mode === 'expense') {
            monthSummaryEl.innerHTML = `<span class="text-rose-500">-${formatMoney(monthTotalExpense)}</span>`;
        } else if (mode === 'income') {
            monthSummaryEl.innerHTML = `<span class="text-emerald-500">+${formatMoney(monthTotalIncome)}</span>`;
        } else {
            monthSummaryEl.innerHTML = `
                <span class="text-emerald-500 mr-2">+${formatMoney(monthTotalIncome)}</span>
                <span class="text-rose-500">-${formatMoney(monthTotalExpense)}</span>
            `;
        }
    }

    for (let i = 0; i < startWeekday; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'h-14 sm:h-16 rounded-xl bg-slate-100/40 dark:bg-slate-800/20 border border-transparent';
        grid.appendChild(emptyCell);
    }

    for (let day = 1; day <= totalDays; day++) {
        const dateStr = `${appState.selectedHeatmapMonth}-${String(day).padStart(2, '0')}`;
        const dayInfo = dailyData[day] || { income: 0, expense: 0, count: 0, txs: [], incomeTxs: [], expenseTxs: [] };

        let clickTxs;
        let effectiveIncome = dayInfo.income;
        let effectiveExpense = dayInfo.expense;
        if (mode === 'expense') {
            clickTxs = dayInfo.expenseTxs;
            effectiveIncome = 0;
        } else if (mode === 'income') {
            clickTxs = dayInfo.incomeTxs;
            effectiveExpense = 0;
        } else {
            clickTxs = dayInfo.txs;
        }

        let bgColorClass = 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300';
        let badgeHtml = '';

        if (mode === 'expense') {
            if (effectiveExpense > 0) {
                bgColorClass = 'bg-rose-500/15 border-rose-500/30 text-rose-600 dark:text-rose-400 font-semibold';
                badgeHtml = `<span class="text-[9px] font-bold text-rose-500 dark:text-rose-400">-${formatMoney(effectiveExpense)}</span>`;
            }
        } else if (mode === 'income') {
            if (effectiveIncome > 0) {
                bgColorClass = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold';
                badgeHtml = `<span class="text-[9px] font-bold text-emerald-500 dark:text-emerald-400">+${formatMoney(effectiveIncome)}</span>`;
            }
        } else {
            if (effectiveIncome > 0 && effectiveExpense > 0) {
                bgColorClass = 'bg-indigo-500/15 border-indigo-500/30 text-indigo-600 dark:text-indigo-300 font-semibold';
                badgeHtml = `<span class="text-[9px] font-bold text-indigo-500 dark:text-indigo-400">MIXED</span>`;
            } else if (effectiveIncome > 0) {
                bgColorClass = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold';
                badgeHtml = `<span class="text-[9px] font-bold text-emerald-500 dark:text-emerald-400">+${formatMoney(effectiveIncome)}</span>`;
            } else if (effectiveExpense > 0) {
                bgColorClass = 'bg-rose-500/15 border-rose-500/30 text-rose-600 dark:text-rose-400 font-semibold';
                badgeHtml = `<span class="text-[9px] font-bold text-rose-500 dark:text-rose-400">-${formatMoney(effectiveExpense)}</span>`;
            }
        }

        const visibleCount = clickTxs.length;

        const dayCard = document.createElement('button');
        dayCard.type = 'button';
        dayCard.onclick = () => selectHeatmapDay(dateStr, clickTxs);
        dayCard.className = `h-14 sm:h-16 rounded-xl border p-1.5 flex flex-col justify-between items-start transition transform hover:scale-[1.03] hover:shadow-md cursor-pointer ${bgColorClass} ${appState.selectedHeatmapDay === dateStr ? 'ring-2 ring-indigo-500' : ''}`;

        dayCard.innerHTML = `
            <div class="w-full flex items-center justify-between">
                <span class="text-xs font-bold">${day}</span>
                ${visibleCount > 0 ? `<span class="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 text-[9px] text-slate-700 dark:text-slate-200 flex items-center justify-center">${visibleCount}</span>` : ''}
            </div>
            <div class="w-full truncate text-left">
                ${badgeHtml}
            </div>
        `;

        grid.appendChild(dayCard);
    }

    if (appState.selectedHeatmapDay && appState.selectedHeatmapDay.startsWith(appState.selectedHeatmapMonth)) {
        const dayNum = parseInt(appState.selectedHeatmapDay.split('-')[2]);
        const dayInfo = dailyData[dayNum];
        let txs = [];
        if (dayInfo) {
            txs = mode === 'expense' ? dayInfo.expenseTxs : mode === 'income' ? dayInfo.incomeTxs : dayInfo.txs;
        }
        selectHeatmapDay(appState.selectedHeatmapDay, txs);
    } else {
        closeHeatmapDayDetails();
    }
}

function selectHeatmapDay(dateStr, txs) {
    appState.selectedHeatmapDay = dateStr;
    const detailsContainer = document.getElementById('heatmapDayDetails');
    const titleEl = document.getElementById('heatmapSelectedDateTitle');
    const listEl = document.getElementById('heatmapSelectedDateList');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    if (!detailsContainer || !titleEl || !listEl) return;

    detailsContainer.classList.remove('hidden');

    const [y, m, d] = dateStr.split('-');
    const formattedDate = new Date(parseInt(y), parseInt(m) - 1, parseInt(d)).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    });

    titleEl.textContent = `${translations[lang].tx_for_date} ${formattedDate}`;
    listEl.innerHTML = '';

    if (!txs || txs.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-slate-400 py-2">${translations[lang].no_tx_on_date}</p>`;
    } else {
        txs.forEach(tx => {
            const isInc = tx.type === 'INCOME';
            const catObj = CATEGORIES[tx.type].find(c => c.id === tx.category) || { icon: 'fa-tag', badgeClass: 'bg-slate-500/10' };

            const row = document.createElement('div');
            row.className = 'flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60';
            row.innerHTML = `
                <div class="flex items-center gap-2.5 min-w-0">
                    <div class="w-7 h-7 rounded-lg ${catObj.badgeClass} flex items-center justify-center flex-shrink-0 text-xs">
                        <i class="fa-solid ${catObj.icon}"></i>
                    </div>
                    <div class="min-w-0">
                        <p class="text-xs font-semibold text-slate-900 dark:text-white truncate">${tx.title}</p>
                        <p class="text-[10px] text-slate-400 truncate">${getCategoryName(tx.category, tx.type)} • ${getPaymentMethodName(tx.paymentMethod)}</p>
                    </div>
                </div>
                <div class="text-right flex-shrink-0 ml-2">
                    <span class="text-xs font-bold ${isInc ? 'text-emerald-500' : 'text-rose-500'}">
                        ${isInc ? '+' : '-'}${formatMoney(tx.amount)}
                    </span>
                    <button onclick="editTransaction('${tx.id}')" class="ml-2 text-slate-400 hover:text-indigo-500 text-xs">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            `;
            listEl.appendChild(row);
        });
    }

    renderHeatmapGridSelection();
}

function renderHeatmapGridSelection() {
    const monthSelect = document.getElementById('heatmapMonthSelect');
    if (!monthSelect) return;
    const grid = document.getElementById('heatmapGrid');
    if (!grid) return;

    Array.from(grid.children).forEach(child => {
        if (child.tagName === 'BUTTON') {
            const dayNum = child.querySelector('span').textContent;
            const cardDate = `${monthSelect.value}-${String(dayNum).padStart(2, '0')}`;
            if (cardDate === appState.selectedHeatmapDay) {
                child.classList.add('ring-2', 'ring-indigo-500');
            } else {
                child.classList.remove('ring-2', 'ring-indigo-500');
            }
        }
    });
}

function closeHeatmapDayDetails() {
    appState.selectedHeatmapDay = '';
    const detailsContainer = document.getElementById('heatmapDayDetails');
    if (detailsContainer) detailsContainer.classList.add('hidden');
    renderHeatmapGridSelection();
}

// DASHBOARD RECENT TABLE
function renderDashRecentTable() {
    const tbody = document.getElementById('dashRecentTableBody');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    tbody.innerHTML = '';

    const recent = [...appState.transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    if (recent.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-slate-400">${translations[lang].no_recent}</td></tr>`;
        return;
    }

    recent.forEach(tx => {
        const isInc = tx.type === 'INCOME';
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 dark:hover:bg-slate-800/40 transition';
        tr.innerHTML = `
            <td class="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">${tx.title}</td>
            <td class="py-2.5 px-4"><span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">${getCategoryName(tx.category, tx.type)}</span></td>
            <td class="py-2.5 px-4 text-slate-500 dark:text-slate-400">${tx.date}</td>
            <td class="py-2.5 px-4 text-right font-bold ${isInc ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'}">${isInc ? '+' : '-'}${formatMoney(tx.amount)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// --- FILTER & TRANSACTIONS TABLE LOGIC ---
function populateCategoryFilterOptions() {
    const catFilter = document.getElementById('categoryFilter');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    if (!catFilter) return;

    const curVal = catFilter.value;
    catFilter.innerHTML = `<option value="ALL">${translations[lang].all_categories}</option>`;

    [...CATEGORIES.EXPENSE, ...CATEGORIES.INCOME].forEach(cat => {
        const name = lang === 'vi' ? (cat.viName || cat.name) : cat.name;
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = name;
        catFilter.appendChild(opt);
    });

    catFilter.value = curVal || 'ALL';
}

function populateTypeFilterOptions() {
    const typeFilter = document.getElementById('typeFilter');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    if (!typeFilter) return;

    const curVal = typeFilter.value;
    typeFilter.innerHTML = `
        <option value="ALL">${translations[lang].all_types}</option>
        <option value="EXPENSE">${translations[lang].expenses}</option>
        <option value="INCOME">${translations[lang].income}</option>
    `;
    typeFilter.value = curVal || 'ALL';
}

function applyFilters() {
    renderTransactions();
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('typeFilter').value = 'ALL';
    document.getElementById('categoryFilter').value = 'ALL';
    document.getElementById('monthFilter').value = '';
    document.getElementById('monthFilter').value = '';
    const displayInput = document.getElementById('monthFilterDisplay');
    if (displayInput) displayInput.value = '';
    renderTransactions();
}

function renderTransactions() {
    const tbody = document.getElementById('transactionTableBody');
    const noMsg = document.getElementById('noTransactionsMessage');
    if (!tbody) return;

    const search = document.getElementById('searchInput').value.toLowerCase();
    const type = document.getElementById('typeFilter').value;
    const cat = document.getElementById('categoryFilter').value;
    const month = document.getElementById('monthFilter').value;

    const filtered = appState.transactions.filter(tx => {
        const matchesSearch = tx.title.toLowerCase().includes(search) || (tx.notes && tx.notes.toLowerCase().includes(search));
        const matchesType = type === 'ALL' || tx.type === type;
        const matchesCat = cat === 'ALL' || tx.category === cat;
        const matchesMonth = !month || tx.date.startsWith(month);
        return matchesSearch && matchesType && matchesCat && matchesMonth;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));

    tbody.innerHTML = '';

    if (filtered.length === 0) {
        noMsg.classList.remove('hidden');
        return;
    }
    noMsg.classList.add('hidden');

    filtered.forEach(tx => {
        const isInc = tx.type === 'INCOME';
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 dark:hover:bg-slate-800/40 transition border-b border-slate-200/60 dark:border-slate-800/60';
        tr.innerHTML = `
            <td class="py-3 px-4">
                <p class="font-semibold text-slate-900 dark:text-white">${tx.title}</p>
                ${tx.notes ? `<p class="text-[10px] text-slate-400">${tx.notes}</p>` : ''}
            </td>
            <td class="py-3 px-4"><span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">${getCategoryName(tx.category, tx.type)}</span></td>
            <td class="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">${tx.date}</td>
            <td class="py-3 px-4 text-slate-500 dark:text-slate-400">${getPaymentMethodName(tx.paymentMethod)}</td>
            <td class="py-3 px-4 text-right font-bold ${isInc ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'} whitespace-nowrap">${isInc ? '+' : '-'}${formatMoney(tx.amount)}</td>
            <td class="py-3 px-4 text-center whitespace-nowrap">
                <button onclick="editTransaction('${tx.id}')" class="p-1.5 text-slate-400 hover:text-indigo-500 transition mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="confirmDeleteTransaction('${tx.id}')" class="p-1.5 text-slate-400 hover:text-rose-500 transition"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// --- ANALYTICS VIEW LOGIC ---
function renderAnalyticsView() {
    const isDark = document.documentElement.classList.contains('dark');
    const tickColor = isDark ? '#64748b' : '#94a3b8';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const rate = exchangeRates[appState.currency] || 1;

    // ==========================================
    // 1. TÍNH TOÁN CÁC CHỈ SỐ TỔNG QUAN (Thẻ nhỏ)
    // ==========================================
    let totalExp = 0;
    let totalInc = 0;
    const catExpMap = {};
    const pmExpMap = {};

    appState.transactions.forEach(tx => {
        const amt = parseFloat(tx.amount);
        if (tx.type === 'EXPENSE') {
            totalExp += amt;
            catExpMap[tx.category] = (catExpMap[tx.category] || 0) + amt;
            pmExpMap[tx.paymentMethod] = (pmExpMap[tx.paymentMethod] || 0) + amt;
        } else {
            totalInc += amt;
        }
    });

    const dates = appState.transactions.map(t => new Date(t.date));
    let daysDiff = 1;
    if (dates.length > 1) {
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));
        daysDiff = Math.max(1, Math.ceil((maxDate - minDate) / (1000 * 60 * 60 * 24)) + 1);
    }

    document.getElementById('statAvgDaily').textContent = formatMoney(totalExp / daysDiff);
    document.getElementById('statNetSurplus').textContent = formatMoney(totalInc - totalExp);

    let topCat = 'None';
    let maxCatAmt = 0;
    Object.keys(catExpMap).forEach(c => {
        if (catExpMap[c] > maxCatAmt) {
            maxCatAmt = catExpMap[c];
            topCat = getCategoryName(c, 'EXPENSE');
        }
    });
    document.getElementById('statTopCategory').textContent = topCat;

    let topPm = 'None';
    let maxPmAmt = 0;
    Object.keys(pmExpMap).forEach(p => {
        if (pmExpMap[p] > maxPmAmt) {
            maxPmAmt = pmExpMap[p];
            topPm = getPaymentMethodName(p);
        }
    });
    document.getElementById('statTopPayment').textContent = topPm;

    // ==========================================
    // 2. BIỂU ĐỒ CỘT (Dùng bộ lọc analyticsTimeRange)
    // ==========================================
    const barCtx = document.getElementById('analyticsBarChart').getContext('2d');
    const monthlyMap = {};
    appState.transactions.forEach(tx => {
        const mKey = tx.date.substring(0, 7);
        if (!monthlyMap[mKey]) monthlyMap[mKey] = { inc: 0, exp: 0 };
        if (tx.type === 'INCOME') monthlyMap[mKey].inc += parseFloat(tx.amount) * rate;
        else monthlyMap[mKey].exp += parseFloat(tx.amount) * rate;
    });

    let allKeys = Object.keys(monthlyMap).sort();
    const timeRangeSelect = document.getElementById('analyticsTimeRange');
    const rangeValue = timeRangeSelect ? timeRangeSelect.value : '3';
    
    let mKeys = allKeys;
    if (rangeValue !== 'all') {
        const limit = parseInt(rangeValue);
        mKeys = allKeys.slice(-limit);
    }

    const incSeries = mKeys.map(k => monthlyMap[k].inc);
    const expSeries = mKeys.map(k => monthlyMap[k].exp);

    if (analyticsBarChartInstance) analyticsBarChartInstance.destroy();
    analyticsBarChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: mKeys.map(k => {
                const [year, month] = k.split('-');
                return `${lang === 'vi' ? 'T' : 'M'}${parseInt(month)}/${year.substring(2)}`;
            }),
            datasets: [
                { label: translations[lang].income, data: incSeries, backgroundColor: '#10b981', borderRadius: 4 },
                { label: translations[lang].expenses, data: expSeries, backgroundColor: '#f43f5e', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 10 } } },
                y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 10 }, callback: (v) => formatMoney(v / rate) } }
            },
            plugins: { legend: { labels: { color: tickColor } } }
        }
    });

    // ==========================================
    // 3. BIỂU ĐỒ TRÒN (Expense Category Breakdown)
    // ==========================================
    const donutCtx = document.getElementById('analyticsDoughnutChart').getContext('2d');
    const donutLabels = [];
    const donutData = [];
    const donutColors = [];

    Object.keys(catExpMap).forEach(cId => {
        const cObj = CATEGORIES.EXPENSE.find(c => c.id === cId) || { color: '#94a3b8' };
        donutLabels.push(getCategoryName(cId, 'EXPENSE'));
        donutData.push(catExpMap[cId] * rate);
        donutColors.push(cObj.color);
    });

    if (analyticsDoughnutChartInstance) analyticsDoughnutChartInstance.destroy();
    analyticsDoughnutChartInstance = new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: donutLabels,
            datasets: [{ data: donutData, backgroundColor: donutColors, borderWidth: 2, borderColor: isDark ? '#1e293b' : '#fff' }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: tickColor, font: { size: 10 } } },
                tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${formatMoney(ctx.raw / rate)}` } }
            }
        }
    });

    // ==========================================
    // 4. SMART FORECAST LOGIC (Dự báo cuối tháng)
    // ==========================================
    const now = new Date();
    const currentDay = now.getDate();
    const totalDaysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    let currentMonthInc = 0;
    let currentMonthExp = 0;
    let dailyExpenses = [];
    let upcomingSubsCost = 0;

    appState.transactions.forEach(tx => {
        if (tx.date && tx.date.startsWith(currentMonthKey)) {
            const amt = parseFloat(tx.amount);
            if (tx.type === 'INCOME') {
                currentMonthInc += amt;
            } else {
                currentMonthExp += amt;
                dailyExpenses.push({ date: tx.date, amount: amt });
            }
        }
    });

    let expectedInc = currentMonthInc;
    if (expectedInc === 0) {
        const pastSalaries = appState.transactions
            .filter(t => t.type === 'INCOME' && t.category === 'salary' && t.date < currentMonthKey)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        if (pastSalaries.length > 0) {
            expectedInc = parseFloat(pastSalaries[0].amount);
        }
    }

    let validExpForAvg = currentMonthExp;
    let validDaysForAvg = currentDay;

    if (dailyExpenses.length > 1) {
        const largestExpense = Math.max(...dailyExpenses.map(d => d.amount));
        if (largestExpense > currentMonthExp * 0.4 && currentMonthExp > 0) {
            validExpForAvg -= largestExpense;
            validDaysForAvg = Math.max(1, currentDay - 1);
        }
    }

    if (appState.subscriptions) {
        const todayStr = now.toISOString().split('T')[0];
        const endOfMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${totalDaysInMonth}`;

        appState.subscriptions.forEach(sub => {
            if (sub.nextBilling >= todayStr && sub.nextBilling <= endOfMonthStr) {
                if (sub.cycle === 'monthly') upcomingSubsCost += parseFloat(sub.amount);
                else if (sub.cycle === 'yearly') upcomingSubsCost += parseFloat(sub.amount);
            }
        });
    }

    const avgDailyExp = validExpForAvg / validDaysForAvg;
    const projectedExp = (avgDailyExp * totalDaysInMonth) + upcomingSubsCost;

    let projectedBalance = 0;
    if (currentMonthInc > 0 || currentMonthExp > 0) {
        projectedBalance = expectedInc - projectedExp;
    }

    const forecastEl = document.getElementById('endOfMonthForecast');
    if (forecastEl) {
        const isPositive = projectedBalance >= 0;
        const colorClass = isPositive ? 'text-emerald-500' : 'text-rose-500';
        const iconClass = isPositive ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down';

        forecastEl.innerHTML = `
            <div class="flex items-center justify-end gap-2">
                <span class="text-xs text-slate-500 dark:text-slate-400">${translations[lang].forecast_balance} </span>
                <span class="text-sm sm:text-base font-extrabold ${colorClass} flex items-center gap-1">
                    <i class="fa-solid ${iconClass} text-xs"></i>
                    ${formatMoney(projectedBalance)}
                </span>
            </div>
        `;
    }

    // ==========================================
    // 5. BIỂU ĐỒ ĐƯỜNG (Dùng bộ lọc cumulativeTimeRange)
    // ==========================================
    const cumulativeCtx = document.getElementById('analyticsCumulativeChart').getContext('2d');
    
    // Đọc giá trị từ Dropdown riêng của biểu đồ đường
    const cumulativeSelect = document.getElementById('cumulativeTimeRange');
    const cumulativeRangeValue = cumulativeSelect ? cumulativeSelect.value : '3'; 
    
    let sortedTxsForLine = [...appState.transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Lọc thời gian cho biểu đồ đường
    if (cumulativeRangeValue !== 'all') {
        const limitMonths = parseInt(cumulativeRangeValue);
        const latestDate = sortedTxsForLine.length > 0 ? new Date(sortedTxsForLine[sortedTxsForLine.length - 1].date) : new Date();
        
        const startDate = new Date(latestDate);
        startDate.setMonth(startDate.getMonth() - limitMonths);
        
        sortedTxsForLine = sortedTxsForLine.filter(tx => new Date(tx.date) >= startDate);
    }

    let runningTotal = 0;
    const cumulativeDates = [];
    const cumulativeValues = [];

    sortedTxsForLine.forEach(tx => {
        const amt = parseFloat(tx.amount) * rate;
        if (tx.type === 'INCOME') runningTotal += amt;
        else runningTotal -= amt;

        // Gộp các giao dịch trong cùng 1 ngày để biểu đồ không bị răng cưa
        if (cumulativeDates.length > 0 && cumulativeDates[cumulativeDates.length - 1] === tx.date) {
            cumulativeValues[cumulativeValues.length - 1] = runningTotal;
        } else {
            cumulativeDates.push(tx.date);
            cumulativeValues.push(runningTotal);
        }
    });

    if (analyticsCumulativeChartInstance) analyticsCumulativeChartInstance.destroy();
    analyticsCumulativeChartInstance = new Chart(cumulativeCtx, {
        type: 'line',
        data: {
            labels: cumulativeDates,
            datasets: [{
                label: translations[lang].cumulative_chart_title,
                data: cumulativeValues,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.3,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 10 } } },
                y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 10 }, callback: (v) => formatMoney(v / rate) } }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ` ${translations[lang].cumulative_tooltip} ${formatMoney(ctx.raw / rate)}` } }
            }
        }
    });
}

// --- BUDGETS & GOALS VIEW LOGIC ---
function renderBudgets() {
    const container = document.getElementById('budgetsList');
    if (!container) return;
    container.innerHTML = '';

    const catSpentMap = {};
    appState.transactions.filter(tx => tx.type === 'EXPENSE').forEach(tx => {
        catSpentMap[tx.category] = (catSpentMap[tx.category] || 0) + parseFloat(tx.amount);
    });

    Object.keys(appState.budgets).forEach(catId => {
        const limit = appState.budgets[catId];
        const spent = catSpentMap[catId] || 0;
        const pct = Math.min(100, Math.round((spent / limit) * 100));
        const catObj = CATEGORIES.EXPENSE.find(c => c.id === catId) || { icon: 'fa-tag', name: catId };

        let progressBg = 'bg-indigo-500';
        if (pct >= 90) progressBg = 'bg-rose-500';
        else if (pct >= 75) progressBg = 'bg-amber-500';

        const card = document.createElement('div');
        card.className = 'p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800';
        card.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <i class="fa-solid ${catObj.icon} text-slate-400"></i> ${getCategoryName(catId, 'EXPENSE')}
                </span>
                <span class="text-xs font-semibold ${pct >= 100 ? 'text-rose-500' : 'text-slate-500'}">${pct}%</span>
            </div>
            <div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                <div class="${progressBg} h-2 rounded-full transition-all duration-300" style="width: ${pct}%"></div>
            </div>
            <div class="flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>${formatMoney(spent)} spent</span>
                <span>Limit: ${formatMoney(limit)}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function openBudgetModal() {
    const listEl = document.getElementById('budgetFormList');
    listEl.innerHTML = '';

    CATEGORIES.EXPENSE.forEach(cat => {
        const limit = appState.budgets[cat.id] || 0;
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800';
        item.innerHTML = `
            <span class="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <i class="fa-solid ${cat.icon} text-slate-400 w-4"></i> ${getCategoryName(cat.id, 'EXPENSE')}
            </span>
            <input type="number" data-cat="${cat.id}" value="${limit}" step="10" min="0" onchange="updateBudgetLimit('${cat.id}', this.value)" class="w-24 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white text-right outline-none focus:ring-1 focus:ring-amber-500">
        `;
        listEl.appendChild(item);
    });

    document.getElementById('budgetModal').classList.remove('hidden');
}

function closeBudgetModal() {
    document.getElementById('budgetModal').classList.add('hidden');
    renderBudgets();
}

function updateBudgetLimit(catId, val) {
    appState.budgets[catId] = parseFloat(val) || 0;
    saveStateToLocalStorage();
}

function renderGoals() {
    const container = document.getElementById('goalsList');
    if (!container) return;
    container.innerHTML = '';

    appState.goals.forEach(goal => {
        const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
        const card = document.createElement('div');
        card.className = 'p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800';
        card.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">${goal.title}</h4>
                <div class="flex items-center gap-2">
                    <span class="text-xs font-semibold text-emerald-500">${pct}%</span>
                    <button onclick="openDepositModal('${goal.id}')" class="text-xs text-indigo-500 hover:text-indigo-400"><i class="fa-solid fa-plus-circle"></i></button>
                    <button onclick="deleteGoal('${goal.id}')" class="text-xs text-slate-400 hover:text-rose-500"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                <div class="bg-emerald-500 h-2 rounded-full transition-all duration-300" style="width: ${pct}%"></div>
            </div>
            <div class="flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Saved: ${formatMoney(goal.current)}</span>
                <span>Target: ${formatMoney(goal.target)}</span>
            </div>
        `;
        container.appendChild(card);
    });
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
    const title = document.getElementById('goalTitle').value;
    const target = parseFloat(document.getElementById('goalTarget').value);
    const current = parseFloat(document.getElementById('goalCurrent').value) || 0;

    appState.goals.push({ id: 'goal_' + Date.now(), title, target, current });
    saveStateToLocalStorage();
    closeGoalModal();
    renderGoals();
    showToast('Savings goal created!');
}

function deleteGoal(id) {
    appState.goals = appState.goals.filter(g => g.id !== id);
    saveStateToLocalStorage();
    renderGoals();
}

function openDepositModal(id) {
    const goal = appState.goals.find(g => g.id === id);
    if (!goal) return;
    document.getElementById('depositGoalId').value = id;
    document.getElementById('depositGoalTitle').textContent = `Target: ${goal.title}`;
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositModal').classList.remove('hidden');
}

function closeDepositModal() {
    document.getElementById('depositModal').classList.add('hidden');
}

function submitDeposit() {
    const id = document.getElementById('depositGoalId').value;
    const amt = parseFloat(document.getElementById('depositAmount').value);
    const goal = appState.goals.find(g => g.id === id);
    if (goal && amt > 0) {
        goal.current += amt;
        saveStateToLocalStorage();
        closeDepositModal();
        renderGoals();
        showToast(`Added ${formatMoney(amt)} to ${goal.title}`);
    }
}

// --- SUBSCRIPTIONS LOGIC ---
function renderSubscriptions() {
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    const grid = document.getElementById('subscriptionsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    let totalMonthly = 0;
    let totalYearly = 0;

    if (!appState.subscriptions || appState.subscriptions.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-10 text-center text-slate-400 dark:text-slate-500">
            <i class="fa-solid fa-repeat text-3xl mb-2 opacity-40"></i>
            <p class="font-medium text-sm" data-i18n="no_subscriptions">${translations[lang].no_subscriptions}</p>
        </div>`;
    } else {
        appState.subscriptions.forEach(sub => {
            const amt = parseFloat(sub.amount);
            if (sub.cycle === 'monthly') {
                totalMonthly += amt;
                totalYearly += amt * 12;
            } else {
                totalMonthly += amt / 12;
                totalYearly += amt;
            }

            const catObj = CATEGORIES.EXPENSE.find(c => c.id === sub.category) || { icon: 'fa-tag', badgeClass: 'bg-slate-500/10' };
            const cycleText = sub.cycle === 'monthly' ? translations[lang].cycle_monthly : translations[lang].cycle_yearly;

            const card = document.createElement('div');
            card.className = 'glass-card p-4 rounded-2xl flex flex-col justify-between relative group hover:border-indigo-500/50 transition';
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl ${catObj.badgeClass} flex items-center justify-center text-sm">
                                <i class="fa-solid ${catObj.icon}"></i>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-slate-900 dark:text-white">${sub.name}</h4>
                                <span class="text-[10px] text-slate-400">${getCategoryName(sub.category, 'EXPENSE')}</span>
                            </div>
                        </div>
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">${cycleText}</span>
                    </div>
                    <div class="mb-3">
                        <div class="text-lg font-extrabold text-slate-900 dark:text-white">${formatMoney(sub.amount)} <span class="text-xs font-normal text-slate-400">/${sub.cycle === 'monthly' ? 'mo' : 'yr'}</span></div>
                    </div>
                </div>
                <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div>
                        <span class="text-[10px] block text-slate-400">${translations[lang].next_billing}</span>
                        <span class="font-medium text-slate-700 dark:text-slate-300">${sub.nextBilling || 'N/A'}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <button onclick="openSubscriptionModal('${sub.id}')" class="p-1.5 text-slate-400 hover:text-indigo-500 transition"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteSubscription('${sub.id}')" class="p-1.5 text-slate-400 hover:text-rose-500 transition"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    document.getElementById('subTotalMonthly').textContent = formatMoney(totalMonthly);
    document.getElementById('subTotalYearly').textContent = formatMoney(totalYearly);
    document.getElementById('subActiveCount').textContent = appState.subscriptions ? appState.subscriptions.length : 0;
}

function openSubscriptionModal(editId = null) {
    const modal = document.getElementById('subscriptionModal');
    const form = document.getElementById('subscriptionForm');
    const titleEl = document.getElementById('subModalTitle');
    const catSelect = document.getElementById('subCategory');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    form.reset();
    document.getElementById('editSubId').value = '';

    catSelect.innerHTML = '';
    CATEGORIES.EXPENSE.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = lang === 'vi' ? (cat.viName || cat.name) : cat.name;
        catSelect.appendChild(opt);
    });

    const cycleSelect = document.getElementById('subCycle');
    Array.from(cycleSelect.options).forEach(opt => {
        if (opt.value === 'monthly') {
            opt.textContent = translations[lang].cycle_monthly;
        } else if (opt.value === 'yearly') {
            opt.textContent = translations[lang].cycle_yearly;
        }
    });

    const pmSelect = document.getElementById('subPaymentMethod');
    Array.from(pmSelect.options).forEach(opt => {
        opt.textContent = getPaymentMethodName(opt.value);
    });

    if (editId) {
        const sub = appState.subscriptions.find(s => s.id === editId);
        if (sub) {
            document.getElementById('editSubId').value = sub.id;
            document.getElementById('subName').value = sub.name;
            document.getElementById('subAmount').value = sub.amount;
            document.getElementById('subCategory').value = sub.category;
            document.getElementById('subCycle').value = sub.cycle;
            document.getElementById('subNextBilling').value = sub.nextBilling || '';
            document.getElementById('subPaymentMethod').value = sub.paymentMethod || 'Credit Card';
            titleEl.textContent = translations[lang].modal_title_edit_sub;
        }
    } else {
        document.getElementById('subNextBilling').value = new Date().toISOString().split('T')[0];
        titleEl.textContent = translations[lang].modal_title_add_sub;
    }

    modal.classList.remove('hidden');
}

function closeSubscriptionModal() {
    document.getElementById('subscriptionModal').classList.add('hidden');
}

function handleSubscriptionSubmit(e) {
    e.preventDefault();
    const editId = document.getElementById('editSubId').value;
    const name = document.getElementById('subName').value;
    const amount = parseFloat(document.getElementById('subAmount').value);
    const category = document.getElementById('subCategory').value;
    const cycle = document.getElementById('subCycle').value;
    const nextBilling = document.getElementById('subNextBilling').value;
    const paymentMethod = document.getElementById('subPaymentMethod').value;

    if (editId) {
        const idx = appState.subscriptions.findIndex(s => s.id === editId);
        if (idx !== -1) {
            appState.subscriptions[idx] = { id: editId, name, amount, category, cycle, nextBilling, paymentMethod };
        }
    } else {
        appState.subscriptions.push({ id: 'sub_' + Date.now(), name, amount, category, cycle, nextBilling, paymentMethod });
    }

    saveStateToLocalStorage();
    closeSubscriptionModal();
    renderSubscriptions();
    showToast(editId ? 'Subscription updated' : 'Subscription added');
}

function deleteSubscription(id) {
    appState.subscriptions = appState.subscriptions.filter(s => s.id !== id);
    saveStateToLocalStorage();
    renderSubscriptions();
    showToast('Subscription deleted');
}

// --- MODAL & TRANSACTION FORM LOGIC ---
function openTransactionModal(editId = null) {
    const modal = document.getElementById('transactionModal');
    const form = document.getElementById('transactionForm');
    const titleEl = document.getElementById('modalTitle');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    form.reset();
    document.getElementById('editTxId').value = '';

    if (editId) {
        const tx = appState.transactions.find(t => t.id === editId);
        if (tx) {
            document.getElementById('editTxId').value = tx.id;
            setTxType(tx.type);
            document.getElementById('txTitle').value = tx.title;
            document.getElementById('txAmount').value = tx.amount;
            document.getElementById('txCategory').value = tx.category;
            document.getElementById('txDate').value = tx.date;
            document.getElementById('txPaymentMethod').value = tx.paymentMethod;
            document.getElementById('txNotes').value = tx.notes || '';
            titleEl.querySelector('span').textContent = translations[lang].modal_title_edit;
        }
    } else {
        setTxType('EXPENSE');
        document.getElementById('txDate').value = new Date().toISOString().split('T')[0];
        titleEl.querySelector('span').textContent = translations[lang].modal_title_add;
    }

    modal.classList.remove('hidden');
}

function closeTransactionModal() {
    document.getElementById('transactionModal').classList.add('hidden');
}

function setTxType(type) {
    document.getElementById('txType').value = type;
    const btnExp = document.getElementById('btnTypeExpense');
    const btnInc = document.getElementById('btnTypeIncome');

    if (type === 'EXPENSE') {
        btnExp.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 bg-rose-500 text-white shadow-md';
        btnInc.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
    } else {
        btnInc.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 bg-emerald-500 text-white shadow-md';
        btnExp.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
    }

    populateModalCategorySelect(type);
}

function populateModalCategorySelect(type) {
    const select = document.getElementById('txCategory');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';
    select.innerHTML = '';

    CATEGORIES[type].forEach(cat => {
        const name = lang === 'vi' ? (cat.viName || cat.name) : cat.name;
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = name;
        select.appendChild(opt);
    });
}

function handleTransactionSubmit(e) {
    e.preventDefault();
    const editId = document.getElementById('editTxId').value;
    const type = document.getElementById('txType').value;
    const title = document.getElementById('txTitle').value;
    const amount = parseFloat(document.getElementById('txAmount').value);
    const category = document.getElementById('txCategory').value;
    const date = document.getElementById('txDate').value;
    const paymentMethod = document.getElementById('txPaymentMethod').value;
    const notes = document.getElementById('txNotes').value;

    if (editId) {
        const idx = appState.transactions.findIndex(t => t.id === editId);
        if (idx !== -1) {
            appState.transactions[idx] = { id: editId, type, title, amount, category, date, paymentMethod, notes };
        }
    } else {
        const newTx = { id: 'tx_' + Date.now(), type, title, amount, category, date, paymentMethod, notes };
        appState.transactions.push(newTx);
    }

    saveStateToLocalStorage();
    closeTransactionModal();
    renderAllViews();
    showToast(editId ? 'Transaction updated' : 'Transaction added');
}

function editTransaction(id) {
    openTransactionModal(id);
}

let pendingDeleteId = null;
function confirmDeleteTransaction(id) {
    pendingDeleteId = id;
    const modal = document.getElementById('confirmModal');
    document.getElementById('confirmOkBtn').onclick = () => {
        if (pendingDeleteId) {
            appState.transactions = appState.transactions.filter(t => t.id !== pendingDeleteId);
            saveStateToLocalStorage();
            renderAllViews();
            showToast('Transaction deleted');
        }
        modal.classList.add('hidden');
    };
    document.getElementById('confirmCancelBtn').onclick = () => modal.classList.add('hidden');
    modal.classList.remove('hidden');
}

// --- BACKUP & SETTINGS LOGIC ---
function exportData() {
    const jsonStr = JSON.stringify(appState, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `spendsmart_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function triggerImport() {
    document.getElementById('importFileInput').click();
}

function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && Array.isArray(imported.transactions)) {
                appState = imported;
                saveStateToLocalStorage();
                renderAllViews();
                showToast('Data imported successfully!');
            } else {
                showToast('Invalid backup file structure.');
            }
        } catch (err) {
            showToast('Failed to parse JSON file.');
        }
    };
    reader.readAsText(file);
}

function resetDemoData() {
    appState.transactions = getSampleData();
    saveStateToLocalStorage();
    renderAllViews();
    showToast('Demo dataset loaded');
}

function confirmClearAll() {
    const modal = document.getElementById('confirmModal');
    document.getElementById('confirmOkBtn').onclick = () => {
        appState.transactions = [];
        saveStateToLocalStorage();
        renderAllViews();
        modal.classList.add('hidden');
        showToast('All records cleared');
    };
    document.getElementById('confirmCancelBtn').onclick = () => modal.classList.add('hidden');
    modal.classList.remove('hidden');
}

// TOAST NOTIFICATIONS
function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold shadow-xl flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0 pointer-events-auto';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 dark:text-emerald-600"></i> ${msg}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function handleMonthFilterChange(input) {
    const displayInput = document.getElementById('monthFilterDisplay');
    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    if (input.value) {
        const [year, month] = input.value.split('-');
        const date = new Date(year, month - 1, 1);
        displayInput.value = date.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
            month: 'long',
            year: 'numeric'
        });
        displayInput.value = displayInput.value.charAt(0).toUpperCase() + displayInput.value.slice(1);
    } else {
        displayInput.value = '';
    }

    applyFilters();
}

// Hàm format chữ hiển thị cho tháng
function updateMonthDisplayText() {
    const monthInput = document.getElementById('monthFilter');
    const displayInput = document.getElementById('monthFilterDisplay');
    if (!monthInput || !displayInput) return;

    const lang = localStorage.getItem('spendSmart_lang') || 'en';

    if (monthInput.value) {
        const [year, month] = monthInput.value.split('-');
        const date = new Date(year, month - 1, 1);
        let text = date.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
            month: 'long',
            year: 'numeric'
        });
        // Viết hoa chữ cái đầu
        displayInput.value = text.charAt(0).toUpperCase() + text.slice(1);
    } else {
        // Nếu không có giá trị, xóa text để placeholder (data-i18n) hiện lên
        displayInput.value = '';
    }
}

// Hàm xử lý khi người dùng chọn tháng
function handleMonthFilterChange(input) {
    updateMonthDisplayText(); // Cập nhật chữ
    applyFilters();           // Lọc dữ liệu
}

function processAutoBilling() {
    const todayStr = new Date().toISOString().split('T')[0]; // Lấy ngày hôm nay (YYYY-MM-DD)
    let hasChanges = false;
    let autoPayCount = 0;

    if (!appState.subscriptions) return;

    appState.subscriptions.forEach(sub => {
        // Nếu có ngày gia hạn và ngày đó <= hôm nay
        if (sub.nextBilling && sub.nextBilling <= todayStr) {
            // 1. Tự động tạo một giao dịch (Transaction) mới
            const newTx = {
                id: 'tx_auto_' + Date.now() + Math.random().toString(36).substring(2, 5),
                type: 'EXPENSE',
                title: `Auto-pay: ${sub.name}`,
                amount: sub.amount,
                category: sub.category,
                date: sub.nextBilling, // Ghi nhận vào đúng ngày gia hạn
                paymentMethod: sub.paymentMethod || 'Credit Card',
                notes: 'Hệ thống tự động trừ tiền gói định kỳ'
            };
            appState.transactions.push(newTx);

            // 2. Tính toán ngày gia hạn tiếp theo
            let nextDate = new Date(sub.nextBilling);
            // Xử lý múi giờ để không bị lùi ngày
            nextDate.setMinutes(nextDate.getMinutes() + nextDate.getTimezoneOffset());

            if (sub.cycle === 'monthly') {
                nextDate.setMonth(nextDate.getMonth() + 1);
            } else {
                nextDate.setFullYear(nextDate.getFullYear() + 1);
            }

            // Cập nhật lại nextBilling
            sub.nextBilling = nextDate.toISOString().split('T')[0];

            hasChanges = true;
            autoPayCount++;
        }
    });

    if (hasChanges) {
        saveStateToLocalStorage();
        // Đợi 1 chút để app render xong rồi mới hiện thông báo
        setTimeout(() => {
            const lang = localStorage.getItem('spendSmart_lang') || 'en';
            const msg = lang === 'vi'
                ? `Đã tự động thanh toán ${autoPayCount} gói dịch vụ!`
                : `Auto-paid ${autoPayCount} subscription(s)!`;
            showToast(msg);
        }, 1000);
    }
}