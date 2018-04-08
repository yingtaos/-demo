<template>
    <div id="adduser">
        <!-- 添加/修改就诊人组件 -->
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
                <span>身份证号:</span>
                <input type="number"/>
            </li>
            <li v-if="add==0">
                <span>就诊卡类型:</span>
                <div id="calss">
                    <p>自费就诊卡</p>
                    <img src="../../../assets/img/more.png" alt="">
                </div>
            </li>   
        </ul>
        <div id="update">
            {{update}}
        </div>
    </div>
</template>
<script>
import store from "../../../store/store.js";
import bus from '../../../js/bus.js';
export default {
    data(){
        return{
            add:null,
            update:""
        }
    },
    mounted(){
        this.add=store.state.add;
        let path=this.$route.path.split("&");
        this.add=path[1];
        if(this.add==1){//添加就诊人
            this.update="提交";
            bus.$emit("header-title", "添加就诊人");
        }else{//编辑就诊人
            this.update="确认修改";
            bus.$emit("header-title", "编辑就诊人");
        }
    }
}
</script>
<style lang="scss" scoped>
    #adduser{
        ul{
            padding: 0 0.4rem;
            margin-bottom: 0.8rem;
            background: #fff;
            li{
                border-bottom: 1px solid #f5f5f5;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 1.2rem;
                span{
                    width: 2.36rem;
                    text-align: right;
                    margin-right: 0.4rem;
                    color: #222;
                    font-size: 14px;
                }
                input{
                    font-size: 14px;
                    color: #999;
                    border: none;
                }
                img{
                    width: 0.48rem;
                    height: 0.266rem;
                    margin-left: 0.266rem;
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
                }
            }
        }
        #update{
            width: 9.2rem;
            height: 1.2rem;
            background: #31c1c1;
            border-radius: 10px;
            margin:0 auto;
            text-align: center;
            line-height: 1.2rem;
            color: #fff;
            font-size: 17px;
        }
    }
</style>
