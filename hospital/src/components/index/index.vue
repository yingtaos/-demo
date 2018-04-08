<template>
    <div id="index">
        <header>
            <h2>鹿城区人民医院</h2>
            <div id="box">

            </div>
        </header>
        <div id="user">
            <div id="userHospital">
                <span>
                    当前医院
                </span>
                <p><u>当前医院当前医院当前医院</u></p>
                <img src="../../assets/img/more.png" alt="">
            </div>
            <div id="userName">
                <span>当前就诊人</span>
                <p><u>当前就诊人当前就诊人</u></p>
                <img src="../../assets/img/more.png" alt="">
            </div>
        </div>
        <ul id="nav">
            <li>
                <img src="../../assets/img/hospital.png" alt=""/>
                <span>医院介绍</span>
            </li>
            <li>
                <img src="../../assets/img/office.png" alt=""/>
                <span>科室介绍</span>
            </li>
            <li>
                <img src="../../assets/img/doctor.png" alt=""/>
                <span>医生介绍</span>
            </li>
            <li>
                <img src="../../assets/img/guide.png" alt=""/>
                <span>就医指南</span>
            </li>
            <li>
                <img src="../../assets/img/location.png" alt=""/>
                <span>院内导航</span>
            </li>
            <li>
                <img src="../../assets/img/search.png" alt=""/>
                <span>报告单查询</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #index{
        header{
            margin-bottom: 0.533rem;
            h2{
                font-size: 17px;
                line-height: 1.2rem;
                text-align: center;
            }
            #box{
                height: 3.48rem;
                background: url(../../assets/img/header_bg.jpg) no-repeat ;
                background-size:cover; 
            }
        }
        #user{
            width: 9.2rem;
            height: 2.66rem;
            background: #fff; 
            border-radius: 20px;
            margin: 0 auto;
            margin-bottom: 0.405rem;
            box-shadow:0px -3px 3px #999;
            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.266rem;
                color: #222;
                span,p{
                    font-size: 13px;
                    line-height: 1.333rem;
                }
                img{
                    width: 0.48rem;
                    height: 0.266rem;
                }
            }
            #userHospital{
                border-bottom: 1px solid #f5f5f5;
            }
        }
        #nav{
            background: #FFF;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            border-top: 1px solid #e9e9e9;
            // border-bottom: 1px solid #e9e9e9;
            li{
                border-right: 1px solid #e9e9e9;
                border-bottom: 1px solid #e9e9e9; 
                padding-top: 0.533rem;
                width: 33.05%;
                height: 2.8rem;
                img,span{
                    display: block;
                    margin: 0 auto;
                }
                img{
                    width: 1.653rem;
                    height: 1.653rem;
                    margin-bottom: 0.133rem;
                }
                span{
                    text-align: center;
                    font-size: 13px;
                    color: #222;
                }
                
            }
        }
    }
    
</style>

