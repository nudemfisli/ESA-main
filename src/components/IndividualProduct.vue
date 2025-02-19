<template>
    <div class="product-detail">
        <div class="image-gallery">
            <div v-if="product.image.length > 1" class="thumbnail-container">
                <img
                    v-for="(img, index) in product.image"
                    :key="index"
                    :src="img"
                    @click="selectedImage = img"
                    class="thumbnail"
                    :class="{ active: img === selectedImage }"
                />
            </div>

            <!-- Main Image -->
            <img :src="selectedImage" class="main-image" v-if="selectedImage" />
        </div>

        <!-- Product information-->
        <div class="product-info">
            <h2>{{ product.name }}</h2>
            <p class="category">{{ product.category }}</p>
            <p class="rating">⭐⭐⭐⭐☆</p>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p class="price" v-if="product.price">${{ product.price }}</p>
            <p class="price" v-else>Price not available</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useProductStore } from '../stores/productStore.js';

    const route = useRoute();
    const store = useProductStore();
    const product = computed(() =>
        store.products.find((p) => p.product_id === route.params.id)
    );
    const selectedImage = ref('');

    onMounted(() => {
        if (product.value && product.value.image.length > 0) {
            selectedImage.value = product.value.image[0];
        }
    });
</script>

<style scoped>
    .product-detail {
        display: flex;
        gap: 20px;
        align-items: start;
    }

    /* Image Gallery */
    .image-gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .thumbnail-container {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }

    .thumbnail {
        width: 50px;
        height: 50px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: 0.3s;
    }

    .thumbnail:hover,
    .thumbnail.active {
        border: 2px solid #37474f;
    }

    .main-image {
        width: 400px;
        max-width: 100%;
    }

    /* Product information */
    .product-info {
        max-width: 400px;
    }

    .price {
        font-weight: bold;
        font-size: 20px;
    }

    .add-to-cart {
        background: #37474f;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }
</style>
