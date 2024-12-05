<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        badge: [Number],
        color: [String],
        type: {
            type: [String],
            default: 'dot'
        },
        size: {
            type: [String,Number],
            default: 10
        },
        position: {
            type: [Object],
            default: { x: -5, y: 5 }
        }
    })

    const badgeClass = computed(() => ({
        'badge component': true,
        ['is-' + props.type]: true,
        ['is-' + props.color]: true
    }))

    const styleMap = computed(() => ({
        width: `${props.size}px`,
        height: `${props.size}px`,
        right: `${props.position.x}px`,
        top: `${props.position.y}px`
    }))

    // props.type = ['dot', 'number']
</script>

<template>
    <div :class="badgeClass" :style="styleMap">
        <span v-if="type === 'number'">{{ badge }}</span>
    </div>
</template>

<style lang="scss" scoped>
    .badge {
        position: relative;
        margin: 0 5px;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            border: 2px solid;
            @include cfg.background($danger);
        }

        &.is-dot {
            position: absolute;
            
        }

        &.is-number {
            position: relative;
        }

        span{
            position: absolute;
            display: block;
            margin: auto;
            width: 25px;
            text-align: center;
            padding-top: 4px;
            padding-bottom: 3px;
            font-size: cfg.rem(12);
            @include cfg.color($white);
            z-index: 1;
        }
    }
    
</style>