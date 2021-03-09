<template>
  <div class="canvas" ref="imageWrapper"></div>
</template>

<script>
export default {
    methods:{
        //保存图片
        saveImg(){
            var opts = {
                useCORS: true,//允许加载跨域的图片
            // 　　tainttest:true, //检测每张图片都已经加载完成
                backgroundColor: '#F6F6F6',
            };
            this.$html2canvas(this.$refs.imageWrapper,opts).then((canvas) => {
                // console.log(this.$refs.imageWrapper)
                // 生成图片的base64编码
                let dataURL = canvas.toDataURL('image/png')
                // console.log(123,this.dataURL)
            });

        },
        // 高版本ios系统不支持
        // "html2canvas": "^1.0.0-rc.4",
    }
}
</script>

<style>

</style>