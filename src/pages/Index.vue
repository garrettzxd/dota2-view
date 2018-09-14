<template>
    <div>
        <nav-bar title="标题" show-back></nav-bar>
        <div>这里是内容</div>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import TabBar from '../components/TabBar'
    export default {
        name: 'Index',

        components: {
            NavBar,
            TabBar
        }
    }
</script>