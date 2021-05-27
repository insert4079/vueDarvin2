import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Catalog from "../views/Catalog";
import ProductInfo from "../components/icons/ProductInfo";
import Cart from "../views/Cart";
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/catalog/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/catalog/:detectTarget/',
    name: 'ProductInfo',
    component: ProductInfo
  },
  {
    path: '/basket/',
    name: 'Cart',
    component: Cart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
