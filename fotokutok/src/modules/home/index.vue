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
                                    Последня новость #1
                                </div>
                                <div class="home-slider__item-text">
                                    Краткое описание последне новости под номером 1
                                </div>
                            </div>
                        </div>

                    </carousel>

                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>