import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import {registerMicroApps, start} from 'qiankun';

registerMicroApps([
  {
    name: 'vueHash',
    entry: 'http://localhost:7070',
    container: '#mainApp',
    activeRule: '/vue-hash',
  },
  {
    name: 'vueHistory',
    entry: 'http://localhost:6060',
    container: '#mainApp',
    activeRule: '/vue-history',
  },
  {
    name: 'reactHash',
    entry: 'http://localhost:5050',
    container: '#mainApp',
    activeRule: '/react-hash',
  },
  {
    name: 'reactHistory',
    entry: 'http://localhost:4040',
    container: '#mainApp',
    activeRule: '/react-history',
  },
  {
    name: 'react17',
    entry: 'http://localhost:3030',
    container: '#mainApp',
    activeRule: '/react17',
  },
]);

// 启动 qiankun
start();

new Vue({
  render: h => h(App),
}).$mount('#app')

