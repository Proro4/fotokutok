import carousel from 'vue-owl-carousel'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {LINK_FOR_ID, NEWS_LIST, POP_UP_SUC} from "../../store/mutation-types";


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
            linkForId: `home/${LINK_FOR_ID}`,
            popUpSuc: `home/${POP_UP_SUC}`
        })
    },
    created(){
        this.fetchContent();
    }

}