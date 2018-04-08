<template>
    <div id="hospitalization">
        <div id="userMsg">
            <div id="username">
                <span>当前就诊人:</span>
                <div>
                    <p>当前就诊人</p>
                    <img src="../../assets/img/more.png" alt=""/>
                </div>
            </div>
            <div id="userHos">
                <span>当前就诊医院:</span>
                <div>
                    <p>当前就诊医院</p>
                    <img src="../../assets/img/more.png" alt=""/>
                </div>
            </div>
            <div id="balance">
                <span>账户余额:</span>
                <p>111元</p>
            </div>
        </div>
        <div id="btn">
            <router-link to="/payFees/prepay">预缴费用</router-link>
            <button>出院结算</button>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{

        }
    } 
}
</script>

<style lang="scss" scoped>
    #hospitalization{
        padding-top: 0.066rem;
        #userMsg{
            background: #fff;
            padding: 0 0.4rem;
            margin-bottom: 0.8rem;
            div{
                border-bottom:1px solid #f5f5f5;
                height: 1.066rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 14px;
                color: #666;
                span{
                    width: 2.4rem;
                }
                p{
                    margin:0 0.133rem 0 0.4rem;
                }
                img{
                    width: 0.48rem;
                    height: 0.266rem;
                }
            }
            #balance{
                p{
                    color: #ff0000;
                }
            }
        }
        #btn{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            button,a{
                text-align: center;
                border: none;
                border-radius: 10px;
                background: #31c1c1;
                width: 9.2rem;
                height: 1.066rem;
                line-height: 1.066rem;
                font-size: 15px;
                color: #fff;
                margin-bottom: 0.133rem;
            }
        }
    }
</style>
