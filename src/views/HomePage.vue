<!-- Portfolio Home -->
<template>
    <main>
        <Nav/>
        <Head/>
        <About/>
        <Projects />
        <Footer />
    </main>
</template>

<script setup>
import Nav from '../components/Nav.vue'
import Head from '../components/Head.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Footer from '../components/Footer.vue'

</script>

<style>
/* Global */
* {
    box-sizing: border-box;
}

html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    margin: 0;
    background-color: var(--background-primary);
}

h1,h2,h3,h4,p,li {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    color: var(--text-primary)
}
a {
    text-decoration: none;;
}
h1 {
    font-size: 2.2rem;
    font-weight: 400;
}

h2 {
    font-size: 1.75rem;
    font-weight: 200;
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
