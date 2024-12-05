<script setup>
    import { computed, reactive } from 'vue'
    import { RiCheckboxLine, RiCheckboxBlankLine } from '@remixicon/vue'

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
        isCheck: computed(() => props.modelValue === props.value),
        icons: computed(() =>  state.isCheck ? RiCheckboxLine : RiCheckboxBlankLine)
    })

    const inputClass = computed(() => ({
        'input-check': true,
        'is-error': props.error
    }))

    const updateValue = (event) => {
        emits('update:modelValue',  event.target.checked ? props.value : null)
    }
</script>

<template>
    <label class="check-label">
        <input 
            type="checkbox"
            :name="name"
            :value="value"
            :checked="state.isCheck"
            @change="updateValue"
            :class="inputClass"
        />
        <icon-wrapper :icon="state.icons" />
        <span>{{ label }}</span>
    </label>
</template>

<style lang="scss" scoped>
    .check-label {
        position: relative;
        width: 100%;
        @include cfg.flex(row, nowrap);
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

    .input-check {
        display: none;
    }
</style>