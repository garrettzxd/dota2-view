/**
 * 比较通用的组件全局注册
 * */

import MainContent from './MainContent'
import NavBar from './NavBar'
import TabBar from './TabBar'
import TabItem from './TabItem'

const compontents = [
    MainContent,
    NavBar,
    TabBar,
    TabItem
];

export default {
    install(Vue, options) {
        compontents.map(compontent => {
            Vue.component(compontent.name, compontent);
        })
    }
}