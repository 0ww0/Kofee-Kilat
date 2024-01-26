<script setup>
	import { computed } from 'vue'
	import { RiSideBarFill } from '@remixicon/vue'

    const props = defineProps({
        icon: {
            type: [Object],
            default: RiSideBarFill,
        },
        name: [String],
        link: [String],
        active: [Boolean],
    })

	const inputClass = computed(() => ({
		'sidebar-item': true,
		'is-active': props.active
	}))
</script>

<template>
    <NuxtLink :to="{ name: link }" :class="inputClass">
        <IconWrapper :icon="icon"/>
        <span>{{ name }}</span>
    </NuxtLink>
</template>

<style lang="scss" scoped>
    .sidebar-item {
		position: relative;
		padding: 10px 15px;
		@include flex(row, nowrap);
		align-items: center;
		user-select: none;

		&:after {
			content: "";
			position: absolute;
			width: 4px;
			height: 100%;
			bottom: 0;
			left: 0;
			@include background($primary);
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
			position: relative;
			font-size: rem(16);
			margin-left: 10px;
		}
	}
</style>