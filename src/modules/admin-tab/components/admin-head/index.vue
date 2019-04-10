<template>
    <div>
        <div class="admin-head">
            <div class="container">
                <div class="row-b">
                    <ul class="admin-head__list">
                        <li class="admin-head__item">
                            <router-link :to="{name:'admin-blogs'}" class="admin-head__link">Блог</router-link>
                        </li>
                        <li class="admin-head__item">
                            <a href="#" class="admin-head__link">Новости</a>
                        </li>
                        <li class="admin-head__item">
                            <a href="#" class="admin-head__link">Настройки</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>