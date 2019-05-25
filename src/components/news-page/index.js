import carousel from 'vue-owl-carousel'
import loader from '../../components/loader/index.vue'
import {mapActions, mapGetters,mapMutations} from 'vuex';
import {NEWS_DETAIL,RESET_NEWS_DETAIL,LINK_FOR_ID} from "../../store/mutation-types";


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
            newsDetail:'home/newsDetail',
            linkForId: `home/linkForId`
        })
    },
    methods:{
        ...mapActions({
            fetchContent: `home/${NEWS_DETAIL}`,
        }),
        ...mapMutations({
            reset: `home/${RESET_NEWS_DETAIL}`
        })
    },
    created(){
        this.fetchContent(this.linkForId);
    },
    destroyed(){
        this.reset();
    }

}