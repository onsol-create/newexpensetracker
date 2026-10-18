// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./tests/unit/setup.js'],
        include: ['tests/unit/**/*.test.js'],           // ← chỉ unit, không đệ quy vào e2e
        exclude: ['tests/e2e/**', 'node_modules/**'],   // ← an toàn kép
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            include: ['script.js'],
        },
    },
});