<script setup>
    import { computed, reactive } from 'vue'
    
    const props = defineProps({
        loader: [Number],
        size: {
            type: [Number],
            default: 24
        },
    })

    const loaderClass = computed(() => ({
        'loader component': true,
        ['is-' + props.loader]: true
    }))

    const icon = reactive({
        className: computed(() => ({
            'animate': true
        })),
        iconify: computed(() => {
            switch (props.loader) {
                case 2:
                    return 'ri:loader-2-line';
                case 3:
                    return 'ri:loader-3-line';
                case 4:
                    return 'ri:loader-4-line';
                case 5:
                    return 'ri:loader-5-line';
                default:
                    return 'ri:loader-line';
            }
        })
    })
</script>

<template>
    <div :class="loaderClass">
        <icon-wrapper 
            :icon="icon.iconify" 
            :class="icon.className"
            :size="size" />
    </div>
</template>

<style lang="scss" scoped>
    .loader {
        position: relative;
        padding: 10px;
    }

    .animate {
        :deep() svg.icon {
            animation: spin 1.2s linear infinite;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
    
</style>