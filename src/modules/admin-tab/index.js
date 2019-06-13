import loader from '../../components/loader/index.vue'
import adminHead from './components/admin-head/index.vue'
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
    methods:{
        CurrentUser(){
            auth.onAuthStateChanged((user)=> {
                if (user) {
                } else {
                    // No user is signed in.
                    this.$router.push({name:"auth"})
                }
            });
        }
    },
    created(){
        this.CurrentUser();
    }

}