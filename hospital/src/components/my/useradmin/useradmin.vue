<template>
  <div id="useradmin">
      <!-- my组件所有的二级组件只做头部的渲染以及三级组件的router-view -->
        <v-header></v-header>        
        <router-view/>
  </div>
</template>
<script>
import store from "../../../store/store.js";
// 引入vuex
import Header from "../../header.vue";
export default {
    data(){
        return{          
           title:"就诊人管理" 
        }
    },
    created(){
        store.commit("setTitle",this.title);//给store传值
    },
    components : {//注册组件
 		"v-header" : Header
 	}    
}
</script>
<style lang="scss" scoped>

</style>
