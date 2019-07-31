// console.log('ok');

import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);


import moment from 'moment';
// 定义全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern = "YYYY-MM-DD hh:mm:ss") {
    moment(dataStr).format(pattern);
});



// 2.1 导入 vue-resource
import VueResource from 'vue-resource';
// 2.2 安装 vue-resource
Vue.use(VueResource);

// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true;


// 1.3 导入自己的 router.js 路由模块
import router from './router.js';


import {Header,Swipe, SwipeItem,Button} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';



import app from './App.vue';

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router // 1.4 挂载路由对象到VM实例上
});