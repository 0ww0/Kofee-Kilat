import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

export default function useLocation() {
    const route = usePage().url;

    const isCurrentRoute = (key) => {
        return computed(() => route.name === key).value;
    };

    const isExactPath = (key) => {
        return computed(() => route.path === key).value;
    };

    const isParamMatch = (key, paramName) => {
        const paramValue = computed(() => route.params[paramName]).value;
        return computed(() => route.path === key && !!paramValue).value;
    };

    return {
        isCurrentRoute,
        isExactPath,
        isParamMatch,
    };
}
