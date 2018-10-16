<template>
    <div>
        <title-show :title="title"></title-show>

        <simple-card
            v-for="(item,index) in dataList"
            :key="index"
            :name="item.name"
            :nick-name="item.nick_name"
            :position="item.position"
            :img-url="item.img_url">
        </simple-card>

        <tab-bar v-model="current">
            <tab-item
                v-for="(item, index) in item_list"
                :key="index"
                :text="item.text"
                :val="item.val"
                :img-url="item.img_url">
            </tab-item>
        </tab-bar>
    </div>
</template>

<script>
    import {OSS_BASE_URL} from "../common/contants";
    import TitleShow from '../components/TitleShow'
    import SimpleCard from  '../components/HeroSimpleCard'
    export default {
        name: 'HeroList',

        mounted() {
            this.data_list = this.power_list;
        },

        components: {
            SimpleCard,
            TitleShow
        },

        computed: {
            title() {
                let lastest = Object.create(null);
                switch (this.current) {
                    case 'power' : lastest = {en_title: this.current,cn_title: '力量'}; break;
                    case 'agile' : lastest = {en_title: this.current,cn_title: '敏捷'}; break;
                    case 'brains' : lastest = {en_title: this.current,cn_title: '智力'}; break;
                }
                return lastest;
            },

            dataList() {
                let list = null;
                switch (this.current) {
                    case 'power' : list = this.power_list; break;
                    case 'agile' : list = this.agile_list; break;
                    case 'brains' : list = this.brains_list; break;
                }
                return list;
            }
        },

        data() {
            return {
                current: 'power',
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
                }],
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