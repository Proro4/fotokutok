import carousel from 'vue-owl-carousel'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {NEWS_LIST, LINK_ID, NEWS_DETAIL} from "../../store/mutation-types";


export default{
    data() {
        return{
        };
    },
    mounted(){
    },
    components:{
        carousel
    },
    computed:{
        ...mapGetters({
            newsList:'home/newsList'
        })
    },
    methods:{
        ...mapActions({
            fetchContent: `home/${NEWS_LIST}`
        }),
        ...mapMutations({
            linkId: `home/${NEWS_DETAIL}`
        })
    },
    created(){
        this.fetchContent();
    }

}