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
            '@component': path.resolve(__dirname, 'resources/views/Components'),
            '@layout': path.resolve(__dirname, 'resources/views/Layouts'),
            '@page': path.resolve(__dirname, 'resources/views/Pages'),
            '@composable': path.resolve(__dirname, 'resources/views/Composables'),
            '@store': path.resolve(__dirname, 'resources/views/Stores'),
            '#global': path.resolve(__dirname, 'resources/styles/global.scss'),
            '#config': path.resolve(__dirname, 'resources/styles/config.scss'),
        },
    },
});
