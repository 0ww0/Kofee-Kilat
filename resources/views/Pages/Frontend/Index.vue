<script setup>
    import HeaderMode from '@component/Header/Mode.vue'
</script>

<template>
    <div>
        <HeaderMode />
        lorem ipsum
    </div>
</template>

<style lang="scss" scoped>
    div {
        @include flex(row, nowrap);
    }
</style>