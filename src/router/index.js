import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetail from '../views/jobs/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:"/jobs",
    name: 'Job', 
    component:Jobs
  },
  {
    path:"/jobDetail/:id",
    name: 'JobDetail',
    component:JobDetail,
    props:true
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:"/jobs"
  },
  //catchall(unknown resourse 404 data)
  {
    path:"/:catchAll(.*)",
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
