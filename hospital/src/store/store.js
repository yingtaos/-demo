import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        title:"",
        add:""
    },
    mutations:{
        setTitle(state,newTitle){
            store.state.title=newTitle;
        }        
    }
})
export default store;