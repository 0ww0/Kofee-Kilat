<script setup>
    import IconWrapper from '@component/Icon/Wrapper.vue'

    const props = defineProps({
        icon: [Object]
    })

    const emits = defineEmits(['toggle:mode'])
</script>

<template>
    <div class="component header-mode">
        <icon-wrapper :icon="icon" @click="emits('toggle:mode')" color="var(--text-color)"/>
    </div>
</template>

<style lang="scss" scoped>
     .header-mode {
        position: relative;
        width: 100%;
        user-select: none;
        max-width: 50px;
        cursor: pointer;
        padding: 10px;
        margin: 10px;
    }
</style>