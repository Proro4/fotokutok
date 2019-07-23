<template>
    <div class="container">
        <div class="row-b">
            <div class="header">
                <div class="header__lono">
                    <router-link :to="{name: 'home'}" class="header__logon-link">
                        <img src="../../assets/img/logo.png" alt="">
                    </router-link>
                </div>
                <ul class="header__menu">
                    <li class="header__menu-item" v-if="options">
                        <router-link :to="{name: 'home'}" class="header__menu-link">Блог</router-link>
                        <router-link v-if="options.aboutSwitch" :to="{name: 'about'}" class="header__menu-link">Обо мне</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>