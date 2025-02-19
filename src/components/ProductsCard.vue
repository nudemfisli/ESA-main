<template>
    <section class="category-cards">
        <h2 class="category-title">Category</h2>
        <div class="image-container">
            <router-link to="/product/rear-bumper" class="product-card">
                <img
                    class="image-item"
                    src="/images/Category-images/category-rearbumper.jpg"
                    alt="Rear bumper category image"
                />
                <div class="card-body">
                    <p class="card-text">Rear bumper</p>
                </div>
            </router-link>

            <router-link to="/product/splitters" class="product-card">
                <img
                    class="image-item"
                    src="/images/Category-images/category-splitters.jpg"
                    alt="Splitters category image"
                />
                <div class="card-body">
                    <p class="card-text">Splitters</p>
                </div>
            </router-link>

            <router-link to="/product/wind-deflector" class="product-card">
                <img
                    class="image-item"
                    src="/images/Category-images/car-deflectors-isolated-transparent-background_1033130-11932.jpg"
                    alt="Wind deflector category image"
                />
                <div class="card-body">
                    <p class="card-text">Wind deflector</p>
                </div>
            </router-link>

            <router-link to="/product/other-products" class="product-card">
                <img
                    class="image-item"
                    src="/images/Category-images/category-otherproducts.jpg"
                    alt="Other products image"
                />
                <div class="card-body">
                    <p class="card-text">Other products</p>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script setup></script>

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
        font-size: 26px;
        text-transform: uppercase;
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
        height: 260px;
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
