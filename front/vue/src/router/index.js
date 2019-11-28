import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const whiteList = ["/"];
  console.log("to.fullPath", to.fullPath);
  if (whiteList.includes(to.fullPath)) {
    next();
  } else {
    if ("reboot-user" in localStorage) {
      console.log("El usuario está logeado");

      next();
    } else {
      next("/");
    }
  }
});

export default router;
