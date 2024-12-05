<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        text: {
            type : [String],
            required : true
        },
        validate: [Boolean],
        center: [Boolean]
    })

    const className = computed(() => ({
        'are-validate': true,
        'is-success': props.validate,
        'is-error': !props.validate,
        'is-center': props.center,
    }))
</script>

<template>
    <div :class="className">
        <span>{{ text }}</span>
    </div>
</template>

<style lang="scss" scoped>
    .are-validate {
        padding: 4px;
        padding-bottom: 0;
        font-size: cfg.rem(10);
        user-select: none;

        &.is-success {
            @include cfg.color($success);
        }

        &.is-error {
            @include cfg.color($danger);
        }

        &.is-center {
            width: 100%;
            text-align: center;
        }
    }
</style>