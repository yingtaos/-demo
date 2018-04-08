<template>
    <div id="userlist">
        <ul class="userlist">
            <li>
                <span>医保就诊卡</span>
                <span>痘痘</span>
            </li>
            <li>
                <span>手机号码:</span>&nbsp;&nbsp;&nbsp;
                <span>18268508492</span>
            </li>
            <li>
                <span>身份证号:</span>&nbsp;&nbsp;&nbsp;
                <span>111111111111111111</span>
            </li>
            <li>
                <span>就诊卡号:</span>&nbsp;&nbsp;&nbsp;
                <span>123456456</span>
            </li>
            <li>
                <div id="default">
                    <div @click="defaultOnOff()">
                        <img src="../../../assets/img/finish.png" alt="" v-if="defaultimg"/>
                    </div>                    
                    <span>设置为默认</span>
                </div>
                <div id="compile">
                    <router-link to="/my/useradmin/adduser/&0" @tap="setuser()">
                        <img src="../../../assets/img/compile.png" alt=""/>
                        <span>编辑</span>
                    </router-link>
                    <div >
                        <img src="../../../assets/img/unbundle.png" alt=""/>
                        <span>解绑</span>
                    </div>
                </div>
            </li>
        </ul>
        <router-link @click="adduser()" to="/my/useradmin/adduser/&1" id="adduser" >
            添加就诊人
        </router-link>
    </div>
</template>
<script>
import store from "../../../store/store.js";
import bus from '../../../js/bus.js';
export default {
    data(){
        return{
            defaultimg:false,
            add:null
        }
    },
    mounted(){
        bus.$emit("header-title", "就诊人管理");
    },
    methods:{               
        defaultOnOff(){
            if(this.defaultimg){
                this.defaultimg=false;
            }else{
                this.defaultimg=true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    #userlist{
        margin-top: 0.133rem;
        .userlist{
            padding: 0 0.4rem;
            border-top: 2px solid #31c1c1;
            margin-bottom: 0.133rem;
            font-size: 14px;
            color: #666;
            background: #fff;
            li{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 1.2rem;
                border-bottom: 1px solid #f5f5f5;
            }
            li:first-child,li:last-child{
                justify-content: space-between;
            }
            li:first-child{
                height: 1.3333rem;
                font-size: 15px;
                color: #222;
            }
            li:last-child{
                height: 1.466rem;
                #default{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    div{
                        width: 0.56rem;
                        height: 0.56rem;
                        border-radius: 50%;
                        margin-right: 0.266rem;
                        border: 1px solid #f5f5f5;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    
                }
                #compile{
                    width: 3.173rem;
                    display: flex;
                    justify-content: space-between;
                    img{
                        margin-right: 0.266rem;
                    }
                    a{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        img{
                            width: 0.426rem;
                            height: 0.466rem;
                        }
                        span{
                            font-size: 14px;
                            color: #666;
                        }
                    }
                    div{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        img{
                            width: 0.373rem;
                            height: 0.466rem;
                        }
                    }
                }
            }
        }
        #adduser{
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
