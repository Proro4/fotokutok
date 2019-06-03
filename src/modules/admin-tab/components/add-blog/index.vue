<template>
    <div>
        <adminHead></adminHead>
        <br>
        <br>
        {{newPost}}
        <br>
        <br>
        <div class="add-block">
            <div class="container">
                <div class="row-m">
                    <div class="add-block__title">
                        Создание нового блога
                    </div>
                    111
                    <br>
                    {{newStorage}}
                    <br>
                    11
                    <span>
                        блог № {{newPost.id = Object.keys(newsList).length}}
                    </span>
                    <div class="add-block__form">
                        <label class="add-block__image">
                            <span class="add-block__image-span">Выбрать картинку из доступных</span>
                            <select class="add-block__image-input">
                                <option value="1">img1</option>
                                <option value="2">img2</option>
                                <option value="3">img3</option>
                            </select>
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
                            <div class="butt-cansel">Отмена</div>
                            <div class="butt de-active" @click="addBlog(), sendNewBlog(newPost), popUpSuc(true)">Добавить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>