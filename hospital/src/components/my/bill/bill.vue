<template>
    <div id="bill">
        <v-header></v-header>
        <nav>
            <div :class="{'action': route==('/my/bill/bill/&'+item.id)}" v-for="item in navList" :key="item.id" @click="tab(item.id,$event)">{{item.name}}</div>
        </nav>
        <ul>
            <li>
                <div>
                    <span>诊间费用</span>
                    <p>待支付</p>
                </div>
                <div>
                    <span>订单编号</span>
                    <span>321505213215</span>    
                </div> 
                <div>
                    <span>就诊人</span>
                    <span>痘痘</span>    
                </div>
                <div>
                    <span>就诊医院</span>
                    <span>鹿城区第一医院</span>    
                </div>
                <div>
                    <span>总计费用</span>
                    <span>15124.22</span>    
                </div>
                <div>
                    <span>自费费用</span>
                    <span>502</span>    
                </div>
                <div>
                    <span>删除</span>
                    <span @click="godetail()">详情</span>
                    <span>付款</span>
                </div>               
            </li>            
        </ul>
    </div>
</template>
<script>
import Header from "../../header.vue";
import bus from '../../../js/bus.js';
export default {
    data(){
        return{
            navList:[{name:"全部",id:0},{name:"待支付",id:1},{name:"已付款",id:2},{name:"已删除",id:3}]
        }
    },
    computed:{
        route(){
            return this.$route.path
        }
    },
    mounted(){
        bus.$emit("header-title", "我的订单");
        let path=this.$route.path.split("&");
    },
    methods:{
        tab(navId,e){
            let len=e.target.parentElement.children.length;
            for(let i=0;i<len;i++){
                e.target.parentElement.children[i].className=""
            }
            e.target.className="action";
            // 根据navId来向后端请求不同的数据类型
        },
        godetail(){
            let path="/my/bill/bill/billdetail/&"+0
            this.$router.push(path)
        }
    },
    components : {//注册组件
 		"v-header" : Header
 	}
}
</script>
<style lang="scss" scoped>
    #bill{
        color: #222;
        nav{
            display: flex;
            justify-content: space-between;
            padding: 0 0.4rem;
            font-size: 15px;
            height: 1.2rem;
            margin-bottom: 0.266rem;
            background: #fff;
            div{
                line-height: 1.2rem;
            }
            .action{
                color: #31c1c1;
                border-bottom: 2px solid #31c1c1;
            }
        }
        ul{
            background: #fff;
            padding: 0 0.4rem;
            li{                
                margin-bottom: 0.266rem;
                div{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: 1.066rem;
                    border-bottom: 1px solid #f5f5f5;
                    span{
                        margin-right: 0.4rem;
                        font-size: 14px;
                        color: #666;
                        
                    }
                    span:first-child{
                        width: 1.493rem;
                    }
                }
                div:first-child{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 1.466rem;
                    font-size: 15px;
                    p{
                        color: #31c1c1;
                    }
                }
                div:nth-child(6){
                    span:nth-child(2){
                        color: #ff0000;
                    }
                }
                div:last-child{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 0.4rem 0;
                    span{
                        width: 1.333rem;
                        height: 0.8rem;
                        border-radius: 5px;
                        background: #31c1c1;
                        text-align: center;
                        line-height: 0.8rem;
                        color: #fff;
                        margin:0;
                    }
                    span:first-child{
                        background: #999;
                    }
                    span:nth-child(2){
                        margin: 0 0.266rem;
                    }
                }
            }
        }
    }
</style>
