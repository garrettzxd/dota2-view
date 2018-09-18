<template>
    <div class="tab-item" @click="itemClick">
        <img v-if="imgUrl" :src="imgUrl" class="tab-img" :class="{imgActive: !_isActive}"/>
        <div class="tab-text" :class="{active: _isActive}">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: 'TabItem',

        props: {
            text: {
                type: String,
                required: true
            },
            to: {
                type: String
            },
            imgUrl: String,
            name: String
        },

        inject: ['tabBar'],

        mounted() {
            if (this.$parent.$options.name !== 'TabBar') {
                console.error('[Position error]','TabItem must use in TabBar component!')
            }
        },

        computed: {
            _isActive() {
                return this.name === this.tabBar.value;
            }
        },

        methods: {
            itemClick() {
                this.tabBar.updateFocus(this.name);
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
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    .tab-text{
        font-size: 12px;
        color: #ccc;
    }
    .active{
        color: #38f;
    }
</style>
