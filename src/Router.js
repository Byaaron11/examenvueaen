import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/home/HomePage.vue';

const routes = [
    {path:'/', component:HomePage},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;