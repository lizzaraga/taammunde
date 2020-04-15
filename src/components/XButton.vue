<template>
    <button class="x-btn" v-on="$listeners" :class="className" @mouseup="onMouseUp" @mousedown="onMouseDown">
        <slot></slot>
    </button>
</template>
<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    props:{
        className : {type: String},
    },
    data(){
        return {
            shadow:''
        }
    },
    methods:{
        onMouseDown(e: Event){
           this.$el.classList.add("mousedown")
        },
        onMouseUp(){
             this.$el.classList.remove("mousedown")
        }
    },
    
})
</script>
<style lang='scss'>
.x-btn{
    border: none;
    padding: 8px 20px;
    margin-top: 10px;
    border-radius: 3px;
    box-shadow: 0px 1px 2px #aaa;
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    background-color: dodgerblue;
    color: #fdfdfd;
    outline: none;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;
    
    &:hover{
        background-color: darken($color: dodgerblue, $amount: 8);
    }
    &.danger{
        background: rgb(241, 39, 80);
        &:hover{
            background-color: darken($color: rgb(241, 39, 80), $amount: 8);
        }
    }
     &.warning{
        background: #fff12b;
        color: #555;
        &:hover{
            background-color: darken($color: #fff12b, $amount: 9);
        }
    }
    &.success{
        background: #14ca47;
        &:hover{
            background-color: darken($color: #14ca47, $amount: 8);
        }
    }

    &:disabled{
        background-color: #eee;
        box-shadow: 0 0 ;
        color: #aaa;
        border: 1px solid #ccc;
        cursor: not-allowed;
        
        &:hover{
            background-color: #eee;
            box-shadow: 0 0 ;
            color: #aaa;
            border: 1px solid #ccc;
            cursor: not-allowed;
        }
    }
    &.mousedown{
        transform: scale(0.9);
    }

}
</style>