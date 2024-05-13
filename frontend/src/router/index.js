import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/cart/Cart.vue'
import PaymentSuccess from '../components/payments/PaymentSuccess.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home 
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart 
        },
        {
            path: '/payment/success',
            name: 'payment',
            component: PaymentSuccess 
        }
    ]
})

export default router