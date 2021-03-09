<template>
<div>
    <!-- <div class="number copy1" 
    data-clipboard-action="copy"
    :data-clipboard-text="'复制内容'"
    @click="onCopy1">复制内容</div> -->
</div>
    
</template>

<script>
export default {
    methods:{
        onCopy1(){
            let _this = this;
            let clipboard = new this.clipboard(".copy1");
            clipboard.on('success', function () {
                console.log('复制成功');
            });
            clipboard.on('error', function () {
                console.log('复制失败');
            });
        },
    }
}
</script>

<style>

</style>