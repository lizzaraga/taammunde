<template>
    <div id = "homepage" class="match-parent">
        <div class="d-flex flex-row-reverse p-3">
           <div>
                <a @click="onDisplayLogin" class="mr-2 mute-link" href="#">Sign in</a>|<a class="ml-2 mute-link" href="#">Sign up</a>
           </div>
        </div>
        <div class="welcome">
            <span class="welcome-message">Welcome to</span>
            <span class="app-title">Taammunde</span>
            <x-button>Go to dashboard</x-button>
        </div>

        <modal title = "Log in" @close = "onHideLogin" :isVisible="displayLogin">
            <form action="" id="login-form">
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">Type user</label>
                    <select class="form-control">
                        <option value="administrator">Administrator</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <x-button>SIGN IN</x-button>
            </form>
        </modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Modal from '../components/Modal.vue'
import XButton from '../components/XButton.vue'
export default Vue.extend({
   data(){
       return {
           displayLogin: false
       }
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
       }
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