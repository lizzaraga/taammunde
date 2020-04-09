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
.x-btn{
    border: none;
    padding: 8px 20px;
    margin-top: 10px;
    border-radius: 3px;
    box-shadow: 0px 2px 2px #ccc;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: 600;
    background-color: dodgerblue;
    color: #fdfdfd;
    outline: none;
    &:hover{
        background-color: darken($color: dodgerblue, $amount: 8);
    }
}

</style>
