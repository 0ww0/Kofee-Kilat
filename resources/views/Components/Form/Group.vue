<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        header: [Boolean],
        column: [Boolean],
        phone: [Boolean],
        half: [Boolean]
    })

    const className = computed(() => ({
        'form-header': props.header,
        'form-group': !props.header,
        'is-column': props.column,
        'is-phone': props.phone,
        'is-half': props.half
    }))
</script>

<template>
    <div :class="className">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .form {
        &-header {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-flow: column wrap;
            align-items: flex-start;
        }

        &-group {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            width: calc((100% / 1));
            
            &.is-column {
                flex-direction: column;
                align-items: flex-start;
            }

            &.is-half {
                width: 50%;
            }
        }
    }

    .is-phone {
        width: 100%;
        align-items: flex-start;

        .form-label:first-child {
            width: 100%;
            max-width: 50px;
            text-align: center;
        }
    }

</style>