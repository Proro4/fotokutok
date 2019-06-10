import {mapMutations, mapGetters} from 'vuex';
import {
    POP_UP_SUC,
} from "@/store/mutation-types";


export default{
    methods:{
        ...mapMutations({
            popUpSuc: `home/${POP_UP_SUC}`
        }),
    },

}