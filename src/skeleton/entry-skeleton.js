import Vue from 'vue'

import SkeletonHeroList from './SkeletonHeroList'

export default new Vue({
    components: {
        SkeletonHeroList
    },
    template: `
        <div>
            <skeleton-hero-list id="ske-hero-list"></skeleton-hero-list>
        </div>
    `
})