<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div v-for="(i, index) in CART">
      <h2>{{ i.productName }}</h2>
      <p>Цена: {{i.productPrice}}</p>
      <img class="cart__img" :src="i.productImg" :alt="i.productName">
      <div class="cart__more-less">
        <button @click="i.productCount++">+</button>
        <span>{{ i.productCount }}</span>
        <button @click="i.productCount--; deleteFromCartIf0(index)" >-</button> <!--Удаляем элемент, если его каунтер достиг нуля-->
      </div>
      <div class="cart__summ">{{ i.productPrice * i.productCount }}</div>
      <button @click="deleteFromCart(index)">Удалить</button>
    </div>

    <p>Total: {{ GET_CART_TOTAL }}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Cart",
  components: {},
  props: {},
  data(){
    return{

    }
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART',
        'DELETE_FROM_CART_IF_COUNT_0'
    ]),
    debug: function (){
      console.log(this)
    },
    deleteFromCart: function (index){
      this.DELETE_FROM_CART(index)
    },
    deleteFromCartIf0: function (index){
      this.DELETE_FROM_CART_IF_COUNT_0(index)
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
.cart__img
  width: 200px
</style>