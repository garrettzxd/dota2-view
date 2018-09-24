<template>
    <div class="title-content">
        <div class="title-describe">
            <p class="describe describe-en">{{title.en_title}}</p>
            <p class="describe describe-cn">{{title.cn_title}}</p>
        </div>
        <span class="title-decorate"></span>
    </div>
</template>

<script>
    export default {
        name: 'TitleShow',

        computed: {
            upperCase() {
            }
        },

        props: {
            title: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .title-content{
        height: 50px;
        background: 50px;
        box-sizing: border-box;
        border-top: 2px solid #3d9027;
        margin-left: -8px;
        font-size: 0;

    }
    .title-describe{
        display: inline-block;
        background: #3d9027;
        width: 80px;
        height: 40px;
        margin-top: -1px;
        vertical-align: top;
    }
    .title-decorate{
        display: inline-block;
        /*background: #3d9027;*/
        border-top: 20px solid #3d9027;
        border-left: 24px solid #3d9027;
        border-bottom: 20px solid transparent;
        border-right: 24px solid transparent;
        margin-top: -1px;
        margin-left: -1px;
    }
    .describe{
        margin: 0;
        text-align: center;
        color: #fff;
    }
    .describe-en{
        font-size: 12px;
    }
    .describe-cn{
        font-size: 14px;
    }
</style>