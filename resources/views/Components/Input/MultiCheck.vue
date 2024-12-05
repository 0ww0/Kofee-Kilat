<script setup>
    import { computed } from 'vue'
    import { RiCheckboxLine, RiCheckboxBlankLine } from '@remixicon/vue' 

    const props = defineProps({
        label: [String],
        name: [String],
        value: [String, Number],
        modelValue: [Array],
        disabled: [Boolean],
        error: [Boolean],
    })

    const emits = defineEmits(['update:modelValue'])

    const inputClass = computed(() => ({
        'input-check': true,
        'is-error': props.error
    }));

    const isSelected = (selectedValue) => {
        if (Array.isArray(props.modelValue)) {
            return props.modelValue.includes(selectedValue);
        }
        return false;
    };

    const getIcon = (value) => {
        return isSelected(value) ? RiCheckboxLine : RiCheckboxBlankLine;
    };

    const updateValue = (value) => {
        let updatedValue = [...props.modelValue];
        if (isSelected(value)) {
            updatedValue = updatedValue.filter(item => item !== value);
        } else {
            updatedValue.push(value);
        }
        emits('update:modelValue', updatedValue);
    };

</script>

<template>
    <label class="multi-check-label">
        <input 
            type="checkbox"
            :name="name"
            :value="value"
            :checked="isSelected(value)"
            @change="updateValue(value)"
            :class="inputClass"
        />
        <icon-wrapper :icon="getIcon(value)"/>
        <span>{{ label }}</span>
    </label>
</template>

<style lang="scss" scoped>
    .multi-check-label {
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