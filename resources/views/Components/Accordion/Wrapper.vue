<script setup>
    import { reactive, provide } from 'vue'

    const props = defineProps({
        collapse: [Boolean],
    });
    
    const accordion = reactive({
        collapse: props.collapse,
        open: ref(null)
    })

    provide('accordionData', accordion)
</script>

<template>
    <div class="accordion-wrapper">
        <slot />
    </div>
</template>