    import carousel from 'vue-owl-carousel'
    import loader from '@/components/loader/index.vue'
    import {mapActions, mapGetters, mapMutations} from 'vuex';
    import {
    LINK_FOR_ID,
    NEWS_LIST,
    POP_UP_SUC,
    NEWS_LIST_LIMIT, OPTIONS
} from "../../store/mutation-types";

    import { db } from '../../main';

    export default{
        data() {
            return{
                newStorage: [],
                locations: null,
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
                newsList:'home/newsList',
                allList: 'home/allList',
                newsListMax:'home/newsListMax',
                newsListLimit:'home/newsListLimit',
                sliderList:'home/sliderList',
                options:'options/options',
            })
        },
        methods:{
            ...mapActions({
                fetchContent: `home/${NEWS_LIST}`,
                fetchOptions: `options/${OPTIONS}`,
            }),
            ...mapMutations({
                linkForId: `home/${LINK_FOR_ID}`,
                popUpSuc: `home/${POP_UP_SUC}`,
                newsLimit: `home/${NEWS_LIST_LIMIT}`,

            }),
            changeLimit(){
                this.newsListLimit[1] = this.newsListLimit[1] + 4;
                this.fetchContent();
                this.newsLimit(this.newsListLimit)
            },
        },
        created(){
            this.fetchContent();
            this.fetchOptions();
            this.newsLimit(this.newsListLimit)
            console.log(this.news);
        },
        firestore () {
            return {
                news: db.collection('news')
            }
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