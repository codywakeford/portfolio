<template>
  <router-view v-slot=" { Component }">
    <transition name="fade" mode="out-in">
        <component :is="Component" />
    </transition>
  </router-view>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';

const cursorGlow = document.createElement('div');
cursorGlow.classList.add('cursor-glow');

let lastMouseX = 0;
let lastMouseY = 0;

const updateCursorGlowPosition = (x, y) => {
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  cursorGlow.style.transform = `translate(${x + scrollX - 100}px, ${y + scrollY - 100}px)`;
};

const onMouseMove = (e) => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  updateCursorGlowPosition(lastMouseX, lastMouseY);
};

const onScroll = () => {
  updateCursorGlowPosition(lastMouseX, lastMouseY);
};

onMounted(() => {
  const appContainer = document.getElementById('app');
  appContainer.appendChild(cursorGlow);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('scroll', onScroll);
  document.body.removeChild(cursorGlow);
});
</script>
<style>
/* Global */
:root {
    --background-primary: rgba(9,19,29,255); /* Deep Navy Blue */    
    --background-secondary: rgba(13,27,42,255); /* Lighter Navy */
    --text-primary: rgba(220,221,225,255); /* Light Gray */
    --text-secondary: rgba(136,145,158,255); /* Medium Gray */
    --accent-color: rgba(144,202,249,255); /* Soft Blue */


    --font-a: "Reddit Sans", sans-serif, Arial;
}

#app {
  font-family: "Reddit Sans", sans-serif, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.1rem !important;
  }

  p {
    font-size: 1.2rem;
  }

  li {
    font-size: 1.2rem !important;
  }

  a {
    font-size: 1.2rem !important;
  }
}

@media (max-width: 500px) {
    p, li {
      font-size: 1rem !important;
    }

    h1 {
      font-size: 1.5rem !important;
    }

    h2 {
      font-size: 1rem !important;
    }
}

.cursor-glow {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;
    /* box-shadow: 0 0 50px rgba(52, 78, 199, 1),
                0 0 100px rgba(52, 78, 199, 0.9),
                0 0 150px rgba(52, 78, 199, 0.8),
                0 0 200px rgba(52, 78, 199, 0.7),
                0 0 250px rgba(52, 78, 199, 0.5),
                0 0 300px rgba(52, 78, 199, 0.5),
                0 0 350px rgba(52, 78, 199, 0.5),
                0 0 400px rgba(52, 78, 199, 0.5),
                0 0 450px rgba(52, 78, 199, 0.5),
                0 0 500px rgba(52, 78, 199, 0.5);  */
    background-color: rgba(52, 78, 199, 1);
    opacity: 0.8;
    
    pointer-events: none;
    filter: blur(100px);
    
    transition: transform 0.0000001s ease-out;
    z-index: 1;
}

.fade-enter-from, .fade-leave-active {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-out;
}
</style>

<style scoped>
</style>