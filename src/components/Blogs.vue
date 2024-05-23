<template>
    <section>
      <header>
        <h1>I like to write about web development too.</h1>
      </header>
      <div class="blog-list">
        <router-link
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="card"
        >
          <img :src="post.image" />
          <div class="text">
            <h2>{{ post.title }}</h2>
            <p>{{ post.blurb }}</p>
          </div>
        </router-link>
      </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await fetch('/blog-posts/posts.json');
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
section {
    padding: 0px 50px 150px 50px !important;
}

header h1 {
    text-align: left;
    margin-bottom: 25px;
}

.blog-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
}

.card {
    position: relative;

    border: 1px solid #fff;
    border-radius: 15px;
    max-width: 350px;
    max-height: 600px;
    min-height: 400px;
    overflow: hidden;
    user-select: none;

    text-align: left;

    transition: 0.15s box-shadow, 0.15s transform;
}

.card:hover {
    box-shadow: -2px -2px 5px lightblue, /* Top-left */
                2px -2px 5px lightblue,  /* Top-right */
                -2px 2px 5px lightblue,  /* Bottom-left */
                2px 2px 5px lightblue;   /* Bottom-right */
    cursor: pointer;
    transform: translate(0px, -10px);
}

.card:active {
    transform: translate(2px, 2px);
}

.card h2 {
    font-weight: bold;
    font-size: 1.25rem;
}

.card p {
    font-size: 1.25rem;
    font-weight: 100;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover; 
}

button {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 25;;

    background-color: var(--background-primary);
    border: none;
    color: #fff;
}
</style>