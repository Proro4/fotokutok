import loader from '../../components/loader/index.vue'
import { mapActions,mapGetters, mapMutations} from 'vuex';
import {BLOG_DETAIL, BLOG_DETAIL_LIST, RESET_NEWS_DETAIL} from "../../store/mutation-types";


export default{
    data() {
        return{
            currentId: +this.$router.currentRoute.params.id,
        };
    },
    mounted(){
    },
    components:{
        loader
    },
    computed:{
        ...mapGetters({
            newsDetail:'home/newsDetail',
        })
    },
    created(){
        this.blogDetail(this.currentId);
        this.blogDetailList();
    },
    methods:{
        ...mapActions({
            blogDetailList: `home/${BLOG_DETAIL_LIST}`
        }),
        ...mapMutations({
            blogDetail: `home/${BLOG_DETAIL}`,
            reset: `home/${RESET_NEWS_DETAIL}`
        })
    },
    destroyed(){
        this.reset();
    },
    directives: {
        lazyLoad: {
            inserted: function (el) {
                let imgBlock = el.children[0];
                imgBlock.addEventListener("load", () => {
                    el.classList.add("loaded")
                });
            }
        }
    }

}