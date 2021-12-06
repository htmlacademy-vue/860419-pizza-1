import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import Login from "../views/Login";
import Cart from "../views/Cart";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/sign-in",
    name: "Login",
    component: Login,
    meta: {},
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
