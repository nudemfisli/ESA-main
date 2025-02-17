import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useProductStore = defineStore('productStore', () => {
    const products = ref([]);

    const fetchProducts = async () => {
        try {
            console.log('Fetching products...');
            const response = await axios.get('/products.json');
            if (!Array.isArray(response.data))
                throw new Error('Invalid data format');
            products.value = response.data;
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    return { products, fetchProducts };
});
