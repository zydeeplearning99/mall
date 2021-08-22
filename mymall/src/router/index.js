// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)
// const routes = [
//     {
//         path:'',
//         redirect:'../views/home/Home'
//     },
//     {
//         path:'/home',
//         component:()=>import ('../views/home/Home')
//     },
//     {
//         path:'/category',
//         component:()=>import ('../views/category/Category')
//     },
//     {
//         path:'/cart',
//         component:()=>import ('../views/cart/Cart')
//     },
//     {
//         path:'/profile',
//         component:()=>import ('../views/profile/Profile')
//     }
// ]
// const router = new VueRouter({
//     routes,
//     mode:'history'
// })

// export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router