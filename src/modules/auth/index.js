import {mapActions, mapGetters, mapMutations} from 'vuex';
import {

} from "../../store/mutation-types";

import { auth } from '../../main';

export default{
    data() {
        return{
            email:'',
            password:''
        };
    },
    mounted(){

    },
    components:{
    },
    computed:{
        ...mapGetters({
        })
    },
    methods:{
        ...mapActions({
        }),
        ...mapMutations({
        }),
        auth(){
            auth.signInWithEmailAndPassword(this.email, this.password)
                .then((response)=>{
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error);
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        }
    },
    created(){
        auth.currentUser.getIdToken()
            .then((idToken)=>{
                console.log(idToken)
            })
        },
    firestore () {
        return {
        }
    }

}