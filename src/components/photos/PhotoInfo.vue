<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!--缩略图内容-->

        <div class="suoluetu">
            <vue-preview :slides="list"></vue-preview>
        </div>

        <!--图片内容-->

        <div class="content" v-html="photoinfo.content"> </div>

        <!--评论子组件-->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    // 1. 导入评论子组件
    import comment from '../subcomponents/comment.vue';


    export default {
        data(){
            return {
                id: this.$route.params.id, // 路由中获取的id
                photoinfo:{}, // 图片详情
                list:[] // 缩略图数组
            }
        },
        created(){
          this.getPhotoInfo();
          this.getThumbs();
        },
        methods:{
            getPhotoInfo(){
                // 获取图片详情
                this.$http.get("api/getimageInfo/" + this.id).then(result => {
                    if(result.body.status === 0){
                        this.photoinfo = result.body.message[0];
                    }
                })
            },
            getThumbs(){
                // 获取缩略图
                this.$http.get("api/getthumimages/" + this.id).then(result => {
                    if(result.body.status === 0){
                        // 循环每个图片数据,补全图片的宽和高
                        result.body.message.forEach(item =>{
                            item.w = 600;
                            item.h = 400;
                            item.msrc = item.src;//msrc：小图像,到时候让后端传个小图像过来
                        });
                        // 把完整的数据保存到 list 中
                        this.list = result.body.message;
                    }
                })
            }
        },
        components:{
            // 注册评论子组件
            'cmt-box':comment,
        }
    }

</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding: 3px;
        h3{
            color: #26A2FF;
            font-size: 15px;
            text-align: center;
            margin: 15px;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }
        .content{
            font-size: 13px;
        }

        .suoluetu {
            img {
                width: 60px;
                height: 80px;
                margin: 5px;
                box-shadow: 0 0 8px #999;
            }
        }
    }


</style>

<style lang="scss">
    .photoinfo-container {
        .suoluetu {
            .my-gallery{
                display: flex;
                flex-wrap: wrap;
            }
            figure {
                width: 60px;
                height: 80px;
                margin: 10px;
                box-shadow: 0 0 8px #999;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>