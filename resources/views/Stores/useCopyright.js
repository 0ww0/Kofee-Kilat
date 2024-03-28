import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCopyrightStore = defineStore('©️ copyright', () => {
    const state = reactive({
        startYear: 2023,
        currentYear: computed(() => new Date().getFullYear()),
    })
   
    const copyright = computed(() => {
        return state.currentYear > state.startYear
            ? state.startYear + " - " + state.currentYear
            : state.currentYear;
    })

    return { copyright }
})