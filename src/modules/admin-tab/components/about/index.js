import loader from '../../../../components/loader/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import adminHead from '../admin-head/index.vue';
import {
    ABOUT,
    ABOUT_CHANGE
} from '../../../../store/mutation-types.js';
export default {
    data(){
      return{
        }
    },
    components:{
        adminHead,
        loader
    },
    computed:{
        ...mapGetters({
            aboutMe: `about/aboutMe`
        })
    },
    created(){
      this.fetchAbout();
    },
    methods:{
        ...mapActions({
            fetchAbout: `about/${ABOUT}`,
            aboutChange: `about/${ABOUT_CHANGE}`
        }),
        pageSave(){
            this.aboutChange(this.aboutMe)
                .then(
                this.$toaster.success('Изменения сохранены')
            )
        }
    }
}