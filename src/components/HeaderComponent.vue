<template>
<div class="headerComponent">
  <header class="header padding">
    <router-link to="/">
      <div class="header__name">дарвин</div>
      <div class="header__descr">садовые гипермаркеты</div>
    </router-link>
    <div class="header__wrapper">
      <div class="header__links">
        <router-link
            class="header__link"
            :to="`/${i.headerNavLink}/`"
            v-for="i in headerNav"
        >
          {{ i.headerNavName }}
        </router-link>
      </div>
      <div class="header__burger">
        <div class="header__burger-menu burger-menu">
          <div class="burger-menu__bar top"></div>
          <div class="burger-menu__bar middle"></div>
          <div class="burger-menu__bar bottom"></div>
        </div>
      </div>
    </div>
    <div class="header__contact">
      <a class="header__tel" href="tel: +74957924444">+7-495-792-44-44</a>
      <a class="header__tel" href="tel: +78007750424">+7-800-775-04-24</a>
    </div>
  </header>


  <nav class="nav padding">
    <router-link
        class="nav__menu"
        to="/catalog/"
    >
        <span class="nav__menu_text">каталог</span>
<!--        @mouseenter="catalogFlag = true"-->
<!--        @mouseleave="catalogFlag = false"-->
<!--    >-->



<!--      <ul-->
<!--          class="nav__tree tree"-->
<!--          v-show="catalogFlag"-->
<!--      >  &lt;!&ndash;Выпадающий список (гребаный ад)&ndash;&gt;-->
<!--        <li-->
<!--            class="tree__menu-item"-->
<!--            v-for="i in fallingCatalog"-->
<!--            @mouseenter="subCatalogFlag = true"-->
<!--            @mouseleave="subCatalogFlag = false"-->
<!--        >-->
<!--          {{ i.groupName }}-->

<!--          <ul-->
<!--              class="tree__menu-subitem"-->
<!--              v-show="subCatalogFlag"-->
<!--          >-->
<!--            <li-->

<!--                @mouseenter="subSubCatalogFlag = true"-->
<!--                @mouseleave="subSubCatalogFlag = false"-->
<!--                v-for="j in i.subGroup"-->
<!--            >-->
<!--              {{ j.subGroupName }}-->

<!--              <ul-->
<!--                  class="tree__menu-subsubitem"-->
<!--                  v-for="k in j.subGroupList"-->
<!--                  v-show="subSubCatalogFlag"-->
<!--              >-->
<!--                <li-->
<!--                    @mouseenter="productFlag = true"-->
<!--                    @mouseleave="productFlag = false"-->
<!--                >-->
<!--                  {{ k.subGroupListName }}-->
<!--                  <ul-->
<!--                      v-show="productFlag"-->
<!--                      v-for="hey in k.productList"-->
<!--                  >-->
<!--                    <li>-->
<!--                      <router-link :to="`/catalog/${hey.productLatin}/`">{{ hey.productName }}</router-link>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </li>-->
<!--      </ul>-->
    </router-link>


    <div class="nav__search">
      <form class="nav__form">
        <input
            @focus="searchFlag = true"
            @blur="searchFlagDisable"
            v-model="searchValue"
            class="nav__input"
            type="search"
            placeholder="Введите название товара"
        />
        <ul
            class="nav__search-item"
            v-show="searchFlag"
        >
          <li v-for="product in filteredArticles.slice(0, 5)"> <!-- максимальное отображение элементов поиска - 5-->
            <router-link
                class="nav__search-link"
                :to="`/catalog/${product.productLatin}`"

            >
              {{ product.productName }}
            </router-link>
          </li>
        </ul>
      </form>

      <div class="nav__icons">
<!--        <router-link class="nav__icon-item" to="/catalog/">-->
<!--          <svg id="Capa_1" enable-background="new 0 0 511.977 511.977" viewBox="0 0 511.977 511.977"-->
<!--               xmlns="http://www.w3.org/2000/svg" >-->
<!--            <g>-->
<!--              <path d="m498.237 366.527-114.499-114.527c21.484-48.774 12.291-107.913-27.594-147.808-51.966-51.978-136.081-51.985-188.053-->
<!--              0-51.844 51.856-51.844 136.232 0 188.088 41.198 41.207 101.574 49.053 149.773 26.771l113.914 113.941c18.366 18.37 48.097-->
<!--              18.372 66.463-.004 18.316-18.324 18.314-48.138-.004-66.461zm-308.931-95.458c-40.151-40.16-40.151-105.505 0-145.666-->
<!--              40.24-40.25 105.375-40.257 145.622 0 40.151 40.161 40.151 105.506 0 145.666-40.241 40.251-105.376 40.257-145.622-->
<!--              0zm287.717 140.711c-6.64 6.643-17.388 6.646-24.03.001l-108.834-108.86c8.946-7.042 16.919-15.128 23.842-24.23l109.02-->
<!--              109.046c6.627 6.629 6.628 17.414.002 24.043z"/><path d="m15 244.947h63.962c8.284 0-->
<!--              15-6.716 15-15s-6.716-15-15-15h-63.962c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/>-->
<!--              <path d="m15 308.947h87.948c8.284 0 15-6.716 15-15s-6.716-15-15-15h-87.948c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/>-->
<!--              <path d="m15 372.947h151.911c8.284 0 15-6.716 15-15s-6.716-15-15-15h-151.911c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/>-->
<!--              <path d="m342.809 406.947h-327.809c-8.284 0-15 6.716-15 15s6.716 15 15 15h327.809c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/>-->
<!--            </g>-->
<!--          </svg>-->
<!--        </router-link>-->
        <router-link class="nav__icon-cart" to="/basket/">
          <div class="nav__icon-item ">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 511.997 511.997" style="enable-background:new 0 0 511.997 511.997;" xml:space="preserve">
              <g>
                <g>
                  <path d="M405.387,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84
                    S440.588,362.612,405.387,362.612z M405.387,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536
                    c14.083,0,25.536,11.453,25.536,25.536S419.47,451.988,405.387,451.988z"/>
                </g>
              </g>
                            <g>
                <g>
                  <path d="M507.927,115.875c-3.626-4.641-9.187-7.348-15.079-7.348H118.22l-17.237-72.12c-2.062-8.618-9.768-14.702-18.629-14.702
                    H19.152C8.574,21.704,0,30.278,0,40.856s8.574,19.152,19.152,19.152h48.085l62.244,260.443
                    c2.062,8.625,9.768,14.702,18.629,14.702h298.135c8.804,0,16.477-6.001,18.59-14.543l46.604-188.329
                    C512.849,126.562,511.553,120.516,507.927,115.875z M431.261,296.85H163.227l-35.853-150.019h341.003L431.261,296.85z"/>
                </g>
              </g>
                            <g>
                <g>
                  <path d="M173.646,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84
                    S208.847,362.612,173.646,362.612z M173.646,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536
                    s25.536,11.453,25.536,25.536S187.729,451.988,173.646,451.988z"/>
                </g>
              </g>
            </svg>
          </div>
          <span class="nav__count" v-if="CART.length" >{{ CART.length }}</span>
        </router-link>
      </div>
    </div>
  </nav>


</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Header",
  data(){
    return{
      headerNav: [
        {
          headerNavName: 'О нас',
          headerNavLink: 'about'
        },
        {
          headerNavName: 'Доставка',
          headerNavLink: 'delivery'
        },
        {
          headerNavName: 'Отзывы',
          headerNavLink: 'reviews'
        },
        {
          headerNavName: 'Партнерам',
          headerNavLink: 'partners'
        },
        {
          headerNavName: 'Контакты',
          headerNavLink: 'contacts'
        }
      ],
      searchValue: '',
      searchFlag: false,        //Нужно для отображения элементов поиска при фокусе на инпуте
      catalogFlag: false,       //На каждую итерацию сделал по такому значению. Возможно, есть другой подход,
      subCatalogFlag: false,    //но мне он пока неизвестен
      subSubCatalogFlag: false,
      productFlag: false,
    }
  },
  components: {

  },
  methods: {
    searchFlagDisable: function (){ //Нужен, чтобы можно было успеть перейти по ссылке в поиске, иначе
      setTimeout(() => {     //searchFlag = false происходит так быстро, что ссылка не срабатывает
        this.searchValue = '';
        this. searchFlag = false;
      }, 200)
    }
  },
  computed: {
    ...mapGetters([
        'CART',
        'GET_PRODUCT_LIST',
        'PRODUCTS'
    ]),
    filteredArticles: function () {
      let searchValue = this.searchValue.toLowerCase()
      if (!searchValue){
        return this.GET_PRODUCT_LIST
      } else {
        return this.GET_PRODUCT_LIST.filter(product => product.productName.toLowerCase().includes(searchValue))
      }
    },
    fallingCatalog: function (){
      return this.PRODUCTS
    },
  }
}
</script>

<style lang="sass">
$green: #47802b
$darkGreen: #366121
$orange: #ea5f01
$grey: #f3f3f6


html
  font-size: 10px

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-size: 1.8rem
  font-family: Geometria

.padding
  padding: 0 10% 0 10%
  @media ( max-width: 880px )
    padding: 0 2% 0 2%

ul, li
  list-style: none

a
  text-decoration: none
  color: inherit

.header
  margin-top: 50px
  margin-bottom: 25px
  display: flex
  justify-content: space-between
  align-items: center
  &__burger
    display: none
    @media ( max-width: 880px )
      display: block
  @media ( max-width: 880px )
    padding-top: 45px
    padding-bottom: 15px
    align-items: normal //здесь space-around
    position: relative
  &__links
    display: flex
    justify-content: space-around
    text-align: center
    background-color: #fff
    transition: 0.5s all
    @media ( max-width: 880px )
      display: none
      flex-direction: column
      position: absolute
      top: 100%
      right: 0
      z-index: 199
      width: 100%
      background-color: #fff
  &__link
    &:hover
      color: $orange
      transition: 0.2s all
    @media ( max-width: 880px )
      padding: 5px 0
      border-bottom: 1px solid $orange
      &:first-child
        border-top: 1px solid $orange
      &:hover
        background-color: $orange
        color: #fff

  &__name
    text-transform: uppercase
    color: $green
    font-weight: 700
    font-size: 2.2rem
  &__tel
    font-weight: 700
    display: block
    font-size: 1.7rem

  &__contact
    @media ( max-width: 1180px )
      display: none
  &__wrapper
    width: 60%
    @media ( max-width: 1180px )
      width: 100%
    @media ( max-width: 880px )
      width: 5%
    &:hover
      .header__links
        display: flex
      .top
        transform: rotate(45deg)
      .middle
        opacity: 0
      .bottom
        transform: rotate(-45deg)

.burger-menu
  display: flex
  flex-flow: column wrap
  justify-content: space-between
  height: calc( 15px + 2vw )
  width: calc( 15px + 2vw )
  cursor: pointer
  &__bar
    height: calc( 1px + 0.2vw )
    width: 100%
    background: black
    border-radius: 5px
    margin: calc(1px + 0.27vw) 0
    transform-origin: left
    transition: all 0.2s

.nav
  display: flex
  justify-content: space-around
  background-color: $green
  height: 100px
  align-items: center
  margin-bottom: 60px
  position: sticky
  top: 0
  z-index: 99
  @media ( max-width: 500px )
    display: flex
    flex-direction: column
    padding: 20px 0
  &__menu
    height: 100%
    background-color: $darkGreen
    padding: 0 5%
    display: flex
    align-items: center
    cursor: pointer
    position: relative
    @media ( max-width: 500px )
      width: 98vw
      padding: 10px 0
      //margin-bottom: 10px
      justify-content: center
    &_text
      color: white
      text-transform: uppercase
      font-size: 2rem
      text-align: center

  &__search
    display: flex
    justify-content: space-around
    align-items: center
    padding-left: 20px
    flex-grow: 2
    @media ( max-width: 500px )
      width: 98vw
      justify-content: center
      padding: 0
    input[type="search"]
      background-color: #84aa72
      outline: none
      border: none
      height: 47px
      padding: 20px 0 20px 3%
      color: white
      font-size: 1.8rem
      border-radius: 5px
      width: 50vw
      @media ( max-width: 500px )
        width: 85vw
      &::placeholder
        color: white
        font-size: 1.8rem
      &::-ms-clear,
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration
        display: none
    &-item
      background-color: #fff
      position: absolute
      top: 157%
      left: 0
      @media (max-width: 500px)
        width: 100%
        top: 100%
    &-link
      display: block
      width: 50vw
      padding: 10px
      background-color: $grey
      border-bottom: 3px white solid
      transition: all 0.3s
      @media (max-width: 500px)
        width: 100%
      &:hover
        color: #fff
        background-color: $orange

  &__icons
    width: 15%
    display: flex
    justify-content: space-around
  &__form
    display: flex
    align-items: center
    position: relative
  &__icon
    &-cart
      position: relative
    &-item
      fill: #fff
      transition: all 0.3s
      width: 30px
      &:hover
        fill: $orange
  &__count
    position: absolute
    background-color: $orange
    top: 0
    right: -5px
    width: 15px
    height: 15px
    font-size: 10px
    justify-content: center
    display: flex
    align-items: center
    border-radius: 100%
    cursor: pointer
    color: #fff
</style>