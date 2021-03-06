// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/normalize.css'

import LCPlugin from '../command/component';
Vue.use(LCPlugin);

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
    console.log(err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

console.log(`★★★★★ 数据来源于http://man.linuxde.net/ ★★★★★
★★★★★ 界面仿自https://jaywcjlove.github.io/linux-command/ ★★★★★`);
