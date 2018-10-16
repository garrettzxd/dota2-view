<template>
    <div class="nav-content" :style="{background: background}">
        <div class="nav-back" v-if="showBack" @click="backClick">{{backText}}</div>
        <div class="nav-title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',

        props: {
            title: {
                type: String,
                required: true
            },
            showBack: {
                type: Boolean,
                default: false
            },
            backText: {
                type: String,
                default: '返回'
            },
            background: {
                type: String,
                default: '#2b2b2b'
            }
        },

        methods: {
            backClick() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .nav-content{
        position: fixed;
        top: 0;
        left: 0;
        color: #ffffff;
        width: 100%;
        height: 46px;
        line-height: 46px;
    }
    .nav-back{
        position: absolute;
        left: 20px;
        font-size: 14px;
    }
    .nav-title{
        width: 200px;
        margin: 0 auto;
        text-align: center;
    }
</style>