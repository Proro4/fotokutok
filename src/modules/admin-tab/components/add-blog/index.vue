<template>
    <div>
        <adminHead></adminHead>
        <div class="add-block">
            <div class="container">
                <div class="row-m">
                    <div class="add-block__title">
                        Создание нового блога
                    </div>
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
                            <input type="text" class="add-block__name-input">
                        </label>
                        <label class="add-block__text">
                            <span class="add-block__text-span">Текст</span>
                            <textarea class="add-block__text-input"></textarea>
                        </label>
                        <div class="add-block__butt">
                            <div class="butt-cansel">Отмена</div>
                            <div class="butt">Добавить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>