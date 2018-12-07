import Vue from 'vue'
import Router from 'vue-router'
import testVue from '../app-vue/testVue.vue'

Vue.use(Router)


//var baseUrl= 'localhost:8080/project';

export default new Router({


    base:'/project/index',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: testVue,
        }


        
    ]
})
console.log("router.js");
