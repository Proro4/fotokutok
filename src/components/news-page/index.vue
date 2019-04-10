<template>
    <div class="news-page">
        <div class="container">
            <div class="row-m" v-if="newsDetail != null ">
                <div class="news-page__content-img">
                    <img :src="newsDetail.imgUrl" alt="">
                </div>
                <div class="news-page__content">
                    <div class="news-page__content-date">
                        17.03.2019
                    </div>
                    <div class="news-page__content-title">
                        {{newsDetail.title}}
                    </div>
                    <div class="news-page__content-text">
                        {{newsDetail.text}}
                    </div>
                </div>
                <a class="news-page__back" @click="$router.go(-1)">Вернуться назад</a>

            </div>
            <div class="row-m" v-else>
                <loader></loader>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>