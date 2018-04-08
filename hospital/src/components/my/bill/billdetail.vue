<template>
    <div id="billdetail">
        <v-header></v-header>
        <h2>痘</h2>
        <ul id="list">
            <li>
                <span>身份证号:</span>
                <span>3245324512</span>
            </li>
            <li>
                <span>就诊卡号:</span>
                <span>12413413</span>
            </li>
            <li>
                <span>就诊医生:</span>
                <span>孙思邈</span>
            </li>
            <li>
                <span>就诊医院:</span>
                <span>鹿城区第一医院</span>
            </li>
            <li>
                <span>就诊日期:</span>
                <span>2018.03.03</span>
            </li>
        </ul>
        <div id="cost">
            <div id="costTitle">
                <span>项目费用</span>
            </div>
            <div id="costClass">
                <span>费别</span>
                <span>金额/元</span>
            </div>
            <ul id="costList">
                <li>
                    <span>板蓝根:</span>
                    <span>11.00</span>
                </li>
                <li>
                    <span>板蓝根:</span>
                    <span>11.00</span>
                </li>
                <li>
                    <span>板蓝根:</span>
                    <span>11.00</span>
                </li>
            </ul>
            <div id="costTotal">
                <span>合计:33.00</span>
                <span>医保:33.00</span>
                <span>自费:00.00</span>
            </div>
        </div>
        <div id="costDetail">
            <h2>费用明细</h2>
            <div id="obj">
                <span>项目名称</span>
                <span>规格</span>
                <span>单价</span>
                <span>数量</span>
                <span>金额</span>
            </div>
            <ul>
                <li>
                    <span>项目名称</span>
                    <span>规格</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                </li>
                <li>
                    <span>项目名称</span>
                    <span>规格</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                </li>
                <li>
                    <span>项目名称</span>
                    <span>规格</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                </li>
                <li>
                    <span>项目名称</span>
                    <span>规格</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                </li>
                <li>
                    <span>项目名称</span>
                    <span>规格</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Header from "../../header.vue";
import bus from '../../../js/bus.js';
export default {
    mounted(){
        bus.$emit("header-title", "费用详情");
    },
    components : {//注册组件
 		"v-header" : Header
 	}
}
</script>

<style lang="scss" scoped>
    #billdetail{
        color: #222;
        h2{
            font-size: 14px;
            height: 1.333rem;
            line-height: 1.333rem;
            padding-left: 0.4rem;
            background: #fff;
            border-bottom: 2px solid #f5f5f5;
        }
        #list{
            background: #fff;
            padding: 0 0.4rem;
            li{
                display: flex;
                justify-content: flex-start;
                align-content: center;
                border-bottom: 1px solid #f5f5f5;
                height: 1.066rem;
                span{
                    margin-right: 0.4rem;
                    font-size: 14px;
                    color: #666;
                    line-height: 1.066rem;
                }
            }
        }
        #cost{
            background: #fff;
            padding: 0 0.4rem;
            #costTitle{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 1.333rem;
                span{
                    font-size: 15px;
                }
            }
            #costClass{
                border-top: 2px solid #f5f5f5;
                height: 1.2rem;
                display: flex;
                justify-content: flex-start;
                span{
                    width: 50%;
                    height: 100%;
                    line-height: 1.2rem;
                    border-right:1px solid #f5f5f5; 
                    border-bottom:1px solid #f5f5f5;
                    text-align: center;
                    font-size: 14px;
                }
                span:nth-child(2){
                    border-right:none;
                }
            }
            #costList{
                li{
                    height: 1.2rem;
                    display: flex;
                    justify-content: flex-start;
                    span{
                        width: 50%;
                        height: 100%;
                        line-height: 1.2rem;
                        border-right:1px solid #f5f5f5; 
                        border-bottom:1px solid #f5f5f5;
                        text-align: center;
                        font-size: 14px;
                        color: #666;
                    }
                    span:nth-child(2){
                        border-right:none;
                    }
                }
            }
            #costTotal{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 1.333rem;
                span{
                    width: 33%;
                    height: 100%;
                    line-height: 1.333rem;
                    text-align: center;
                    font-size: 14px;
                    color: #222;
                    border-right:1px solid #f5f5f5; 
                    border-bottom:1px solid #f5f5f5;
                }
                span:last-child{
                    border-right:none;
                }
            }
        }
        #costDetail{
            background:#fff;
            h2{
                background:none;
                color: #222;
            }
            #obj{
                display: flex;
                justify-content: flex-start;
                height: 1.066rem;
                span{
                    width: 20%;
                    line-height: 1.066rem;
                    border-right: 1px solid #f5f5f5;
                    border-bottom: 1px solid #f5f5f5;
                    text-align: center;
                    font-size: 13px;
                    color: #666;
                }
            }
            ul{
                padding-bottom: 1.333rem;
                li{
                     display: flex;
                    justify-content: flex-start;
                    height: 1.066rem;
                    span{
                        width: 20%;
                        line-height: 1.066rem;
                        border-right: 1px solid #f5f5f5;
                        border-bottom: 1px solid #f5f5f5;
                        text-align: center;
                        font-size: 13px;
                        color: #666;
                    }
                }
            }
        }
    }
</style>
