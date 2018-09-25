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
const register = () =>
  import("@/views/register/register");
const registerSec = () =>
  import("@/views/register/registerSec");
const registerStatus = () =>
  import( /* webpackChunkName: "register-status" */ '@/views/register/registerStatus/');
const forgetPwd = () =>
  import('@/views/login/forgetPwd');
const forgetPwdSec = () =>
  import('@/views/login/forgetPwdSec');

//-----for test---------------------------
const testAttr = () =>
  import("@/views/test/testAttrsListeners/parent");
const testGoods = () =>
  import("@/views/test/路由传参/params1");
const testDataComputed1 = () =>
  import("@/views/test/data和computed/1.vue");
const testDataComputed2 = () =>
  import("@/views/test/data和computed/2.vue");
const testInput = () =>
  import("@/views/test/input/input");

Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/test/input",
      component: testInput
    }, {
      path: "/test/dataComputed1",
      component: testDataComputed1
    }, {
      path: "/test/dataComputed2",
      component: testDataComputed2
    }, {
      path: "/test/goods/:id/code/:code",
      name: "goods",
      component: testGoods
    }, {
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
      components: {
        default: userCenter,
        footer: footer
      }
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
    },
    {
      path: "/forgetPwd",
      name: "forgetPwd",
      component: forgetPwd
    },
    {
      path: "/forgetPwdSec",
      name: "forgetPwdSec",
      component: forgetPwdSec
    },
    {
      path: "/register",
      name: "register",
      component: register
    }, {
      path: "/register/registerSec",
      name: "registerSec",
      component: registerSec
    },
    {
      path: "/register/registerStatus/:status",
      name: "registerStatus",
      props: true,
      component: registerStatus
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
