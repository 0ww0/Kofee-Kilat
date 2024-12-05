<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        name: [String, Boolean],
        error: [String, Boolean],
        type: [String],
    })

    const inputClass = computed(() => ({
        'input-slot': true,
        ['input-' + props.type]: true,
        'is-error': props.error
    }))
</script>

<template>
    <label class="slot-label">
        <form-name :name="name" />
        <div :class="inputClass">
            <slot />
            <form-validate 
                v-if="error"
                :text="error" 
            /> 
        </div>
    </label>
</template>

<style lang="scss" scoped>
    .slot-label {
        position: relative;
        width: 100%;
        font-size: cfg.rem(14);
        line-height: 1.5;
        padding: 5px;
    }
</style>