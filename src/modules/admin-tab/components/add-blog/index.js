import loader from '../../../../components/loader/index.vue'
import adminHead from '../admin-head/index.vue'
import {mapActions, mapGetters} from 'vuex';
import {NEWS_LIST} from "../../../../store/mutation-types";


export default{
    data() {
        return{
            newsListOst: null,
            newPost:{
                id: "",
                title:''
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
        addBlog(){
            this.newsList.push(this.newPost)
            console.log(this.newsList)
        }
    },
    created(){
        this.fetchContent()
    },
    mounted(){
    },


}