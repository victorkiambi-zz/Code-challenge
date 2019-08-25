import Vue  from "vue";

import VueRouter  from "vue-router";

import Login  from "@/views/Login/Login";

import App  from "@/views/App";

import Supplier from "@/views/Suppliers/Supplier";

import Product from "@/views/Products/Product";

import Order from "@/views/Orders/Order";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',

    routes:[
        {
            path: '/',
            name: 'orders',
            component: Order
        },

        {
            path: '/supplier',
            name: 'supplier',
            component: Supplier
        },
        {
            path: '/products',
            name: 'product',
            component: Product
        }
    ]
})

export default router;