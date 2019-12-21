import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
import './assets/plugin/vant.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  /* 如果有tabbar 设置隐藏高度.. */
  if (to.meta.showTab) {
    // let a = document.createElement('div')
    // a.style.height = '50px'
    // document.getElementsByClassName('tab-bar').parentNode
    document.body.style.marginBottom = '60px';
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
