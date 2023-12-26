import { useModeStore } from "@/stores/useMode"
import { computed, reactive, onMounted,toRefs } from 'vue'

export const useMode = () => {
    const store = useModeStore()
    const { state, actions } = store

    const event = reactive({
        theme: computed(() => state.isMode ? 'dark' : 'light'),
        icon: computed(() => state.isMode ? 'ri:moon-clear-line' : 'ri:sun-line'),
    })

    // set the initial theme class on mount
    onMounted(() => {
        document.documentElement.classList.add(event.theme)
    })

    // toggle the theme class on theme change
    const toggle = () => {
        actions(!state.isMode)
        document.documentElement.classList.toggle('light')
        document.documentElement.classList.toggle('dark')
    }

    if(process.browser && !localStorage.getItem('mode')) actions(state.isMode)

    return { ...toRefs(event), toggle }
}