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
                        },
                        {
                            path: '/true-carbon-zero',
                            component: () => import('../views/b2c/our-campaigns/true-carbon-zero/index.vue')
                        },
                        // refibra
                        {
                            path: '/refibra',
                            component: () => import('../views/b2c/refibra/index.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/b2b',
            redirect: '/b2b-layout',
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
                            alias: '/b2b',
                        },
                        {
                            path: '/b2b/product',
                            component: () => import('../views/b2b/products-and-technologies/products/index.vue')
                        },

                        // branded-offers
                        {
                            path: '/b2b/branded-offers/general',
                            component: () => import('../views/b2b/branded-offers/general/index.vue')
                        },
                        {
                            path: '/b2b/branded-offers/tencel-denim',
                            component: () => import('../views/b2b/branded-offers/tencel-denim/index.vue')
                        },
                        {
                            path: '/b2b/branded-offers/tencel-intimate',
                            component: () => import('../views/b2b/branded-offers/tencel-intimate/index.vue')
                        },
                        {
                            path: '/b2b/branded-offers/tencel-active',
                            component: () => import('../views/b2b/branded-offers/tencel-active/index.vue')
                        },
                        {
                            path: '/b2b/branded-offers/tencel-home',
                            component: () => import('../views/b2b/branded-offers/tencel-home/index.vue')
                        },
                        {
                            path: '/b2b/branded-offers/tencel-footwear',
                            component: () => import('../views/b2b/branded-offers/tencel-footwear/index.vue')
                        },
                        {
                            path: '/b2b/branded-offers/tencel-luxe',
                            component: () => import('../views/b2b/branded-offers/tencel-luxe/index.vue')
                        },
                        // explore tencel
                        {
                            path: '/b2b/about',
                            component: () => import('../views/b2b/explore-tencel/about/index.vue')
                        },
                        // where to source
                        {
                            path: '/b2b/where-to-source',
                            component: () => import('../views/b2b/where-to-source/index.vue')
                        }
                    ]
                }
            ]
        }

    ]
})

export default router;