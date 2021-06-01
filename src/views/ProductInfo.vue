<template>
  <div class="product-info padding">
    <h1>Информация о продукте</h1>

    <div class="product-info__wrapper">
      <div class="product-info__text">
        <h2>{{ getCurrentProduct.productName }}</h2>
        <p>Цена: {{getCurrentProduct.productPrice}}</p>
        <p>{{ getCurrentProduct.productDescription }}</p>
        <button
            class="product-info__btn"
            @click="addToCart"
        >
          Добавить в корзину
        </button>
      </div>
      <div class="product-info__img-wrapper">
        <img
            class="product-info__img"
            :src="getCurrentProduct.productImg"
            :alt="getCurrentProduct.productName"
        >
      </div>
    </div>

    <div
        class="add-product-popup"
        :class="{'add-product-popup__active' : addToCartFlag}"
    >
      Товар добавлен в корзину
    </div>

  </div>
</template>

<script>


import {mapGetters, mapActions} from "vuex";

export default {
  name: "ProductInfo",
  data(){
    return{
      addToCartFlag: false
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
        this.ADD_TO_CART(this.getCurrentProduct);
        this.addToCartFlag = true;
        setTimeout(() => this.addToCartFlag = false, 1000)
      } else{
        this.ADD_TO_CART(this.getCurrentProduct);
      }
    }

  },
  computed: {
    ...mapGetters([
      'GET_PRODUCT_LIST',
      'CART'
    ]),

    productId(){
      return this.$route.params.detectTarget;
    },
    getCurrentProduct(){
       return this.GET_PRODUCT_LIST.find(e => e.productLatin === this.productId);
    },

  }
}
</script>

<style lang="sass">
$green: #47802b
$darkGreen: #366121
$orange: #ea5f01
$grey: #f3f3f6

.product-info
  &__img
    width: 100%
    &-wrapper
      width: 45%
  &__wrapper
    display: flex
    justify-content: space-between
    margin-bottom: 100px
  &__text
    width: 50%
    & p
      margin: 20px 0
  &__btn
    border: none
    background-color: $orange
    color: #fff
    padding: 10px 20px
    border-radius: 10px
    cursor: pointer
    &:active
      background-color: #fff
      color: $orange
      border: 1px solid $orange
</style>