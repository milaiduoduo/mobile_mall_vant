import Vue from 'vue';
import VueRouter from 'vue-router';

import footer from '@/components/footer';
import homePage from '@/views/homePage/home';
import category from '@/views/category/category';

import test from '@/views/test';

const itemSearch = () =>
  import('@/views/search/search');
const itemSearchResult = () =>
  import('@/views/itemSearchResult/itemSearchResult');

Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  routes: [{
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
      path: "/itemSearch/result",
      name: "itemSearchResult",
      component: itemSearchResult
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
