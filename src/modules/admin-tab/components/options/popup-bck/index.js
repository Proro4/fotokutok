import loader from '../../../../../components/loader/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {
    OPTIONS_CHANGE,
    POPUP_ALBUM,
    POPUP_BCK,
} from "../../../../../store/mutation-types";
import axios from "axios";

import VueGallery from 'vue-gallery';
import {db} from "@/main";
import { storage } from '@/main';
import {auth} from "@/main";

export default{
    data() {
      return{
          images: [],
          index: 1,
          openPopupColor: false,
          bckColor: "#000000",
          bckSelection: false,
          file:'',
          newImage: false,
      }
    },
    components:{
        loader,
        'gallery': VueGallery

    },
    computed:{
        ...mapGetters({
            optionsImages: 'options/optionsImages',
            options: 'options/optionsChangeBck'
        })
    },
    methods:{
        ...mapActions({
            changeBck: `options/${OPTIONS_CHANGE}`,
        }),
        ...mapMutations({
            popupAlbum: `options/${POPUP_ALBUM}`,
            popupBck: `options/${POPUP_BCK}`,
        }),
        changeColor(){
            this.options.bckColor = document.getElementById("bckColor").value;
            this.openPopupColor = false;
        },
        openColor(status){
            this.openPopupColor = status;
        },
        successBck(){
            if(this.options.bckSelection){
                if(this.newImage){
                    storage.ref().child('bck.jpg').getDownloadURL()
                        .then((url)=> {
                            this.options.bckUrl = url;
                        })
                        .finally(()=>{
                            console.log('finally');
                        })
                    storage.ref().child('bck.jpg').put(this.file).then(()=> {
                    });
                }
                this.changeBck(this.options);
            }else{

                this.changeBck(this.options);
            }
            this.popupBck(false);
        },
        processFile(event) {
            this.file = event.target.files[0];
            if(event.target.files[0]){
                this.newImage= true;
            }
        },
    }
}