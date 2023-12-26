<script setup>
    import { computed, reactive } from 'vue'
    
    const props = defineProps({
        name: [String, Boolean],
        error: [String, Boolean],
        modelValue: [Array],
        disabled: [Boolean],
    });

    const emits = defineEmits(['update:modelValue']);

    const inputClass = computed(() => ({
        'input-upload multi': true,
        'is-error': props.error,
    }));

    const state = reactive({
        files: props.modelValue || [],
    });

    const updateValue = (event) => {
        const selectedFiles = event.target.files;
        const newFiles = Array.from(selectedFiles);
        state.files = [...state.files, ...newFiles];
        emits('update:modelValue', state.files);
    };

    const removeFile = (index) => {
        state.files.splice(index, 1);
        emits('update:modelValue', state.files);

        const input = document.querySelector('.input-upload.multi')
        if (input) input.value = []
    };
</script>

<template>
    <div class="upload-label multi-upload">
        <form-name :name="name" />
        <label class="file-wrapper">
            <div class="file-icon">
                <icon-wrapper 
                    icon="ri:upload-cloud-2-line" 
                    size="18" 
                />
                <span>Upload</span>
            </div>
            <input 
                type="file" 
                ref="state.files" 
                @change="updateValue" 
                :class="inputClass" 
                :disabled="disabled" 
                multiple 
            />
        </label>
        <div class="file-block" v-if="state.files.length > 0">
            <div class="file-name" v-for="(file, index) in state.files" :key="file.name">
                <span>{{ file.name }}</span>
                <icon-wrapper 
                    icon="ri:close-circle-line"
                    size="20"
                    fill="red" 
                    @click="removeFile(index)"
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

.file-block {
    padding: 10px;
    border: 1px solid;
    border-top: 0;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    @include border(#dadada);
}

.file-name {
    @include flex(row, nowrap);
    align-items: center;
    cursor: default;

    span {
        width: 100%;
    }
    
    .icon-wrapper {
        padding: 5px;
        cursor: pointer;
    }
}


.input-upload.multi {
    display: none;
}
</style>