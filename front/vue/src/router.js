function isAuthenticated() {
  return localStorage.getItem("token") !== null;
}

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: {
        name: "auth"
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) {
          next("/auth");
        } else {
          next();
        }
      }
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("./views/Auth.vue")
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (!isAuthenticated) next("/auth");
//   else next();
// });

export default router;
