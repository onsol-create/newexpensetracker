// --- CATEGORIES DEFINITION ---
const CATEGORIES = {
    EXPENSE: [
        { id: 'food', name: 'Food & Dining', icon: 'fa-utensils', color: '#f59e0b', badgeClass: 'bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/20' },
        { id: 'transport', name: 'Transportation', icon: 'fa-car', color: '#3b82f6', badgeClass: 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20' },
        { id: 'housing', name: 'Housing & Rent', icon: 'fa-house', color: '#8b5cf6', badgeClass: 'bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20' },
        { id: 'utilities', name: 'Utilities & Bills', icon: 'fa-bolt', color: '#eab308', badgeClass: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' },
        { id: 'shopping', name: 'Shopping & Gear', icon: 'fa-bag-shopping', color: '#ec4899', badgeClass: 'bg-pink-500/10 text-pink-500 dark:text-pink-400 border-pink-500/20' },
        { id: 'entertainment', name: 'Entertainment', icon: 'fa-film', color: '#06b6d4', badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
        { id: 'health', name: 'Health & Fitness', icon: 'fa-heart-pulse', color: '#10b981', badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
        { id: 'other_exp', name: 'Other Expenses', icon: 'fa-ellipsis', color: '#64748b', badgeClass: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20' }
    ],
    INCOME: [
        { id: 'salary', name: 'Salary & Wages', icon: 'fa-briefcase', color: '#10b981', badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
        { id: 'freelance', name: 'Freelance & Side', icon: 'fa-laptop-code', color: '#0284c7', badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' },
        { id: 'investments', name: 'Investments', icon: 'fa-chart-line', color: '#8b5cf6', badgeClass: 'bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20' },
        { id: 'gifts', name: 'Gifts & Refunds', icon: 'fa-gift', color: '#f43f5e', badgeClass: 'bg-rose-500/10 text-rose-500 dark:text-rose-400 border-rose-500/20' },
        { id: 'other_inc', name: 'Other Income', icon: 'fa-wallet', color: '#64748b', badgeClass: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20' }
    ]
};

// --- CURRENCY CONFIG ---
const CURRENCY_CONFIG = {
    USD: { symbol: '$', locale: 'en-US', decimals: 2, prepend: true },
    EUR: { symbol: '€', locale: 'de-DE', decimals: 2, prepend: false },
    GBP: { symbol: '£', locale: 'en-GB', decimals: 2, prepend: true },
    JPY: { symbol: '¥', locale: 'ja-JP', decimals: 0, prepend: true },
    INR: { symbol: '₹', locale: 'en-IN', decimals: 2, prepend: true },
    VND: { symbol: '₫', locale: 'vi-VN', decimals: 0, prepend: false },
};

// Symbol → Code migration map (for legacy localStorage data)
const SYMBOL_TO_CODE = { '$': 'USD', '€': 'EUR', '£': 'GBP', '¥': 'JPY', '₹': 'INR', '₫': 'VND' };

// --- EXCHANGE RATES ---
let exchangeRates = { USD: 1 }; // Fallback: 1:1 (all amounts treated as USD)

async function fetchExchangeRates() {
    const CACHE_KEY = 'er_cache';
    const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms
    try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
            const parsed = JSON.parse(cached);
            if (Date.now() - parsed.timestamp < CACHE_TTL) {
                exchangeRates = parsed.rates;
                renderAllViews();
                return;
            }
        }
        // Fetch fresh rates
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        exchangeRates = data.rates;
        exchangeRates.USD = 1; // Ensure base is set
        const ts = Date.now();
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ rates: exchangeRates, timestamp: ts }));
        renderAllViews();
    } catch (err) {
        console.warn('Exchange rate fetch failed, using fallback rates:', err);
        exchangeRates = { USD: 1 }; // Silent fallback
    }
}

// --- APP STATE ---
let appState = {
    currency: 'USD',
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

// --- PAGE DESCRIPTIONS ---
const PAGE_META = {
    dashboard: { title: 'Dashboard Overview', subtitle: 'Summary of financial balance, activity, and key metrics' },
    transactions: { title: 'Transaction Records', subtitle: 'Manage, search, and audit your income and expenses' },
    analytics: { title: 'Analytics & Financial Insights', subtitle: 'Detailed visual breakdown of spending habits and trends' },
    budgets: { title: 'Budgets & Savings Targets', subtitle: 'Control category spending caps and track savings goals' },
    settings: { title: 'Settings & Data Management', subtitle: 'Currency configurations and JSON data backups' }
};

// Chart instances
let dashTrendChartInstance = null;
let dashCategoryChartInstance = null;
let analyticsBarChartInstance = null;
let analyticsDoughnutChartInstance = null;

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
// Init on load
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
    // Re-render views to update chart colors dynamically based on theme
    renderAllViews();
}

// Sample initial data generator
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

// Initialization
window.addEventListener('DOMContentLoaded', () => {
    loadStateFromLocalStorage();
    populateCategoryFilterOptions();
    setTxType('EXPENSE');
    document.getElementById('txDate').value = new Date().toISOString().split('T')[0];
    switchPage('dashboard');
    fetchExchangeRates(); // Fetch rates silently in background
});

// Local Storage
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

    // --- Legacy migration: symbol → code ---
    if (appState.currency && SYMBOL_TO_CODE[appState.currency]) {
        appState.currency = SYMBOL_TO_CODE[appState.currency];
    }
    if (!CURRENCY_CONFIG[appState.currency]) {
        appState.currency = 'USD';
    }

    const code = appState.currency;
    const cfg = CURRENCY_CONFIG[code];
    document.getElementById('currencySelect').value = code;
    const settingsSelect = document.getElementById('settingsCurrencySelect');
    if (settingsSelect) settingsSelect.value = code;
    document.getElementById('txCurrencySymbol').textContent = cfg.symbol;
    document.getElementById('sidebarTxCount').textContent = `${appState.transactions.length} transactions recorded`;
}

// Sidebar drawer toggling for mobile screens
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

function switchPage(pageId) {
    if (!PAGE_META[pageId]) return;
    appState.currentPage = pageId;

    // Update navbar UI links (Sidebar)
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('bg-indigo-50', 'dark:bg-indigo-600/10', 'text-indigo-600', 'dark:text-indigo-400', 'border-r-2', 'border-indigo-500');
        el.classList.add('text-slate-500', 'dark:text-slate-400');
    });

    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) {
        activeNav.classList.add('bg-indigo-50', 'dark:bg-indigo-600/10', 'text-indigo-600', 'dark:text-indigo-400', 'border-r-2', 'border-indigo-500');
        activeNav.classList.remove('text-slate-500', 'dark:text-slate-400');
    }

    // Update bottom navbar UI links (Mobile Bottom Bar)
    document.querySelectorAll('.bnav-item').forEach(el => {
        el.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
        el.classList.add('text-slate-500', 'dark:text-slate-400');
    });

    const activeBnav = document.getElementById(`bnav-${pageId}`);
    if (activeBnav) {
        activeBnav.classList.add('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
        activeBnav.classList.remove('text-slate-500', 'dark:text-slate-400');
    }

    // Update page headers
    document.getElementById('pageTitle').textContent = PAGE_META[pageId].title;
    document.getElementById('pageSubtitle').textContent = PAGE_META[pageId].subtitle;

    // Show target page section
    document.querySelectorAll('.page-view').forEach(p => p.classList.add('hidden'));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.classList.remove('hidden');

    // Close mobile sidebar if open
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    // Scroll view back to top on mobile tab changes
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger re-renders for visible views
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

function changeCurrency(newCode) {
    if (!CURRENCY_CONFIG[newCode]) return;
    appState.currency = newCode;
    const cfg = CURRENCY_CONFIG[newCode];
    // Sync both dropdowns
    document.getElementById('currencySelect').value = newCode;
    const settingsSelect = document.getElementById('settingsCurrencySelect');
    if (settingsSelect) settingsSelect.value = newCode;
    document.getElementById('txCurrencySymbol').textContent = cfg.symbol;
    saveStateToLocalStorage();
    renderAllViews();
    showToast(`Currency changed to ${newCode} (${cfg.symbol})`);
}

function renderMetrics() {
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

    document.getElementById('metricIncomeCount').textContent = `${incomeCount} items`;
    document.getElementById('metricExpenseCount').textContent = `${expenseCount} items`;

    const statusEl = document.getElementById('metricBalanceStatus');
    if (netBalance >= 0) {
        statusEl.textContent = 'Surplus';
        statusEl.className = 'font-semibold text-emerald-500 dark:text-emerald-400 truncate';
    } else {
        statusEl.textContent = 'Deficit';
        statusEl.className = 'font-semibold text-rose-500 dark:text-rose-400 truncate';
    }
}

// Dashboard Visualizer Charts
function renderDashCharts() {
    const isDark = document.documentElement.classList.contains('dark');
    const tickColor = isDark ? '#64748b' : '#94a3b8'; // slate-500 dark, slate-400 light
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const donutBorderColor = isDark ? '#1e293b' : '#ffffff';

    // Category Chart
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
        const catObj = CATEGORIES.EXPENSE.find(c => c.id === catId) || { name: catId, color: '#94a3b8' };
        labels.push(catObj.name);
        data.push(catTotals[catId]);
        colors.push(catObj.color);
    });

    if (data.length === 0) {
        noDataEl.classList.remove('hidden');
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

    // Trend Bar Chart
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
                { label: 'Income', data: incomeData, backgroundColor: '#10b981', borderRadius: 4 },
                { label: 'Expense', data: expenseData, backgroundColor: '#f43f5e', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 9 } } },
                y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 9 }, callback: (v) => formatMoney(v) } }
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

    tableBody.innerHTML = '';
    if (recent.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-400 dark:text-slate-500">No recent transactions</td></tr>`;
        return;
    }

    recent.forEach(tx => {
        const isIncome = tx.type === 'INCOME';
        const catList = isIncome ? CATEGORIES.INCOME : CATEGORIES.EXPENSE;
        const catObj = catList.find(c => c.id === tx.category) || { name: tx.category, badgeClass: 'bg-slate-100 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/20' };

        const tr = `
            <tr class="hover:bg-slate-100 dark:hover:bg-slate-800/40 transition">
                <td class="py-2.5 px-4 font-semibold text-slate-900 dark:text-white truncate max-w-[140px]">${escapeHtml(tx.title)}</td>
                <td class="py-2.5 px-4">
                    <span class="px-2 py-0.5 rounded text-[10px] font-medium border ${catObj.badgeClass}">${catObj.name}</span>
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

    // Stat 1: Daily average
    const uniqueDates = new Set(appState.transactions.map(tx => tx.date)).size || 1;
    document.getElementById('statAvgDaily').textContent = formatMoney(totalExp / uniqueDates);

    // Stat 2: Top category
    const catMap = {};
    expenses.forEach(tx => catMap[tx.category] = (catMap[tx.category] || 0) + parseFloat(tx.amount));
    let topCatId = Object.keys(catMap).reduce((a, b) => catMap[a] > catMap[b] ? a : b, null);
    const topCatObj = CATEGORIES.EXPENSE.find(c => c.id === topCatId);
    document.getElementById('statTopCategory').textContent = topCatObj ? topCatObj.name : 'N/A';

    // Stat 3: Top payment method
    const payMap = {};
    appState.transactions.forEach(tx => payMap[tx.paymentMethod] = (payMap[tx.paymentMethod] || 0) + 1);
    let topPay = Object.keys(payMap).reduce((a, b) => payMap[a] > payMap[b] ? a : b, 'None');
    document.getElementById('statTopPayment').textContent = topPay;

    // Stat 4: Surplus
    const netSurplus = totalInc - totalExp;
    document.getElementById('statNetSurplus').textContent = formatMoney(netSurplus);

    const isDark = document.documentElement.classList.contains('dark');
    const tickColor = isDark ? '#64748b' : '#94a3b8';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const donutBorderColor = isDark ? '#1e293b' : '#ffffff';

    // Analytics Bar Chart
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
                { label: 'Income', data: labels.map(d => datesMap[d].income), backgroundColor: '#10b981', borderRadius: 4 },
                { label: 'Expense', data: labels.map(d => datesMap[d].expense), backgroundColor: '#f43f5e', borderRadius: 4 }
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

    // Analytics Doughnut Chart
    const donutCtx = document.getElementById('analyticsDoughnutChart').getContext('2d');
    const catLabels = [];
    const catData = [];
    const catColors = [];

    Object.keys(catMap).forEach(catId => {
        const catObj = CATEGORIES.EXPENSE.find(c => c.id === catId) || { name: catId, color: '#64748b' };
        catLabels.push(catObj.name);
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

    const spentMap = {};
    appState.transactions.filter(tx => tx.type === 'EXPENSE').forEach(tx => {
        spentMap[tx.category] = (spentMap[tx.category] || 0) + parseFloat(tx.amount);
    });

    const activeBudgets = Object.keys(appState.budgets);

    if (activeBudgets.length === 0) {
        container.innerHTML = `<div class="col-span-1 sm:col-span-2 text-center text-slate-500 text-xs py-4">No budget limits set. Click "Manage Limits" to configure.</div>`;
        return;
    }

    activeBudgets.forEach(catId => {
        const limit = appState.budgets[catId];
        if (limit <= 0) return;

        const spent = spentMap[catId] || 0;
        const percent = Math.min(100, Math.round((spent / limit) * 100));
        const catObj = CATEGORIES.EXPENSE.find(c => c.id === catId) || { name: catId, icon: 'fa-circle-dot' };

        let barColor = 'bg-indigo-500';
        let statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">${percent}%</span>`;

        if (percent >= 100) {
            barColor = 'bg-rose-500';
            statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">Over Limit</span>`;
        } else if (percent >= 80) {
            barColor = 'bg-amber-500';
            statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">Warning</span>`;
        }

        const cardHtml = `
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5 truncate">
                        <i class="fa-solid ${catObj.icon} text-slate-400 text-xs"></i>
                        ${catObj.name}
                    </span>
                    ${statusBadge}
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                    <span>Spent: <strong class="text-slate-700 dark:text-slate-200">${formatMoney(spent)}</strong></span>
                    <span>Limit: ${formatMoney(limit)}</span>
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

    if (appState.goals.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-500 text-xs py-6">No savings targets created yet. Click "+ New Goal" to start saving!</div>`;
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
                            + Deposit
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
    filterSelect.innerHTML = '<option value="ALL">All Categories</option>';

    const allCats = [...CATEGORIES.EXPENSE, ...CATEGORIES.INCOME];
    allCats.forEach(cat => {
        filterSelect.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
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
        return;
    } else {
        noTxMessage.classList.add('hidden');
    }

    filtered.forEach(tx => {
        const allCatList = tx.type === 'INCOME' ? CATEGORIES.INCOME : CATEGORIES.EXPENSE;
        const catObj = allCatList.find(c => c.id === tx.category) || { name: tx.category, icon: 'fa-tag', badgeClass: 'bg-slate-100 dark:bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-500/20' };

        const isIncome = tx.type === 'INCOME';
        const amountFormatted = `${isIncome ? '+' : '-'}${formatMoney(tx.amount)}`;
        const amountColor = isIncome ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-100';

        const trHtml = `
            <tr class="hover:bg-slate-100 dark:hover:bg-slate-800/40 transition">
                <td class="py-3 px-4">
                    <div class="font-semibold text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-xs">${escapeHtml(tx.title)}</div>
                    ${tx.notes ? `<div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate max-w-[150px] sm:max-w-xs">${escapeHtml(tx.notes)}</div>` : ''}
                </td>
                <td class="py-3 px-4">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border ${catObj.badgeClass}">
                        <i class="fa-solid ${catObj.icon}"></i>
                        ${catObj.name}
                    </span>
                </td>
                <td class="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">${tx.date}</td>
                <td class="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">${escapeHtml(tx.paymentMethod || 'N/A')}</td>
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

    const btnExpense = document.getElementById('btnTypeExpense');
    const btnIncome = document.getElementById('btnTypeIncome');

    if (type === 'EXPENSE') {
        btnExpense.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 bg-rose-600 text-white shadow-md';
        btnIncome.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
        catSelect.innerHTML = CATEGORIES.EXPENSE.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    } else {
        btnIncome.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 bg-emerald-600 text-white shadow-md';
        btnExpense.className = 'py-2 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
        catSelect.innerHTML = CATEGORIES.INCOME.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    }
}

function openTransactionModal(editId = null) {
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('transactionForm');

    form.reset();
    document.getElementById('editTxId').value = '';
    document.getElementById('txDate').value = new Date().toISOString().split('T')[0];

    if (editId) {
        const tx = appState.transactions.find(t => t.id === editId);
        if (tx) {
            document.getElementById('editTxId').value = tx.id;
            setTxType(tx.type);
            document.getElementById('txTitle').value = tx.title;
            // Show amount in current display currency (tx.amount is stored in USD)
            const editRate = exchangeRates[appState.currency] || 1;
            const cfg = CURRENCY_CONFIG[appState.currency] || CURRENCY_CONFIG['USD'];
            const displayAmount = parseFloat(tx.amount) * editRate;
            document.getElementById('txAmount').value = parseFloat(displayAmount.toFixed(cfg.decimals));
            document.getElementById('txCategory').value = tx.category;
            document.getElementById('txDate').value = tx.date;
            document.getElementById('txPaymentMethod').value = tx.paymentMethod || 'Credit Card';
            document.getElementById('txNotes').value = tx.notes || '';

            modalTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-indigo-500 dark:text-indigo-400"></i> Edit Transaction`;
        }
    } else {
        setTxType('EXPENSE');
        modalTitle.innerHTML = `<i class="fa-solid fa-circle-plus text-indigo-500 dark:text-indigo-400"></i> Add Transaction`;
    }

    document.getElementById('transactionModal').classList.remove('hidden');
}

function closeTransactionModal() {
    document.getElementById('transactionModal').classList.add('hidden');
}

function handleTransactionSubmit(e) {
    e.preventDefault();

    const editId = document.getElementById('editTxId').value;
    const type = document.getElementById('txType').value;
    const title = document.getElementById('txTitle').value.trim();
    const amount = parseFloat(document.getElementById('txAmount').value);
    const category = document.getElementById('txCategory').value;
    const date = document.getElementById('txDate').value;
    const paymentMethod = document.getElementById('txPaymentMethod').value;
    const notes = document.getElementById('txNotes').value.trim();

    if (!title || isNaN(amount) || amount <= 0) return;

    // Always store amounts in USD (base currency). Convert from current display currency.
    const saveRate = exchangeRates[appState.currency] || 1;
    const amountUSD = amount / saveRate;

    if (editId) {
        const index = appState.transactions.findIndex(t => t.id === editId);
        if (index !== -1) {
            appState.transactions[index] = { id: editId, type, title, amount: amountUSD, category, date, paymentMethod, notes };
            showToast('Transaction updated');
        }
    } else {
        appState.transactions.push({
            id: 'tx_' + Date.now(),
            type, title, amount: amountUSD, category, date, paymentMethod, notes
        });
        showToast('New transaction added');
    }

    saveStateToLocalStorage();
    closeTransactionModal();
    renderAllViews();
}

function editTransaction(id) {
    openTransactionModal(id);
}

function confirmDeleteTransaction(id) {
    showConfirmDialog('Delete Transaction', 'Are you sure you want to delete this transaction?', () => {
        appState.transactions = appState.transactions.filter(t => t.id !== id);
        saveStateToLocalStorage();
        renderAllViews();
        showToast('Transaction deleted');
    });
}

// Budget Limit Modals
function openBudgetModal() {
    const listEl = document.getElementById('budgetFormList');
    listEl.innerHTML = '';

    CATEGORIES.EXPENSE.forEach(cat => {
        const currentLimit = appState.budgets[cat.id] || 0;
        const itemHtml = `
            <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2 truncate pr-2">
                    <i class="fa-solid ${cat.icon} text-slate-400"></i> ${cat.name}
                </span>
                <div class="relative w-28 sm:w-32 flex-shrink-0">
                    <span class="absolute left-2.5 top-1.5 text-xs text-slate-400 pointer-events-none">${(CURRENCY_CONFIG[appState.currency] || CURRENCY_CONFIG['USD']).symbol}</span>
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

// Savings Goal Modals
function openGoalModal() {
    document.getElementById('goalForm').reset();
    document.getElementById('goalModal').classList.remove('hidden');
}

function closeGoalModal() {
    document.getElementById('goalModal').classList.add('hidden');
}

function handleGoalSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('goalTitle').value.trim();
    const target = parseFloat(document.getElementById('goalTarget').value);
    const current = parseFloat(document.getElementById('goalCurrent').value) || 0;

    if (!title || isNaN(target) || target <= 0) return;

    appState.goals.push({ id: 'goal_' + Date.now(), title, target, current });
    saveStateToLocalStorage();
    closeGoalModal();
    renderGoals();
    showToast('Savings target created');
}

function openDepositModal(goalId) {
    const goal = appState.goals.find(g => g.id === goalId);
    if (!goal) return;

    document.getElementById('depositGoalId').value = goalId;
    document.getElementById('depositGoalTitle').textContent = `Target: ${goal.title} (${formatMoney(goal.current)} / ${formatMoney(goal.target)})`;
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositModal').classList.remove('hidden');
}

function closeDepositModal() {
    document.getElementById('depositModal').classList.add('hidden');
}

function submitDeposit() {
    const goalId = document.getElementById('depositGoalId').value;
    const amount = parseFloat(document.getElementById('depositAmount').value);

    if (isNaN(amount) || amount <= 0) return;

    const goal = appState.goals.find(g => g.id === goalId);
    if (goal) {
        goal.current += amount;
        saveStateToLocalStorage();
        renderGoals();
        closeDepositModal();
        showToast(`Added ${formatMoney(amount)} to ${goal.title}`);
    }
}

function confirmDeleteGoal(goalId) {
    showConfirmDialog('Delete Savings Goal', 'Are you sure you want to delete this target?', () => {
        appState.goals = appState.goals.filter(g => g.id !== goalId);
        saveStateToLocalStorage();
        renderGoals();
        showToast('Target deleted');
    });
}

function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `spendsmart_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Data backup exported successfully');
}

function triggerImport() {
    document.getElementById('importFileInput').click();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && imported.transactions) {
                appState = imported;
                saveStateToLocalStorage();
                renderAllViews();
                showToast('Data imported successfully!');
            } else {
                showToast('Invalid JSON file format');
            }
        } catch (err) {
            showToast('Failed to parse JSON file');
        }
    };
    reader.readAsText(file);
}

function resetDemoData() {
    appState.transactions = getSampleData();
    saveStateToLocalStorage();
    renderAllViews();
    showToast('Sample demo dataset reloaded');
}

function confirmClearAll() {
    showConfirmDialog('Clear All Data', 'Are you sure you want to erase all transactions and goals? This action cannot be undone.', () => {
        appState.transactions = [];
        appState.goals = [];
        saveStateToLocalStorage();
        renderAllViews();
        showToast('All app data cleared');
    });
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

    const okBtn = document.getElementById('confirmOkBtn');
    const cancelBtn = document.getElementById('confirmCancelBtn');

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