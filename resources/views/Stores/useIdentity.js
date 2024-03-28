import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useIdentityStore = defineStore('identity', () => {
    const state = reactive({
        name: 'Kofee Kilat',
        description: '',
        logo: {
            dark: {
                full: 'image/logo/full-dark.png',
                stack: 'image/logo/stack-dark.png',
            },
            light: {
                full: 'image/logo/full-light.png',
                stack: 'image/logo/stack-light.png',
            }
        },
        menu: [],
        sitemap: []
     })

    const getLogo = (theme, type) => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const logoType = type === 'full' ? 'full' : 'stack';
        return (theme === 'dark' || (theme === 'system' && prefersDarkScheme)) ? state.logo.light[logoType] : state.logo.dark[logoType];
    }

    return { getLogo }
})