export default {
    path: '/skeleton',
    component: reslove => require(['../skeleton/Skeleton'], reslove),
    children: [{
        path: 'heroList',
        name: 'skeHeroList',
        component: reslove => require(['../skeleton/SkeletonHeroList'], reslove)
    }]
}