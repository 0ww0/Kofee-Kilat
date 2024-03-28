<script setup>
    import Logo from './Logo.vue'
    import Mode from './Mode.vue'
    import { useMode } from '@composable/useMode.js'
    import { useIdentityStore } from "@store/useIdentity"

    const store = useIdentityStore()
    const { getLogo } = store
    const { theme, toggle } = useMode()
</script>

<template>
    <header>
        <Logo :imageSrc="getLogo(theme.name, 'full')"/>
        <Mode @toggle:mode="toggle" :icon="theme.icon" />
    </header>
</template>


<style lang="scss" scoped>
    header {
        position: relative;
        height: 100%;
    }

    .header {
        @include flex(row);
        align-items: center;
        justify-content: space-between;
        height: inherit;
        border-bottom: 1px solid;
        @include border(#dadada);

        &-slot {
            @include flex(row, nowrap);
            align-items: center;
        }
    }

    .link {
        position: relative;
        padding: 10px;
        @include flex(row, nowrap);
    }
</style>