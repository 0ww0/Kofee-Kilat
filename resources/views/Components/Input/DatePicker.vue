<script setup>
    import VueDatePicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'

    const props = defineProps({
        name: [String, Boolean],
        error: [String, Boolean],
        type: [String],
        modelValue: [Date, String],
        placeholder: {
            type:[String],
            default: 'Date Picker'
        },
        position: {
            type: [String],
            default: 'left'
        },
        format: {
            type: [String],
            default: 'dd/MM/yyyy'
        },
        state: {
            type: [Boolean],
            default: null
        }
    })

    const emits = defineEmits(['update:modelValue'])

    const updateValue = (handleDate) => {
        emits('update:modelValue', handleDate)
    }

    // https://vue3datepicker.com/
</script>

<template>
    <InputSlot 
        :name="name"
        :type="type"
        :error="error"
    >
        <vue-date-picker
            :modelValue="modelValue"
            @update:modelValue="updateValue"
            input-class-name="dp-input-base"
            :placeholder="placeholder"
            :position="position"
            :format="format"
            :enable-time-picker="false"
            :text-input="true"
            :auto-apply="true"
            :state="state"
        >
            <template #input-icon>
                <div class="dp__icon dp__input_icon dp__input_icons">
                    <icon-wrapper icon="ri:calendar-2-line" />
                </div>
            </template>
            <template #clear-icon="{ clear }">
                <div class="dp__icon dp__clear_icon dp__input_icons" @click="clear">
                    <icon-wrapper icon="ri:close-line" fill="#485fc7"/>
                </div>
            </template>
        </vue-date-picker>
    </InputSlot>
</template>

<style lang="scss" scoped>
    :deep(.dp-input-base) {
        position: relative;
        width: 100%;
        border: 1px solid;
        border-radius: 4px;
        font-size: rem(14);
        padding-top: 4px;
        padding-bottom: 4px;
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
</style>