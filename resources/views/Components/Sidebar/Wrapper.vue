<script setup>
    import useLocation from '@/composables/useLocation';

    const path = useLocation()
</script>

<template>
    <div class="sidebar-slot">
        <div class="sidebar-block">
            <div class="sidebar-title">
                <p>Appendix</p>
            </div>
            <SidebarList
                name="Introduction"
                link="index"
                :active="path.isCurrentRoute('index')"
            />
            <SidebarList
                name="About"
                link="about"
                :active="path.isCurrentRoute('about')"
            />
            <SidebarList
                name="Auth Login"
                link="auth-login"
                :active="path.isCurrentRoute('auth-login')"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .sidebar {
        &-slot {
            border-right: 1px solid;
            @include border(#dadada);
            overflow-y: auto;
        }

        &-block {
            border-bottom: 1px solid;
            @include border(#dadada);

            &:not(:last-child) {
                padding-bottom: 15px;
                margin-bottom: 15px;
            }
        }

        &-title {
            padding: 10px;
            font-size: rem(18);
            font-weight: 600;
        }
    }
</style>