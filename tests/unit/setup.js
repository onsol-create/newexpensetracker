// tests/setup.js
import { vi } from 'vitest';

// ============================================================
// 1. Mock Chart.js
// ============================================================
class ChartMock {
    constructor() {
        this.destroy = vi.fn();
        this.update = vi.fn();
        this.data = {};
        this.options = {};
    }
}
globalThis.Chart = ChartMock;
window.Chart = ChartMock;

// ============================================================
// 2. Mock fetch
// ============================================================
globalThis.fetch = vi.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                rates: { EUR: 0.92, GBP: 0.79, JPY: 150, INR: 83, VND: 25000 },
            }),
    })
);
window.fetch = globalThis.fetch;

// ============================================================
// 3. Mock URL.createObjectURL
// ============================================================
globalThis.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
globalThis.URL.revokeObjectURL = vi.fn();

// ============================================================
// 4. Mock scrollTo
// ============================================================
window.scrollTo = vi.fn();

// ============================================================
// 5. Mock canvas
// ============================================================
HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    canvas: {},
    fillRect: vi.fn(),
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    stroke: vi.fn(),
}));

// ============================================================
// 6. Mock matchMedia
// ============================================================
if (!window.matchMedia) {
    window.matchMedia = vi.fn((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(() => false),
    }));
}

// ============================================================
// 7. Mock FileReader
// ============================================================
if (!globalThis.FileReader) {
    globalThis.FileReader = class FileReaderMock {
        constructor() { this.onload = null; this.onerror = null; this.result = null; }
        readAsText() { if (this.onload) this.onload({ target: { result: this.result } }); }
    };
    window.FileReader = globalThis.FileReader;
}

// ============================================================
// 8. Mock localStorage
// ============================================================
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: vi.fn((key) => (key in store ? store[key] : null)),
        setItem: vi.fn((key, value) => { store[key] = String(value); }),
        removeItem: vi.fn((key) => { delete store[key]; }),
        clear: vi.fn(() => { store = {}; }),
        get _store() { return store; },
    };
})();
Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock, writable: true, configurable: true });
Object.defineProperty(window, 'localStorage', { value: localStorageMock, writable: true, configurable: true });

// ============================================================
// 9. buildMockDOM
// ============================================================
export function buildMockDOM() {
    document.head.innerHTML = '';
    document.body.innerHTML = `
        <input id="searchInput" />
        <input id="monthFilter" />
        <input id="monthFilterDisplay" />
        <span id="txCurrencySymbol"></span>
        <input id="txTitle" />
        <input id="txAmount" />
        <input id="txDate" />
        <input id="txNotes" />
        <input id="editTxId" />
        <input id="txType" value="EXPENSE" />
        <select id="typeFilter"></select>
        <select id="categoryFilter"></select>

        <select id="currencySelect">
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="JPY">JPY (¥)</option>
            <option value="INR">INR (₹)</option>
            <option value="VND">VND (₫)</option>
        </select>
        <select id="settingCurrencySelect">
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="JPY">JPY (¥)</option>
            <option value="INR">INR (₹)</option>
            <option value="VND">VND (₫)</option>
        </select>
        <select id="langSelect">
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
        </select>

        <select id="txCategory"></select>
        <select id="txPaymentMethod">
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Digital Wallet">Digital Wallet</option>
        </select>
        <select id="heatmapMonthSelect"></select>
        <select id="subCategory"></select>
        <select id="subCycle">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
        </select>
        <select id="subPaymentMethod">
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Digital Wallet">Digital Wallet</option>
        </select>
        <div id="sidebarTxCount"></div>
        <div id="pageTitle"></div>
        <div id="pageSubtitle"></div>
        <div id="sidebar"></div>
        <div id="sidebarOverlay"></div>
        <div id="toastContainer"></div>
        <div id="transactionTableBody"></div>
        <div id="dashRecentTableBody"></div>
        <div id="noTransactionsMessage" class="hidden"></div>
        <div id="budgetsList"></div>
        <div id="goalsList"></div>
        <div id="budgetFormList"></div>
        <div id="subscriptionsGrid"></div>
        <div id="subTotalMonthly"></div>
        <div id="subTotalYearly"></div>
        <div id="subActiveCount"></div>
        <div id="heatmapGrid"></div>
        <div id="heatmapMonthSummary"></div>
        <div id="heatmapDayDetails" class="hidden"></div>
        <div id="heatmapSelectedDateTitle"></div>
        <div id="heatmapSelectedDateList"></div>
        <div id="dashNoChartData"><p></p></div>
        <div id="endOfMonthForecast"></div>
        <div id="metricTotalBalance"></div>
        <div id="metricTotalIncome"></div>
        <div id="metricTotalExpense"></div>
        <div id="metricSavingsRate"></div>
        <div id="metricIncomeCount"></div>
        <div id="metricExpenseCount"></div>
        <div id="metricBalanceStatus"></div>
        <div id="statAvgDaily"></div>
        <div id="statNetSurplus"></div>
        <div id="statTopCategory"></div>
        <div id="statTopPayment"></div>
        <div id="modalTitle"><span></span></div>
        <div id="subModalTitle"></div>
        <div id="depositGoalTitle"></div>
        <input id="depositGoalId" />
        <input id="depositAmount" />
        <input id="goalTitle" />
        <input id="goalTarget" />
        <input id="goalCurrent" />
        <input id="subName" />
        <input id="subAmount" />
        <input id="subNextBilling" />
        <input id="editSubId" />
        <input id="importFileInput" type="file" />
        <form id="transactionForm"></form>
        <form id="goalForm"></form>
        <form id="subscriptionForm"></form>
        <div id="transactionModal" class="hidden"></div>
        <div id="budgetModal" class="hidden"></div>
        <div id="goalModal" class="hidden"></div>
        <div id="depositModal" class="hidden"></div>
        <div id="subscriptionModal" class="hidden"></div>
        <div id="confirmModal" class="hidden"></div>
        <button id="confirmOkBtn"></button>
        <button id="confirmCancelBtn"></button>
        <button id="btnTypeExpense"></button>
        <button id="btnTypeIncome"></button>
        <button id="heatmapBtn-expense" class="heatmap-mode-btn"></button>
        <button id="heatmapBtn-income" class="heatmap-mode-btn"></button>
        <button id="heatmapBtn-both" class="heatmap-mode-btn"></button>
        <canvas id="dashTrendChart"></canvas>
        <canvas id="dashCategoryChart"></canvas>
        <canvas id="analyticsBarChart"></canvas>
        <canvas id="analyticsDoughnutChart"></canvas>
        <canvas id="analyticsCumulativeChart"></canvas>
        <section id="page-dashboard" class="page-view"></section>
        <section id="page-transactions" class="page-view hidden"></section>
        <section id="page-analytics" class="page-view hidden"></section>
        <section id="page-budgets" class="page-view hidden"></section>
        <section id="page-subscriptions" class="page-view hidden"></section>
        <section id="page-settings" class="page-view hidden"></section>
    `;
}