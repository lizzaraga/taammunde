<template>
    <div id = "homepage" class="match-parent">
        <div class="d-flex flex-row-reverse p-3">
           <div>
                <a @click="onDisplayLogin" class="mr-2 mute-link" href="#">Sign in</a>|<a class="ml-2 mute-link" href="#">Sign up</a>
           </div>
        </div>
        <div class="welcome">
            <span class="welcome-message">Welcome to</span>
            <span class="app-title">Taammunde </span>
            <x-button  @click="goToDashboard">Go to dashboard</x-button>
        </div>

        <modal title = "Log in" @close = "onHideLogin" :isVisible="displayLogin">
            <form action="" id="login-form">
                <div class="form-group">
                    <label for="">Email</label>
                    <input v-model="loginForm.email" type="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input v-model="loginForm.password" type="password" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">Type user</label>
                    <select class="form-control" v-model="loginForm.typeUser">
                        <option value="administrator">Administrator</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <x-button @click="loginUser(loginForm)">SIGN IN</x-button>
            </form>
        </modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Modal from '../components/Modal.vue'
import XButton from '../components/XButton.vue'
import {createNamespacedHelpers} from 'vuex'
import { ILoginForm, ETypeUser } from '../store/modules/Auth/types'

const {mapState, mapGetters, mapActions} = createNamespacedHelpers('auth')
export default Vue.extend({
   data():{displayLogin: boolean, loginForm: ILoginForm}{
       return {
           displayLogin: false,
           loginForm:{
               email: '',
               password: '',
               typeUser: ETypeUser.Administrator
           }
       }
   },
   computed:{
       ...mapState([
           "isLogging",
            "errors"
       ])
   },
   components:{
       Modal,
       XButton
   },
   methods:{
        onDisplayLogin(e: Event){
            e.preventDefault()
            this.displayLogin = true
            
        },
        onHideLogin(){
            this.displayLogin = false
        },
        goToDashboard(){
            const managerToken = "taammunde_token_manager"
            if(this.$cookies.isKey(managerToken)){
                this.$router.push({name: 'Managerpage', params : {token : this.$cookies.get(managerToken)}})
            }
            const adminToken = "taammunde_token_administrator"
            if(this.$cookies.isKey(adminToken)){
                this.$router.push({name: 'Adminpage', params : {token : this.$cookies.get(adminToken)}})
            }
            this.displayLogin = true
            alert("Please login before ...")
        },
        ...mapActions([
            "loginUser"
        ])
   }
})
</script>

<style lang="scss" scoped>

#homepage{
    background-color: transparent;
    .welcome{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .welcome-message{
            font-size: 2.5em;
            font-weight: 100;
        }
        .app-title{
            font-size: 1.6em;
            font-weight: 800;
        }
    }

    .form-group{
        label{
            font-weight: 600;
        }
    }
}


.mute-link{
    font-size: 0.8em;
    color: #555;
    font-weight: 600;
}

</style>