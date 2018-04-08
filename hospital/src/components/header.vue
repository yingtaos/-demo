
<template>
    <header>
        <!-- my组件的所有二级组件的公共头部 通过vuex实现组件之间的传参-->
        <router-link to="" @click.native="back">
            <img src="../assets/img/goback.png" alt=""/>
        </router-link>            
        <h2 id="titile">{{title}}</h2>
    </header>
</template>
<script>
import bus from '../js/bus.js';
export default {
    data(){
        return{
           title:"" 
        }
    },
    mounted(){   
        bus.$on("header-title",(t)=>{
            this.title=t
            // console.log(this.title,1)
        })   
        // console.log(this.title,2)
    },
    methods:{        
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        height: 1.33rem;
        background: #31c1c1;
        position: relative;
        a{
            height: 0.48rem;
            width: 0.266rem;
            position: absolute;
            top: 50%;
            margin-top: -0.24rem;
            left: 0.4rem;
            img{
                width:100%;
                height: 100%;
            }
        }
        h2{
            font-size: 15px;
            color: #fff;
            line-height: 1.33rem;
            text-align: center;
        }
    }
</style>
