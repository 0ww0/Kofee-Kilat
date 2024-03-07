import { useModeStore } from "@store/useMode"
import { computed, onMounted } from 'vue'
import { RiMoonClearLine, RiSunLine, RiComputerLine } from '@remixicon/vue'

export const useMode = () => {
    const { state, actions } = useModeStore()

    const themes = {
        system: { name: 'system', icon: RiComputerLine },
        dark: { name: 'dark', icon: RiMoonClearLine },
        light: { name: 'light', icon: RiSunLine }
    }
    
    const theme = computed(() => themes[state.mode])

    onMounted(() => {
        updateThemeClass(theme.value.name)
    })

    // toggle the theme class on theme change
    const toggle = () => {
        const nextTheme = { dark: 'light', light: 'system', system: 'dark' }[state.mode]
        actions(nextTheme);
        updateThemeClass(nextTheme);
    };

    const updateThemeClass = (themeName) => {
        document.documentElement.classList.remove('theme-dark', 'theme-light', 'theme-system');
        document.documentElement.classList.add('theme-' + themeName);
    };

    if (!window.localStorage.getItem('mode')) actions(state.mode)

    return { theme, toggle }
}