<script setup>
    import Logo from './Logo.vue'
    import Mode from './Mode.vue'
    import App from './App.vue'
    import { useMode } from '@composable/useMode.js'
    import { useIdentityStore } from "@store/useIdentity"

    const store = useIdentityStore()
    const { getLogo } = store
    const { theme, toggle } = useMode()
</script>

<template>
    <header class="container">
        <Logo :imageSrc="getLogo(theme.name, 'full')"/>
        <div class="segment">
            <Mode @toggle:mode="toggle" :icon="theme.icon" />
            <App />
        </div>
    </header>
</template>


<style lang="scss" scoped>
    header {
        position: relative;
        height: 100%;
        @include cfg.flex(row);
        align-items: center;
        justify-content: space-between;
    }

    .segment {
        @include cfg.flex(row, nowrap);
        align-items: center;
    }
</style>