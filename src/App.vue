<template>
  <div id="app" class="match-parent">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script nang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ;
}
html, body{
  width: 100%;
  height: 100%;
  font-size: 16px;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.match-parent{
  width: 100%;
  height: 100%;
}


</style>
