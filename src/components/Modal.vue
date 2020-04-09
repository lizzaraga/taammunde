<template>
    <div class="x-modal-backdrop" @click.self="closeModal" v-show="isVisible">
        <div class="x-modal">
            <header>
                <slot name="header">
                    <div class="default">
                        <span>{{title}}</span>
                        <button class="material-icons modal-close-btn" @click="closeModal">
                           close
                        </button>
                    </div>
                </slot>
                
            </header>

            <main>
                <slot></slot>
            </main>

            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
    props:{
        isVisible:{type: Boolean, default: true},
        title : {type: String}
    },
    data(){
        return {
           
        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    },
    
})
</script>

<style lang="scss" scoped>
.x-modal-backdrop{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display:flex;
    justify-content: center;
    align-items: center;

    .x-modal{
        position: relative;
        background-color: #fff;
        width: 400px;
        border-radius: 0.5em;
        padding: 10px 0;
    
        header{
            .default{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;

                span{
                    font-size: 1.8em;
                    font-weight: 800;
                }
            }
        }
    }
    
}
.modal-close-btn{
    border: none;
    padding: 0 !important;
    margin: 0;
    border-radius: 50%;
    font-size: 18px;
    outline: none;
    background-color: transparent;
    font-weight: bold;

    &:hover{
        color: crimson;
    }
}

</style>