<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  
}
</style>