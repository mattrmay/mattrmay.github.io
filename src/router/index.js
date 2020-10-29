import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home'
import About from '../components/pages/About.vue'
import Updates from '../components/pages/Updates.vue'
import Projects from '../components/pages/Projects.vue'
import Contact from '../components/pages/Contact.vue'

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Updates', path: '/updates', component: Updates },
  { name: 'Projects', path: '/projects', component: Projects },
  { name: 'Contact', path: '/contact', component: Contact }
]

export default new VueRouter({
  mode: 'history',
  routes
})