// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {ResCode, CacheKey} from './base/constant'

Vue.config.productionTip = false;

Vue.prototype.ResCode = ResCode;
Vue.prototype.CacheKey = CacheKey;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
