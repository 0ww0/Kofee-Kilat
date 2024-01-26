<script setup>
    import { ref, computed, reactive, watchEffect } from 'vue'
    import { RiCloseLine } from '@remixicon/vue'
    import { onClickOutside } from '@vueuse/core'

    const props = defineProps({
        className: {
            type: [String],
            default: "default"
        },
        hideClose: {
            type: [Boolean],
            default: false,
        },
        isOpen: [Boolean],
        alignCenter: {
            type: [Boolean],
            default: true
        },
        disableOutsideClick: {
            type: [Boolean],
            default: true,
        }
    })

    const emits = defineEmits(["openModal", "closeModal"])

    const modal = ref(null)
    const state = reactive({
        body: {
            height: null,
            overflow: null,
        },
        open: computed(() => props.isOpen)
    })

    const overlayClass = computed(() => ({
        'modal-backdrop': true,
        'modal-center': props.alignCenter,
        ['modal-' + props.className]: true
    }))

    const applyBodyStyles = () => {
        document.body.style.height = state.body.height;
        document.body.style.overflow = state.body.overflow;
    }

    const lockLayout = () => {
        state.body = {
            height: '100%',
            overflow: 'hidden'
        }
        
        applyBodyStyles()
    }

    const unlockLayout = () => {
        state.body = {
            height: null,
            overflow: null
        }

        applyBodyStyles()
    }
    

    const onClickOutsideModal = () => {
        if (props.disableOutsideClick) {
            onClickOutside(modal, () => {
                emits('closeModal')
            })
        }
    }

    const browserLayout = () => {
        onClickOutsideModal()
        state.open ? lockLayout() : unlockLayout()
    }

    watchEffect(() => {
        browserLayout();
    })
</script>

<template>
    <transition name="modal-fade">
        <div :class="overlayClass" v-show="state.open">
            <div class="modal" ref="modal">
                <div class="modal-icon"
                    v-if="!hideClose"
                    @click="emits('closeModal')">
                    <icon-wrapper :icon="RiCloseLine" size="32" />
                </div>
                <div class="modal-header">
                    <slot name="modal-header" />
                </div>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .modal {
        position: relative;
        @include background($white);
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 450px;
        border-radius: 5px;
        margin: rem(14);
        z-index: 1;

        &-backdrop {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            @include background($dark, 0.5);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            z-index: 10;
            overflow: auto;
        }

        &-center {
            align-items: center;
        }

        &-icon {
            position: absolute;
            top: 0;
            right: 0;
            border: 0;
            outline: 0;
            margin: 2px 4px;
            padding: 4px;
            cursor: pointer;
            z-index: 2;
        }
    }


    .modal {
        &-fade-enter,
        &-fade-leave-active {
            opacity: 0;
        }

        &-fade-enter-active,
        &-fade-leave-active {
            transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
    }
</style>