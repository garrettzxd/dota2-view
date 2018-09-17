<template>
    <div class="tab-item">
        <div>{{text}}</div>
        <img v-if="imgUrl" :src="imgUrl"/>
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
            imgUrl: String
        }
    }
</script>

<style scoped>
    .tab-item{
        flex-grow: 1;
        text-align: center;
    }
</style>
