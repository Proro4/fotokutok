import loader from '../../../../components/loader/index.vue'
import adminHead from '../admin-head/index.vue'
import {mapActions, mapGetters} from 'vuex';
import {NEWS_LIST} from "../../../../store/mutation-types";


export default{
    data() {
        return{
        };
    },
    components:{
        loader,
        adminHead
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