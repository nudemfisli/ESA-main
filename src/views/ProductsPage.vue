<template>
    <div>
        <PageHeader :title="pageTitle" />
        <CategoryCard />
    </div>
</template>

<script setup>
    import PageHeader from '../components/PageHeader.vue';
    import CategoryCard from '../components/ProductsCard.vue';

    const pageTitle = 'OUR PRODUCTS';
</script>

<script>
    export default {
        name: 'ProductsPage'
    };
    CategoryCard;
</script>

<style scoped></style>
