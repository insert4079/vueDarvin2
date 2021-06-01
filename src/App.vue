<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>


<script>

import Main from './views/Main'
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)

export default {
  name: 'app',
  components: {
    Main,
    HeaderComponent,
    FooterComponent,
  },
  computed: {

  }

}

</script>


