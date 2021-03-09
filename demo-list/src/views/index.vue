<template>
    <div>
        <router-link v-for="(item,index) in Router" :key="index" :to="item.path">{{item.name}}</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import Router from '../router'
export default {
    computed:{
        Router(){
            console.log(Router)
            return Router.options.routes[0].children
        }
    }
}
</script>
<style scoped>
a{
    text-decoration: underline;
    padding:10px;
    font-size: 16px;
}
</style>