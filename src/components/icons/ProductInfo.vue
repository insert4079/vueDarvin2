<template>
  <div class="product-info">
    <h1>Информация о продукте</h1>
    <p>За е бал блять {{getCurrentProduct}}</p>




<!--    <p>{{ getProduct(this.$route.params.detectTarget) }}</p>-->

    <!--    <p>{{ getProduct('klematis_alyenushka_v_korobke_tso') }}</p>-->
    <!--    {{ this.$route.params.detectTarget }}-->

<!--    <template v-for="product in GET_PRODUCT_LIST">-->
<!--      <div v-if="product.productLatin === productId">-->
<!--        <h2>{{ product.productName }}</h2>-->
<!--        <p>Цена: {{product.productPrice}}</p>-->
<!--        <p>Остаток: {{product.productLeft}}</p>-->
<!--        <p>{{ product.productDescription }}</p>-->
<!--        <img :src="product.productImg" :alt="product.productName">-->

<!--&lt;!&ndash;          <button @click="addToCart">Добавить в корзину</button>&ndash;&gt;-->
<!--        <p>{{ getProduct(product) }}</p>-->

<!--      </div>-->
<!--    </template>-->


<!--    <template>-->

<!--      {{getProduct.productName}}-->

<!--      <h2>{{ getProduct.productName }}</h2>-->
<!--      <p>Цена: {{getProduct.productPrice}}</p>-->
<!--      <p>Остаток: {{getProduct.productLeft}}</p>-->
<!--      <p>{{ getProduct.productDescription }}</p>-->
<!--      <img :src="getProduct.productImg" :alt="getProduct.productName">-->

<!--      <button @click="addToCart">Добавить в корзину</button>-->
<!--    </template>-->

  </div>
</template>

<script>


import {mapGetters, mapActions} from "vuex";

export default {
  name: "ProductInfo",
  data(){
    return{
      currentProduct: []
    }
  },
  methods: {
    addToCart(data){
      // this.ADD_TO_CART(data)
      // console.log(data)
    },

  },
  computed: {
    ...mapGetters([
      'GET_PRODUCT_LIST',
    ]),
    ...mapActions([
    ]),
    productId(){
      return this.$route.params.detectTarget
    },
    getCurrentProduct () {
      this.GET_PRODUCT_LIST.find(e => {
        console.log(e)
        return e.productLatin === this.productId
        if (e.productLatin === this.productId){
          this.currentProduct.push(e)
          return this.currentProduct
        }
      })
    }
  }
}
</script>

<style >

</style>