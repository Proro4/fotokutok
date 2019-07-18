<template>
    <div>
        <div class="container">
            <div class="row">
                <v-text-field
                    type="email"
                    required="required"
                    v-model="email"></v-text-field>
                <v-text-field
                    type="password"
                    v-model="password"></v-text-field>
                <v-btn @click="auth()">Войти</v-btn>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>