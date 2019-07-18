<template>
    <div class="pop-up">
        <div class="pop-up__bck"  @click="popupAlbum(false)"></div>
        <gallery :images="optionsImages" :index="index" @close="index = null"></gallery>
        <div class="pop-up__block">
            <div class="pop-up__block-title" v-html="">
               Альбом
            </div>
            <div class="options__album">
                <div class="options__album-item"
                        v-for="(item, imageIndex) in optionsImages"
                        :key="imageIndex"
                >
                    <img :src="item" alt="" @click="index = imageIndex">
                </div>
            </div>
        </div>
            <div class="pop-up__block-butt">
        </div>
    </div>
</template>
<script src="./index.js"></script>