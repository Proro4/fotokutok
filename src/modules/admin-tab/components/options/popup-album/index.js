import loader from '../../../../../components/loader/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {POPUP_ALBUM} from "../../../../../store/mutation-types";
import axios from "axios";

import VueGallery from 'vue-gallery';

export default{
    data() {
      return{
          images: [],
          index: 0
      }
    },
    components:{
        loader,
        'gallery': VueGallery

    },
    computed:{
        ...mapGetters({
            optionsImages: 'options/optionsImages'
        })
    },
    methods:{
        ...mapMutations({
            popupAlbum: `options/${POPUP_ALBUM}`
        }),
    }
}