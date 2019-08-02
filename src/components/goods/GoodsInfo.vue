<template>
    <div class="goodsinfo-container">

        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>



        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <del>{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价: <span class="now_price">{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量:<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!--商品参数区域-->

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodsinfo.goods_no}}</p>
                    <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间:{{goodsinfo.add_time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>


<script>
    // 导入轮播图组件
    import swiper from '../subcomponents/swiper.vue';

    // 导入数字选择框 组件
    import numbox from '../subcomponents/goodsinfo_numberbox.vue';


    export default {
        data(){
            return {
                id:this.$route.params.id, // 将路由参数对象中的id 挂载到 data,方便后期调用
                lunbotu:[], // 轮播图的数据
                goodsinfo:{}, // 商品信息数据
                ballFlag:false,
                selectedCount:1, // 保存用户选中的商品数量，默认为1
            }
        },
        created(){
            this.getLunbotu();
            this.getGoodsInfo();
        },
        methods:{
            getLunbotu(){
                this.$http.get("api/getthumimages/" + this.id).then(result => {
                    if(result.body.status === 0){
                        // 先循环轮播图数组,为 item 添加img属性,因为轮播图组件中,不认识 item.src , 需要更改格式为 item.img
                        result.body.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.lunbotu = result.body.message;
                    }
                })
            },
            // 获取商品的信息
            getGoodsInfo(){
                this.$http.get("api/goods/getinfo/" + this.id).then(result => {
                    if(result.body.status === 0){
                        this.goodsinfo = result.body.message[0];
                    }
                })
            },
            goDesc(id){ // 编程式导航实现跳转到图文介绍页面
                this.$router.push({name:'goodsdesc',params:{id}})
            },
            goComment(id){
                this.$router.push({name:'goodscomment',params:{id}})
            },
            addToShopCar(){
                // 添加购物车
                this.ballFlag = !this.ballFlag;
                // 拼接出要保存到 store 中的 car数组里的商品信息对象
                var goodsinfo = {id:this.id,count:this.selectedCount,price:this.goodsinfo.sell_price,select:true};

                // 调用 store 中 的 mutations 来讲商品加入购物车
                this.$store.commit('addToCar',goodsinfo);

            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)";
            },
            enter(el,done){
                el.offsetWidth;
                // 小球动画优化思路

                // 获取小球在页面中的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                // 获取 徽标 在页面中的位置
                const badgePosition = document.getElementById("badge").getBoundingClientRect();

                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;


                el.style.transform =  `translate(${xDist}px,${yDist}px)`;
                el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el){
                this.ballFlag=!this.ballFlag;
            },
            getSelectedCount(count){
                this.selectedCount = count;
                console.log('这是' + this.selectedCount);
            }
        },
        components:{
            swiper,
            numbox
        }
    }

</script>

<style lang="scss">
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;




        .now_price{
            color: red;
            font-size: 16px;
            font-weight: bold;
        }

        .mui-card-footer{
            display: block;
            button{
                margin: 15px 0;
            }
        }


        .ball{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top:511px;
            left:75px;
        }

    }


</style>