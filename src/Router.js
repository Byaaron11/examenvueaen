import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/home/HomePage.vue';
import HackerComp from './components/Hackers/HackersComp.vue';
import LoginCubo from './components/cubos/LoginCubo.vue';
import PerfilEmp from './components/empleados/PerfilEmp.vue';
import CubosMarca from './components/cubos/CubosMarca.vue';
import DetalleCubo from './components/cubos/DetalleCubo.vue';
import TiendaCubos from './components/cubos/TiendaCubos.vue';
import RegistroCubo from './components/cubos/RegistroCubo.vue';

const routes = [
    {path:'/', component:HomePage},
    {path:'/hackers', component: HackerComp},
    {path:'/login', component: LoginCubo},
    {path:'/registro', component: RegistroCubo},
    {path:'/empleados', component: PerfilEmp},
    {path:'/tienda', component: TiendaCubos},
    {path:'/cubosmarcas/:marca', component: CubosMarca},
    {path:'/detallecubo/:id', component: DetalleCubo},

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;