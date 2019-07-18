<template>
    <div>
        <adminHead></adminHead>
        <div class="container">
            <v-app class="row-b">

                <div class="options" v-if="options">
                    <div class="options__title">
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
                        <div class="options__label">
                            <span>Бекграунд</span>
                        </div>
                        <div class="options__label">
                            <span>Кнопки</span>
                        </div>
                        <div class="options__label">
                            <span>Страницы</span>
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