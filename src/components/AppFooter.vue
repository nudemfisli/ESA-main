<template>
    <footer class="footer">
        <div class="footer-trademark">
            <p>&#169; ESA</p>
        </div>
        <div class="footer-links">
            <ul>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact Us</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/shipping">Shipping</router-link></li>
            </ul>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
    html,
    body {
        height: 100%;
        margin: 0;
    }

    body {
        display: flex;
        flex-direction: column;
    }

    .footer {
        background-color: #9ca7a6;
        width: 100%;
        padding: 0.3em;
        position: relative;
        margin-top: auto;
    }

    .footer-trademark {
        color: #000000;
        margin-left: 2vh;
        display: flex;
        align-items: center;
        padding-top: 1vh;
    }

    .footer-links ul {
        list-style: none;
        padding: 0;
        align-items: center;
        padding-left: 7vw;
        padding-right: 7vw;
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
    }

    .footer-links a {
        text-decoration: none;
        color: #000000;
    }

    .footer-links a:hover {
        text-decoration: underline;
    }
</style>
