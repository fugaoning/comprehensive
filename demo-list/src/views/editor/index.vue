<template>
<!-- wangeditor 组件 -->
    <div class="editor-page">
        <div id="editorElem"></div>
        <div class="btn" @click="getContent">确认</div>
    </div>  
</template>
<script>
//npm install --save wangeditor 
import E from "wangeditor"
export default {
    data(){
        return{
            editor: {},
        }
    },
    methods:{
        
        contentIS(){
                //配置项
                this.$nextTick(function () {
                    const editor = new E('#editorElem') //实例化
                    editor.customConfig.showLinkImg = false //隐藏网络图片tab
                    editor.customConfig.pasteTextHandle = (content) => { //支持粘贴
                        return content
                    }
                    // editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
                    editor.customConfig.uploadImgServer = 'http://api.benlai58.com/file/shield/upload' //上传文件到服务器
                    editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
                    //自定义提示方法
                    editor.customConfig.customAlert = function (info) {
                        // info 是需要提示的内容
                        console.log(info)
                    }
                    //监听函数在上传图片的不同阶段做相应处理
                    editor.customConfig.uploadImgHooks = {
                        customInsert: function (insertImg, result, editor) {

                            editor.cmd.do('insertHtml', '<img src="' + 'http://dl.benlai58.com/'+result.url + '" style="max-width:100%;"/>')
                        }
                    }
                    // 配置菜单
                    editor.customConfig.menus = [
                        'head', // 标题
                        'bold', // 粗体
                        'fontSize', // 字号
                        // 'fontName', // 字体
                        // 'italic', // 斜体
                        // 'underline', // 下划线
                        // 'strikeThrough', // 删除线
                        // 'foreColor', // 文字颜色
                        // 'backColor', // 背景颜色
                        'link', // 插入链接
                        // 'list', // 列表
                        'justify', // 对齐方式
                        // 'quote', // 引用
                        // 'emoticon', // 表情
                        'image', // 插入图片
                        // 'table', // 表格
                        // 'video', // 插入视频
                        // 'code', // 插入代码
                        // 'undo', // 撤销
                        // 'redo', // 重复
                        // 'fullscreen' // 全屏
                    ]
                    editor.create()
                    // editor.txt.clear() //清空编辑器
                    this.editor = editor
                    console.log(editor.txt.html())
                })
            
        },
        //获取富文本内容
        getContent(){
            console.log(this.editor.txt.html())
        }
        
    },
    mounted(){
        this.contentIS()
    }
}
</script>
<style scoped>
.editor-page{
    min-height: 100vh;
    overflow: hidden;
}
#editorElem{
    height: 400px;
    width: 600px;
    margin: 100px auto 0;
}
.btn{
    text-align: center;
    font-size:20px;
    cursor: pointer;
}
</style>