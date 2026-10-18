// tests/loader.js
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT_PATH = path.join(__dirname, '..', '..', 'script.js');
const scriptCode = fs.readFileSync(SCRIPT_PATH, 'utf8');

const EXPORT_NAMES = [
    'translations', 'CATEGORIES', 'PAYMENT_METHODS_TRANSLATION',
    'CURRENCY_CONFIG', 'exchangeRates', 'appState',
    'fetchExchangeRates', 'changeLanguage', 'updateSidebarTxCount',
    'getCategoryName', 'getPaymentMethodName', 'initTheme', 'toggleTheme',
    'getSampleData', 'saveStateToLocalStorage', 'loadStateFromLocalStorage',
    'toggleSidebar', 'switchPage', 'renderAllViews', 'formatMoney',
    'changeCurrency', 'renderMetrics', 'renderDashCharts', 'setHeatmapMode',
    'updateHeatmapToggleUI', 'populateHeatmapMonthOptions', 'renderHeatmap',
    'selectHeatmapDay', 'renderHeatmapGridSelection', 'closeHeatmapDayDetails',
    'renderDashRecentTable', 'populateCategoryFilterOptions',
    'populateTypeFilterOptions', 'applyFilters', 'resetFilters',
    'renderTransactions', 'renderAnalyticsView', 'renderBudgets',
    'openBudgetModal', 'closeBudgetModal', 'updateBudgetLimit',
    'renderGoals', 'openGoalModal', 'closeGoalModal', 'handleGoalSubmit',
    'deleteGoal', 'openDepositModal', 'closeDepositModal', 'submitDeposit',
    'renderSubscriptions', 'openSubscriptionModal',
    'closeSubscriptionModal', 'handleSubscriptionSubmit',
    'deleteSubscription', 'openTransactionModal', 'closeTransactionModal',
    'setTxType', 'populateModalCategorySelect', 'handleTransactionSubmit',
    'editTransaction', 'confirmDeleteTransaction', 'exportData',
    'triggerImport', 'importData', 'resetDemoData', 'confirmClearAll',
    'showToast', 'handleMonthFilterChange', 'updateMonthDisplayText',
    'processAutoBilling', 'pendingDeleteId',
];

export function loadScript() {
    const win = window;

    // Wrap to capture bindings
    const wrapper = `
        ${scriptCode}
        ;({
            ${EXPORT_NAMES.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : undefined`).join(',\n')}
        });
    `;

    const sandbox = {
        window: win,
        document: win.document,
        navigator: win.navigator,
        localStorage: win.localStorage,
        location: win.location,
        console,
        setTimeout: win.setTimeout.bind(win),
        clearTimeout: win.clearTimeout.bind(win),
        setInterval: win.setInterval.bind(win),
        clearInterval: win.clearInterval.bind(win),
        fetch: globalThis.fetch,
        Intl,
        Date,
        Math,
        JSON,
        parseFloat,
        parseInt,
        isNaN,
        Object,
        Array,
        Number,
        String,
        Boolean,
        RegExp,
        Error,
        Chart: globalThis.Chart,
        URL: globalThis.URL,
        Blob: globalThis.Blob || class {},
        FileReader: globalThis.FileReader || class {},
        matchMedia: win.matchMedia,
        addEventListener: win.addEventListener.bind(win),
        removeEventListener: win.removeEventListener.bind(win),
        scrollTo: win.scrollTo,
    };
    sandbox.globalThis = sandbox;
    sandbox.self = sandbox;

    const context = vm.createContext(sandbox);

    let exposed = {};
    try {
        exposed = vm.runInContext(wrapper, context, { filename: 'script.js' });
    } catch (err) {
        console.error('[loader] Failed to execute script.js:', err);
        throw err;
    }

    for (const name of EXPORT_NAMES) {
        if (exposed[name] !== undefined) {
            win[name] = exposed[name];
            globalThis[name] = exposed[name];
        }
    }

    return win;
}