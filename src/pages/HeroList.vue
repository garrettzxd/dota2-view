<template>
    <main-content>
        <title-show :title="title"></title-show>
        <simple-card
            v-for="(item,index) in data_list"
            :key="index"
            :name="item.name"
            :nick-name="item.nick_name"
            :position="item.position"
            :img-url="item.img_url">
        </simple-card>
    </main-content>
</template>

<script>
    import MainContent from '../components/MainContent'
    import TitleShow from '../components/TitleShow'
    import SimpleCard from  '../components/HeroSimpleCard'
    export default {
        name: 'HeroList',

        mounted() {
            this.data_list = this.power_list;
        },

        beforeRouteUpdate(to, from, next) {
            let route = to.params.type;
            this.title.en_title = route;
            switch (route) {
                case 'power':
                    this.data_list = this.power_list;
                    this.title.cn_title = '力量';
                    break;
                case 'agile':
                    this.data_list = this.agile_list;
                    this.title.cn_title = '敏捷';
                    break;
                case 'brains':
                    this.data_list = this.brains_list;
                    this.title.cn_title = '智力';
                    break;
            }
            next()
        },

        components: {
            MainContent,
            SimpleCard,
            TitleShow
        },

        data() {
            return {
                title: {
                    en_title: 'power',
                    cn_title: '力量'
                },
                data_list: [],
                power_list: [{
                    name: '亚巴顿',
                    nick_name: '阿巴东',
                    position: '耐久 逃生',
                    img_url: 'http://dota2-imgs.oss-cn-beijing.aliyuncs.com/heroes/abaddon_hphover.png'
                }],
                agile_list: [{
                    name: '恐怖利刃',
                    nick_name: 'TB',
                    position: '核心 后期',
                    img_url: 'http://dota2-imgs.oss-cn-beijing.aliyuncs.com/heroes/terrorblade_hphover.png'
                }],
                brains_list: [{
                    name: '水晶室女',
                    nick_name: '冰女',
                    position: '辅助',
                    img_url: 'http://dota2-imgs.oss-cn-beijing.aliyuncs.com/heroes/crystal_maiden_hphover.png'
                }]
            }
        }
    }
</script>