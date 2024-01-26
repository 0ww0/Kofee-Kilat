<script setup>
    const props = defineProps({
        icon: [Object],
        color: {
            type: [String],
            default: 'black',
        },
        size: {
            type: [String, Number],
            default: '24'
        },
    })
</script>

<template>
    <div class="icon-wrapper">
        <component :is="icon" :color="color" :size="size" />
    </div>
</template>

<style lang="scss" scoped>
    .icon-wrapper {
        @include flex(row, nowrap);
    }
</style>