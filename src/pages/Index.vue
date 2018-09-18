<template>
    <div>
        <nav-bar :title="nav_title"></nav-bar>
        <router-view></router-view>

        <tab-bar v-model="current">
            <tab-item
                text="力量"
                name="power"
                to="heroList"
                img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/icon/overviewicon_str.png">
            </tab-item>
            <tab-item
                text="敏捷"
                name="agile"
                to="heroList"
                img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/icon/overviewicon_agi.png">
            </tab-item>
            <tab-item
                text="智力"
                name="brains"
                to="heroList"
                img-url="http://dota2-imgs.oss-cn-beijing.aliyuncs.com/icon/overviewicon_int.png">
            </tab-item>
        </tab-bar>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import TabBar from '../components/TabBar'
    import TabItem from  '../components/TabItem'
    export default {
        name: 'Index',

        data() {
            return {
                nav_title: '主页',
                current: 'power'
            }
        },

        components: {
            NavBar,
            TabBar,
            TabItem,
        },

        methods: {
            tabChange(route) {
                console.log('route is:',route);
            }
        }
    }
</script>
