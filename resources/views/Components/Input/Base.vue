<script setup>
    import { computed, reactive } from 'vue'

    const props = defineProps({
        tag: {
            type: [String],
            default: 'input'
        },
        type: {
            type: [String],
            default: 'text'
        },
        visible: {
            type: [Boolean],
            default: false
        },
        name: [Boolean, String],
        placeholder: [String],
        readonly: [Boolean],
        disabled: [Boolean],
        modelValue: [String],
        error: [String, Boolean]
    })

    const emits = defineEmits(['update:modelValue', 'toggle:password'])

    const state = reactive({
        visible: props.visible
    })

    const inputClass = computed(() => ({
        'input-base': true,
        ['input-' + props.type]: true,
        'is-error': props.error
    }))

    const updateValue = (event) => {
        emits('update:modelValue', event.target.value)
    }

    const changeType = () => {
        return state.visible ? (props.type === 'password' ? 'text' : props.type) : 'password'
    }

    const checkType = () => {
        return props.type === 'password' ? changeType() : props.type
    }
    
    const resolveHolder = () => {
        return props.placeholder ? props.placeholder : props.name;
    }

    const togglePassword = () => {
        return state.visible = !state.visible
    }

    // input-base type="text"
    // input-base type="password"
    // input-base tag="textarea" type="area"
</script>

<template>
    <label class="base-label">
       <form-name :name="name"/> 
       <div class="input-type">
            <component
                :is="tag.toLowerCase()" 
                :type="checkType()"
                :placeholder="resolveHolder()"
                :readonly="readonly"
                :disabled="disabled"
                :value="modelValue" 
                @input="updateValue"
                :class="inputClass"
            />
            <form-password
                v-if="type === 'password'" 
                :visible="state.visible"
                @click="togglePassword" 
            />
            <form-validate 
                v-if="error"
                :text="error"
            />
       </div>
    </label>
</template>

<style lang="scss" scoped>
    .base-label {
        position: relative;
        width: 100%;
        font-size: rem(14);
        line-height: 1.5;
        padding: 5px;
    }

    .input-type {
        position: relative;
        width: 100%;
    }

    .input-base {
        position: relative;
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

        &:disabled {
            @include background(#dadada, 0.6);
        }

        &.is-error{
            @include border($danger);
            
            &:focus{
                @include border($danger);
            }
        }
    }

    .input-area {
        height: 150px;
        resize: none;
    }
</style>