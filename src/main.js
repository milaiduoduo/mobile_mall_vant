import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import '@/assets/scss/iconfont/iconfont.css';
import './assets/scss/global.scss';
// import './assets/scss/mix.scss';
// import './assets/scss/var.scss';

import axios from '@/assets/js/axios.js';

import {
  Waterfall,
  Lazyload,
  Toast,
  Tag,
  Dialog,
  Cell,
  CellGroup,
  Field,
  Icon,
  Button,
  Popup,
  loading,
  List,
  PullRefresh,
  Search
} from 'vant';

//plugins
Vue.use(axios);

Vue.use(Waterfall);
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(Tag);
Vue.use(Dialog);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Popup);
Vue.use(loading);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Search);

Toast.setDefaultOptions({
  duration: 1000
})

router.beforeEach((to, from, next) => {
  console.log("beforeEach to,from:", to, from);
  Toast.loading({
    mask: true
  });

  let Authorization = "",
    user_id = "";
  if (!Authorization && !user_id) {
    //没登陆的情况下，判断某页面是否需要登录才能访问。如果是，则跳转到登录页。
    if (to.meta.needLogin) {
      console.log("in needLogin!!!!");
      router.push({
        name: 'login',
        query: {
          redirect: to.name
        }
      });
      return;
    }
  }

  next();
})

router.afterEach((to, from) => {
  // Toast.clearAll();
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
