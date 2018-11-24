// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由
import VueRouter from 'vue-router'
import router from './router/router.js'
Vue. use(VueRouter)
//导入UI
import MintUI from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.use(MintUI)

//导入ajax
import VueRource from 'vue-resource'
Vue.use(VueRource)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
