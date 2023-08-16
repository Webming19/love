import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import { useTitle } from '@/hooks/web/useTitle';

import Home from '@/views/Love.vue';

const routes: Array<RouteRecordRaw> = [
  {
    // 首页
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    // 登录
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    // 重定向
    path: '/',
    redirect: '/home',
  },
  {
    // 404路由
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue'),
    meta: {
      title: '404',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  useTitle(to?.meta?.title as string);
});

export default router;
