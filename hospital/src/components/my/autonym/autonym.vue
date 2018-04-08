<template>
    <div id="autonym">
        <v-header></v-header>
        <div id="autonymImg">
            <img src="../../../assets/img/header_bg.jpg" alt=""/>
        </div>   
        <ul>
            <li>
                <span>姓名:</span>
                <input type="text"/>
            </li>
            <li>
                <span>手机号:</span>
                <input type="number"/>
            </li>
            <li>
                <span>验证码:</span>
                <input type="number"/>
            </li>
            <li>
                <span>身份证号:</span>
                <input type="number"/>
            </li>
            <li>
                <span>就诊卡类型:</span>
                <div id="calss">
                    <p>自费就诊卡</p>
                    <img src="../../../assets/img/more.png" alt="">
                </div>
            </li>
        </ul>
        <div id="amend">
            确认修改
        </div>
    </div>    
</template>
<script>
import Header from "../../header.vue";
import bus from '../../../js/bus.js';
export default {
    data(){
        return{

        }
    },
    mounted(){
        bus.$emit("header-title", "实名认证");
    },
    components : {//注册组件
 		"v-header" : Header
 	}
}
</script>
<style lang="scss" scoped>
    #autonym{
        color: #222;
        font-size: 14px;
        #autonymImg{
            width: 100%;
            height: 3.933rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        ul{
            background: #fff;
            padding: 0 0.4rem;            
            li{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-bottom: 1px solid #f5f5f5;
                height: 1.2rem;
                span{
                    width: 2.346rem;
                    margin-right: 0.4rem;
                    text-align: right;
                }
                input{
                    border: none;
                    color: #999;
                }
            }
            li:last-child{
                border: none;
                div{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center; 
                    p{
                        color: #999;
                    } 
                    img{
                        width: 0.48rem;
                        height: 0.266rem;
                        margin-left: 0.266rem;
                    }                  
                }
            }
        }
        #amend{
            display: block;
            width: 9.2rem;
            height: 1.2rem;
            background: #31c1c1;
            border-radius: 10px;
            line-height: 1.2rem;
            text-align: center;
            color: #fff;
            margin: 0 auto;
            margin-top: 0.533rem;
            font-size: 17px;
        }
    }
</style>
