import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import {routes} from './routes.js';
import VueRouter from 'vue-router';


Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({routes,mode:"history"});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
