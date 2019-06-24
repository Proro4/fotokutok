import loader from '../../../../components/loader/index.vue'
import adminHead from '../admin-head/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {NEWS_DETAIL_EDIT, ADD_POST, POP_UP_SUC} from "../../../../store/mutation-types";
import axios from "axios";
import {db} from "../../../../main";
import { storage } from '@/main';
import {auth} from "@/main";
let imgUrl = '';
export default{
    data() {
        return{
            loading:false,
            fileName:'',
            gsReference: null,
            storageRef:null,
            newsListOst: [],
            newPost:{
                id: "",
                title:'',
                date:'',
                file:'',
                imgUrl:"https://firebasestorage.googleapis.com/v0/b/fotokutok-618c4.appspot.com/o/no-photo.jpg?alt=media&token=a904dc5f-3095-42ac-b93b-60c5cb6fb339",
                textShort:"",
                text:"",
            },
            currentId: this.$router.currentRoute.params.id,
        };
    },
    components:{
        loader,
        adminHead
    },
    computed:{
        ...mapGetters({
            newsDetailList:'home/newsDetailList',
            storage:`home/storage`,
            // galleryList: 'gallery/galleryList'
        })
    },
    methods:{
        ...mapActions({
            fetchContent: `home/${NEWS_DETAIL_EDIT}`,
        }),
        ...mapMutations({
            sendNewBlog: `home/${ADD_POST}`,
            popUpSuc: `home/${POP_UP_SUC}`
        }),
        realDate(){
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            console.log(month);
            if(month <= 9){
                month = "0"+ month;
            }
            var day = dateObj.getUTCDate();
            if(day <= 9){
                day = "0"+ day;
            }
            var year = dateObj.getUTCFullYear();

            this.newPost.date = day + " " + month + " " + year;
        },
        addBlog(){
            if(this.newPost.title == ''){
                alert('Заполните название');
            }else if(this.newPost.textShort == ''){
                alert('Заполните краткое описание');
            }else if(this.newPost.text == ''){
                alert('Заполните описание');
            }else if(this.newPost.file == ''){
                alert('добавте фото');
            }
            storage.ref().child(this.fileName).put(this.newPost.file).then((snapshot) => {
                console.log('Uploaded a blob or file!');

                storage.ref().child(this.fileName).getDownloadURL()
                    .then((url)=> {
                        this.newPost.imgUrl = url;

                    })
                    .finally(()=>{

                        axios.post(`https://fotokutok-618c4.firebaseio.com/news/news-detail.json`, this.newPost)
                            .then(response =>{
                                console.log('then');
                            })
                            .catch(error => {
                                console.log('catch');
                            })
                            .finally(() =>{
                                console.log('finally');
                                this.$router.push({name:"admin-tab"})
                            })
                    })

            });
            return this.newsListOst;
        },

        watchText(){
            if(this.newPost.title = ''){
            }else{
            }
        },
        storageLink(){
            let storageRef = storage.ref();
        },
        processFile(event) {
            this.fileName = event.target.files[0].name;
            this.newPost.file = event.target.files[0];
        },
        CurrentUser(){
            auth.onAuthStateChanged((user)=> {
                if (user) {
                } else {
                    // No user is signed in.
                    this.$router.push({name:"auth"})
                }
            });
        },
        addParagraph(){
            this.newPost.text = this.newPost.text + '<br>'
        },
        addBold(){
            this.newPost.text = this.newPost.text + '<b></b>'
        },
        addList(){
            this.newPost.text = this.newPost.text + '\n<ul>\n \t<li></li>\n</ul>'
        },
        addUnderline(){
            this.newPost.text = this.newPost.text + '<u></u>'
        },
        addStrike(){
            this.newPost.text = this.newPost.text + '<strike></strike>'
        }
    },
    watch:{

    },
    created(){
        this.fetchContent(this.currentId);
        this.storageLink();
        this.watchText();
        this.realDate();
        this.CurrentUser();
        this.newPost.date = this.newsDetailList.date;
        this.newPost.title = this.newsDetailList.title;
        this.newPost.text = this.newsDetailList.text;
        this.newPost.textShort = this.newsDetailList.textShort;
    },
    mounted(){
    },
    firestore () {
        return {
            locations: db.collection('news'),
        }
    }


}