<template>
    <section id="footerSection">
        <img ref="rocketRef" class="rocket-image" src="../assets/rocket.png" alt="image of a rocket">
        <footer>
            <div class="logo-box"><img src="../assets/cw-logo.png" alt="Logo" class="logo"></div>
            <div class="left-content">
                <ul>
                    <a @click.prevent="navigateTo('#home')"><li>Home</li></a>
                    <a @click.prevent="navigateTo('#about')"><li>About Me</li></a>
                    <a @click.prevent="navigateTo('#projects')"><li>Projects</li></a>
                </ul>
            </div>
            <div class="right-content">Cody Wakeford UI</div>
        </footer>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';


const rocketRef = ref(null);
let footerSection;

const launchOff = () => {
    // Calculate the height of the webpage
    const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log(pageHeight);

    // Translate the rocket image by the height of the webpage
    if (rocketRef.value) {
        console.log("true")
        rocketRef.value.style.transition = 'transform 1.5s'; // Add transition for smooth animation
        rocketRef.value.style.transform = `translateY(${-pageHeight - 500 }px)`;
        rocketRef.value.style.zIndex = '500';
        footerSection.style.overflow = 'visible'

        // Reset the rocket position after the animation //
        rocketRef.value.addEventListener('transitionend', handleTransitionEnd);
    }
};

const handleTransitionEnd = () => {
    // Reset the transform and z-index properties
    if (rocketRef.value) {
        setTimeout(() => {
            rocketRef.value.style.transition = 'none'; // Remove transition
            rocketRef.value.style.transform = 'none'; // Reset transform
            rocketRef.value.style.zIndex = '3'; // Reset z-index
            footerSection.style.overflow = 'hidden';
        }, 200); 
    }
};

onMounted(() => {
    footerSection = document.getElementById('footerSection');
    console.log(footerSection)
    
});

const router = useRouter();
const route = useRoute();

const navigateTo = (hash) => {
  if (route.name === 'Home') {
    document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
  } else {
    router.push({ path: '/', hash });
  }
};
</script>

<style scoped>
    section {
        position: relative;
        overflow: hidden;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;

        background-color: var(--background-secondary);
        
        position: absolute;
        bottom: 25px;
        left: 0;
        right: 0;

        margin-inline: 50px;
        padding: 0 50px 0 150px;
        min-height: 100px;
        border-radius: 25px;;

        overflow: hidden !important;
    }


/* Logo */
    .logo-box {
        position: absolute;
        left: 75px;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
    }

    .logo {
        height: 50px;
        transform-origin: center;
    }
    .logo:hover {
        
        animation: flip 1s;
    }

/* Rocket */
    .rocket-image {
        position: absolute;
        left: -30px;
        bottom: -40px;
        z-index: 3;
    }

/* Left content items */
    .left-content ul {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        position: relative;
        list-style-type: none;
        z-index: 5;;
    }

    .left-content li:hover {
        cursor: pointer;
        text-shadow: 5px 10px 50px white;
        transition: text-shadow 0.3s;
    }

    @keyframes flip {
        0% { rotate: 0deg; }
        100% { rotate: 720deg; }
    }
</style>