<template>
  <div id="app">
      <Header></Header>
      <router-view></router-view>
      <Footer> </Footer>
  </div>
</template>

<script>

    import Header from './components/header/index.vue'
    import Footer from './components/footer/index.vue'

export default {
    components:{
        Header,
        Footer
    }
}
</script>
<style src="./assets/style/style.scss" lang="scss"></style>