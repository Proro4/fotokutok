<template>
    <div>
        <adminHead></adminHead>
        <div class="add-block">
            <div class="container">
                <div class="row-m"> 
                    <div class="add-block__title">
                        Создание нового блога
                    </div>
                    <span v-if="newsList">
                        блог № {{newPost.id = Object.keys(newsList).length}}
                    </span>
                    <div class="add-block__form">
                        <label class="add-block__add-img">
                            <input class="add-block__img-input" type="file" @change="processFile($event)">
                        </label>
                        <label class="add-block__name">
                            <span class="add-block__name-span">Название блога</span>
                            <input type="text" v-model="newPost.title" class="add-block__name-input">
                        </label>
                        <label class="add-block__textShort">
                            <span class="add-block__text-span">Текст описание</span>
                            <textarea v-model="newPost.textShort" class="add-block__text-input"></textarea>
                        </label>
                        <label class="add-block__text">
                            <span class="add-block__text-span">Текст</span>
                            <textarea v-model="newPost.text" class="add-block__text-input"></textarea>
                        </label>
                        <div class="add-block__butt">
                            <router-link :to="{name:'admin-blogs'}" class="butt-cansel" @click="">Отмена</router-link>
                            <div class="butt" @click="addBlog(), sendNewBlog(newPost), popUpSuc(true)">Добавить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>