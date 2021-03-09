<template>
  <div>
    
    <nuxt />
  </div>
</template>

<script>

export default {
  
}
</script>
<style>

html {
  font-family: "微软雅黑", Arial, "Trebuchet MS", Verdana, Georgia, Baskerville,
    Palatino, Times;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  position:relative;
  height:100%;
  width:100%;
}
body{
  min-height: 10vh;
  background-color: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.van-toast__text{
    font-size: 24px;
    padding: 20px 10px;
}
.successToast{
    width:auto!important;
}
</style>
