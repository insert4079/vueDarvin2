<template>
  <div class="product-info">
    <h1>Информация о продукте</h1>

    <div>
      <h2>{{ getCurrentProduct.productName }}</h2>
      <p>Цена: {{getCurrentProduct.productPrice}}</p>
      <p>Остаток: {{getCurrentProduct.productLeft}}</p>
      <p>{{ getCurrentProduct.productDescription }}</p>
      <img :src="getCurrentProduct.productImg" :alt="getCurrentProduct.productName">
      <button @click="addToCart">Добавить в корзину</button>
    </div>

  </div>
</template>

<script>


import {mapGetters, mapActions} from "vuex";

export default {
  name: "ProductInfo",
  data(){
    return{
    }
  },

  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),

    addToCart(){
      if (!this.CART.includes(this.getCurrentProduct)){ //Проверяем есть ли добавленный продукт в корзине.
                                                        //Если нет, то добавляем количество к объект и пушим объект в карт
                                                        //Если да, то пропускаем добавление (иначе при каждом нажатии будет
                                                        //обновление до единицы) и запускается ADD_TO_CART, которая и пушит
                                                        //объект в массив
        this.$set(this.getCurrentProduct, 'productCount', 1) //Добавление количества продукта в корзине и реактивности этого значения
        this.ADD_TO_CART(this.getCurrentProduct)
      } else{
        this.ADD_TO_CART(this.getCurrentProduct)
      }
    }

  },
  computed: {
    ...mapGetters([
      'GET_PRODUCT_LIST',
      'CART'
    ]),

    productId(){
      return this.$route.params.detectTarget
    },
    getCurrentProduct(){
       return this.GET_PRODUCT_LIST.find(e => e.productLatin === this.productId)
    },

  }
}
</script>

<style >

</style>