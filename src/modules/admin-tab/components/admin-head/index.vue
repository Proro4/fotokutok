<template>
    <div>
        <div class="admin-head">
            <div class="container">
                <div class="row-b">
                    <div class="admin-head__inner">
                        <ul class="admin-head__list">
                            <li class="admin-head__item">
                                <router-link :to="{name:'admin-blogs'}" class="admin-head__link">Блог</router-link>
                            </li>
                            <li class="admin-head__item">
                                <router-link :to="{name: 'adminAbout'}" class="admin-head__link">Обо мне</router-link>
                            </li>
                            <li class="admin-head__item">
                                <router-link :to="{name:'options'}" class="admin-head__link">Настройки</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>