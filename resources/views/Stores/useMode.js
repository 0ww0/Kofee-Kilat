import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useModeStore = defineStore('🌓 mode', () => {
  	const state = reactive({
    	isMode: window.localStorage.getItem('mode') === 'true' ? true : false || false
  	})

  	const actions = (payload) => {
    	state.isMode = payload
        window.localStorage.setItem('mode', state.isMode)
  	}

  	return { state, actions }
})

export default useModeStore;