import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useModeStore = defineStore('🌓 mode', () => {
    const state = reactive({
    	mode: window.localStorage.getItem('mode') || 'system'
  	})

    const actions = (payload) => {
		state.mode = payload
		window.localStorage.setItem('mode', state.mode)
    }

    return { state, actions }
})

export default useModeStore;