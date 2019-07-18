<template>
    <div class="container">
        <div class="row-b">
            <div v-if="aboutMe">
                <div class="about">
                    <div class="about__title">{{aboutMe.title}}</div>
                    <div class="about-content">
                        <div class="about__text"
                        v-html="aboutMe.text"></div>
                        <a :href="aboutMe.instagram" target="_blank" class="about__instagram"><img src="../../assets/img/instagram.png" alt="">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>