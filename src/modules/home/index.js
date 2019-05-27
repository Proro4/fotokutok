import carousel from 'vue-owl-carousel'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {LINK_FOR_ID, NEWS_LIST, POP_UP_SUC} from "../../store/mutation-types";

import { db } from '../../main';

export default{
    data() {
        return{
            locations: null
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
        console.log(this.locations);
    },
    firestore () {
        return {
            locations: db.collection('news')
        }
    }

}