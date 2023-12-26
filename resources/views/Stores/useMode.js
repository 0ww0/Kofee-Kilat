import { reactive } from 'vue'

export const useModeStore = defineStore('🌓 mode', () => {
  	const state = reactive({
    	isMode: process.browser ? !!localStorage.getItem('mode') : false
  	})

  	const actions = (payload) => {
    	state.isMode = payload
        if(process.browser) localStorage.setItem('mode', String(state.isMode))
  	}

  	return { state, actions }
})