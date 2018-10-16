<template>
    <div class="main-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'MainContent'
    }
</script>

<style scoped>
    .main-content{
        margin-top: 56px;
        padding-left: 8px;
        background: #fff;
    }
</style>