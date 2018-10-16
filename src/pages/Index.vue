<template>
    <div>
        <nav-bar :title="nav_title"></nav-bar>

        <main-content>
            <router-view></router-view>
        </main-content>
    </div>
</template>

<script>
    import {OSS_BASE_URL} from "../common/contants";
    export default {
        name: 'Index',

        data() {
            return {
                nav_title: '主页',
                item_list: [{
                    text: '力量',
                    val: 'power',
                    img_url: `${OSS_BASE_URL}icon/overviewicon_str.png`
                },{
                    text: '敏捷',
                    val: 'agile',
                    img_url: `${OSS_BASE_URL}icon/overviewicon_agi.png`
                },{
                    text: '智力',
                    val: 'brains',
                    img_url: `${OSS_BASE_URL}icon/overviewicon_int.png`
                }]
            }
        },

        methods: {
            tabChange(route) {
                console.log('route is:',route);
            }
        }
    }
</script>
