<template>
    <div>
        <adminHead></adminHead>
        <gallery :images="optionsBck" :index="index" @close="index = null"></gallery>

        <div class="container">
            <v-app class="row-b">

                <div class="options" v-if="options">
                    <div class="title">
                        Настройки
                    </div>
                    <div class="options__content">
                        <div class="options__label">
                            <span>Слайдер</span>
                                <v-switch
                                        v-model="options.slider"
                                        label="Выкл/Вкл">
                                </v-switch>
                        </div>
                        <div class="options__label">
                            <span>Фото</span>
                            <v-btn color="primary" @click="popupAlbum(true)">открыть</v-btn>
                        </div>
                        <div class="options__label background">
                            <span>Бекграунд</span>
                              <img class="options__background"
                                   v-for="(item, imageIndex) in optionsBck"
                                   key="imageIndex"
                                   :src="item" alt=""
                                   @click="index = imageIndex">
                            <div class="options__change">
                                <v-btn @click="popupBck(true)">заменить</v-btn>
                            </div>
                        </div>
                        <div class="options__label">
                            <span>Обо мне</span>
                            <v-switch class="selectionTypeBck"
                                      v-model="options.aboutSwitch"
                                      label="Скрыть/Показать">
                            </v-switch>
                        </div>
                    </div>
                    <v-btn color="green" dark @click="saveOptions()">Сохранить</v-btn>
                </div>
                <div v-else>
                    <loader></loader>
                </div>
            </v-app>
        </div>
    </div>
</template>
<script src="./index.js"></script>