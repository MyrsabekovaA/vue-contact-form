<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from "@/components/MainPage.vue";

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="scss">
body{
  height: 100vh;
  width: 100%;
  margin: 0;
  background: rgb(255,255,255);
  //background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(221,249,207,1) 97%, rgba(201,244,175,1) 100%);

  #app {
    height: 100vh;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
}
</style>
