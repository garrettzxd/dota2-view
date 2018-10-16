<template>
    <div class="ske-footer">
        <div class="ske-footer-item">
            <div class="ske-img"></div>
        </div>
        <div class="ske-footer-item">
            <div class="ske-img"></div>
        </div>
        <div class="ske-footer-item">
            <div class="ske-img"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonFooter'
    }
</script>

<style scoped>
    .ske-footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #f5f5f5;
        display: flex;
    }
    .ske-footer-item{
        flex-grow: 1;
        position: relative;
    }
    .ske-img{
        width: 25px;
        height: 25px;
        background: #e0e5ea;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>