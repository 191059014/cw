<template>
  <div id="app">
    <Header></Header>
    <Left></Left>
    <div class="center_content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Left from './components/Left'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {Header, Left, Footer}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .center_content {
    margin: 50px 0 50px 200px;
  }
</style>
