import loader from '../../../../../components/loader/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {DEL_POPUP} from "../../../../../store/mutation-types";
import axios from "axios";

export default{
    component:{
        loader,
    },
    computed:{
        ...mapGetters({
            delContent: `home/deleteBlog`,
            delId: `home/delId`
        })
    },
    methods:{
        ...mapMutations({
            deletePopup: `home/${DEL_POPUP}`
        }),
        deleteBlog(){

            axios.delete(`https://fotokutok-618c4.firebaseio.com/news/news-detail/`+this.delId+`.json`)
                .then(response =>{
                    console.log('then');
                })
                .catch(error => {
                    console.log('catch');
                })
                .finally(() =>{
                    console.log('finally');
                    this.$router.push({name:"admin-tab"})
                })
        }
    }
}