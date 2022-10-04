import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VistaPrincipal.vue';
import TramitesView from '../views/TramitesView.vue';
import Navegacion from '../components/Navegacion.vue';
import Formulario from '../views/FormularioView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Document',
    name: 'Documentación',
    component: () => import('../views/DocumentView.vue')
  },
  {
    path: '/Tramites',
    name: 'Trámites',
    component: TramitesView
  },
  {
    path: '/Navegacion',
    name: 'Navegacion',
    component: Navegacion
  },
  {
    path: '/Formulario',
    name: 'Formulario',
    component: Formulario
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
