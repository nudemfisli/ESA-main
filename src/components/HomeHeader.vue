<template>
    <div class="banner">
        <div class="search-container">
            <div class="dropdown show">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Category
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Other Products</a>
                    <a class="dropdown-item" href="#">Rear Bumper</a>
                    <a class="dropdown-item" href="#">Splitters</a>
                    <a class="dropdown-item" href="#">Wind Deflector</a>
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
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    const searchQuery = ref('');

    console.log('searchQuery value:', searchQuery.value);

    onMounted(() => {
        console.log('Banner component is mounted!');
    });
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    .banner {
        background-image: url('/images/pexels-markusspiske-2027045.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .banner::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(32, 31, 31, 0.6);
        z-index: -1;
    }

    .search-container {
        display: flex;
        gap: 20px;
        z-index: 10;
        padding: 15px;
        border-radius: 10px;
        width: auto;
        justify-content: center;
        position: relative;
    }

    .dropdown {
        flex: 1;
        max-width: 300px;
        position: relative;
        z-index: 2;
    }

    .dropdown-menu {
        min-width: 200px;
        max-width: 300px;
        background-color: #fff;
        border-radius: 5px;
        z-index: 1050;
        padding: 10px 0;
    }

    .search-box {
        flex: 1;
        max-width: 300px;
    }

    .search-box input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        color: #000;
    }

    .search-box input:focus {
        outline: none;
        border-color: #007bff;
    }

    .dropdown-item {
        color: #000;
    }

    .dropdown-item:hover {
        background-color: #f1f1f1;
    }
</style>
