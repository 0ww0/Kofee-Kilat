<script setup>
    import { computed, reactive } from 'vue'
    
    const props = defineProps({
        name: [String, Boolean],
        error: [String, Boolean],
        modelValue: [Object],
        disabled: [Boolean],
    })

    const emits = defineEmits(['update:modelValue'])

    const inputClass = computed(() => ({
        'input-upload file': true,
        'is-error': props.error
    }))

    const state = reactive({
        file: null,
    })

    const updateValue = (event) => {
        state.file = event.target.files[0]
        emits('update:modelValue', state.file)
    }

    const removeFile = () => {
        state.file = null;
        emits('update:modelValue', state.file);

        const input = document.querySelector('.input-upload.file')
        if (input) input.value = null
    }
</script>

<template>
    <div class="upload-label file-upload">
        <form-name :name="name" />
        <div class="file-wrapper">
            <label class="file-icon">
                <icon-wrapper 
                    icon="ri:upload-cloud-2-line" 
                    size="18" 
                />
                <span>Upload</span>
                <input 
                    type="file"
                    ref="state.file"
                    @change="updateValue"
                    :class="inputClass"
                    :disabled="disabled" 
                />
            </label>
            <div class="file-name" v-if="state.file">
                <span>{{ state.file.name }}</span>
                <icon-wrapper 
                    icon="ri:close-circle-line"
                    size="20"
                    fill="red" 
                    @click="removeFile()"
                />
            </div>
        </div>
        <form-validate 
            v-if="error"
            :text="error" 
        /> 
    </div>
</template>

<style lang="scss" scoped>
    .upload-label {
        position: relative;
        width: 100%;
        font-size: rem(14);
        line-height: 1.5;
        padding: 5px;
    }

    .file-wrapper {
        @include flex(row, nowrap);
        align-items: center;
        width: 100%;
        padding: 10px;
        border: 1px solid;
        border-radius: 4px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        @include border(#dadada);
    }

    .file-icon {
        @include flex(row, nowrap);
        align-items: center;
        justify-content: center;
        border: 1px solid;
        padding: 5.5px 12px;
        border-radius: 4px;
        outline: none;
        user-select: none;

        @include background($white);
        @include border(#dadada);
        @include trans(border-color, box-shadow);

        &:focus, &:active{
            @include border($primary);
        }

        span {
            margin-left: 5px;
        }
    }

    .file-name {
        @include flex(row, nowrap);
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: 10px;
        
        span {
            width: calc(100% - 30px);
            @include ellipsis;
        }

        .icon-wrapper {
            padding: 5px;
            cursor: pointer;
        }
    }

    .input-upload.file {
        display: none;
    }
</style>