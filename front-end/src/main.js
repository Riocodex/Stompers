import { createApp } from 'vue'
import App from './App.vue'
import * as vueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'

createApp(App)
.use(vueRouter.createRouter({
    history: vueRouter.createWebHistory(process.env.BASE_URL),
    routes:[{
        path: '/cart',
        component: ShoppingCartPage
    },{
        path: '/products',
        component: ProductsPage,
    }, {
        path:'/products/:productId',
        component: ProductDetailPage,
    },]
}))
.mount('#app')
