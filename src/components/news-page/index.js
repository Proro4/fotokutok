import carousel from 'vue-owl-carousel'
import loader from '../../components/loader/index.vue'
import {mapActions, mapGetters,mapMutations} from 'vuex';
import {NEWS_DETAIL,RESET_NEWS_DETAIL} from "../../store/mutation-types";


export default{
    data() {
        return{
            currentId: +this.$router.currentRoute.params.id,
        };
    },
    mounted(){
    },
    components:{
        carousel,
        loader
    },
    computed:{
        ...mapGetters({
            newsDetail:'home/newsDetail'
        })
    },
    methods:{
        ...mapActions({
            fetchContent: `home/${NEWS_DETAIL}`
        }),
        ...mapMutations({
            reset: `home/${RESET_NEWS_DETAIL}`
        })
    },
    created(){
        this.fetchContent(this.currentId);
    },
    destroyed(){
        this.reset();
    }

}