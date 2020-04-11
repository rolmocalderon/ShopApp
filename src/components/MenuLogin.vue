<template>
    <div class="menu-box menu-login" v-on:click="showLoginBox">
        <img :src="require('@/assets/user-solid.svg')" class="menu-login-icon">
        <span>Login</span>
        <div class="menu-login-form" id="loginForm">
            <Login />
        </div>
    </div>
</template>

<script>
import Login from "@/components/Login.vue";
import $ from "jquery";
export default {
    name: 'MenuLogin',
    components: {
        Login
    },
    methods: {
        showLoginBox: function(event){
            const targetTag = event.target.tagName.toLowerCase();
            if(targetTag !== "button" && targetTag !== "input"){
                $('#loginForm').slideToggle();
            }
        }
    }
}
</script>

<style>
    .menu-login {
        background: white;
    }

    .menu-login:hover{
        background: #F9F9F9;
    }

    .menu-login span{
        margin-left: 10px;
    }

    .menu-login-icon{
        width: 20px;
    }

    .menu-login-form {
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        top: 70px;
        right: 50px;
        display: none;
    }
</style>