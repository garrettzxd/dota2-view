<template>
    <div class="card-content">
        <div class="card-img-content">
            <img class="card-img" :src="imgUrl"/>
        </div>
        <div class="card-detail">
            <span class="detail-name">{{name}}</span>
            <span class="detail-position">{{position}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroSimpleView',

        props: {
            imgUrl: String,
            name: String,
            position: String,
            nickName: String,
            describe: String,
        }
    }
</script>

<style scoped>
    .card-content{
        height: 50px;
        display: flex;
        border-bottom: 1px solid #e0e5ea;
    }
    .card-img-content{
        height: 50px;
        font-size: 0;
        display: flex;
        align-items: center;
    }
    .card-img{
        width: 70px;
        align-items: center;
    }
    .card-detail{
        flex-grow: 1;
        padding-left: 10px;
    }
    .detail-name{
        font-size: 14px;
        color: #3d9027;
    }
    .detail-position{
        font-size: 11px;
        color: #ccc;
    }
</style>