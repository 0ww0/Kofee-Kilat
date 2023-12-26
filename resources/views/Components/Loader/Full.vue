<script setup>
    import { computed } from 'vue'

    const loaderClass = computed(() => ({
        'loader-fullpage component': true,
    }))
</script>

<template>
    <transition name="loader">
        <div :class="loaderClass">
            <LoaderBase :size="32"/>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .loader-fullpage {
        position: fixed;
        @include flex(row, nowrap);
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        @include background(black, 0.5);
        @include color(white);
        z-index: 2;
    }
</style>