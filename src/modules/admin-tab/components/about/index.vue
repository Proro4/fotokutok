<template>
    <div>
        <adminHead></adminHead>
        <div class="admin-pages">
            <div class="container">
                <v-app class="row-b" v-if="aboutMe">
                    <div class="title">
                        Страница "обо мне"
                    </div>
                    <div class="admin-pages__title">
                        <label>Название</label>
                        <input type="text" v-model="aboutMe.title" placeholder="Титулка">
                    </div>
                    <div class="admin-pages__text">
                        <label>Текст</label>
                        <textarea type="text" v-model="aboutMe.text" placeholder="Текст"></textarea>
                    </div>
                    <div class="admin-pages__cos-links">
                        <label>Instagram</label>
                        <v-switch
                                v-model="aboutMe.instagramSwitch"
                                label="выкл/вкл">
                        </v-switch>
                        <input type="text" v-model="aboutMe.instagram">
                    </div>
                    <v-btn class="admin-pages__save" color="success" @click="pageSave()">Сохранить</v-btn>
                </v-app>
                <v-app v-else>
                    <loader></loader>
                </v-app>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>