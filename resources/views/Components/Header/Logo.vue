<script setup>
  const props = defineProps({
    imageSrc: [String],
    altSrc: [String]
  })
</script>

<template>
    <div class="component header-logo">
        <img :src="imageSrc" :alt='altSrc'>
    </div>
</template>

<style lang="scss" scoped>
    .header-logo {
        position: relative;
        width: 100%;
        max-width: 250px;
        cursor: default;
        padding: 5px;
        margin: 15px 5px;
        user-select: none;
    }
</style>