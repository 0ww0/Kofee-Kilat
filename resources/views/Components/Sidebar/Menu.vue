<script setup>
    import { computed, reactive } from 'vue'
    import { RiLayoutLeft2Fill, RiArrowUpSLine, RiArrowDownSLine } from '@remixicon/vue'

    const props = defineProps({
        icon: {
            type: [Object],
            default: RiLayoutLeft2Fill,
        },
        name: [String],
        active: [Boolean],
    })

    const state = reactive({
        open: false,
        chevron: computed(() => {
            return state.open ? RiArrowUpSLine : RiArrowDownSLine
        }),
        dropdown: computed(() => {
            return { "is-closed": !state.open, "is-open": state.open }
        })
    })

    const sidebar = reactive({
        list: computed(() => ({
            'sidebar-list': true,
            [state.dropdown]: true
        })),
        dropdown: computed(() => ({
            'sidebar-dropdown': true,
            'is-active': props.active
        }))
    })

    const toggle = () => {
        return (state.open = !state.open)
    }
</script>

<template>
    <div :class="sidebar.list">
        <div :class="sidebar.dropdown" @click="toggle()">
            <IconWrapper :icon="icon" />
            <span>{{ name }}</span>
            <IconWrapper :icon="state.chevron" size="20"/>
        </div>
        <div class="sidebar-menu">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .sidebar {
        &-list {
            position: relative;
            @include flex(column, nowrap);
            user-select: none;
            font-size: rem(16);
            cursor: pointer;
        }

        &-dropdown {
            padding: 15px 10px;
            position: relative;
            @include flex(row, nowrap);
            align-items: center;
            user-select: none;
            cursor: pointer;

            &:after {
                content: "";
                position: absolute;
                width: 4px;
                height: 100%;
                bottom: 0;
                left: 0;
                @include background($info);
                visibility: hidden;
                border-radius: 5px;
                transform: scaleY(0);
                transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            &.is-active,
            &:hover {
                &:after {
                visibility: visible;
                transform: scaleY(1);
                }
            }

            span {
                margin-left: 10px;
                margin-right: auto;
            }
        }

        &-menu {
            margin-left: 25px;
        }
    }

    .is-closed {
        .sidebar-menu {
            opacity: 0;
            height: 0;
            visibility: hidden;
        }
    }

    .is-open {
        .sidebar-menu {
            opacity: 1;
            height: auto;
            visibility: visible;

            @include trans(opacity, height, visibility);
        }
    }
</style>