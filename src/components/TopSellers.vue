<template>
    <section class="product-carousel">
        <h1 class="bestseller-title">Bestsellers</h1>

        <div class="carousel-container" v-if="bestsellerProducts.length > 0">
            <button class="carousel-btn prev-btn" @click="prevSlide">❮</button>

            <div
                class="carousel-wrapper"
                ref="carouselWrapper"
                :style="carouselStyle"
            >
                <div
                    class="carousel-slide"
                    v-for="(chunk, index) in paginatedProducts"
                    :key="index"
                >
                    <div
                        class="product-card"
                        v-for="(product, idx) in chunk"
                        :key="idx"
                    >
                        <img
                            :src="product.image[0]"
                            :alt="product.name"
                            class="product-image"
                        />
                        <div class="product-info">
                            <h3 class="product-title">{{ product.name }}</h3>
                            <div class="category-price-btn">
                                <h4 class="product-category">
                                    {{ product.category }}
                                </h4>
                                <h5 class="product-price">
                                    {{ product.price }}
                                </h5>
                                <button class="btn">View Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="carousel-btn next-btn" @click="nextSlide">❯</button>
        </div>

        <p v-else class="loading-text">Loading products...</p>
    </section>
</template>

<script setup>
    import { useProductStore } from '../stores/productStore.js';
    import { onMounted, ref, computed } from 'vue';

    const store = useProductStore();
    const currentSlide = ref(0);
    const itemsPerSlide = 2;

    onMounted(() => {
        if (store.products.length === 0) {
            store.fetchProducts();
        }
    });

    // Filter to bestseller
    const bestsellerProducts = computed(() =>
        store.products.filter((product) => product.bestseller)
    );

    // Two items per slide
    const paginatedProducts = computed(() => {
        let chunks = [];
        for (
            let i = 0;
            i < bestsellerProducts.value.length;
            i += itemsPerSlide
        ) {
            chunks.push(bestsellerProducts.value.slice(i, i + itemsPerSlide));
        }
        return chunks;
    });

    // Move carousel
    const carouselStyle = computed(() => ({
        transform: `translateX(-${currentSlide.value * 100}%)`,
        transition: 'transform 0.5s ease-in-out'
    }));

    const prevSlide = () => {
        if (currentSlide.value > 0) {
            currentSlide.value--;
        }
    };

    const nextSlide = () => {
        if (currentSlide.value < paginatedProducts.value.length - 1) {
            currentSlide.value++;
        }
    };
</script>

<style scoped>
    .bestseller-title {
        text-align: center;
        text-transform: uppercase;
        font-size: 25px;
    }

    /* Carousel container */
    .product-carousel {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        padding-top: 6vh;
        overflow: hidden;
        text-align: center;
    }

    .carousel-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    /* Sliding effect */
    .carousel-wrapper {
        display: flex;
        width: 100%;
        transition: transform 0.5s ease-in-out;
    }

    /* Two products per slide */
    .carousel-slide {
        display: flex;
        justify-content: center;
        flex: 0 0 100%;
        box-sizing: border-box;
        gap: 1em;
    }

    /* Product card */
    .product-card {
        width: 47%;
        padding: 15px;
        background: white;
        text-align: center;
    }

    /* Product image */
    .product-image {
        width: 100%;
        height: 220px;
        object-fit: cover;
        border: 1px solid rgba(16, 16, 16, 0.49);
        border-radius: 10px;
    }

    .product-title {
        font-size: 1.1rem;
        margin-bottom: 5px;
        margin-top: 5px;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
    }

    .category-price-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        width: 100%;
    }

    .product-category,
    .product-price {
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
    }

    .product-category {
        font-size: 1em;
    }

    .product-price {
        font-weight: bold;
        font-size: 1.1em;
    }

    .btn {
        padding: 8px 12px;
        border: none;
        background-color: #0c2927ca;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        white-space: nowrap;
        text-transform: uppercase;
        font-size: 14px;
    }

    .btn:hover {
        background-color: #0c2927c0;
        color: white;
    }

    /* Carousel buttons */
    .carousel-btn {
        color: rgba(47, 47, 47, 0.894);
        font-size: 2.5rem;
        padding: 10px;
        cursor: pointer;
        border: none;
        background: none;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }

    .prev-btn {
        left: -9px;
    }

    .next-btn {
        right: -9px;
    }
</style>
