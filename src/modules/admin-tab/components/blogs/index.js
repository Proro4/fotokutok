import loader from '../../../../components/loader/index.vue'
import adminHead from '../admin-head/index.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {
    NEWS_LIST,
    DEL_POPUP,
    DEL_ID,
} from "../../../../store/mutation-types";
import {auth} from "@/main";


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
            newsList:'home/allList',
        })
    },
    methods:{
        ...mapActions({
            fetchContent: `home/${NEWS_LIST}`
        }),
        ...mapMutations({
            delId: `home/${DEL_ID}`,
            deletePopup: `home/${DEL_POPUP}`
        }),
        CurrentUser(){
            auth.onAuthStateChanged((user)=> {
                if (user) {
                } else {
                    // No user is signed in.
                    this.$router.push({name:"auth"})
                }
            });
        },
        deletePopupOpen(id){
            this.delId(id);
            this.deletePopup(true)

        }
    },
    created(){
        this.fetchContent();
        this.CurrentUser();
    }


}