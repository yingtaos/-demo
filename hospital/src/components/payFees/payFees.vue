<template>
    <div  id="payFees">
        <header>缴费</header>
        <div id="payNav" >
            <router-link :class="{'action': route=='/payFees/order'}" to="/payFees/order">
                诊间缴费
            </router-link>
            <router-link :class="{'action': route=='/payFees/hospitalization'}" to="/payFees/hospitalization">
                 住院缴费
            </router-link>
        </div>       
        <router-view/>
    </div>
</template>
<script>
export default {
    computed:{
        route(){
            return this.$route.path
        }
    }
}
</script>
<style lang="scss"  scoped>   
    header{
        background: #31c1c1;
        font-size: 17px;
        color: #fff;
        height: 1.333rem;
        line-height: 1.333rem;
        text-align: center;
    }
    #payNav{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.133rem;
        background: #ffffff;
        a{
            display: block;
            width: 50%;
            text-align: center;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 15px;
            color: #222;
        }
        .action{
            color: #31c1c1;
            border-bottom:2px solid #31c1c1; 
        }
    }
    
</style>