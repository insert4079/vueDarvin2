<template>
  <div class="catalog">
    <h1>Каталог</h1>

    <div class="catalog__block">
      <template v-for="productName in GET_PRODUCT_LIST">
        <router-link  class="catalog__link" :to="`${productName.productLatin}`">
          <img class="catalog__img" :src="productName.productImg" alt="">
          <p>{{ productName.productName }}</p>
        </router-link>
      </template>
    </div>

  </div>
</template>

<script>
import Cart from "./Cart";
import {mapGetters} from 'vuex';

export default {
  name: "Catalog",
  components: {
    Cart
  },
  data(){
    return{
      result: []
    }
  },
  methods: {
    debug: function (e){
      console.log(e)
    },

    linkClick: function (e){
      console.log(e)
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART',
        'GET_PRODUCT_LIST',
    ]),
    productId(){
      return this.GET_PRODUCT_LIST.productLatin
    }
  }
}
</script>

<style lang="sass">
$green: #47802b
$darkGreen: #366121
$orange: #ea5f01
$grey: #f3f3f6

.catalog__block
  display: flex
  flex-wrap: wrap

.catalog__link
  display: inline-block
  width: 300px
  height: 500px
  &:hover
    color: $orange


.catalog__img
  width: 200px
</style>