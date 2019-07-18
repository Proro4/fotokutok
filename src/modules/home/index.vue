<template>
    <div class="container">
        <div class="row-m">
            <div class="home-top">
                <div class="home-slider"
                     v-show="options.slider"
                     v-if="sliderList != null">
                    <carousel
                            :items="1"
                            :loop="true"
                            :nav="false">
                        <div class="home-slider__item"
                            v-for="(item, indexSlider) in sliderList"
                            :key="indexSlider"
                             v-lazyLoad>
                            <img :src="item.imgUrl">
                            <div class="home-slider__item-content">
                                <div class="home-slider__item-title">
                                    {{item.title}}
                                </div>
                                <div class="home-slider__item-text">
                                    {{item.textShort}}
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </div>
            <div class="home-content">
                <div class="news">
                    <div class="news__list">
                        <div class="news__list-block"
                            v-if="newsList != null"
                            v-for="(item, index) in newsList"
                            @click="linkForId(Object.keys(newsList)[item.id])"
                            :key="index">
                            <router-link
                                    :to="{name:'news-page', params: {id: item.id}}"
                                    class="news__list-item">
                                <div class="news__item-img" v-lazyLoad>
                                    <img v-if="item.imgUrl != null" :src="item.imgUrl" alt="" >
                                    <img v-else src="https://firebasestorage.googleapis.com/v0/b/fotokutok-618c4.appspot.com/o/img-1.jpg?alt=media&token=8176420f-8c06-4351-ae1e-d1929ab53ec8" alt="">
                                </div>
                                <div class="news__item-content">
                                    <div class="news__item-title">
                                        {{item.title}}
                                    </div>
                                    <div class="news__item-info">
                                        <div class="news__item-date"> {{item.date}}</div>
                                        <!--<div class="news__item-view">3</div>-->
                                    </div>
                                    <div class="news__item-text">
                                        {{item.textShort}}
                                    </div>
                                    <div class="news__item-more">
                                        Далее
                                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464465C11.9763 0.269203 11.6597 0.269203 11.4645 0.464465C11.2692 0.659727 11.2692 0.97631 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM4.37114e-08 4.5L15 4.5L15 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div v-else>
                            <loader></loader>
                        </div>
                        <div class="news__list-more" v-if="newsListLimit[1] < newsListMax">
                            <v-btn flat small @click="changeLimit()">
                                загрузить еще
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>