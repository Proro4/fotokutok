import loader from '../../components/loader/index.vue'
import { mapActions,mapGetters, mapMutations} from 'vuex';
import {
    BLOG_DETAIL,
    BLOG_DETAIL_LIST,
    RESET_NEWS_DETAIL,
    NEWS_ADD_VIEW
} from "../../store/mutation-types";


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
            newsRealId:'home/newsRealId',
        })
    },
    created(){
        this.blogDetail(this.currentId);
        this.blogDetailList();
    },
    methods:{
        ...mapActions({
            blogDetailList: `home/${BLOG_DETAIL_LIST}`,
            newsAddView: `home/${NEWS_ADD_VIEW}`
        }),
        ...mapMutations({
            blogDetail: `home/${BLOG_DETAIL}`,
            reset: `home/${RESET_NEWS_DETAIL}`,
        }),
        addView(){
            this.newsDetail.view = this.newsDetail.view + 1;
            let addNewsView = {
                linkId: this.newsRealId,
                view:this.newsDetail.view
            }
            this.newsAddView(addNewsView)
        }
    },
    destroyed(){
        this.reset();
        this.addView();
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