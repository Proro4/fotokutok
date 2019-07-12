import {mapActions, mapGetters, mapMutations} from 'vuex';
import loader from '@/components/loader/index.vue'
import {ABOUT} from "../../store/mutation-types";
export default{
    data(){
        return{

        }
    },
    created(){
      this.fetchAbout();
      console.log(this.aboutMe)
    },
    computed:{
        ...mapGetters({
            aboutMe:'about/aboutMe'
        }),
    },
    methods:{
        ...mapActions({
            fetchAbout:`about/${ABOUT}`
        })
    }
}