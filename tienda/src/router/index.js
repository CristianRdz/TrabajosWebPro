import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  //la ruta base
  {
    path: '/',
    redirect: '/inicio',
  },

  {
    path: '/',
    component: {
      render(c) {
        return c('router-view')
      },
    },

    children: [
      {
        path: '/inicio',
        name: 'inicio',
        component: () => import('../components/Inicio.vue'),
      },
      {
        path: '/electronica',
        name: 'electronica',
        component: () => import('../components/TiendaElectro.vue'),
      },
      {
        path: '/hogar',
        name: 'hogar',
        component: () => import('../components/TiendaHogar.vue'),
      },
      {
        path: '/juguetes',
        name: 'juguetes',
        component: () => import('../components/TiendaJuguetes.vue'),
      },
      {
        path: '/cocina',
        name: 'cocina',
        component: () => import('../components/cocina.vue'),
      },
      {
        path: '/estufas',
        name: 'estufas',
        component: () => import('../components/estufas.vue'),
      },
      {
        path: '/electronicos',
        name: 'electronicos',
        component: () => import('../components/electronicos.vue'),
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../components/video.vue'),
      },
      {
        path: '/limpieza',
        name: 'limpieza',
        component: () => import('../components/limpieza.vue'),
      },
      {
        path: '/detergente',
        name: 'detergente',
        component: () => import('../components/detergente.vue'),
      },
    ],
  },
]

const router = new VueRouter({ routes })
export default router
