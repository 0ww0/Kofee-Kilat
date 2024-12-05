<script setup>
    import { computed, reactive } from 'vue'
    import { RiEye2Line, RiEyeCloseLine } from '@remixicon/vue'
    
    const props = defineProps({
        visible: [Boolean],
    })

    const state = reactive({
        change: computed(() => props.visible ? RiEye2Line : RiEyeCloseLine)
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
        @include cfg.color($link);
    }
</style>