<script setup>
    import { computed, reactive } from 'vue'
    import { RiToggleFill, RiToggleLine } from '@remixicon/vue'
    
    const props = defineProps({
        label: [String],
        name: [String],
        value: [Number, Boolean],
        modelValue: [Number, Boolean],
        disabled: [Boolean],
        error: [Boolean],
        size: {
            type: [Number],
            default: 24
        },
        color: {
            type: [String],
            default: 'black'
        }
    })

    const emits = defineEmits(['update:modelValue']);

    const state = reactive({
        icons: computed(() => { return props.modelValue ? RiToggleFill : RiToggleLine })
    })
    
    const inputClass = computed(() => ({
        'input-toggle': true,
        'is-error': props.error
    }))

    const toggleValue = () => {
        emits('update:modelValue', !props.modelValue);
    };
</script>

<template>
    <label class="toggle-label">
        <input 
            type="checkbox"
            :name="name"
            :checked="modelValue"
            @change="toggleValue"
            :class="inputClass"
        />
        <icon-wrapper :icon="state.icons" :size="size" :color="color"/>
        <span>{{ label }}</span>
    </label>
</template>

<style lang="scss" scoped>
    .toggle-label {
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

    .input-toggle {
        display: none;
    }
</style>