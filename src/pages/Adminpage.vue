<template>
    <div id="adminpage" class="match-parent">
        <div class="d-flex flex-row-reverse p-3">
            <button class="x-btn">Edit profile</button>
            <h2 class="text-center">Admin Page</h2>
        </div>
    </div>
</template>
<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
    name: 'Adminpage',
    data(){
        return {

        }
    },

    
})
</script>

<style lang="scss">
#adminpage{
    display: flex;
    flex-direction: column;
}
</style>