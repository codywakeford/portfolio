<template>
    <main>
        <Nav/>
        <section v-if="post">
            <img :src="post.image" alt="Blog image">

            <h1>{{ post.title }}</h1>

            <p>{{ post.intro }}</p>

            <div v-for="section in post.sections" :key="section.heading">
                <h2>{{ section.heading }}</h2>
                <p>{{ section.content }}</p>
            </div>
            
        </section>
        <div v-else>
            <p>Loading...</p>
        </div>
        <Footer />
    </main>
</template>



<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref(null);

const fetchPosts = async () => {
  try {
    const response = await fetch('/blog-posts/posts.json');
    const posts = await response.json();
    const foundPost = posts.find(p => p.slug === route.params.slug);
    post.value = foundPost || {}; // Ensure post.value is always an object
    console.log(post.value.title);
  } catch (error) {
    console.error('Error fetching posts:', error);
    post.value = null;
  }
};

watch(
  () => route.params.slug,
  (newSlug) => {
    fetchPosts();
  },
  { immediate: true }
);

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    text-align: left;
}

section {
    display: flex;
    flex-direction: column;
    gap: 50px;

    padding-top: 150px;
    padding-bottom: 220px;
}

h1 {
    font-weight: bold;
    font-size: 2.5rem;
}

h2 {
    font-weight: bold;
}



</style>