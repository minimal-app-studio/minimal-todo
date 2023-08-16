/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        setupFiles: ['/src/config/test.ts'],
    },
});
