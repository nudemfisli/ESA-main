<template>
    <div class="search-boxes">
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
        <div class="search-box">
            <input
                class="form-control"
                type="text"
                placeholder="Model"
                v-model="searchQuery"
            />
        </div>
    </div>

    <div v-if="loading">Loading products...</div>
    <div v-else-if="error">Error loading products: {{ error }}</div>

    <div v-else-if="filteredProducts.length === 0">
        <p>No products found for this category.</p>
    </div>

    <!-- Product card -->
    <div v-else>
        <div class="card-containers">
            <div
                v-for="product in filteredProducts"
                :key="product.product_id"
                class="product-card"
            >
                <div v-if="product.image && product.image.length > 0">
                    <img
                        :src="product.image[0]"
                        alt="Product image"
                        class="image-item"
                    />
                </div>
                <h3>{{ product.name }}</h3>
                <div v-if="product.price">
                    <p>{{ product.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, watch, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useProductStore } from '../stores/productStore';

    const route = useRoute();
    const productStore = useProductStore();
    const searchQuery = ref('');

    const normalizeCategory = (category) => {
        return category
            ? category.toLowerCase().replace(/\s+/g, '-').trim()
            : '';
    };

    onMounted(() => {
        console.log('Fetching products...');
        productStore.fetchProducts();
    });

    watch(
        () => route.params.category,
        (newCategory) => {
            console.log('Route changed to category:', newCategory);
            productStore.selectedCategory = newCategory || '';
        }
    );

    const filteredProducts = computed(() => {
        if (!productStore.products || productStore.products.length === 0) {
            console.log(' No products available yet...');
            return [];
        }

        console.log('Selected Category:', productStore.selectedCategory);

        const filtered = productStore.products.filter((product) => {
            const productCategory = normalizeCategory(product.category);
            const selectedCategory = normalizeCategory(
                productStore.selectedCategory
            );

            console.log(
                `Comparing: ${productCategory} === ${selectedCategory}`
            );

            const matchesCategory = selectedCategory
                ? productCategory === selectedCategory
                : true;
            const matchesSearchQuery = product.name
                ?.toLowerCase()
                .includes(searchQuery.value.toLowerCase());

            return matchesCategory && matchesSearchQuery;
        });

        console.log('Filtered Products:', filtered);

        return filtered;
    });

    const loading = computed(() => productStore.loading);
    const error = computed(() => productStore.error);
</script>

<style scoped>
    .search-boxes {
        display: flex;
        justify-content: end;
        gap: 10px;
        padding-top: 2em;
        padding-right: 7em;
    }

    .btn-secondary {
        background-color: white !important;
        color: black !important;
        height: 40px;
        width: 10.3em;
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

    /* Card styling */

    .card-containers {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
        justify-content: center;
        padding: 2em 7em 5em 7em;
    }

    .product-card {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #00000044;
        border-radius: 5px;
        height: 20em;
        width: 18em;
        overflow: hidden;
        box-sizing: border-box;
        margin: 0 auto;
        justify-content: space-between;
        padding-bottom: 1em;
    }

    .product-card h3 {
        font-size: 1rem;
        text-align: center;
    }

    .image-item {
        width: 100%;
        height: 15em;
        object-fit: cover;
        margin-bottom: 1em;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        width: 100%;
        padding-bottom: 1em;
    }

    .card-text {
        padding: 1em;
        text-align: center;
        margin-top: auto;
    }
</style>
