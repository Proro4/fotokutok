import loader from '../../../../components/loader/index.vue'
import adminHead from '../admin-head/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {NEWS_LIST, ADD_POST} from "../../../../store/mutation-types";


export default{
    data() {
        return{
            newsListOst: null,
            newPost:{
                id: "",
                title:'',
                imgUrl:"",
                textShort:"",
                text:"",
            }
        };
    },
    components:{
        loader,
        adminHead
    },
    computed:{
        ...mapGetters({
            newsList:'home/newsList',
        })
    },
    methods:{
        ...mapActions({
            fetchContent: `home/${NEWS_LIST}`,
        }),
        ...mapMutations({
            sendNewBlog: `home/${ADD_POST}`,
        }),
        addBlog(){
            this.newsList.push(this.newPost);
            this.newsListOst = this.newsList;
            return this.newsListOst;
        }
    },
    created(){
        this.fetchContent()
    },
    mounted(){
    },


}