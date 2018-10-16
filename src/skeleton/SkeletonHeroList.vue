<template>
    <div class="list-content">
        <skeleton-header></skeleton-header>
        <div class="title"></div>
        <div v-for="item in 8" class="ske-list">
            <div class="ske-img"></div>
            <div class="ske-simple"></div>
        </div>
        <skeleton-footer></skeleton-footer>
    </div>
</template>

<script>
    import SkeletonHeader from './SkeletonHeader'
    import SkeletonFooter from './SkeletonFooter'
    export default {
        name: "SkeletonHeroList",

        components: {
            SkeletonHeader,
            SkeletonFooter
        }
    }
</script>

<style scoped>
    .list-content{
        background: #e0e5ea;
        height: 800px;
    }
    .title{
        margin-top: 50px;
        background: #f5f5f5;
        height: 40px;
        width: 100px;
    }
    .ske-list{
        margin-top: 5px;
        padding-top: 5px;
        height: 45px;
        background: #f5f5f5;
    }
    .ske-img{
        margin: 0 10px;
        width: 70px;
        height: 40px;
        background: #e0e5ea;
        display: inline-block;
    }
    .ske-simple{
        display: inline-block;
        width: 120px;
        height: 15px;
        background: #e0e5ea;
        vertical-align: top;
    }
</style>