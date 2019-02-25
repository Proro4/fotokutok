<template>
    <div class="container">
        <div class="row-b">
            <div class="header">
                <div class="header__lono">
                    <a href="#" class="header__logon-link">
                        <img src="../../assets/img/logo.png" alt="">
                    </a>
                </div>
                <ul class="header__menu">
                    <li class="header__menu-item">
                        <router-link to="home" class="header__menu-link">Главная</router-link>
                        <router-link to='blog' class="header__menu-link">Блог</router-link>
                        <router-link to='news' class="header__menu-link">Новости</router-link>
                        <router-link to='obut' class="header__menu-link">Обо мне</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>