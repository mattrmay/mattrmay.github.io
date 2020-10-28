import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home'
import About from '../components/pages/About.vue'
import Updates from '../components/pages/Updates.vue'
import Projects from '../components/pages/Projects.vue'
import Contact from '../components/pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/updates', component: Updates },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

export default new VueRouter ({
  mode: 'history',
  routes
})