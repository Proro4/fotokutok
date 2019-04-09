import carousel from 'vue-owl-carousel'
import axios from 'axios';

export default{
    data() {
        return{
            info: null
        };
    },
    mounted(){
        axios
            .get('https://fotokutok-618c4.firebaseio.com/news/news-detail.json')
            .then(response => (this.info = response));
    },
    components:{
        carousel
    }
}