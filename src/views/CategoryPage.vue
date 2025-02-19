<template>
    <div>
        <PageHeader :title="pageTitle" />
        <CategoryCards />
        <PageNavigation />
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import PageHeader from '../components/PageHeader.vue';
    import CategoryCards from '../components/CategoryCards.vue';
    import PageNavigation from '../components/PageNavigation.vue';
    import { computed } from 'vue';

    const route = useRoute();
    const category = route.params.category; // Route params to get which category

    // Dynamically generates header title according to chosen category
    const pageTitle = computed(() => {
        if (category) {
            //Styling the title
            return category
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
        return '';
    });
</script>

<style scoped></style>
