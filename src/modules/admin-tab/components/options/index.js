import adminHead from '../admin-head/index.vue'
import {mapGetters,mapActions, mapMutations} from 'vuex'
import {auth} from "@/main";
import {
    OPTIONS,
    OPTIONS_SAVE, POPUP_ALBUM
} from "../../../../store/mutation-types";
import loader from '../../../../components/loader/index.vue'


export default {
    data() {
        return{
            tile: false,
        };
    },
    components: {
        adminHead,
        loader
    },
    computed: {
        ...mapGetters({
            options: 'options/options'
        })
    },
    created() {
        this.CurrentUser();
        this.fetchOptions();
    },
    methods: {
        ...mapActions({
           fetchOptions: `options/${OPTIONS}`,
            postOptions: `options/${OPTIONS_SAVE}`,
        }),
        ...mapMutations({
            popupAlbum: `options/${POPUP_ALBUM}`
        }),
        saveOptions(){
            this.postOptions(this.options);
        },
        CurrentUser() {
            auth.onAuthStateChanged((user) => {
                if (user) {
                } else {
                    // No user is signed in.
                    this.$router.push({name: "auth"})
                }
            });
        },
    }
}