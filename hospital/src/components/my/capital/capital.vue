<template>
    <div id="capital">
        <v-header></v-header>
        <ul>
            <li>
                <div>
                    <span>诊间费用</span>
                    <span>-5000.00元</span>
                </div>
                <div>
                    <p>华子/鹿城区第一医院</p>
                    <p>2018.03.23</p>
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

        }
    },
    mounted(){
        bus.$emit("header-title", "资金明细");
    },
    components : {//注册组件
 		"v-header" : Header
 	}
}
</script>
<style lang="scss" scoped>
    #capital{
        color: #222;        
        ul{
            padding: 0 0.4rem;
            background: #fff;
            margin-top: 0.266rem;
            li{
                border-bottom: 1px solid #f5f5f5;
                height: 1.466rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                div{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    span{
                        font-size: 15px;
                    }
                    p{
                        color: #666;
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>
