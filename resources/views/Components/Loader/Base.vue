<script setup>
    import { computed, reactive } from 'vue'
    import { RiLoaderLine, RiLoader2Line, RiLoader3Line, RiLoader4Line, RiLoader5Line  } from '@remixicon/vue'
    
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
        remixIcon: computed(() => {
            switch (props.loader) {
                case 2:
                    return RiLoader2Line;
                case 3:
                    return RiLoader3Line;
                case 4:
                    return RiLoader4Line;
                case 5:
                    return RiLoader5Line;
                default:
                    return RiLoaderLine;
            }
        })
    })
</script>

<template>
    <div :class="loaderClass">
        <icon-wrapper 
            :icon="icon.remixIcon" 
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