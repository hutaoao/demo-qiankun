import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Foo from '../pages/Foo';
import Bar from '../pages/Bar';
import Home from '../pages/Home';

const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {path: '/', component: Home},
]

export default new Router({
  mode: 'history',
  routes,
  base: window.__POWERED_BY_QIANKUN__ ? '/vue-history-app/' : '/child/vue-history-app/',
})
