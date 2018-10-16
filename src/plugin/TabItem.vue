<template>
    <div class="tab-item" @click="itemClick">
        <img v-if="imgUrl" :src="imgUrl" class="tab-img" :class="{imgActive: !_isActive}"/>
        <div class="tab-text" :class="{active: _isActive}">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: 'TabItem',

        /**
         * @prop[text] 文字内容,必选参数
         * @prop[to] 目标命名路由的name,可选参数
         * @prop[val] 当前item的值,必选参数
         * @prop[imgUrl]  图标链接地址,可选参数
         * */
        props: {
            text: {
                type: String,
                required: true
            },
            to: {
                type: String
            },
            val: {
                type: String,
                required: true
            },
            imgUrl: String
        },

        inject: ['tabBar'],

        mounted() {
            //判断当前是否在TabBar组件下
            if (this.$parent.$options.name !== 'TabBar') {
                throw new Error('[Position error]TabItem must use in TabBar component!');
            }
        },

        computed: {
            //当前item是否处于焦点状态
            _isActive() {
                return this.val === this.tabBar.value;
            }
        },

        methods: {
            itemClick() {
                //更新父组件的状态值
                this.tabBar.updateFocus(this.val);
                if (this.to) {
                    this.$router.push({name: this.to,params: {type: this.val}})
                }
            }
        }
    }
</script>

<style scoped>
    .tab-item{
        flex-grow: 1;
        text-align: center;
        font-size: 0;
    }
    .tab-img{
        width: 25px;
        margin-top: -3px;
    }
    .imgActive{
        -webkit-filter: grayscale(85%);
        filter: grayscale(85%);
    }
    .tab-text{
        font-size: 12px;
        color: #ccc;
    }
    .active{
        color: #38f;
    }
</style>
