<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChanged" ref="numbox" readonly/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js';

    export default {
        mounted() {
            mui(".mui-numbox").numbox();
        },
        methods:{
            countChanged(){
                // 数量改变了
                // 每当数量值改变,则立即把最新的数量同步到购物车的store中,覆盖之前的数量
                this.$store.commit("updateGoodsInfo",{
                    id:this.goodsid,
                    count:this.$refs.numbox.value
                });
            }
        },
        props:["initCount","goodsid"]
    }

</script>

<style lang="scss" scoped>

</style>