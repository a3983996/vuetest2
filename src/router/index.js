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
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
