<template>
    <div>
        <PageHeader />
        <h1>{{ pageTitle }}</h1>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import PageHeader from '../components/PageHeader.vue';
    import { computed, watchEffect } from 'vue';

    const route = useRoute();
    const category = route.params.category;

    //Page title change according to category
    const pageTitle = computed(() => {
        if (category) {
            return `${category} Products`;
        }
    });
</script>

<style scoped></style>
