import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../views/b2c/home/index.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/product',
            component: () => import('../views/b2c/products/index.vue')
        },
        {
            path: '/luxe',
            component: () => import('../views/b2c/products/luxe/index.vue')
        }
    ]
})

export default router;