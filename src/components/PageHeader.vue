<template>
    <div class="banner">
        <!-- Use the passed title for the header -->
        <h3 class="header-title">{{ title }}</h3>
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        }
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

    .header-title {
        color: #fff;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
    }
</style>
