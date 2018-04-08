<template>
  <div id="footer">
      <div id="tabBar">
          <router-link to="idnex/index">
              <img src="../assets/img/index_t.png" alt="" v-show="route==='/index/index'"/>
              <img src="../assets/img/index_f.png" alt="" v-show="route!=='/index/index'"/>
              <span :class="{'action': route=='/index/index'}">首页</span>
          </router-link>
          <router-link to="/payFees/order">
              <img src="../assets/img/payFees_t.png" alt="" v-show="route==='/payFees/order'"/>
              <img src="../assets/img/payFees_f.png" alt="" v-show="route!=='/payFees/order'"/>
              <span :class="{'action': route=='/payFees/order'}">缴费</span>
          </router-link>
          <router-link to="/my/my">
              <img src="../assets/img/my_t.png" alt="" v-show="route==='/my/my'"/>
              <img src="../assets/img/my_f.png" alt="" v-show="route!=='/my/my'"/>
              <span :class="{'action': route=='/my/my'}">我的</span>
          </router-link>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            footer:null
        }
    },
    computed:{
        route(){
            return this.$route.path
        }
    },
    mounted(){
        // console.log(this.$route.path)
        // if(this.$route.path=='/index/index' || this.$route.path=='/payFees/order' || this.$route.path=='/my/my'){
        //     this.footer=true;
        // }else{
        //     this.footer=false;
        // }
    }
}
</script>
<style lang="scss" scoped>
    $width:100% !default ;
    #footer{
        background: #fff;
        position: fixed;
        bottom: 0;
        width:$width;
        height: 1.333rem;
        #tabBar {
            display: flex;
            justify-content: space-between;            
            // width:$width;
            padding: 0.186rem 1.333rem;
            a{
                width: 0.666rem;
                color:#222;
                img{
                    display: block;
                    width: 0.666rem;
                    height: 0.666rem;
                }
                .action{
                    color: #31c1c1;
                }
            }
        }
    }
    
</style>


