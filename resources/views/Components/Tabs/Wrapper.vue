<script setup>
    import { ref, computed, reactive, provide } from 'vue'

    const slots = useSlots();
    const children = slots.default?.();

    const props = defineProps({
        useStep: [Boolean],
        useForm: [Boolean]
    })
    
    const tabs = reactive({
        slot: children,
        active: ref(0),
    })

    const steps = reactive({
        isFirst: computed(() => tabs.active === 0),
        isLast: computed(() => tabs.active === tabs.slot.length - 1),
    })

    const stepsPrevious = () => {
        if (!steps.isFirst) {
            tabs.active--;
            adjustActiveTabs()
        }
    }

    const stepsNext = () => {
        if (!steps.isLast) {
            tabs.active++;
            adjustActiveTabs()
        }
    }

    const initalTabs = () => {
        for (let i = 0; i < tabs.slot.length; i++) {
            if (!tabs.slot[i].props.disabled) {
                return i;
            }
        }
        
        return 0;
    }

    const adjustActiveTabs = () => {
        if (tabs.slot[tabs.active].props.disabled) {
            for (let i = tabs.active + 1; i < tabs.slot.length; i++) {
                if (!tabs.slot[i].props.disabled) {
                    tabs.active = i;
                    return;
                }
            }

            for (let i = tabs.active - 1; i >= 0; i--) {
                if (!tabs.slot[i].props.disabled) {
                    tabs.active = i;
                    return;
                }
            }
        }
    }

    tabs.active = initalTabs()

    provide('tabsData', tabs)
</script>

<template>
    <div class="tabs-wrapper">
        <ul class="tabs-list">
            <li v-for="(tab, index) in tabs.slot"
                :key="index"
                @click="tabs.active = index"
                :class="{ 'is-active': tabs.active === index, 'is-disabled': tab.props.disabled }">
                {{ tab.props.label }}
            </li>
        </ul>
        <div class="tabs-content">
            <slot :tabIndex="tabs.active" />
        </div>
        <div class="tabs-step" v-if="useStep">
            <ButtonWrapper between>
                <ButtonBase 
                    text="Previous"
                    :disabled="steps.isFirst"
                    @click="stepsPrevious"
                />
                <ButtonBase 
                    text="Next"
                    v-if="!steps.isLast || !useForm"
                    :disabled="steps.isLast"
                    @click="stepsNext"
                />
                <slot 
                    name="form"
                    v-else-if="useForm" 
                />
            </ButtonWrapper>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tabs-list {
    list-style: none;
    width: calc(100%);
    @include flex(row, nowrap);
    @include background(#f3f5fd);
    font-size: rem(14);

    li {
        width: 100%;
        user-select: none;
        white-space: nowrap;
        padding: 10px;
        text-align: center;
        cursor: pointer;

        &.is-active {
            @include background($dark);
            @include color($light);
        }

        &.is-disabled {
            @include background($dark, 0.5);
            pointer-events: none;
        }
    }
}

.tabs-step {
    margin: 10px 0;
}
</style>