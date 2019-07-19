import adminHead from '../admin-head/index.vue'
import {mapGetters,mapActions, mapMutations} from 'vuex'
import {auth} from "@/main";
import {
    OPTIONS,
    OPTIONS_SAVE, POPUP_ALBUM
} from "../../../../store/mutation-types";
import loader from '../../../../components/loader/index.vue'
import VueGallery from "vue-gallery";


export default {
    data() {
        return{
            tile: false,
            index: 0,
            bckImg: null,
        };
    },
    components: {
        adminHead,
        loader,
        'gallery': VueGallery
    },
    computed: {
        ...mapGetters({
            options: 'options/options'
        })
    },
    watch: {

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