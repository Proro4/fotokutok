import {mapActions, mapGetters, mapMutations} from 'vuex';

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

                    auth.currentUser.getIdToken()
                        .then((idToken)=>{
                            localStorage.setItem('user_token', idToken);
                            let user_token = localStorage.getItem('user_token');
                            this.$router.push({name:"admin-tab"})
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                })
                .catch(function(error) {
                    console.log(error);
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        },
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
        this.CurrentUser()
    },

}