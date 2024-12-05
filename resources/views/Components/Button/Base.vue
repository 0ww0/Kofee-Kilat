<script setup>
    import { computed, reactive } from 'vue'
    import IconWrapper from '@component/Icon/Wrapper.vue'
    import { RiLoader4Line, RiRemixiconLine } from '@remixicon/vue'

    const props = defineProps({
        tag: {
            type: [String],
            default: 'button'
        },
        icon: {
            type: [Boolean, String],
            default: false,
        },
        text: {
            type: [String],
            default: 'Button'
        },
        color: {
            type: [String],
            default: 'default'
        },
        link: [String],
        loading: [Boolean],
        disabled: [Boolean],
        reverse: [Boolean],
    })

    const buttonClass = computed(() => ({
        ['is-' + props.color]: true,
        'button': props.tag === 'button',
        'link': props.tag === 'a',
        'is-loading': props.loading,
        'row-reverse': props.reverse,
    }))

    const icons = reactive({
        text: computed(() =>  props.loading ? 'Loading' : props.text),
        className: computed(() => ({
            'button-icon': true,
            'animate': props.loading,
        })),
        show: computed(() => props.loading || props.icon),
        iconRemix: computed(() => props.loading ? RiLoader4Line : (props.icon ? props.icon : RiRemixiconLine ))
    })
</script>

<template>
    <component 
        :is="tag.toLowerCase()"
        :href="link"
        :class="buttonClass"
        :disabled="disabled"
    >
        <icon-wrapper
            v-if="icons.show"
            :class="icons.className"
            :icon="icons.iconRemix"
            :size="16"
        />
        <p>{{ icons.text }}</p>
    </component>
</template>

<style lang="scss" scoped>
    .button {
        position: relative;
        @include cfg.flex(row, nowrap);
        align-items: center;
        justify-content: center;
        border: 1px solid;
        padding: calc(cfg.rem(8) - 1px) cfg.rem(16);
        border-radius: 2px;
        font-size: cfg.rem(14);
        cursor: pointer;
        text-align: center;
        white-space: nowrap;
        user-select: none;
        text-transform: uppercase;
        font-weight: 400;
        @include cfg.background(white);
        @include cfg.trans(background-color, color, border-color);
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

        &.row-reverse {
            @include cfg.flex(row-reverse, nowrap);
        }

        &:active, &:hover {
            border: 1px solid;
        }

        &:active {
            transform: scale(0.98);
        }

        &:disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }

    .button-icon {
        height: 100%;
        padding: 0 4px;
    }

    .animate {
        :deep() svg.icon {
            animation: spin 1s linear infinite;
        }
    }

    .is-loading {
        position: relative;
        cursor: none;
        pointer-events: none;
        user-select: none;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    .is-default {
        @include cfg.color(#3e3e3e);
        @include cfg.border(#dadada);

        &:active, &:hover {
            @include cfg.border(#2a2a2a);
        }
    }

    .is-primary {
        @include cfg.background(cfg.$primary);
        @include cfg.border(cfg.$primary);

        &:active, &:hover {
            @include cfg.border(cfg.$black);
        }
    }
</style>