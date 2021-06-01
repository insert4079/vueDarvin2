import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Catalog from "../views/Catalog";
import ProductInfo from "../views/ProductInfo";
import Cart from "../views/Cart";
import About from "../components/links/About";
import Delivery from "../components/links/Delivery";
import Reviews from "../components/links/Reviews";
import Partners from "../components/links/Partners";
import Contacts from "../components/links/Contacts";
import Vacancies from "../components/links/Vacancies";
import FAQ from "../components/links/FAQ";
import Basil from "../components/articles/Basil";
import Juniper from "../components/articles/Juniper";
import Sycamore from "../components/articles/Sycamore";
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
  {
    path: '/about//',
    name: 'About',
    component: About
  },
  {
    path: '/delivery/',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/reviews/',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/partners/',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/contacts/',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/vacancies/',
    name: 'Vacancies',
    component: Vacancies
  },
  {
    path: '/faq/',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/basil/',
    name: 'Basil',
    component: Basil
  },
  {
    path: '/juniper/',
    name: 'Juniper',
    component: Juniper
  },
  {
    path: '/sycamore/',
    name: 'Sycamore',
    component: Sycamore
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router


