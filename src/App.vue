<template>
  <div id="app">
      <Header></Header>
      <router-view></router-view> 
  </div>
</template>

<script>

import Header from './components/header/index.vue'

export default {
    components:{
        Header
    }
}
</script>
<style src="./assets/style/style.scss" lang="scss"></style>