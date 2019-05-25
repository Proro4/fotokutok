<template>
  <div id="app">
      <Header></Header>
      <router-view></router-view>
      <Footer> </Footer>
      <div v-if="popUpSuc == true">
         <popUpSuc></popUpSuc>
      </div>
  </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from 'vuex'

    import Header from './components/header/index.vue'
    import Footer from './components/footer/index.vue'
    import popUpSuc from './components/pop-up__suc/index.vue'

export default {
    components:{
        Header,
        Footer,
        popUpSuc
    },
    computed: {
        ...mapGetters({
            popUpSuc: `home/popUpSuc`
        })
    }
}
</script>
<style src="./assets/style/style.scss" lang="scss"></style>