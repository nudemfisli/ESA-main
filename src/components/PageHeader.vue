<template>
    <div class="banner">
        <!-- Props for dynamic title as it needs to be changed for different pages-->
        <h3 class="header-title">{{ title }}</h3>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    const searchQuery = ref('');

    console.log('searchQuery value:', searchQuery.value);

    onMounted(() => {
        console.log('Banner component is mounted!');
    });

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
    .header-title {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-transform: uppercase;
    }
</style>
