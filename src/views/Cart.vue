<template>
  <div class="cart padding">
    <h1>Корзина</h1>
    <div class="cart__block" v-for="(i, index) in CART">
      <div class="cart__block-item">
        <h2>{{ i.productName }}</h2>
        <p>Цена: {{i.productPrice}}</p>
      </div>
      <div class="cart__block-item cart__img-wrapper" >
        <img
            class="cart__img"
            :src="i.productImg"
            :alt="i.productName"
        >
      </div>
      <div class="cart__block-item">
        <div class="cart__more-less">
          <button @click="i.productCount++">+</button>
          <span class="cart__count">{{ i.productCount }}</span>
          <button @click="i.productCount--; deleteFromCartIf0(index)" >-</button> <!--Удаляем элемент, если его каунтер достиг нуля-->
        </div>
        <div class="cart__summ">{{ i.productPrice * i.productCount }}</div>
      </div>
      <div class="cart__block-btn cart__block-item" >
        <svg @click="deleteFromCart(index)" class="cart__block-btn-svg" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
      </div>
    </div>

    <p class="cart__total">Total: <span class="cart__total-summ">{{ GET_CART_TOTAL }}</span></p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Cart",
  components: {},
  props: {},
  data(){
    return{}
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART',
        'DELETE_FROM_CART_IF_COUNT_0'
    ]),
    deleteFromCart: function (index){
      this.DELETE_FROM_CART(index);
    },
    deleteFromCartIf0: function (index){
      this.DELETE_FROM_CART_IF_COUNT_0(index);
    }
  },
  computed: {
    ...mapGetters([
      'CART',
      'GET_CART_TOTAL'
    ]),
  },
}
</script>

<style lang="sass">
$green: #47802b
$darkGreen: #366121
$orange: #ea5f01
$grey: #f3f3f6


.cart
  &__block
    display: flex
    justify-content: space-between
    &-item
      width: 25%
      margin-bottom: 20px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
    & h2
      text-align: center
    &-btn
      &-svg
        width: 50px
        fill: $orange
        cursor: pointer
  &__img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: 0 0
    &-wrapper
      width: 300px
      height: 300px
  &__count
    font-size: 2rem
    padding: 0 10px
  &__summ
    margin-top: 10px
    font-size: 2rem
    font-weight: 500
    color: $orange
  &__more-less
    & button
      border: none
      background-color: $orange
      padding: 5px 10px
      border-radius: 5px
      color: #fff
      cursor: pointer
  &__total
    text-align: right
    margin: 50px 10% 50px 0
    &-summ
      font-size: 3rem
      font-weight: 700
      color: $orange

</style>