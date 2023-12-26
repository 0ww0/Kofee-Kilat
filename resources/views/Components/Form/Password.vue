<script setup>
    import { computed, reactive } from 'vue'
    
    const props = defineProps({
        visible: [Boolean],
    })

    const state = reactive({
        change: computed(() => props.visible ? 'ri:eye-2-line' : 'ri:eye-close-line')
    })
</script>

<template>
    <icon-wrapper
    class="password-icon"
    :icon="state.change" 
    size="16"/>
</template>

<style lang="scss" scoped>
    .password-icon {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px;
        border: 1px solid transparent;
        @include color($link);
    }
</style>