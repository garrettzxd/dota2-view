<template>
    <div>
        <nav-bar :title="nav_title"></nav-bar>
        <main-content>111</main-content>
        <tab-bar>
            <tab-item text="1" img-url="../assets/power.png"></tab-item>
            <tab-item text="2"></tab-item>
            <tab-item text="3"></tab-item>
        </tab-bar>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import TabBar from '../components/TabBar'
    import TabItem from  '../components/TabItem'
    import MainContent from  '../components/MainContent'
    export default {
        name: 'Index',

        data() {
            return {
                nav_title: '主页'
            }
        },

        components: {
            NavBar,
            TabBar,
            TabItem,
            MainContent
        },
    }
</script>