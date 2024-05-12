<!-- Portfolio Home -->
<template>
    <main>
        <Nav/>
        <Head/>
        <About/>
        <Projects />
    </main>
</template>

<script setup>
import Nav from '../components/Nav.vue'
import Head from '../components/Head.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'

</script>

<style>
/* Global */
* {
    box-sizing: border-box;
}
:root {
    --background-primary: rgba(9,19,29,255); /* Deep Navy Blue */
    --background-secondary: rgba(13,27,42,255); /* Lighter Navy */
    --text-primary: rgba(220,221,225,255); /* Light Gray */
    --text-secondary: rgba(136,145,158,255); /* Medium Gray */
    --accent-color: rgba(144,202,249,255); /* Soft Blue */
    --highlight-color: rgba(255,203,107,255); /* Warm Yellow */
}
html, body {
    scroll-behavior: smooth;
    margin: 0;
    background-color: var(--background-primary);
}

h1,h2,h3,h4,p {
    margin: 0;
    padding: 0;
}


h1 {
    font-size: 4rem;
}

p {
    font-size: 1.75rem;
    font-weight: 100;
}

section {
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
    
    padding: 200px 50px; 

}
</style>
