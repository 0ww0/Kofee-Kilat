<script setup>
    import { Icon } from '@iconify/vue'
    
    const props = defineProps({
        icon: [String],
        fill: [String],
        size: {
            type: [String,Number],
            default: 16
        },
        rotate: [String,Number],
    })
</script>

<template>
    <div class="icon-wrapper">
        <Icon :name="icon" :color="fill" :rotate="rotate" :width="size" :height="size" />
    </div>
</template>

<style lang="scss" scoped>
    .icon-wrapper {
        @include flex(row, nowrap);
    }
</style>