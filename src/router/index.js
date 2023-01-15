import { createRouter, createWebHashHistory } from "vue-router";

// b2c
import B2cLayout from '../views/b2c/layout.vue';
import B2cHome from '../views/b2c/home/index.vue';

// b2b
import B2bLayout from '../views/b2b/layout.vue';
import B2bHome from '../views/b2b/home/index.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/b2c-layout',
            children: [
                {
                    path: '/b2c-layout',
                    component: B2cLayout,
                    alias: '/',
                    redirect: '/home',
                    children: [
                        {
                            path: '/home',
                            component: B2cHome,
                            alias: '/'
                        },
                        {
                            path: '/product',
                            component: () => import('../views/b2c/products/index.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/b2b',
            redirect: '/b2b-laytou',
            children: [
                {
                    path: '/b2b-layout',
                    component: B2bLayout,
                    alias: '/b2b',
                    redirect: '/home',
                    children: [
                        {
                            path: '/home',
                            component: B2bHome,
                            alias: '/b2b'
                        }
                    ]
                }
            ]
        }

    ]
})

export default router;