import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import {registerMicroApps, start} from 'qiankun';

registerMicroApps([
  {
    name: 'vueHashApp',
    entry: 'http://localhost:7070',
    container: '#mainApp',
    activeRule: '/vue-hash-app',
  },
  {
    name: 'vueHistoryApp',
    entry: 'http://localhost:6060',
    container: '#mainApp',
    activeRule: '/vue-history-app',
  },
  {
    name: 'reactHashApp',
    entry: 'http://localhost:3000',
    container: '#mainApp',
    activeRule: '/react-hash-app',
  },
  {
    name: 'reactHistoryApp',
    entry: 'http://localhost:3001',
    container: '#mainApp',
    activeRule: '/react-history-app',
  },
]);

// 启动 qiankun
start();

new Vue({
  render: h => h(App),
}).$mount('#app')

