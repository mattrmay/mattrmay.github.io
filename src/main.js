import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import './assets/tailwind.css'

Vue.config.productionTip = false

import Home from './pages/Home'
import About from './pages/About.vue'
import Updates from './pages/Updates.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/updates', component: Updates },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')