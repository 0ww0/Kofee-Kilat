<script setup>
    import { reactive, inject } from 'vue'

    const props = defineProps({
        title: [String]
    })

    const state = reactive({
        open: false,
    })

    const data = inject('accordionData')

    const toggleItem = () => {
        if (data.collapse) {
            if (data.open === props.title) {
                data.open = null;
            } else {
                data.open = props.title;
            }
        } else {
            state.open = !state.open;
        }
    }
</script>

<template>
    <div class="accordion-item">
        <div class="accordion-header">
            <p>{{ title }}</p>
            <ButtonWrapper end>
                <ButtonBase text="Toggle" @click="toggleItem"/>
            </ButtonWrapper>
        </div>
        <div class="accordion-content" v-if="state.open || (data.collapse && data.open === title)">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .accordion-item {
        border: 1px solid;
        @include border(#dadada);
    }

    .accordion-header {
        @include flex(row, nowrap);
        align-items: center;
        padding: 10px;

        p {
            width: 100%;
        }
    }

    .accordion-content {
        border: 1px solid;
        padding: 15px;
    }
</style>