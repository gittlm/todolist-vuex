<template>
  <div id="app">
    <Header></Header>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './pages/Header.vue'
import Footer from './pages/Footer.vue'
import List from './pages/List.vue'
import {items} from './store/state.js'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    List
  }
}
</script>

<style scoped>
#app{
  width: 600px;
  margin: 100px auto;
}
</style>
