<template>
    <section class="category-cards">
        <h2 class="category-title">Category</h2>
        <div class="image-container">
            <!-- REAR BUMPER -->
            <div class="product-card">
                <img
                    class="image-item"
                    src="..."
                    alt="Rear bumper category image"
                />
                <div class="card-body">
                    <p class="card-text">Rear bumper</p>
                </div>
            </div>

            <!-- SPLITTERS -->
            <div class="product-card">
                <img
                    class="image-item"
                    src="..."
                    alt="Splitters category image"
                />
                <div class="card-body">
                    <p class="card-text">Splitters</p>
                </div>
            </div>

            <!-- WIND DEFLECTOR -->
            <div class="product-card">
                <img
                    class="image-item"
                    src="..."
                    alt="Wind deflector category image"
                />
                <div class="card-body">
                    <p class="card-text">Wind deflector</p>
                </div>
            </div>

            <!-- OTHER PRODUCTS-->
            <div class="product-card">
                <img class="image-item" src="..." alt="Other products image" />
                <div class="card-body">
                    <p class="card-text">Other products</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script></script>

<style scoped>
    .category-cards {
        text-align: center;
        padding: 20px;
        width: 100%;
        position: relative;
        background: white;
        padding-top: 5vh;
    }

    .image-container {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }
</style>
