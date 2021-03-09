<template>
  <div>

  </div>
</template>

<script>
import utils from '../../assets/js/webview.js'
export default {
    data(){
        curLikeStatus:''
    },
    methods:{
        //操作
        // giveTheThumbsUp ios端事件名
        giveTheThumbsUp(){
            utils.callhandler('giveTheThumbsUp', {data:this.curLikeStatus}, (data) => {
                if(data){
                    // 处理返回数据
                    this.curLikeStatus=data.data
                }
            
            })
        },
    },
    mounted(){
        // 初始化
        window.giveTheThumbsUp = this.giveTheThumbsUp;
    }
}
</script>

<style>

</style>