<template>
    <div>
        <nav-bar :title="nav_title"></nav-bar>
        <main-content>111</main-content>
        <tab-bar v-model="current">
            <tab-item text="力量" img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/items/power.png" name="power"></tab-item>
            <tab-item text="敏捷" img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/items/power.png" name="agile"></tab-item>
            <tab-item text="智力" img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/items/power.png" name="brains"></tab-item>
        </tab-bar>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import TabBar from '../components/TabBar'
    import TabItem from  '../components/TabItem'
    import MainContent from  '../components/MainContent'
    import SimpleCard from  '../components/HeroSimpleCard'
    export default {
        name: 'Index',

        data() {
            return {
                nav_title: '主页',
                current: 'agile'
            }
        },

        components: {
            NavBar,
            TabBar,
            TabItem,
            SimpleCard,
            MainContent
        },
    }
</script>