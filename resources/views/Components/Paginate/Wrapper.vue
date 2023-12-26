<script setup>
	import { computed, reactive, watch } from 'vue'

    const props = defineProps({
        modelValue: {
            type: [Number],
            required: true
        },
        perPage: {
			type: [Number],
			default: 10,
		},
		totalPage: {
			type: [Number],
			default: 1,
		},
		prevLabel: {
			type: [String],
			default: "Prev",
		},
		nextLabel: {
			type: [String],
			default: "Next",
		},
		range: {
			type: [Number],
			default: 3,
		},
    })

    const emits = defineEmits(["update:modelValue"])

	const pagination = reactive({
      	currentPage: props.modelValue,
		totalPage: props.totalPage,
        className: computed(() => ({
            'label-button': true
        })),
        disabled: {
            prev: computed(() => ({
                'disabled' : pagination.currentPage === 1
            })),
            next:  computed(() => ({
                'disabled' : pagination.currentPage === pagination.totalPage
            }))
        }
    });

	watch(
		() => props.totalPage,
		(newTotalPage) => {
			pagination.totalPage = newTotalPage;
		}
	);

	const visiblePages = computed(() => {
		const start = Math.max(1, props.modelValue - props.range);
		const end = Math.min(pagination.totalPage, props.modelValue + props.range);
		const pages = [];

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	});

    const goToPage = (page) => {
        pagination.currentPage = page;
		emits("update:modelValue", pagination.currentPage);
    }

    const nextPage = () => {
        if (pagination.currentPage < pagination.totalPage) {
			pagination.currentPage++;
			emits("update:modelValue", pagination.currentPage);
		}
    }

    const prevPage = () => {
        if (pagination.currentPage > 1) {
			pagination.currentPage--;
			emits("update:modelValue", pagination.currentPage);
		}
    }
</script>

<template>
    <div class="pagination-component">
		<ButtonWrapper>
			<ButtonBase
				:class="[pagination.className, pagination.disabled.prev]"
				:text="prevLabel" 
				@click="prevPage"/>
			<div class="pager-button pager" 
				v-for="pageNumber in visiblePages"
				:key="pageNumber"
				:class="{ active: modelValue === pageNumber }"
				@click="goToPage(pageNumber)">
				{{ pageNumber }}
			</div>
			<ButtonBase
				:class="[pagination.className, pagination.disabled.next]"
				:text="nextLabel"
				@click="nextPage"/>
		</ButtonWrapper>
  	</div>
</template>

<style lang="scss" scoped>
    .pagination-component {
		position: relative;
		@include flex(row, nowrap);
		justify-content: flex-end;
	}

	.pager-button {
		@include background(white);
		font-size: rem(14);
		width: 40px;
		padding: 6px;
		border: 1px solid;
    	border-color: #adadad;
		cursor: pointer;
		user-select: none;

		&.active {
			@include background($black);
			@include color($white);
			border-bottom: 5px solid $primary; 
		}
	}

	.pager, .label-button {
		@include flex(row, nowrap);
		justify-content: center;
		align-items: center;
	}

	.label-button {
		width: 60px;

		&.disabled {
			pointer-events: none;
			user-select: none;
			@include color(#dadada);
		}

		&:last-child {
			margin-left: 10px;
		}
	}
</style>