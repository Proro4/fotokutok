import carousel from 'vue-owl-carousel'
import {mapActions, mapGetters} from 'vuex';
import {NEWS_LIST} from "../../store/mutation-types";


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
        })
    },
    created(){
        this.fetchContent();
    }

}