import {mapGetters,mapActions, mapMutations} from 'vuex'

import {
    OPTIONS, OPTIONS_SAVE,
} from "../../store/mutation-types";

export default {

    computed: {
        ...mapGetters({
            options: 'options/options',
        })
    },
    methods: {
        created() {
            this.fetchOptions();
        },
        ...mapActions({
            fetchOptions: `options/${OPTIONS}`,
        }),
    }
}