<template>
    <div class="pop-up">
        <div class="pop-up__bck"  @click="popUpSuc(false)"></div>
        <div class="pop-up__block">
            <div class="pop-up__block-title">
                Поздравляем
            </div>
            <div class="pop-up__block-text">
                Операция выполнена успешно!
            </div>
            <div class="pop-up__block-butt">
                <div class="butt" @click="popUpSuc(false), router.go(1)">
                    ОК
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>