import Vue  from "vue";

import VueRouter  from "vue-router";

import Login  from "@/views/Login/Login";

import Supplier from "@/views/Suppliers/Supplier";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',

    routes:[
        {
            path: '/',
            name: 'login',
            component: Login
        },

        {
            path: '/supplier',
            name: 'supplier',
            component: Supplier
        }
    ]
})

export default router;