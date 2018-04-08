<template>
    <div id="prepay">
        <v-header></v-header>
        <p>请选择预缴金额(元)</p>
        <ul>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">500</li>
            <li @click="getMoney($event)">其他金额</li>
        </ul>
        <p id="pay">付款</p>
    </div>
</template>
<script>
import Header from "../header.vue";
import bus from '../../js/bus.js';
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        bus.$emit("header-title","预缴费用")
    },
    methods:{
        getMoney(e){
            let len=e.target.parentElement.children.length;
            for(let i=0;i<len;i++){
                e.target.parentElement.children[i].style.background=""
            }
            e.target.style.background="#31c1c1";                                   
        },
        back(){
            this.$router.go(-1)
        }
    },
    components : {//注册组件
 		"v-header" : Header
 	}
}
</script>

<style lang="scss" scoped>
    #prepay{
        p{
            font-size: 15px;
            height: 1.68rem;
            line-height: 1.68rem;
            color: #222;
            margin-left: 0.4rem;
        }

        ul{
            padding: 0 0.4rem;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            li{
                width: 2.666rem;
                height: 1.066rem;
                line-height: 1.066rem;
                background: #bbb;
                text-align: center;
                color: #fff;
                margin-right: 0.6rem;
                margin-bottom: 0.4rem;
                border-radius: 10px;
            }
            li:nth-child(3){
                margin-right:0;
            }
            li:nth-child(6){
                margin-right:0;
            }
            li:last-child{
                margin-right:0;
            }
        }
        #pay{
            margin: 0.4rem 0.4rem;
            background: #31c1c1;
            color: #fff;
            text-align: center;
            height: 1.066rem;
            line-height: 1.066rem;
            border-radius: 10px;
        }
    }
</style>
