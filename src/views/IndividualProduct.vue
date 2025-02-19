<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    import { useProductStore } from '../stores/productStore.js';

    const route = useRoute();
    const store = useProductStore();

    const filteredProducts = computed(() => {
        return store.products.filter(
            (product) => product.category === route.params.category
        );
    });
</script>

<template>
    <div>
        <h2>Products in {{ route.params.category }}</h2>
        <div v-if="filteredProducts.length">
            <div v-for="product in filteredProducts" :key="product.id">
                <h3>{{ product.name }}</h3>
                <img :src="product.image" :alt="product.name" />
            </div>
        </div>
        <p v-else>No products found in this category.</p>
    </div>
</template>
