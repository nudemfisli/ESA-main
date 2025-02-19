<template>
    <section class="category-cards">
        <h2 class="category-title">Category</h2>
        <div class="image-container">
            <router-link
                v-for="product in filteredProducts"
                :key="product.product_id"
                :to="`/product/${product.product_id}`"
                class="product-card"
            >
                <img
                    class="image-item"
                    :src="product.image[0]"
                    :alt="product.name"
                />
                <div class="card-body">
                    <p class="card-text">{{ product.name }}</p>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';

    const products = ref([]);
    const selectedCategory = ref('Other Products');

    onMounted(async () => {
        try {
            const response = await fetch('/path/to/your/products-api');
            const data = await response.json();
            products.value = data;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    });

    const filteredProducts = computed(() => {
        return products.value.filter(
            (product) => product.category === selectedCategory.value
        );
    });
</script>

<style scoped>
    .category-cards {
        text-align: center;
        padding: 20px;
        width: 100%;
        position: relative;
        background: white;
        padding-top: 10vh;
    }

    .category-title {
        padding-bottom: 0.5em;
    }

    .image-container {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        padding-bottom: 5em;
    }

    .product-card {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease-in-out;
        border: 2px solid #00000026;
        border-radius: 5px;
        width: 18em;
        height: 20em;
        overflow: hidden;
        box-sizing: border-box;
    }

    .image-item {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .card-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        width: 100%;
    }

    .card-text {
        padding: 1em;
        font-weight: bold;
        text-align: center;
    }

    .product-card:hover {
        transform: scale(1.05);
    }
</style>
