<template>
    <AppNavbar />
    <ContactInformation />
</template>

<script setup>
    import AppNavbar from '../components/AppNavbar.vue';
    import ContactInformation from '../components/ContactInformation.vue';
</script>

<script>
    export default {
        name: 'ContactPage'
    };
</script>
