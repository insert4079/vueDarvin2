<template>
  <div class="catalog padding">
    <h1>Каталог</h1>

    <div class="catalog__block">
      <template v-for="productName in GET_PRODUCT_LIST">
        <router-link  class="catalog__link" :to="`/catalog/${productName.productLatin}`">
          <div class="catalog__img-wrap">
            <img
                class="catalog__img"
                :src="productName.productImg"
                :alt="productName.productName">
          </div>
          <p class="catalog__name">{{ productName.productName }}</p>
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
  methods: {},
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART',
        'GET_PRODUCT_LIST',
    ]),
    productId(){
      return this.GET_PRODUCT_LIST.productLatin;
    }
  }
}
</script>

<style lang="sass">
$green: #47802b
$darkGreen: #366121
$orange: #ea5f01
$grey: #f3f3f6

h1
  font-size: 3rem
.catalog
  &__link
    display: inline-block
    width: 300px
    height: 300px
    transition: 0.3s
    margin-bottom: 50px
    margin-right: 5px
    &:hover
      color: $orange
  &__img
    width: 90%
    height: 90%
    object-fit: cover
    object-position: 0 0
    border-radius: 10px
    &-wrap
      width: 250px
      height: 250px
      display: flex
      justify-content: center
      align-items: center
  &__name
    font-weight: 500
    padding-left: 13px
</style>