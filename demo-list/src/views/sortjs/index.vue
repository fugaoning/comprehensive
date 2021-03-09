<template>
    <div>
        <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank" rel="noopener noreferrer">https://github.com/SortableJS/Vue.Draggable</a>
        <div class="home-page">
            <div class="left">
                <!-- 全选框 -->
                <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">全选</el-checkbox>
                <!-- 输入框 -->
                <el-autocomplete v-model="state1" :fetch-suggestions="querySearch1" placeholder="请输入内容" @select="handleSelect1"></el-autocomplete>
                <!-- 拖拽内容 -->
                <vuedraggable class="wrapper" v-model="list1">
                    <transition-group>
                        <div v-for="(item,index) in list1" :key="item.id" class="item">
                            <el-checkbox v-model="item.checked" @change="changeCheck1(item,index)">{{item.value}}</el-checkbox>
                        </div>
                    </transition-group>
                </vuedraggable>
            </div>
            <span class="btn" @click="dataToLeft">左</span>
            <span class="btn" @click="dataToRight">右</span>
            <div class="left">
                <!-- 全选框 -->
                <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2" >全选</el-checkbox>
                <!-- 输入框 -->
                <el-autocomplete v-model="state2" :fetch-suggestions="querySearch2" placeholder="请输入内容" @select="handleSelect2"></el-autocomplete>
                <!-- 拖拽内容 -->
                <vuedraggable class="wrapper" v-model="list2">
                    <transition-group>
                        <div v-for="(item,index) in list2" :key="item.id" class="item">
                            <el-checkbox v-model="item.checked" @change="changeCheck2(item,index)">{{item.value}}</el-checkbox>
                        </div>
                    </transition-group>
                </vuedraggable>
            </div>
        </div>

    </div>
    
</template>

<script>
//安装 npm i -S vuedraggable

//引入拖拽
import vuedraggable from 'vuedraggable';

export default {
  components: {vuedraggable},//注册
  
  data() {
    return {
        //左侧
        isIndeterminate1: true,//全选框选中状态
        checkAll1: false,//全选框value
        checkedCities1:[],//已选中集合
        state1: '',//输入框value
        list1: [//已有全部集合
                {value:'选项1',checked:false,id:1},
                {value:'haha2',checked:false,id:2},
                {value:'罗迪克3',checked:false,id:3},
                {value:'科技时代4',checked:false,id:4},
                {value:'进度活动5',checked:false,id:5}
        ],
        //右侧
        isIndeterminate2: true,
        checkAll2: false,
        checkedCities2:[],
        state2: '',
        list2:[],
    }
  },
  
  methods: {
      //向左侧插入数据
      dataToLeft(){
          //checkbox状态置为false
          let arr = this.checkedCities2.concat()
          let newArr = arr.map(item=>{
              item.checked=false
              return item
          })
          this.list1 = this.checkedCities2.length?this.list1.concat(newArr):[]
          //右侧数据不展示向左添加的数据
          for(var i=0;i<this.list2.length;i++){
              for(var j=0;j<this.checkedCities2.length;j++){
                  if(this.checkedCities2[j].id==this.list2[i].id){
                      this.list2.splice(i,1)
                  }
              }
          }
      },
      //向右侧插入数据
      dataToRight(){
          //checkbox状态置为false
          let arr = this.checkedCities1.concat()//改变数组指向
          let newArr = arr.map(item=>{
              item.checked=false
              return item
          })
          this.list2 = this.checkedCities1.length?this.list2.concat(newArr):[]
          //左侧数据不展示向右添加的数据
          for(var i=0;i<this.list1.length;i++){
              for(var j=0;j<this.checkedCities1.length;j++){
                  if(this.checkedCities1[j].id==this.list1[i].id){
                      this.list1.splice(i,1)
                  }
              }
          }
      },
      //返回输入建议的方法
      querySearch1(queryString, cb) {
        // console.log(queryString)
        //改变数组指向
        let jsonStr = JSON.stringify(this.list1);
        var restaurants = JSON.parse(jsonStr)
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
        //返回的数据先不展示在列表中
        // console.log('restaurants',restaurants,this.list1,results)
        // this.list1 = results
        
      },
      //搜索结果处理
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      querySearch2(queryString, cb) {
        var restaurants = this.list2;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      //搜索框选中item事件
      handleSelect1(item) {
        console.log(item);
      },
      handleSelect2(item) {
        console.log(item);
      },
      //全选checkbox 选中事件
      handleCheckAllChange1(val) {
        let arr = this.list1.map(item=>{
            item.checked=val
            return item
        })
        this.list1 = arr
        this.checkedCities1 = val?this.list1.concat():[]
        this.isIndeterminate1 = false;
      },
      handleCheckAllChange2(val) {
        let arr = this.list2.map(item=>{
            item.checked=val
            return item
        })
        this.list2 = arr
        this.checkedCities2 = val?this.list2.concat():[]
        this.isIndeterminate2 = false;
      },
      //单个checkbox 选中事件
      changeCheck1(item,index){
          if(item.checked){
              this.checkedCities1.push(item)
          }else{
              this.checkedCities1.splice(index,1)
          }
      },
      changeCheck2(item,index){
          if(item.checked){
              this.checkedCities2.push(item)
          }else{
              this.checkedCities2.splice(index,1)
          }
      }, 
      //监听全选按钮 事件
      watchCheckAll1(){
            let checkedCount = this.checkedCities1.length;
            this.checkAll1 = checkedCount === this.list1.length;
            this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.list1.length;
      },
      watchCheckAll2(){
            let checkedCount = this.checkedCities2.length;
            this.checkAll2 = checkedCount === this.list2.length;
            this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.list2.length;
      }
  },
  updated() {
        this.watchCheckAll1()
        this.watchCheckAll2()
        //已选中的数据集合
        //checkedCities1,checkedCities2
  },
}
</script>
<style scoped>
.home-page{
    width:800px;
    min-height:500px;
    margin: 100px auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.left{
    width:350px;
    height: 500px;
    border:1px solid #000;
}
.btn{
    display:inline-block;
    cursor: pointer;
    font-size: 16px;
    border:1px solid #000;
}
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item{
  width: 300px;
  height: 50px;
  /* background-color: #42b983; */
  border:1px solid #eee;
  margin-bottom: 5px;
  color: #ffffff;
}
.link{
    font-size: 20px;
    text-align: center;
}
</style>