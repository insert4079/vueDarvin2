<template>
  <h3>CartItem</h3>
<!--  <div v-for="i in CART">-->
<!--    {{i}}-->
<!--  </div>-->
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "CartItem",
  props: {
    getCurrentProduct: {
      type: Object,
      default() {
        return{}
      }
    }
  },
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters([
        'CART'
    ])
  }
}
</script>

<style>

</style>