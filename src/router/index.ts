import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomeView = () => import("../views/Home/ViewHome.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: { name: "Home" },
  // }, caso tente acessar alguma rota diferente das existentes aqui
  //    sera redirecionado por default para a rota Home
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
