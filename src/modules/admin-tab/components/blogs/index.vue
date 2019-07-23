<template>
    <div>
        <adminHead></adminHead>
        <div class="admin-blogs">
            <div class="container">
                <div class="row-b">
                    <div class="admin-blogs__list" v-if="newsList">
                        <div class="admin-blogs__item"
                            v-for="(item, index) in newsList"
                            :key="index">
                            <div class="admin-blogs__item-img">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <div class="admin-blogs__item-info">
                                <div class="admin-blogs__item-title">
                                    {{item.title}}
                                </div>
                                <div class="admin-blogs__item-date">
                                    {{item.date}}
                                </div>
                                <div class="admin-blogs__item-date">
                                    <font-awesome-icon class="eye" icon="eye"/>
                                    {{item.view}}
                                </div>
                                <div class="admin-blogs__item-text">
                                    {{item.textShort}}
                                </div>
                            </div>
                            <div class="admin-blogs__item-edit">
                                <router-link class="admin-blogs__change" :to="{name:'edit-blog', params: {id: Object.keys(newsList)[item.id]}}">Редактировать</router-link>
                                <a class="admin-blogs__del" @click="deletePopupOpen(Object.keys(newsList)[item.id])" href="#">
                                        Удалить
                                </a>
                            </div>
                        </div>
                        <router-link :to="{name:'add-blog'}" class="admin-blogs__add-blog"><font-awesome-icon icon="plus-circle" /> Добавить блог</router-link>
                    </div>
                    <div v-else>
                        <loader></loader>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>