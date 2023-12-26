import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/scripts/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "#config";`
            },
        },
    },
    resolve: {
        alias: {
            '@component': path.resolve(__dirname, 'resources/views/components'),
            '@layout': path.resolve(__dirname, 'resources/views/layouts'),
            '@page': path.resolve(__dirname, 'resources/views/pages'),
            '@plugin': path.resolve(__dirname, 'resources/views/plugins'),
            '@store': path.resolve(__dirname, 'resources/views/stores'),
            '#global': path.resolve(__dirname, 'resources/styles/global.scss'),
            '#config': path.resolve(__dirname, 'resources/styles/config.scss'),
        },
    },
});
