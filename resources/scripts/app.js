import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import '#global'

const pinia = createPinia()

createInertiaApp({
    progress: {
        delay: 250,
        color: '#3488ce',
        includeCSS: true,
        showSpinner: true,
    },
    title: title => `${title} - Kofe Kilat`,
    resolve: name => {
        const pages = import.meta.glob('/resources/views/Pages/**/*.vue', { eager: true })
        return pages[`/resources/views/Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .mount(el)
    },
})