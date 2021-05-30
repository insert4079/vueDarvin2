import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Catalog from "../views/Catalog";
import ProductInfo from "../views/ProductInfo";
import Cart from "../views/Cart";
import About from "../components/links/About";
import Sale from "../components/links/Sale";
import Delivery from "../components/links/Delivery";
import Reviews from "../components/links/Reviews";
import Partners from "../components/links/Partners";
import Contacts from "../components/links/Contacts";
import Vacancies from "../components/links/Vacancies";
import FAQ from "../components/links/FAQ";
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
    path: '/about/',
    name: 'About',
    component: About
  },
  {
    path: '/sale/',
    name: 'Sale',
    component: Sale
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


