import Vue from 'vue';
import VueRouter from 'vue-router';

import footer from '@/components/footer';
import homePage from '@/views/homePage/home';
import category from '@/views/category/category';

import test from '@/views/test/test';

const itemSearch = () =>
  import('@/views/search/search');
const itemSearchResult = () =>
  import('@/views/itemSearchResult/itemSearchResult');
const userCenter = () =>
  import("@/views/user/tabbar-user");
const userInfomation = () =>
  import("@/views/user/user-info");
const login = () =>
  import("@/views/login/login");
//--------------------------------
const testAttr = () =>
  import("@/views/test/testAttrsListeners/parent");

Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/test_attr_listener",
      component: testAttr
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/",
      name: "home",
      components: {
        default: homePage,
        footer: footer
      }
    }, {
      path: "/category",
      name: "category",
      components: {
        default: category,
        footer: footer
      }
    }, {
      path: "/itemSearch",
      name: "itemSearch",
      component: itemSearch
    },
    {
      path: "/itemSearchResult",
      name: "itemSearchResult",
      component: itemSearchResult
    },
    {
      path: "/userCenter",
      name: "userCenter",
      component: userCenter
    },
    {
      path: "/userCenter/userInfomation",
      name: "userInfomation",
      component: userInfomation,
      meta: {
        needLogin: true
      }

    },
    {
      path: "/login",
      name: "login",
      component: login
    }
    // , {
    //   path: '*',
    //   redirect: {
    //     name: 'home'
    //   }
    // }
  ]
});

export default router;
