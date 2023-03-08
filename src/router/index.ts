import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { cancelRequest } from '@/utils/axios'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "index",
        component: () => import('views/home/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),    // history 模式则使用 createWebHistory()
    routes,
});

router.beforeEach((to, from, next) => {
    cancelRequest()
    next()
})

export default router;
