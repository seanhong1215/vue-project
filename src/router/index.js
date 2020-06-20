import Vue from 'vue';
import VueRouter from 'vue-router';
// 官方元件
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Coupons from '@/components/pages/Coupons';
import Orders from '@/components/pages/Orders';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';


// 自訂的分頁元件

Vue.use(VueRouter);

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '*', 
            redirect: 'login', 
        },
        {
            name: 'Login', 
            path: '/login', 
            component: Login,
           
        },
        // {
        //     name: 'HelloWorld', 
        //     path: '/', 
        //     component: HelloWorld,
        //     meta: { requiresAuth: true },
        // },
        {
            name: 'Dashboard', 
            path: '/admin', 
            component: Dashboard,
            children :[
                {
                    name: 'products', 
                    path: 'products', 
                    component: Products,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'coupons',
                    name: 'Coupons',
                    component: Coupons,
                    meta: { requiresAuth: true },
                  },
                  {
                    path: 'orders',
                    name: 'Orders',
                    component: Orders,
                    meta: { requiresAuth: true },
                  },
            ]
        },
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
            children: [
              {
                path: 'customer_order',
                name: 'CustomerOrder',
                component: CustomerOrder,
              },
              {
                path: 'customer_checkout/:orderId',
                name: 'CustomerCheckout',
                component: CustomerCheckout,
              },
            ],
          },
        
    ]
})
