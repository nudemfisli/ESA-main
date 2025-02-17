import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import IndividualProduct from '../views/IndividualProduct.vue';

const routes = [
    {
        path: '/home',
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
        path: '/services',
        name: 'Services',
        component: CategoryPage
    },
    {
        path: '/shipping',
        name: 'Shipping',
        component: IndividualProduct
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
