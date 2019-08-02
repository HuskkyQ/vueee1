// console.log('ok');

import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);


// 注册 vuex
import Vuex from 'vuex';
Vue.use(Vuex);

// 每次刚进入网站就把本地数据中的 购物车的数据 读出来
var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new Vuex.Store({
    state:{ // this.$store.state.*** 来调用
        car: car, // 将购物车商品的数量 用数组 存储
    },
    mutations:{ // this.$store.commit('方法名称','按需传递唯一的参数')
        addToCar(state,goodsinfo){
            // 点击加入购物车,把商品信息保存到store中的car里面
            var flag = false;

            state.car.some(item => {
                if(item.id === goodsinfo.id){
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            });
            if(!flag){
                state.car.push(goodsinfo);
            }
            // 更新car数组后,将 car 保存到 localStorage 中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            // 修改购物车中商品的数量值
            state.car.some(item => {
                if(item.id === goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            });
            // 当修改完商品的数量,把最新的购物车数据,保存到本地存储
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            // 根据id,从store中的购物车删除对应的那条
            state.car.some((item,i) => {
                if(item.id === id){
                    state.car.splice(i,1);
                    return true;
                }
            });
            // 当删除完商品的数量,把最新的购物车数据,保存到本地存储
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item => {
                if(item.id === info.id){
                    item.selected = info.selected;
                }
            });
            // 把最新的购物车的状态保存到 store中
            localStorage.setItem('car',JSON.stringify(state.car))
        }




    },
    getters:{ // this.$store.getters.***
        // 相当于计算属性
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            });
            return c;
        },
        getGoodsCount(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = parseInt(item.count);
            });
            return o;
        },
        getGoodsSelected(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.selected;
            });
            return o;
        },
        getGoodsCountAndAmount(state){
            var o = {
                count:0, // 勾选的数量
                amount:0, // 勾选的总价
            };
            state.car.forEach(item => {
                if(item.selected){
                    o.count += item.count;
                    o.amount += item.price * item.count;
                }
            });
            return o;
        }
    }
});







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


/*import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);*/

import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 安装图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);




import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';



import app from './App.vue';

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router, // 1.4 挂载路由对象到VM实例上
    store // 把 vuex 创建的实例挂载到VM实例上
});