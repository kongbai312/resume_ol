//路由
export default [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component: () => import('@/views/Resume/index.vue')
    }
]