import loader from '../../../../components/loader/index.vue'
import adminHead from '../admin-head/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {NEWS_LIST, ADD_POST} from "../../../../store/mutation-types";
import axios from "axios";


export default{
    data() {
        return{
            newsListOst: [],
            newPost:{
                id: "",
                title:'',
                date:'',
                imgUrl:"https://firebasestorage.googleapis.com/v0/b/fotokutok-618c4.appspot.com/o/img-1.jpg?alt=media&token=c7668afc-3c3e-4aa7-b157-24151f3b41c7",
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
        realDate(){
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();

            this.newPost.date = day + " " + month + " " + year;
        },
        addBlog(){
            // this.newsList.push(this.newPost);
            // this.newsListOst = this.newsList;
            axios.post(`https://fotokutok-618c4.firebaseio.com/news/news-detail.json`, this.newPost)
                .then(response =>{
                    console.log('then');
                })
                .catch(error => {
                    console.log('catch');
                })
                .finally(() =>{
                    console.log('finally');
                })

            return this.newsListOst;
        }
    },
    created(){
        this.fetchContent()
        this.realDate();
    },
    mounted(){
    },


}