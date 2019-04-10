<template>
    <div>
        <adminHead></adminHead>
        <div class="admin-blogs">
            <div class="container">
                <div class="row-b">
                    <div class="admin-blogs__list">
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
                                <div class="admin-blogs__item-text">
                                    {{item.textShort}}
                                </div>
                            </div>
                            <div class="admin-blogs__item-edit">
                                <a class="admin-blogs__change" href="#">Редактировать</a>
                                <a class="admin-blogs__del" href="#">Удалить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>