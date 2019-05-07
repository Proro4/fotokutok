<template>
    <div class="container">
        <div class="row-m">
            <div class="home-top">
                <div class="home-slider">
                    <carousel
                            :items="1"
                            :loop="true"
                            :nav="false">
                        <div class="home-slider__item">
                            <img src="../../assets/img/img-1.jpg">
                            <div class="home-slider__item-content">
                                <div class="home-slider__item-title">
                                    Последня новость #1
                                </div>
                                <div class="home-slider__item-text">
                                    Краткое описание последне новости под номером 1
                                </div>
                            </div>
                        </div>
                        <div class="home-slider__item">
                            <img src="../../assets/img/img-2.jpg">
                            <div class="home-slider__item-content">
                                <div class="home-slider__item-title">
                                    Последня новость #2
                                </div>
                                <div class="home-slider__item-text">
                                    Краткое описание последне новости под номером 2
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
                <div class="news-filter">
                    <div class="news-filter__title">
                        Фильтрировать новости
                    </div>
                    <ul class="news-filter__list">
                        <li class="news-filter__list-item">
                            <label>
                                <input type="radio" name="filer-type"><span class="news-filter__item-span">По просмотрам</span>
                            </label>
                        </li>
                        <li class="news-filter__list-item">
                            <label>
                                <input type="radio" name="filer-type"><span class="news-filter__item-span">По дате</span>
                            </label>
                        </li>
                        <li class="news-filter__list-item">
                            <label>
                                <input type="radio" name="filer-type"><span class="news-filter__item-span">По популярности </span>
                            </label>
                        </li>
                        <li class="news-filter__list-item date">
                            За период времени
                            <span class="news-filter__date">
                                <p>от</p><input type="date" placeholder="__ . __ . ____">
                            </span>
                            <span class="news-filter__date">
                                <p>до</p><input type="date" placeholder="__ . __ . ____">
                            </span>
                        </li>
                    </ul>
                    <div class="news-filter__butt">
                        <button>ПОИСК</button>
                    </div>
                </div>
            </div>
            <div class="home-content">
                <div class="news">
                    <div class="news__list">
                        <div   v-for="(item, index) in newsList"
                                :key="index">
                            {{linkId = Object.keys(newsList)[item.id]}} <br>
                            {{linkId = linkId.toString()}}
                            <router-link
                                    :to="{name:'news-page', params: {id: 'f'}}"
                                    class="news__list-item">
                                <div class="news__item-img">
                                    <img v-if="item.imgUrl != null" :src="item.imgUrl" alt="">
                                    <img v-else src="https://firebasestorage.googleapis.com/v0/b/fotokutok-618c4.appspot.com/o/img-1.jpg?alt=media&token=8176420f-8c06-4351-ae1e-d1929ab53ec8" alt="">
                                </div>
                                <div class="news__item-content">
                                    <div class="news__item-title">linkId
                                        {{item.title}}
                                    </div>
                                    <div class="news__item-info">
                                        <div class="news__item-date">06 02 2019</div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>