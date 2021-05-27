<template>
  <div class="cart">
    <h1>Корзина</h1>
    <CartItem></CartItem>


  </div>
</template>

<script>
import CartItem from "../components/CartItem";

export default {
  name: "Cart",
  components: {
    CartItem
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>