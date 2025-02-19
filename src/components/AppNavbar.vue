<!-- Navbar -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-logo" to="/home">
            <img src="/images/ESA_LOGO2.png" alt="ESA Logo" />
        </router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/products"
                        >Products</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact"
                        >About us</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about"
                        >Contact</router-link
                    >
                </li>
            </ul>

            <div class="form-inline my-2 my-lg-0">
                <div class="input-group">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        v-model="searchQuery"
                    />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue';
    const searchQuery = ref('');

    const clearSearch = () => {
        searchQuery.value = '';
    };
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vh;
        z-index: 1000;
        align-items: center;
        background-color: #9ca7a6 !important;
    }

    .nav-link {
        text-transform: uppercase;
        color: #000000;
    }

    .navbar-nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 5vw;
        padding-right: 5vw;
    }

    .nav-item {
        margin: 0 10px;
    }

    .navbar-logo {
        padding-right: vw;
        padding-left: 2vw;
    }

    .form-inline {
        padding-right: 5vw;
        padding-left: 2vw;
        border-radius: 15px !important;
        display: flex;
    }

    .input-group {
        display: flex;
        width: 100%;
    }

    .form-control {
        border-radius: 20px !important;
        padding: 5px 15px;
    }

    .btn {
        border-radius: 20px !important;
        padding: 8px 15px;
        background-color: #f8f9fa;
    }

    .close-icon {
        font-size: 1.2rem;
        color: #000000;
        cursor: pointer;
    }
</style>
