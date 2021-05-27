<template>
<div class="footer-component">
  <footer class="footer padding">
    <div class="footer__top">
      <div  class="footer__links">
        <a v-for="i in footerNav" class="footer__link" href="#">{{ i }}</a>
      </div>
      <div class="footer__downloads">
        <a v-for="i in download" target="_blank" class="footer__download" :href="download[i.downloadId].downloadLink">
          <img class="footer__download_img" :src="imgUrl(download[i.downloadId].downloadImg)" alt="Google Play" />
          <div class="footer__download_text"><span>Загрузите</span><span>в <strong>Google Play</strong></span></div>
        </a>
      </div>



      <div class="footer__contacts">
        <div class="footer__phone">
          <div class="footer__tel">
            <a href="tel:+74957924444">+7-495-792-44-44</a>
            <a href="tel:+78007750424">+7-800-775-04-24</a>
          </div>
        </div>
        <div class="footer__socials">
          <a class="footer__social_wrapper" href="https://www.facebook.com/">
            <svg id="Capa_1" class="footer__social" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"  xml:space="preserve">
                        <g>
                            <g>
                                <path d="M452,0H60C26.916,0,0,26.916,0,60v392c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60 C512,26.916,485.084,0,452,0z M472,452c0,11.028-8.972,20-20,20H338V309h61.79L410,247h-72v-43c0-16.975,13.025-30,30-30h41v-62 h-41c-50.923,0-91.978,41.25-91.978,92.174V247H216v62h60.022v163H60c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h392 c11.028,0,20,8.972,20,20V452z" />
                            </g>
                        </g>
                    </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bot">
      <div class="footer__cards">
        <svg viewBox="0 -91 512 512" width="512pt" class="footer__card" xmlns="http://www.w3.org/2000/svg">
          <path d="m347.339844 0c-33.765625 0-65.1875 10.222656-91.339844 27.722656-26.15625-17.5-57.574219-27.722656-91.339844-27.722656-90.792968 0-164.660156 73.859375-164.660156 164.644531 0 90.785157 73.867188 164.644531 164.660156 164.644531 33.765625 0 65.1875-10.222656 91.339844-27.722656 26.15625 17.5 57.574219 27.722656 91.339844 27.722656 90.792968 0 164.660156-73.859374 164.660156-164.644531 0-90.785156-73.867188-164.644531-164.660156-164.644531zm-182.679688 299.289062c-74.25 0-134.660156-60.402343-134.660156-134.644531 0-74.242187 60.410156-134.644531 134.660156-134.644531 24.300782 0 47.113282 6.46875 66.816406 17.773438-30.117187 29.855468-48.796874 71.21875-48.796874 116.871093 0 45.652344 18.679687 87.015625 48.796874 116.867188-19.703124 11.304687-42.515624 17.777343-66.816406 17.777343zm134.660156-134.644531c0 39.027344-16.699218 74.222657-43.320312 98.835938-9.421875-8.707031-17.597656-18.742188-24.230469-29.804688h17.304688c8.285156 0 15-6.714843 15-15 0-8.285156-6.714844-15-15-15h-30.617188c-1.851562-6.101562-3.285156-12.378906-4.261719-18.8125h58.882813c8.28125 0 15-6.714843 15-15 0-8.285156-6.71875-15-15-15h-60.042969c.460938-6.402343 1.378906-12.683593 2.710938-18.8125h33.328125c8.285156 0 15-6.714843 15-15 0-8.28125-6.714844-15-15-15h-22.960938c7.394531-15.234375 17.582031-28.867187 29.886719-40.246093 26.621094 24.617187 43.320312 59.8125 43.320312 98.839843zm48.019532 134.644531c-24.300782 0-47.113282-6.472656-66.816406-17.777343 30.117187-29.851563 48.796874-71.214844 48.796874-116.867188 0-45.652343-18.679687-87.015625-48.796874-116.871093 19.703124-11.304688 42.515624-17.773438 66.816406-17.773438 74.25 0 134.660156 60.402344 134.660156 134.644531 0 74.242188-60.410156 134.644531-134.660156 134.644531zm0 0" />
        </svg>
      </div>
      <div class="footer__copyright">© Сеть садовых гипермаркетов "Дарвин", 2021</div>
    </div>
  </footer>

</div>
</template>

<script>
let images = require.context('../assets/img/', false, /\.png|jpg|svg|webp$/) //Переменная для корректного использования

export default {
  name: "FooterComponent",
  data(){
    return{
      download: [
        {
          downloadId: 0,
          downloadName: 'Загрузите в Google Play',
          downloadImg: 'googlePlay.png',
          downloadAlt: 'Google Play',
          downloadLink: 'https://play.google.com/store?hl=ru&amp;gl=US'
        },
        {
          downloadId: 1,
          downloadName: 'Загрузите в AppStore',
          downloadImg: 'apple.png',
          downloadAlt: 'AppStore',
          downloadLink: 'https://www.apple.com/ru/app-store/'
        }
      ],
      footerNav: ['Каталог', 'О нас', 'Акции', 'Доставка', 'Отзывы', 'Партнерам', 'Вакансии', 'FAQ', 'Контакты']
    }
  },
  methods: {

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

.footer
  color: white
  background: url(../assets/img/sheet__3.png) no-repeat 90% 120%,
  url(../assets/img/sheet__2.png) no-repeat 40% -70%,
  url(../assets/img/sheet__1.png) no-repeat 10% -80% $darkGreen
  padding-top: 60px
  padding-bottom: 60px
  position: relative
  @media ( max-width: 880px )
    padding-top: 30px
    padding-bottom: 30px
  &__top
    display: flex
    justify-content: space-between
    align-items: normal //здесь space-between
    margin-bottom: 50px
    @media ( max-width: 880px )
      flex-direction: column
      align-items: center
  &__download
    background-color: #244813
    padding: 15px 25px
    display: flex
    align-items: center
    border-radius: 5px
    margin-bottom: 40px
    &:hover
      .footer__download_text
        color: $orange
        transition: 0.2s
    &_img
      max-width: 50px
      max-height: 50px
      margin-right: 15px
      fill: $orange
    &_text
      display: flex
      flex-direction: column
      & span
        letter-spacing: 1px
  &__links
    display: flex
    flex-wrap: wrap
    flex-direction: column
    height: 250px
    width: 25%
    @media ( max-width: 880px )
      width: 50%
      height: auto
      text-align: center
  &__link
    margin-bottom: 25px
    margin-right: 5px
    transition: 0.2s
    &:hover
      color: $orange
  &__socials
    display: flex
    justify-content: space-between
  &__social
    max-width: 30px
    fill: white
    transition: 0.2s
    &:hover
      fill: $orange
    &_wrapper
      display: block
      width: 30px
  &__bot
    display: flex
    justify-content: space-between
    align-items: center
    @media ( max-width: 880px )
      flex-direction: column
      text-align: center
  &__cards
    width: 20%
    display: flex
    justify-content: space-between
    margin-bottom: 30px
  &__card
    width: 40px
    fill: #fff
  &__phone
    margin-bottom: 35px
  &__tel
    font-size: 1.7rem
    font-weight: 500
    margin-bottom: 10px
    & a
      display: block
</style>