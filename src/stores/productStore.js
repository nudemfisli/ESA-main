import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useProductStore = defineStore('productStore', () => {
    const products = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchProducts = async () => {
        loading.value = true;
        error.value = null;
        try {
            console.log('Fetching products...');
            const response = await axios.get('/products.json');

            if (!Array.isArray(response.data)) {
                throw new Error('Invalid data format');
            }

            products.value = response.data;
            console.log('Products fetched:', products.value);
        } catch (err) {
            console.error('Error fetching products:', err.message);
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { products, loading, error, fetchProducts };
});
