<script setup>
    import { useCopyrightStore } from "@store/useCopyright"

    const store = useCopyrightStore()
    const { copyright } = store
</script>

<template>
    <div class="copyright">
        <p>Copyright &copy; {{ copyright }} All Rights Reserved.</p>
    </div>
</template>

<style lang="scss" scoped>
    .copyright {
        font-size: rem(12);
        user-select: none;
    }
</style>
