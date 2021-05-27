<template>
<div class="headerComponent">
  <header class="header padding">
    <router-link to=""></router-link>
    <router-link to="/">
      <div class="header__name">дарвин</div>
      <div class="header__descr">садовые гипермаркеты</div>
    </router-link>
    <div class="header__wrapper">
      <div class="header__links">
        <a v-for="i in headerNav"  href="#" class="header__link">{{ i }}</a>
      </div>
      <div class="header__burger">
        <div class="header__burger-menu burger-menu">
          <div class="burger-menu__bar top"></div>
          <div class="burger-menu__bar middle"></div>
          <div class="burger-menu__bar bottom"></div>
        </div>
      </div>
    </div>
    <div class="header__contact"><a class="header__tel" href="tel: +74957924444">+7-495-792-44-44</a><a class="header__tel" href="tel: +78007750424">+7-800-775-04-24</a></div>
  </header>


  <nav class="nav padding">
    <div class="nav__menu">
      <div class="nav__menu_burg"></div>
      <div class="nav__menu_text">каталог</div>
      <div class="nav__tree tree">
        <div class="tree__menu">
          <p class="tree__menu-item">Здесь цикл</p>
        </div>
        <div class="tree__submenu">
          <div class="tree__wrapper">
            <p>Декоративные растения</p>
            <a href="#">Здесь цикл</a>
          </div>
        </div>
      </div>
    </div>
    <div class="nav__search">
      <form class="nav__form">
        <input class="nav__input" type="search" placeholder="Поиск товара" />
        <a href="#">
          <i class="fa fa-search fa-lg"></i>
        </a>
      </form>
      <div class="nav__icons">
        <router-link to="/catalog/">Каталог</router-link>
        <router-link to="/basket/" id="basket">
          <div >Корзина</div>
          <span v-if="CART.length" >{{ CART.length }}</span>
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
      headerNav: ['О нас', 'Акции', 'Доставка', 'Отзывы', 'Партнерам', 'Контакты']
    }
  },
  computed: {
    ...mapGetters([
        'CART'
    ])
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
  @media ( max-width: 880px )
    padding-top: 45px
    padding-bottom: 15px
    align-items: normal //здесь space-around
    position: relative
  &__links
    display: flex
    justify-content: space-around
    text-align: center
    overflow: hidden
    background-color: #fff
    transition: 0.5s all
    @media ( max-width: 880px )
      flex-direction: column
      position: absolute
      top: 80%
      right: 0
      z-index: 199
      width: 150px
      height: 0
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
  &__burger
    display: none
    @media ( max-width: 880px )
      display: block
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
  justify-content: space-between
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
      width: 100vw
      padding: 10px 0
      margin-bottom: 10px
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
    width: 100%
    @media ( max-width: 500px )
      width: 80%
      justify-content: center
      padding: 0
    input[type="search"], a
      background-color: #84aa72
      outline: none
      border: none
      height: 47px
    a
      border-radius: 0 5px 5px 0
      padding: 0 5%
      cursor: pointer
      //background-image: url(../img/search.svg)
      background-repeat: no-repeat
      display: flex
      align-items: center
      color: #fff
      margin-right: 10px
    input[type="search"]
      padding: 20px 0 20px 3%
      color: white
      font-size: 1.8rem
      border-radius: 5px 0 0 5px
      width: 50vw
      @media ( max-width: 500px )
        width: 80vw
      &::placeholder
        color: white
        font-size: 1.8rem
      &::-ms-clear,
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration
        display: none
  &__ul
    position: fixed
  &__icons
    position: relative
    & i
      transition: 0.2s
      &:hover
        color: $orange
  &__form
    display: flex
    align-items: center
    & input
      &:focus
        &::-webkit-input-placeholder
          color: transparent
  &__count
    position: absolute
    left: 50%
    top: -30%
    background-color: $orange
    width: 90%
    height: 100%
    display: none
    justify-content: center
    align-items: center
    border-radius: 100%
    cursor: pointer
    color: #fff

.tree
  z-index: 110
  &__menu
    position: absolute
    top: 100%
    left: 0
    right: 0
    background-color: #fff
    display: none
    & p
      padding: 10px 5px
      margin: 0
      transition: 0.2s all
      &:hover
        background-color: $grey
  &__submenu
    background-color: #fff
    position: absolute
    top: 100%
    left: 100%
    width: 65vw
    //display: flex
    justify-content: flex-start
    flex-wrap: wrap
    cursor: auto
    padding: 0 50px 50px 30px
    display: none
    overflow: hidden
    @media ( max-width: 500px )
      width: 100vw
      top: 0
      left: 0
      justify-content: space-around
      padding: 0
      overflow: scroll
    & p
      font-weight: 700
    & a
      display: block
      margin-bottom: 5px
      transition: 0.2s all
      &:first-child
        margin-top: 20px
      &:hover
        color: $orange
  &__wrapper
    margin-right: 10px
    width: 45%

</style>