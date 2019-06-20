<template>
    <div class="news-page">
        <div class="container">
            <div class="row-m" v-if="newsDetail != null ">
                <div class="news-page__content-img" v-lazyLoad>
                    <img :src="newsDetail.imgUrl" alt="">
                </div>
                <div class="news-page__content">
                    <div class="news-page__content-date">
                        {{newsDetail.date}}
                    </div>
                    <div class="news-page__content-title" v-html="newsDetail.title">  </div>
                    <div class="news-page__content-text" v-html="newsDetail.text">  </div>
                </div>
                <v-btn small flat class="news-page__back" :to="{name:'home'}"><font-awesome-icon class="angle-left" icon="angle-left" /> Вернуться назад</v-btn>

            </div>
            <div class="row-m" v-else>
                <loader></loader>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>