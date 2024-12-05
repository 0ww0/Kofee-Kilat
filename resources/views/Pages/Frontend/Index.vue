<script setup>
    import HeaderWrapper from '@component/Header/Wrapper.vue'
</script>

<template>
    <HeaderWrapper />
</template>

<style lang="scss" scoped>
    div {
        @include cfg.flex(row, nowrap);
    }
</style>