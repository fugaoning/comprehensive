<template>
  <div id="page" v-if="error">
    <div v-if="error.statusCode === 404">
      <h1>抱歉，找不到此页面~</h1>
      <h2>Sorry, the site now can not be accessed. </h2>
      <p>你请求访问的页面，暂时找不到，我们建议你返回首页官网进行浏览，谢谢！</p><br>
    </div>

    <div v-if="error.statusCode === 500">
      <h1>抱歉，请求出错了~</h1>
      <h2> {{error.message}}</h2>
      <p>页面请求出错，我们建议你返回首页官网进行浏览，谢谢！</p><br>
    </div>
    
    <div class="button">
      <nuxt-link to="/">进入官网</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head(){
    return{
      title: '404'
    }
  },
  mounted(){
    console.log(this.error)
  }
}
</script>

<style lang="less">
body {
  font-family: "微软雅黑", Arial, "Trebuchet MS", Verdana, Georgia, Baskerville,
    Palatino, Times;
  font-size: 16px;
    min-height: 10vh;
    background-color: #fff;
  #page {
    width: 910px;
    padding: 20px 20px 40px 20px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    border: 4px dashed #e4e4e4;
    line-height: 30px;
    text-align: left;
    margin-bottom: 40px;
    h1,
    h2 {
      margin: 0;
      color: #0188de;
    }
    h1 {
      font-size: 44px;
      padding: 20px 0px 10px 0px;
    }
    h2 {
      font-size: 16px;
      padding: 10px 0px 40px 0px;
    }
    p {
      color: #666;
    }
    .button {
      display: block;
      width: 180px;
      height: 28px;
      margin-left: 0px;
      margin-top: 10px;
      background: #009cff;
      border-bottom: 4px solid #0188de;
      text-align: center;
      cursor: pointer;
      a {
        display: block;
        width: 180px;
        height: 28px;
        font-size: 14px;
        color: #fff;
      }
      a:hover {
        background: #5bbfff;
      }
    }
  }
}
</style>
