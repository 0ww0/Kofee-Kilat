<script setup>
    import { computed, inject } from 'vue'

    const props = defineProps({
        label: {
            type: [String],
            required: true,
            default: "",
        },
        disabled: {
            type: [Boolean],
            default: false
        },
    })

    const data = inject('tabsData')
    const select = computed(() => data.active === data.slot.findIndex(tab => tab.props.label === props.label))

    const paneClass = computed(() => ({
        'tab': true,
        'is-disabled': props.disabled,
    }))
</script>

<template>
    <div :class="paneClass" v-show="select">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.tab {
    padding: 15px;
    border: 1px solid;
    @include cfg.border($dark);
}
</style>