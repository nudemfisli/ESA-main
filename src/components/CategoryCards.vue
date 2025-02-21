<template>
    <div class="search-boxes">
        <!-- Dropdown menu -->
        <div class="dropdown">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Sort by
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Newest</a>
                <a class="dropdown-item" href="#">Price: low to high</a>
                <a class="dropdown-item" href="#">Price: high to low</a>
                <a class="dropdown-item" href="#">Alphabetical (A-Z)</a>
                <a class="dropdown-item" href="#">Alphabetical (Z-A)</a>
            </div>
        </div>

        <!-- Search box -->
        <div class="search-box">
            <input
                class="form-control"
                type="text"
                placeholder="Model"
                v-model="searchQuery"
            />
        </div>
    </div>

    <!-- Product cards -->
    <section>
        <div class="card-container">
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

    <!-- Loading/Error-->
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">Error: {{ error }}</div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useProductStore } from '../stores/productStore';

    const searchQuery = ref('');
    const productStore = useProductStore();

    onMounted(() => {
        productStore.fetchProducts();
    });

    // Filter products based on selected category and search query
    const filteredProducts = computed(() => {
        return productStore.products.filter((product) => {
            const matchesCategory =
                product.category === productStore.selectedCategory;
            const matchesSearchQuery = product.name
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase());
            return matchesCategory && matchesSearchQuery;
        });
    });

    const loading = computed(() => productStore.loading);
    const error = computed(() => productStore.error);
</script>

<style scoped>
    .search-boxes {
        display: flex;
        justify-content: end;
        gap: 10px;
        padding-top: 1em;
        padding-right: 0.7em;
    }

    .btn-secondary {
        background-color: white !important;
        color: black !important;
        height: 40px;
        width: 140px;
        text-align: start;
    }

    .dropdown-item:hover {
        background-color: #e3e3e3;
        color: black !important;
    }

    .search-box {
        border: 1px solid #000000d7 !important;
        border-radius: 6px;
        height: 40px;
        width: 140px;
    }

    .card-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        justify-content: center;
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
