<template>
    <main-content>
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
    import SimpleCard from  '../components/HeroSimpleCard'
    export default {
        name: 'HeroList',

        mounted() {
            this.data_list = this.power_list;
        },

        beforeRouteUpdate(to, from, next) {
            let route = to.params.type;
            switch (route) {
                case 'power': this.data_list = this.power_list; break;
                case 'agile': this.data_list = this.agile_list; break;
                case 'brains': this.data_list = this.brains_list; break;
            }
            next()
        },

        components: {
            MainContent,
            SimpleCard
        },

        data() {
            return {
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