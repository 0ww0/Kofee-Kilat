import { reactive, onUnmounted } from 'vue'

export default function useMedia() {
    const media = reactive({
        isHD: false,
        isDP: false,
        isMD: false,
        isSM: false,
        isXS: false,
    })

    const mobile = () => {
        media.isXS = window.innerWidth >= 481;
        media.isSM = window.innerWidth >= 641;
        media.isMD = window.innerWidth >= 801;
        media.isDP = window.innerWidth >= 1025;
        media.isHD = window.innerWidth >= 1201;
    }

    mobile();
    document.addEventListener('DOMContentLoaded', mobile);
    window.addEventListener('resize', mobile);

    onUnmounted(() => {
        document.removeEventListener('DOMContentLoaded', mobile);
        window.removeEventListener('resize', mobile);
    });

    return { media }
}