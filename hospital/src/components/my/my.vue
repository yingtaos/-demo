<template>
    <div id="my">        
        <header>
            <h2>我的</h2>
            <div>
                <span>当前就诊人/</span>
                <span>{{username}}</span>
                <router-link to="/my/cutuser/cutuser">
                    <img src="../../assets/img/more_m.png" alt=""/>
                </router-link>                
            </div>
        </header>
        <div id="userMsg">
            <img id="userPic" src="../../assets/img/doctor.png" alt=""/>
            <div id="userName">
                <div>
                    <span>痘痘</span>
                    <router-link to="/my/autonym/autonym">
                        <img src="../../assets/img/alter.png" alt=""/>
                    </router-link>
                    
                </div>
                <p>333333333333333333</p>
            </div>
        </div>
        <div id="operation">
            <router-link to="/my/capital/capital">
                <img src="../../assets/img/money_detail.png" alt=""/>
                <span>资金明细</span>
            </router-link>
            <router-link to="/my/useradmin/userlist">
                <img src="../../assets/img/patient.png" alt=""/>
                <span>就诊人管理</span>
            </router-link>
        </div>
        <div id="myPayFees">
            <h2>我的缴费</h2>
            <ul>
                <li>
                    <router-link to="/my/bill/bill/&0">
                        <img src="../../assets/img/allpay.png" alt=""/>
                        <span>全部</span>
                    </router-link>                    
                </li>
                <li>
                    <router-link to="/my/bill/bill/&1">
                        <img src="../../assets/img/awaitpay.png" alt=""/>
                        <span>待支付</span>
                    </router-link>                    
                </li>
                <li>
                    <router-link to="/my/bill/bill/&2">
                        <img src="../../assets/img/payed.png" alt=""/>
                        <span>已支付</span>
                    </router-link>
                    
                </li>
                <li>
                    <router-link to="/my/bill/bill/&3">
                        <img src="../../assets/img/cancelpay.png" alt=""/>
                        <span>已取消</span>
                    </router-link>                    
                </li>
            </ul>
        </div>
        <div id="myReport">
            <h2>我的报告</h2>
            <ul>
                <li>
                    <a>
                        <img src="../../assets/img/biochemistry.png" alt=""/>
                        <span>生化检查单</span> 
                    </a>                    
                </li>
                <li>
                    <a>
                        <img src="../../assets/img/shadow.png" alt=""/>
                        <span>影像检查单</span>
                    </a>                    
                </li>
                <li>
                    <a>
                        <img src="../../assets/img/examination.png" alt=""/>
                        <span>体检报告单</span>
                    </a>                    
                </li>
                <li>
                    <a>
                        <img src="../../assets/img/case.png" alt=""/>
                        <span>就诊病例</span>
                    </a>                    
                </li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>
<script>
import bus from '../../js/bus.js';
export default {
    data(){
        return{
            username:""
        }
    },
    mounted(){
        let This=this;
        bus.$on("username",(name)=>{
            this.username=name
        })
    }
}
</script>
<style lang="scss"  scoped>
    #my{
        color: #222;
        header{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 1.33rem;
            background: #fdfdfd;
            h2{
                line-height: 1.33rem;
                font-size: 17px;
            }
            div{
                position: absolute;
                right: 0.4rem;
                display: flex;
                justify-content: flex-start;
                height: 0.32rem;
                span{
                    font-size: 12px;                    
                }
                a{
                    width: 0.48rem;
                    height: 0.266rem;
                    margin:0.053rem 0 0 0.133rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }                
            }
        }
        #userMsg{
            background: #fdfdfd;
            padding-top: 0.133rem;
            padding-left: 0.48rem;
            display: flex;
            justify-content: flex-start;
            #userPic{
                width: 1.866rem;
                height: 1.866rem;
                border-radius: 50%;
                margin-right: 0.32rem;
                margin-bottom: 0.4rem;
            }
            #userName{
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                margin-top: 0.48rem;
                div{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.32rem;
                    span{
                        line-height: 0.453rem;
                    }
                    a{
                        width: 0.453rem;
                        height: 0.453rem; 
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    
                }
            }
        }
        #operation{
            border-top: 1px solid #f5f5f5;
            display: flex;
            justify-content: flex-start;
            height: 1.333rem;
            background: #fff;
            margin-bottom: 0.32rem;
            a{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 1.013rem;
                    height: 0.8rem;
                    margin-right: 0.533rem;
                    
                }
                span{
                    color: #222;
                }
            }
            a:nth-child(1){
                border-right: 1px solid #f5f5f5;
            }
        }
        #myPayFees,#myReport{
            background: #ffffff;
            margin-bottom: 0.32rem;
            h2{
                border-bottom: 1px solid #f5f5f5;
                height: 1.066rem;
                padding-left: 0.266rem;
                line-height: 1.066rem;
                font-size: 13px;
            }
            ul{
                display: flex;
                justify-content: flex-start;
                li{                   
                    width: 25%;
                    padding: 0.266rem 0; 
                    position: relative;                  
                    a{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;                        
                        img{
                            width: 0.933rem;
                            height:0.933rem;
                            margin-bottom: 0.266rem;
                        }
                        span{
                            color: #222;
                        }
                    }
                    &:after{
                        content: " ";
                        background: #f5f5f5;
                        width: 1px;
                        height: 1.467rem;
                        position: absolute;
                        top: 50%;
                        margin-top: -0.73354rem;
                        right: 0;
                    }                    
                }               
                li:last-child{
                    &:after{
                        content:none;
                    }
                }
            }
        }
    }
</style>