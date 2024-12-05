<script setup>

</script>

<template>
    <footer>
        <FooterCopyright />
    </footer>
</template>


<style lang="scss" scoped>
    footer {
        @include cfg.background($black);
        @include cfg.color($white, 0.5);
        padding: cfg.rem(10);
        text-align: center;
    }
</style>