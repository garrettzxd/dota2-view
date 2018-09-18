<template>
    <div>
        <nav-bar :title="nav_title"></nav-bar>
        <main-content>
            <simple-card
                name="亚巴顿"
                nick-name="阿巴东"
                position="耐久 逃生"
                img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/heroes/abaddon_hphover.png">
            </simple-card>
            <simple-card
                name="恐怖利刃"
                nick-name="TB"
                position="核心 后期"
                img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/heroes/terrorblade_hphover.png">
            </simple-card>
        </main-content>
        <tab-bar v-model="current">
            <tab-item text="力量" img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/icon/overviewicon_str.png" name="power"></tab-item>
            <tab-item text="敏捷" img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/icon/overviewicon_agi.png" name="agile"></tab-item>
            <tab-item text="智力" img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/icon/overviewicon_int.png" name="brains"></tab-item>
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