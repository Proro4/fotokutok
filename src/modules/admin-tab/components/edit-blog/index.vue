<template>
    <div>
        <adminHead></adminHead>
        <div class="add-block">
            <div class="container">
                <div class="row-m"> 
                    <div class="add-block__title">
                        Создание нового блога
                    </div>
                    <span v-if="newsDetailList">
                        блог № {{newsDetailList.id}}
                    </span>
                    {{newPost}}
                    <div class="add-block__form">
                        <label class="add-block__add-img">
<!--                            <input class="add-block__img-input" type="file" @change="processFile($event)">-->
                            <img :src="newsDetailList.imgUrl" alt="">
                        </label>
                        <label class="add-block__name">
                            <span class="add-block__name-span">Название блога</span>
                            <input type="text" v-model="newsDetailList.title" class="add-block__name-input">
                        </label>
                        <label class="add-block__textShort">
                            <span class="add-block__text-span">Текст описание</span>
                            <textarea v-model="newsDetailList.textShort" class="add-block__text-input"></textarea>
                        </label>
                        <label class="add-block__text">
                            <span class="add-block__text-span">Текст</span>
                            <ul class="tag-list">
                                <li class="tag-list__item">
                                    <font-awesome-icon class="paragraph" icon="paragraph" @click="addParagraph()"/>
                                </li>
                                <li @click="addBold()" class="teg-list__item">
                                      <b>Ж</b>
                                </li>
                                <li class="tag-list__item">
                                    <font-awesome-icon class="list-ul" icon="list-ul" @click="addList()"/>
                                </li>
                                <li class="tag-list__item" @click="addUnderline()">
                                    <font-awesome-icon class="underline" icon="underline"/>
                                </li>
                                <li class="tag-list__item" @click="addStrike()">
                                    <font-awesome-icon class="strikethrough" icon="strikethrough"/>
                                </li>
                            </ul>
                            <textarea v-model="newsDetailList.text" class="add-block__text-input"></textarea>
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