<template>
  <div id="order">
      <div class="userHospital">
            <div>
                <span>
                    当前医院
                </span>
                <p><u>当前医院当前医院当前医院</u></p>
            </div>           
            <img src="../../assets/img/more.png" alt="">
        </div>
      <!-- <div id="noOrder">
          <img src="../../assets/img/noOrder.png" alt=""/>
          <p>您当前没有待支付的诊间费用</p>
      </div> -->
      <ul id="orderList">
          <li>
              <div>
                  <span>诊间费用</span>
                  <p>待支付</p>
              </div>
              <div>
                  <span>订单编号</span>
                  <p>11111111111111</p>
              </div>
              <div>
                  <span>就诊人</span>
                  <p>如花</p>
              </div>
              <div>
                  <span>总计费用</span>
                  <p>11111</p>
              </div>
              <div>
                  <span>自费金额</span>
                  <p>222</p>
              </div>
              <div>
                  <button>删除</button>
                  <button>详情</button>
                  <button>付款</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    #order{
        .userHospital{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            height: 1.333rem;
            background: #fff;
            border-bottom: 1px solid #f5f5f5;
            div{
                display: flex;
                justify-content: flex-start;
                span{
                    margin: 0 0.4rem;
                    color: #666;
                    font-size: 13px;
                }
                p{
                    font-size: 14px;
                    color: #222;               
                }
            }
            img{
                width: 0.48rem;
                height: 0.266rem;
                position: absolute;
                right: 0.4rem;
            }
        }
        #noOrder{
            padding-top: 2.8rem;
            img{    
                width: 4.453rem;
                height: 3.467rem;
                margin: 0 auto;
                margin-bottom: 0.4rem;
            }
            p{
                font-size: 13px;
                color: #222;
                text-align: center;
            }
        }
        #orderList{
            background: #fff;
            li{
                margin-bottom: 0.133rem;
                padding: 0 0.4rem;
                div{
                    border-bottom: 1px solid #f5f5f5;
                    display: flex;
                    justify-content: flex-start;
                    line-height: 1.066rem;
                    height: 1.066rem;
                    font-size: 14px;
                    color: #666;
                    span{                       
                        margin-right: 0.4rem;
                    }
                }
                div:nth-child(1){
                    display: flex;
                    justify-content: space-between;
                    span{
                        color: #222;
                    }
                    p{
                        color:#31c1c1;
                    }
                }
                div:last-child{
                    display: flex;
                    justify-content: flex-end;
                    height: 1.6rem;
                    align-items: center;
                    button{
                        border: none;
                        background: #31c1c1;
                        color: #fff;
                        border-radius: 6px;
                        width: 1.333rem;
                        height: 0.8rem;
                    }
                    button:first-child{
                        background: #999;
                    }
                    button:nth-child(2){
                        margin: 0 0.133rem;
                    }
                }
            }
        }
    }
</style>

