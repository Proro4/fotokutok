<template>
    <div class="auth">
        <div class="container">
            <div class="row-b">
                <div class="auth__form">
                    <v-text-field
                        class="auth__input"
                        type="email"
                        required="required"
                        v-model="email"></v-text-field>
                    <v-text-field
                        class="auth__input"
                        type="password"
                        v-model="password"></v-text-field>
                    <v-btn @click="auth()">Войти</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>