// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
import App from './App'
import Resume from './components/Resume.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/resume', component: Resume }
  ]
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  router
}).$mount('#app')
