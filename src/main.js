// console.log('ok');

import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);


// 2.1 导入 vue-resource
import VueResource from 'vue-resource';
// 2.2 安装 vue-resource
Vue.use(VueResource);


// 1.3 导入自己的 router.js 路由模块
import router from './router.js';


import {Header,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';



import app from './App.vue';

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router // 1.4 挂载路由对象到VM实例上
});