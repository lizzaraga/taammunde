<template>
  <div id="app" class="match-parent">
    <router-view/>
  </div>
</template>

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
