<template>
    <div id="cutuser">
        <v-header></v-header>
        <div class="list">
            <div class="items">
                <div class="username">
                    <span>医保就诊卡</span>
                    <div>
                        <p>痘痘</p>
                        <div @click="choose()">
                            <img v-if="chooseImg" src="../../../assets/img/finish.png" alt="">
                        </div>                        
                    </div>                
                </div>
                <ul>
                    <li>
                        <span>手机号:</span>
                        <p>1313223</p>
                    </li>
                    <li>
                        <span>身份证:</span>
                        <p>6546521532183215</p>
                    </li>
                    <li>
                        <span>就诊卡号:</span>
                        <p>32153215</p>
                    </li>
                </ul>
            </div> 
            <div id="verify" @click="verify()">确认</div>                     
        </div>
    </div>
</template>
<script>
import Header from "../../header.vue";
import bus from '../../../js/bus.js';
export default {
    data(){
        return{
            chooseImg:false,
            username:null
        }
    },
    mounted(){
        bus.$emit("header-title", "切换就诊人");
    },
    methods:{
        choose(){
            if(this.chooseImg){
                this.chooseImg=false;
            }else{
                this.chooseImg=true;
                this.username="痘"
            }
        },
        verify(){
            
            bus.$emit("username", this.username);
            this.$router.go(-1)
        }
    },
    components : {//注册组件
 		"v-header" : Header
 	}
}
</script>
<style lang="scss" scoped>
    #cutuser{
        .list{
            padding-top: 0.266rem;
            
            .items{
                border-top: 3px solid #31c1c1;
                margin-bottom: 0.266rem;
                background: #fff;
                .username{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 0.4rem;
                    height: 1.333rem;
                    border-bottom: 2px solid #f5f5f5;
                    span{
                        font-size: 15px;
                        color: #222;
                    }
                    div{
                        display: flex;
                        justify-content: flex-start;
                        p{
                            color: #666;
                            line-height: 0.613rem;
                        }
                        div{
                            width: 0.56rem;
                            height: 0.56rem;
                            border-radius: 50%;
                            margin-left: 0.266rem;
                            border: 1px solid #f5f5f5;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }                        
                    }
                }
                ul{
                    padding: 0 0.4rem;
                    li{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        font-size: 14px;
                        color: #666;
                        height: 1.2rem;
                        border-bottom: 1px solid #f5f5f5;
                        span{
                            width: 1.6rem;
                            text-align: left;
                            margin-right: 0.266rem;
                        }
                    }
                }               
            }
            #verify{
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
    }
</style>
