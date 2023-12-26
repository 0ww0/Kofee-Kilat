<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        stretch: [Boolean],
        center: [Boolean],
        reverse: [Boolean],
        justifyStart: [Boolean],
        justifyEnd: [Boolean],
    })

    const cardClass = computed(() => ({
        'card component': true,
        'is-stretch': props.stretch,
        'is-center': props.center,
        'is-row-reverse': props.reverse,
        'is-justify-start': props.justifyStart,
        'is-justify-end': props.justifyEnd,
    }))
</script>

<template>
    <div :class="cardClass">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .card {
        position: relative;
        @include flex(row, wrap);
        align-content: flex-start;
        margin-left: rem(-12);
        margin-right: rem(-12);

        &.is-stretch {
            align-items: stretch;
        }

        &.is-center {
            align-items: center;
        }

        &.is-row-reverse {
            @include flex(row-reverse, nowrap);
        }

        &.is-justify-start {
            justify-content: flex-start;
        }

        &.is-justify-end {
            justify-content: flex-end;
        }
    }
</style>