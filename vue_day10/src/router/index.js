import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout/index';
import Home from '@/views/Home/index';
import Search from '@/views/Search/index';
import Play from '@/views/Play/index';
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/layout/home',
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '/layout/home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: '/layout/search',
        component: Search,
        meta: {
          title: '搜索',
        },
      },
    ],
  },
  {
    path: '/play',
    component: Play,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
