import Vue from 'vue'
import Router from 'vue-router'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Index from '@/components/index/index'

import PayFees from '@/components/payFees/payFees'
import Order from '@/components/payFees/order'
import Hospitalization from '@/components/payFees/hospitalization'
import Prepay from '@/components/payFees/prepay'

import My from '@/components/my/my'

//以下是二级组件
import Useradmin from '@/components/my/useradmin/useradmin'
import Userlist from '@/components/my/useradmin/userlist'
import Adduser from '@/components/my/useradmin/adduser'
import Autonym from '@/components/my/autonym/autonym'
import Capital from '@/components/my/capital/capital'
import Cutuser from '@/components/my/cutuser/cutuser'
import Bill from '@/components/my/bill/bill'
import Billdetail from '@/components/my/bill/billdetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"*",
      redirect:"/index/index"
    },
    //首页
    {
      path:"/index/index",
      name:"index",
      component:Index
    },
    //缴费
    {
      path:"/payFees/payFees",
      name:"payFees",
      component:PayFees,
      children:[
        {
          path:"/payFees/order",
          component:Order
        },
        {
          path:"/payFees/hospitalization",
          component:Hospitalization,          
        }
      ]
    },
    { 
      path:"/payFees/prepay",
      component:Prepay
    },

    // 我的
    {
      path:"/my/my",
      name:"my",
      component:My
    },
    {
      path:"/my/useradmin/useradmin",
      component:Useradmin,
      children:[
        {
          path:"/my/useradmin/userlist",
          component:Userlist
        },
        {
          path:"/my/useradmin/adduser/:id",
          component:Adduser
        }
      ]          
    },
    {
      path:"/my/autonym/autonym",
      component:Autonym,
    },
    {
      path:"/my/capital/capital",
      component:Capital,
    },
    {
      path:"/my/cutuser/cutuser",
      component:Cutuser,
    },
    {
      path:"/my/bill/bill/:id",
      component:Bill,
    },
    {
      path:"/my/bill/bill/billdetail/:id",
      component:Billdetail,
    },

    // {
    //   path: '/',
    //   name: 'Footer',
    //   component: Footer,
    //   children:[        
    //   ]
    // }
  ]
})
