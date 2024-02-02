import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: "*",
    component: () => import("../components/views/errors/error404.vue"),
  },

  {
    path: "/",
    component: () => import("../components/views/inicioNav.vue"),

    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/views/Inicio.vue"),
      },
      {
        path: "/electronica",
        name: "electronica",
        component: () => import("../components/views/TiendaElectro.vue"),
      },
      {
        path: "/hogar",
        name: "hogar",
        component: () => import("../components/views/TiendaHogar.vue"),
      },
      {
        path: "/juguetes",
        name: "juguetes",
        component: () => import("../components/views/TiendaJuguetes.vue"),
      },
      {
        path: "/cocina",
        name: "cocina",
        component: () => import("../components/views/cocina.vue"),
      },
      {
        path: "/estufas",
        name: "estufas",
        component: () => import("../components/views/estufas.vue"),
      },
      {
        path: "/electronicos",
        name: "electronicos",
        component: () => import("../components/views/electronicos.vue"),
      },
      {
        path: "/video",
        name: "video",
        component: () => import("../components/views/video.vue"),
      },
      {
        path: "/limpieza",
        name: "limpieza",
        component: () => import("../components/views/limpieza.vue"),
      },
      {
        path: "/detergente",
        name: "detergente",
        component: () => import("../components/views/detergente.vue"),
      },
      {
        path:"/form",
        name:"form",
        component: () => import("../components/views/form.vue"),
      }
    ,
    {
      path:"/paginacion",
      name:"paginacion",
      component: () => import("../components/views/personasTab.vue"),

    }
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
