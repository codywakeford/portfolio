<!-- Nav.vue -->

<template>
    <nav :class="{ 'dark-background': darkBg }" id="nav">
        
        <div class="nav-left-content">
            <img src="../assets/cw-logo.png" alt="CW-Logo">
            <div>Cody Wakeford</div>
        </div>

        <div class="nav-right-content">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
        </div>
    
    </nav>
</template>

<style>
/* Global */
:root {
    --background-primary: rgba(9,19,29,255); /* Deep Navy Blue */
    --background-secondary: rgba(13,27,42,255); /* Lighter Navy */
    --text-primary: rgba(220,221,225,255); /* Light Gray */
    --text-secondary: rgba(136,145,158,255); /* Medium Gray */
    --accent-color: rgba(144,202,249,255); /* Soft Blue */
    --highlight-color: rgba(255,203,107,255); /* Warm Yellow */
}
nav img {
    width: 50px;
}
nav img:hover {
    animation: flip 1s;
}
nav {
    display: flex;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;

    width: 100%;
    max-width: 1800px;
    padding: 50px;
    margin-inline: auto;

    color: var(--text-primary);
    transition: background-color 0.5s;
}

.nav-left-content, .nav-right-content {
    display: flex;
    align-items: center;
    gap: 20px;

    font-size: 1.5rem;
    color:var(--text-primary);
}
.nav-content {
    display: flex;
    justify-content: space-between;
    width: 1200px;
}
nav a {
    font-size: 1rem;;
    text-decoration: none;
    color: var(--text-primary);
    transition: text-shadow 0.3s;
}

nav a:hover {
    cursor: pointer;
    transform: translateY(-2px);
    text-shadow: 3px 10px 50px white;
}

#name span {
    transition: transform 0.3s ease;
}

#name div:hover {
    cursor: pointer;
    animation: bounce 0.3s infinite;
}

@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}

@keyframes flip {
    0% { rotate: 0deg; }
    100% { rotate: 720deg; }
}

@media (max-width: 1600px) {
    .dark-background {
        background-color: var(--background-primary);
        
    }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const darkBg = ref(false);

const handleScroll = () => {
    const navHeight = document.getElementById('nav').offsetHeight;
    const windowHeight = window.innerHeight *0.75;
    const scrollPosition = window.scrollY;

    if (scrollPosition + navHeight > windowHeight) {
        darkBg.value = true;
    } else {
        darkBg.value = false;
    }
};



onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
