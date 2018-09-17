<template>
    <div class="tab-content">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'TabBar'
    }
</script>

<style scoped>
    .tab-content{
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #ffffff;
        display: flex;
    }
</style>