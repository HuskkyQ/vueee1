<template>
    <div>

        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/IMG_1.jpg" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <img src="../../images/IMG_2.jpg" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <img src="../../images/IMG_3.jpg" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <img src="../../images/IMG_4.jpg" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/IMG_5.jpg" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/IMG_6.jpg" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul>
        </div>



    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import swiper from '../subcomponents/swiper.vue';

    export default {
        data(){
            return {
                lunbotuList:[] // 保存轮播图的数组
            }
        },
        created(){
            this.getLunbotu();
        },
        methods:{
            getLunbotu(){ // 获取轮播图数据的方法
                this.$http.get("api/getlunbo").then(result => {
                    if(result.body.status === 0){
                        this.lunbotuList = result.body.message;
                    }else{
                        Toast('加载失败');
                    }
                });
            }
        },
        components:{
            swiper
        }
    }


</script>

<style lang="scss" scoped>


/*
    .mint-swipe-item:nth-child(1){
        background-color: yellowgreen;
    }
    .mint-swipe-item:nth-child(2){
        background-color: cyan;
    }
    .mint-swipe-item:nth-child(3){
        background-color: lightblue;
    }
*/
    .mui-content{
        width: 100%;


    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border:none;
        img{
            width:138px;
            height: 138px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        width: 33.3%;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell{
        border: 0;

    }
</style>