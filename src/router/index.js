import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import IndividualProduct from '../views/IndividualProduct.vue';
import ProductsPage from '../views/ProductsPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsPage
    },

    // route to the different categories fetched in JSON
    {
        path: '/product/:category',
        name: 'ProductCategory',
        component: CategoryPage,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
