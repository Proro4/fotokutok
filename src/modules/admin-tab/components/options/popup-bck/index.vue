<template>
    <div class="pop-up">
        <div class="pop-up__bck" @click="popupBck(false)"></div>
        <gallery :images="optionsImages" :index="index" @close="index = null"></gallery>
        <v-app class="pop-up__block">
            <div class="pop-up__block-title" v-html="">
               Бэкграунд
            </div>
            <div class="options__bck">
                <v-btn v-if="options.bckSelection"><input type="file" @change="processFile($event)"></v-btn>
                <div class="colorBck" v-else>
                    <v-btn @click="openColor(true)">Цвет</v-btn>
                    <div class="showColorBck" :style="{background: this.options.bckColor}"></div>
                </div>
                <v-switch class="selectionTypeBck"
                        v-model="options.bckSelection"
                        label="Цвет/Бэкграунд">
                </v-switch>
                <v-btn color="success" @click="successBck()">подтвердить</v-btn>
                <v-btn @click="popupBck(false)" color="error" >отменить</v-btn>
            </div>
        </v-app>
        <div class="pop-up__color" v-if="openPopupColor">
            <input id="bckColor" type="color"/>
            <v-btn color="success" @click="changeColor()">подтвердить</v-btn>
            <v-btn @click="openColor(false)" color="error" >отменить</v-btn>
        </div>

    </div>
</template>
<script src="./index.js"></script>