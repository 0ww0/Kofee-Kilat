<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        column: [Boolean],
        stack: [Boolean],
        center: [Boolean],
        between: [Boolean],
        end: [Boolean],
        full: [Boolean],
        half: [Boolean]
    })

    const buttonClass = computed(() => ({
        'button-group': true,
        'is-column': props.column,
        'is-stack': props.stack,
        'justify-center': props.center,
        'justify-between': props.between,
        'justify-end': props.end,
        'full-width': props.full,
        'half-width': props.half
    }))
</script>

<template>
    <div :class="buttonClass">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .button-group {
        width: 100%;
        @include flex(row);

        :deep(.button) {
            &:not(:last-child) {
                margin-bottom: 0;
                margin-right: 10px;
            }
        }

        &.is-column {
            @include flex(column);

            :deep(.button) {
                &:not(:last-child) {
                    margin-bottom: 10px;
                    margin-right: 0;
                }
            }
        }

        &.is-stack {
            :deep(.button) {
                &:not(:last-child) {
                    margin-right: 0;
                }
            }

            &.is-column {
                :deep(.button) {
                    &:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }

        &.justify-center {
            justify-content: center;
        }

        &.justify-between {
            justify-content: space-between;
        }

        &.justify-end {
            justify-content: flex-end;
        }

        &.full-width {
            width: 100%;
        }

        &.half-width {
            width: 50%
        }
    }
</style>