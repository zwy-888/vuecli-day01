import Vue from 'vue'
import Router from 'vue-router'
// 导入定义好的组件
import Home from "../components/Home";
import User from "../components/User";
import UserDetail from "../components/UserDetail";

// 将定义好的路由注入vue中
Vue.use(Router)

export default new Router({
    // 路由关系映射配置
    routes: [
        {path: "/home", component: Home},
        {path: "/", component: Home},
        {path: "/user", component: User},
        {path: "/detail/:id", component: UserDetail},
    ],
})
