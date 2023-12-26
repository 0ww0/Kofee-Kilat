<script setup>
    const props = defineProps({
        name: [Boolean, String]
    })
</script>

<template>
    <div class="form-name" v-if="name">
        <span class="text">{{ name }}</span>
    </div>
</template>

<style lang="scss" scoped>
    .form-name {
        position: relative;
        user-select: none;
        
        .text {
            text-transform: capitalize;
            font-weight: 500;
            user-select: none;
        }
    }
</style>