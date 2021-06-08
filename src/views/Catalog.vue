<template>
  <div class="catalog padding">
    <h1>Каталог</h1>

    <div class="catalog__sort-wrapper">
      <span class="catalog__sort" @click="sortFlag = ''">Все</span>
      <span class="catalog__sort" @click="sortFlag = 'plant'">Растения</span>
      <span class="catalog__sort" @click="sortFlag = 'plantCare'">Уход за растениями</span>
      <span class="catalog__sort" @click="sortFlag = 'inventory'">Инструмент, инвентарь</span>
    </div>

    <div class="catalog__block">
      <template v-for="productName in sort">
        <router-link class="catalog__link" :to="`/catalog/${productName.productLatin}`">
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
      result: [],
      sortFlag: ''
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
      this.GET_PRODUCT_LIST.productLatin;
    },

    sort: function (){
      let result = []
      for (let i = 0; i < this.GET_PRODUCT_LIST.length; i++){
        if (this.GET_PRODUCT_LIST[i].productParentGroup === this.sortFlag){
          result.push(this.GET_PRODUCT_LIST[i])
        } else if (!this.sortFlag){
          return this.GET_PRODUCT_LIST
        }
      }
      return result
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
  &__block
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    @media (max-width: 640px)
      justify-content: center
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
  &__sort
    cursor: pointer
    font-size: 1.5rem
    &:hover
      color: $orange
    &-wrapper
      max-width: 500px
      display: flex
      justify-content: space-between
      margin-bottom: 30px
      margin-top: -20px

</style>