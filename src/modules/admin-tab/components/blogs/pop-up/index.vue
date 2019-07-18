<template>
    <div class="pop-up">
        <div class="pop-up__bck"  @click="deletePopup(false)"></div>
        <div class="pop-up__block">
            <div class="pop-up__block-title" v-html="">
                {{delContent.title}}{{delId}}
            </div>
            <div class="pop-up__block-text" v-html="delContent.text">
            </div>
            <div class="pop-up__block-butt">
                <div class="butt" @click="deleteBlog(),deletePopup(false)">
                    {{delContent.button}}
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>