import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "user",
    component: () => import("../views/UserView.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },

  {
    path: "/adminLogin",
    name: "adminLogin",
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "product",
        name: "adminProduct",
        component: () => import("../views/AdminProduct.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
