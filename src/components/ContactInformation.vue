<template>
    <div class="contact-container">
        <h1 class="contact-title">Contact</h1>
        <p class="contact-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus repellendus aliquid enim, sequi atque voluptatibus
            aspernatur. Explicabo non iste unde aperiam! Nam nisi alias
            recusandae. Exercitationem quis error tenetur distinctio!
        </p>
        <div class="contact-info">
            <a :href="`tel:${phone}`" class="contact-item">
                <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                <strong> Phone number: </strong>
                {{ phone }}
            </a>
            <a :href="`mailto:${email}`" class="contact-item">
                <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                <strong> Email:</strong>
                {{ email }}
            </a>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    library.add(faPhone, faEnvelope);

    const phone = ref('+123 456 789');
    const email = ref('esaautodesign@gmail.com');
</script>

<style scoped>
    .contact-container {
        margin-top: 10em;
        margin-bottom: 10em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
    }

    .contact-title {
        text-transform: uppercase;
        font-size: 2em;
        padding-bottom: 0.5em;
    }

    .contact-text {
        text-align: justify;
        max-width: 30em;
        margin-bottom: 20px;
    }

    .contact-info {
        display: flex;
        justify-content: flex-start;
        margin-right: 13em;
        flex-direction: column;
        max-width: 30em;
        gap: 10px;
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        color: black;
        width: 100%;
        justify-content: flex-start;
    }

    .icon {
        font-size: 20px;
        color: #0c2927e2;
    }
</style>
