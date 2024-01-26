<script setup>
    import { computed, reactive } from 'vue'
    import { RiCheckboxCircleLine, RiCheckboxBlankCircleLine } from '@remixicon/vue'

    const props = defineProps({
        label: [String],
        name: [String],
        value: [String, Number],
        modelValue: [String, Number],
        disabled: [Boolean],
        error: [Boolean],        
    })

    const emits = defineEmits(['update:modelValue'])

    const state = reactive({
        icons: computed(() => { return props.modelValue == props.value ? RiCheckboxCircleLine : RiCheckboxBlankCircleLine })
    })

    const inputClass = computed(() => ({
        'input-radio': true,
        'is-error': props.error
    }))

    const updateValue = (event) => {
        emits('update:modelValue', event.target.value)
    }
</script>

<template>
    <label class="radio-label">
        <input
            type="radio"
            :name="name"
            :value="value"
            :checked="modelValue == value"
            @change="updateValue"
            :class="inputClass"
        />
        <icon-wrapper :icon="state.icons" />
        <span>{{ label }}</span>
    </label>
</template>

<style lang="scss" scoped>
    .radio-label {
        position: relative;
        width: 100%;
        @include flex(row, nowrap);
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        .icon-wrapper {
            padding: 5px;
        }

        span {
            text-transform: capitalize;
        }
    }

    .input-radio {
        display: none;
    }
</style>