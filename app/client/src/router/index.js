import Vue from "vue"
import Router from "vue-router"
import SignIn from "@/components/SignIn.vue"
import HomePage from "@/components/HomePage.vue"


Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'HomePage',
            component: HomePage 
        },
        {
            path:'/signin',
            name: 'SignIn',
            component: SignIn
        } 
    ]
})