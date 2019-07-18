<template>
  <div id="app">
      <Header></Header>
      <router-view></router-view>
      <Footer> </Footer>
      <div v-if="popUpSuc">
         <popUpSuc></popUpSuc>
      </div>
      <div v-if="getDeletePopup">
          <popUp></popUp>
      </div>
      <div v-if="popupAlbum">
        <popUpAlbum></popUpAlbum>
      </div>
  </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from 'vuex'

    import Header from './components/header/index.vue'
    import Footer from './components/footer/index.vue'
    import popUpSuc from './components/pop-up__suc/index.vue'
    import popUp from './modules/admin-tab/components/blogs/pop-up/index.vue'
    import popUpAlbum from './modules/admin-tab/components/options/popup-album/index.vue'

export default {
    components:{
        Header,
        Footer,
        popUpSuc,
        popUp,
        popUpAlbum,
    },
    computed: {
        ...mapGetters({
            popUpSuc: `home/popUpSuc`,
            getDeletePopup: `home/deletePopup`,
            popupAlbum: `options/popupAlbum`
        })
    }
}
</script>
<style src="./assets/style/style.scss" lang="scss"></style>
<link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
