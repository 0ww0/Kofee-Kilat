<script setup>
    import { Head } from '@inertiajs/vue3'
    import useText from '@plugin/text'

    const { capitalize } = useText()
    
    const props = defineProps({
        title: String,
        desc: String,
        keyword: String,
    })
</script>

<template>
    <Head>
        <title>{{ capitalize(title) }}</title>
        <meta name="description" :content="desc ? `${desc}` : 'Freelance Programmer looking for opening.'">
        <meta name="keywords" :content="keyword ? `${keyword}` : 'Portfolio, Web, Developer, Open for Hired'">
    </Head>
</template>
