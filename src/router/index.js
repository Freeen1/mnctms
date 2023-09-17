import { createRouter,createWebHashHistory } from 'vue-router'
//引入首页index.vue
import Admin from '~/layouts/admin.vue'
import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'

const routes = [{
    path: "/",
    component:Admin,
    //子路由
    children:[{
        path: "/",
        component:Index,
        meta:{
            title:"后台首页"
        }
    }]
},{
    path: "/login",
    component:Login
},{   
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
},{
    
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router