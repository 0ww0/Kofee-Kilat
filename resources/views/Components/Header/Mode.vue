<script setup>
    import {useMode} from '@composable/useMode.js'
    import IconWrapper from '@component/Icon/Wrapper.vue'

    const { icon, toggle } = useMode()
</script>

<template>
    <div class="component-slot mode">
        <icon-wrapper :icon="icon" @click="toggle()" />
    </div>
</template>

<style lang="scss" scoped>
     .component-slot {
        position: relative;
        width: 100%;
        user-select: none;
        max-width: 50px;
        cursor: pointer;
        padding: 10px;
        margin: 10px;
    }
</style>