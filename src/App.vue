<template>
    <router-view/>
</template>

<script setup></script>

<style>
/* Global */
:root {
    --background-primary: rgba(9,19,29,255); /* Deep Navy Blue */
    --background-secondary: rgba(13,27,42,255); /* Lighter Navy */
    --text-primary: rgba(220,221,225,255); /* Light Gray */
    --text-secondary: rgba(136,145,158,255); /* Medium Gray */
    --accent-color: rgba(144,202,249,255); /* Soft Blue */
    --highlight-color: rgba(255,203,107,255); /* Warm Yellow */

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
</style>