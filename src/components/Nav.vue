<!-- Nav.vue -->

<template>
    <div>
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

        <nav style="" id="mobileNav">
            <div class="nav-left-content">
                <img src="../assets/cw-logo.png" alt="CW-Logo">
                <div>Cody Wakeford</div>
            </div>

            <div class="nav-right-content">
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </nav>
    </div>
</template>

<style scoped>

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
    font-size: 1.25rem;;
    text-decoration: none;
    color: var(--text-primary);
    transition: text-shadow 0.3s;
    font-family: var(--font-a);
}

nav a:hover {
    cursor: pointer;
    transform: translateY(-1px);
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

#mobileNav {
    align-items: center;
    justify-content: space-between;
    display: none;
}

#mobileNav button {
    
    background-color: rgba(0,0,0,0);
    color: white;
    border: none;
    font-size: 1.5rem;
}

#mobileNav button:active {
    transform: translate(2px, 2px);
}

@media (max-width: 680px) {
    #nav {
        display: none;

    }

    #mobileNav {
        display: flex;

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
