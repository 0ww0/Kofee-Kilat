<script setup>
    import { computed, reactive } from 'vue'
    import { RiUploadCloud2Line, RiImageAddLine, RiCloseCircleLine } from '@remixicon/vue' 
    
    const props = defineProps({
        name: [String, Boolean],
        error: [String, Boolean],
        preview: [String],
        modelValue: [File],
        disabled: [Boolean],
    })

    const emits = defineEmits(['update:modelValue'])

    const inputClass = computed(() => ({
        'input-upload image': true,
        'is-error': props.error
    }))

    const state = reactive({
        file: null,
        preview: props.preview,
    })

    const updateValue = (event) => {
        state.file = event.target.files[0]

        if (state.file !== undefined) {
            processImage(state.file)
        } else {
            state.file = null
        }
        
        emits('update:modelValue', state.file);
    }

    const processImage = (image) => {
        const reader = new FileReader()

        if (image && image.type.match('image.*')) reader.readAsDataURL(image)

        reader.onload = (event) => {
            state.preview = event.target.result
        }
    }

    const removeFile = () => {
        state.file = null
        state.preview = null
        emits('update:modelValue', state.file)
        
        const input = document.querySelector('.input-upload.image')
        if (input) input.value = null
    }
</script>

<template>
    <div class="upload-label image-upload">
        <form-name :name="name" />
        <label class="file-wrapper">
            <div class="file-icon">
                <icon-wrapper 
                    :icon="RiUploadCloud2Line" 
                    size="18" 
                />
                <span>Upload</span>
            </div>
            <input 
                type="file"
                accept="image/*"
                @change="updateValue" 
                :class="inputClass"
                :disabled="disabled" 
            />
        </label>
        <div class="file-block" v-if="!state.preview">
            <icon-wrapper 
                :icon="RiImageAddLine" 
                size="24" 
            />
        </div>
        <div class="file-preview" v-else>
            <img :src="state.preview" alt="Preview" class="image-preview">
            <div class="remove-block" @click="removeFile">
                <span>Remove Image</span>
                <icon-wrapper 
                    :icon="RiCloseCircleLine" 
                    size="20" 
                    color="red" 
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
    @include flex(column, nowrap);
    align-items: flex-start;
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

    &:focus,
    &:active {
        @include border($primary);
    }

    span {
        margin-left: 5px;
    }
}

.file-block,
.file-preview {
    padding: 10px;
    border: 1px solid;
    border-top: 0;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    @include border(#dadada);
}

.file-block {
    @include flex(row, nowrap);
    justify-content: center;
    align-items: center;
    height: 200px;
}

.file-preview {
    position: relative;
    width: 100%;
    height: 300px;

    img {
        display: block;
        width: 100%;
        height: 85%;
        object-fit: contain;
        user-select: none;
    }

    .remove-block {
        @include flex(row, nowrap);
        align-items: center;
        justify-content: center;
        padding: 10px;
        cursor: pointer;

        .icon-wrapper {
            padding: 5px;
        }
    }
}

.input-upload.image {
    display: none;
}
</style>