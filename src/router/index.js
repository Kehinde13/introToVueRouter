import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import Error404Page from '../views/Jobs/Error404Page.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    }, 
    {
        path: '/AboutPage',
        name: 'About',
        component: AboutPage
    },
    {
        path:'/Jobs',
        name: 'Jobs',
        component: Jobs
    }, 
    {
        path: '/Jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true
    }, 
    //redirect
    {
        path:'/all-jobs',
        redirect: 'Jobs'
    },
    //error 404 page
    {
        path:'/:catchAll(.*)',
        name: 'Error404Page',
        component: Error404Page
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router