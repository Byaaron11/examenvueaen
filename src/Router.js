import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/home/HomePage.vue';
import HackerComp from './components/Hackers/HackersComp.vue';
import LoginComp from './components/login/LoginComp.vue';
import PerfilEmp from './components/empleados/PerfilEmp.vue';

const routes = [
    {path:'/', component:HomePage},
    {path:'/hackers', component: HackerComp},
    {path:'/login', component: LoginComp},
    {path:'/empleados', component: PerfilEmp},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;