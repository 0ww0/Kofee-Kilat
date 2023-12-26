<script setup>

</script>

<template>
    <footer>
        <FooterCopyright />
    </footer>
</template>


<style lang="scss" scoped>
    footer {
        @include background($black);
        @include color($white, 0.5);
        padding: rem(10);
        text-align: center;
    }
</style>