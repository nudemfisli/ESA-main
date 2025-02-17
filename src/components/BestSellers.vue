<template>
    <section class="product-carousel">
        <h1 class="bestseller-title">Bestsellers</h1>
        <div class="carousel-container" v-if="store.products.length > 0">
            <button class="carousel-btn prev-btn" @click="prevSlide">❮</button>

            <div
                class="carousel-wrapper"
                ref="carouselWrapper"
                :style="carouselStyle"
            >
                <div
                    class="carousel-item"
                    v-for="(product, index) in store.products"
                    :key="index"
                >
                    <img
                        :src="product.image"
                        :alt="product.name"
                        class="carousel-image"
                    />
                    <div class="carousel-content">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.category }}</p>
                        <button class="btn">Shop Now</button>
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

    onMounted(() => {
        if (store.products.length === 0) {
            store.fetchProducts();
        }
    });

    const carouselStyle = computed(() => ({
        transform: `translateX(-${currentSlide.value * 100}%)`,
        transition: 'transform 0.5s ease-in-out'
    }));

    const prevSlide = () => {
        if (currentSlide.value > 0) currentSlide.value--;
    };

    const nextSlide = () => {
        if (currentSlide.value < store.products.length - 1)
            currentSlide.value++;
    };
</script>

<style scoped>
    .bestseller-title {
        text-align: center;
    }
    .product-carousel {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 50vh;
    }

    .carousel-container {
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        overflow: hidden;
    }

    .carousel-wrapper {
        display: flex;
        width: 100%;
        white-space: nowrap;
    }

    .carousel-item {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        text-align: center;
        flex-shrink: 0;
    }

    .carousel-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 10px;
    }

    .carousel-content {
        padding: 15px;
    }

    .carousel-btn {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2rem;
        padding: 10px;
        cursor: pointer;
        border: none;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }

    .prev-btn {
        left: 10px;
    }

    .next-btn {
        right: 10px;
    }

    .carousel-btn:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .loading-text {
        text-align: center;
        font-size: 1.2rem;
        color: #666;
    }
</style>
