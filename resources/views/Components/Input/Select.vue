<script setup>
    import { computed } from 'vue'
    import { RiArrowDownSLine } from '@remixicon/vue'

    const props = defineProps({
        name: [Boolean, String],
        modelValue: [String, Number],
        default: [String],
        disabled: [Boolean],
        error: [String, Boolean]
    })

    const emits = defineEmits(['update:modelValue'])

    const inputClass = computed(() => ({
        'are-select': true,
        'is-error': props.error
    }))

    const updateValue = (event) => {
        emits('update:modelValue', event.target.value)
    }
</script>

<template>
    <label class="select-label">
        <form-name :name="name" />
        <div class="input-select">
            <icon-wrapper
                class="select-icon" 
                :icon="RiArrowDownSLine" 
                size="20" 
            />
            <select
                :value="modelValue"
                @change="updateValue"
                :disabled="disabled"
                :class="inputClass"
            >
                <option value="" selected disabled>
                    {{ default }}
                </option>
                <slot name="options" />
            </select>
            <form-validate 
                v-if="error"
                :text="error"
            />
        </div>
    </label>
</template>

<style lang="scss" scoped>
    .select-label {
        position: relative;
        width: 100%;
        font-size: rem(14);
        line-height: 1.5;
        padding: 5px;
    }

    .input-select {
        position: relative;
        width: 100%;
    }

    .select-icon {
        position: absolute;
        right: 0;
        top: 0px;
        padding: 7px 10px;
        pointer-events: none;
        @include color($link);
    }

    .are-select {
        appearance: none;
        width: 100%;
        padding: 8px 12px;
        border: 1px solid;
        border-radius: 4px;
        outline: none;
        user-select: none;
        
        @include background($white);
        @include border(#dadada);
        @include trans(border-color, box-shadow);

        &:focus, &:active{
            @include border($primary);
        }

        &.is-error{
            @include border($danger);
            
            &:focus{
                @include border($danger);
            }
        }

        &:disabled {
            @include background(#dadada);
            @include color($black);
        }
    }
</style>