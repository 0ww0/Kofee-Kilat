<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        card: {
            type: [String],
            default: 'full'
        },
    })

    const cardClass = computed(() => ({
        'card-wrapper component': true,
        ['is-' + props.card]: true
    }))
</script>

<template>
    <div  :class="cardClass">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
     .card-wrapper {
        display: block;
        flex-basis: 0;
        flex-shrink: 1;
        flex-grow: 1;
        padding: rem(12);
    }

    .is {
        &-full {
            flex: none;
            width: calc((100% * (1)));
        }
        &-third-quarter {
            flex: none;
            width: calc((100% * (3/4)));
        }
        &-two-third {
            flex: none;
            width: calc((100% * (2/3)));
        }
        &-half {
            flex: none;
            width: calc((100% * (1/2)));
        }
        &-one-third {
            flex: none;
            width: calc((100% * (1/3)));
        }
        &-one-quarter {
            flex: none;
            width: calc((100% * (1/4)));
        }
    }
</style>