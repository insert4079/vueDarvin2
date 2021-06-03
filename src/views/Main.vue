<template>
<div class="main">

  <div class="promo padding">
    <div class="promo__block">
      <div class="promo__text"><span class="promo__text_first">{{ promo.promoPeriod }}</span><span class="promo__text_second">{{ promo.promoDescr }}</span>
        <router-link to="/catalog/" class="promo__text_link">
          {{ promo.promoLinkText }}
        </router-link>
      </div>
      <img
          class="promo__photo"
          :src="imgUrl(promo.promoImg)"
          alt="Цветы" />
    </div>
  </div>


  <div class="ours padding">
    <div class="ours__blocks">
      <a
          class="ours__block"
          v-for="i in ours"
          :href="i.oursItemLink"
          target="_blank"
      >
        <div class="ours__block_title">{{ i.oursItemName }}</div>
        <img
            class="ours__block_img"
            :src="imgUrl(ours[i.oursItemId].oursItemImg)"
            alt="Записная книжка"
        />
        <div class="ours__block_link">Перейти</div>
      </a>
    </div>
  </div>


  <div class="leaders padding">
    <h2 class="leaders__title">Лидеры продаж</h2>
    <div class="leaders__body">
      <div
          class="leaders__block"
          v-for="product in GET_PRODUCT_LIST"
          v-if="product.productLeader"
      >
        <div  class="leaders__block_top">
          <img
              class="leaders__block_img"
              :src="product.productImg"
              alt="Жимолость"
          />
          <div class="leaders__block_text">
            <router-link class="leaders__block_name" :to="`/catalog/${product.productLatin}`">{{ product.productName }}</router-link>
            <div class="leaders__block_price"> {{ product.productPrice }} ₽</div>
          </div>
        </div>
        <div class="leaders__block_bot leaders__block_toggle-bot">
          <div @click="addToCart" class="leaders__block_add">
            <div class="leaders__block_plus"></div>
            <div class="leaders__block_basket">Добавить в корзину</div>
          </div>
        </div>
      </div>

      <router-link to="/catalog/" class="leaders__block leaders__block_orange">
        <div class="leaders__block_top">
          <img
              class="leaders__block_img"
              src="../assets/img/leader__6.png"
              alt="Корзина" />
        </div>
        <div class="leaders__block_toggle-bot">
          <div class="leaders__block_add">
            <div class="leaders__block_catalog">перейти в каталог</div>
          </div>
        </div>
      </router-link>

    </div>
  </div>


  <div class="adv padding">
    <div v-for="i in adv" class="adv__block">
      <div class="adv__block_wrapper">
        <img
            class="adv__block_img"
            :src="imgUrl(adv[i.advItemId].advImg)"
            :alt="i.advImgAlt"
        />
      </div>
      <div class="adv__block_title">{{ i.advItemName }}</div>
      <div class="adv__block_descr">{{ i.advItemDescr }}</div>
    </div>
  </div>


  <swiper ref="mySwiper" >
    <div v-for="i in slider" class="swiper-wrapper">
      <div class="swiper-slide">
        <img
            :src="imgUrl(slider[i.sliderId].sliderImg)"
            :alt="slider[i.sliderId].sliderAlt"
        />
      </div>
    </div>
  </swiper>


  <div class="articles padding">
    <h2 class="articles__title">Статьи для садоводов</h2>
    <div class="articles__body">
      <router-link
          class="articles__block"
          v-for="i in articles"
          :to="i.articleLink"
      >
        <img
            class="articles__block_img"
            :src="imgUrl(articles[i.articleId].articleImg)"
            :alt="articles[i.articleId].articleName"
        />
        <div class="articles__block_title">{{ i.articleName }}</div>
        <div class="articles__block_desct">{{ i.articleDescr }}</div>
        <div class="articles__block_link">Читать статью</div>
      </router-link>
    </div>
  </div>


  <div class="about padding">
    <h2 class="about__title">О сети магазинов Дарвин</h2>
    <div class="about__body">
      <div class="about__text">{{ about[0].aboutDescr }}</div>
      <img
          class="about__img"
          :src="imgUrl(about[0].aboutImg)"
          alt="Производство"
      />
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
import Vue from 'vue';
import Vuex from "vuex";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

Vue.use(Vuex);

import Cart from "./Cart";
import {mapGetters, mapActions} from 'vuex';




let images = require.context('../assets/img/', false, /\.png|jpg|svg|webp$/); //Переменная для корректного использования
                                                                             //относительного пути к картинкам

export default {
  name: "main",
  components: {
    Cart,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return{
      companyInfo: {
        name: 'Дарвин',
        nameDescription: 'Садовые гипермаркеты',
        phones: ['+7-495-792-44-44', '+7-800-775-04-24']
      },
      promo: {
        promoPeriod: 'Весь июнь',
        promoDescr: 'скидка 15% на комнатные растения',
        promoLinkText: 'перейти в каталог',
        promoLink: '#',
        promoImg: 'flowers.png'
      },
      catalog: [
        {
          catalogItemId: 0,
          catalogItemName: 'Растения',
          catalogItemSubList: [
            {
              catalogItemSubListId: 0,
              catalogItemSubListName: 'Декоративные растения',
              catalogItemSubListItems: ['Лиственные растения', 'Хвойные растения', 'Вьющиеся растения', 'Ампельные растения']
            },
            {
              catalogItemSubListId: 1,
              catalogItemSubListName: 'Плодовые растения',
              catalogItemSubListItems: ['Плодовые растения', 'Плодовые кустарники', 'Плодовые лианы', 'Садовая земляника', 'Рассада овощей и трав']
            },
            {
              catalogItemSubListId: 2,
              catalogItemSubListName: 'Комнатные растения',
              catalogItemSubListItems: ['Декоративно-лиственные', 'Декоративно-цветущие', 'Засухоустойчивые', 'Орхидеи']
            },
            {
              catalogItemSubListId: 3,
              catalogItemSubListName: 'Луковичные растения',
              catalogItemSubListItems: ['Цветы весенней посадки', 'Лук-севок и чеснок', 'Семенной картофель', 'Цветы осенней посадки']
            },
            {
              catalogItemSubListId: 4,
              catalogItemSubListName: 'Семена',
              catalogItemSubListItems: ['Однолетние цветы', 'Комнатные растения', 'Многолетние цветы', 'Овощи, ягоды, травы']
            },
            {
              catalogItemSubListId: 5,
              catalogItemSubListName: 'Газон',
              catalogItemSubListItems: ['Семена газона', 'Защита подкормка', 'Рулонный газон']
            }
          ]
        },
        {
          catalogItemId: 1,
          catalogItemName: 'Уход за растениями',
          catalogItemSubList: [
            {
              catalogItemSubListId: 0,
              catalogItemSubListName: 'Грунт и торф',
              catalogItemSubListItems: ['Грунты универсальные', 'Грунты специализированные', 'Керамзит, субстраты']
            },
            {
              catalogItemSubListId: 1,
              catalogItemSubListName: 'Удобрения',
              catalogItemSubListItems: ['Удобрения сухие', 'Удобрения жидкие', 'Удобрения классические']
            },
            {
              catalogItemSubListId: 2,
              catalogItemSubListName: 'Средства защиты растений',
              catalogItemSubListItems: ['Защита от насекомых', 'Защита от сорняков', 'Защита от грызунов']
            },
            {
              catalogItemSubListId: 3,
              catalogItemSubListName: 'Выращивание рассады',
              catalogItemSubListItems: ['Торфогоршки', 'Торфяные таблетки', 'Горшки и касеты для рассады', 'Лампы для рассады']
            },
            {
              catalogItemSubListId: 4,
              catalogItemSubListName: 'Горшки и кашпо',
              catalogItemSubListItems: ['Пластиковые', 'Керамические', 'Кашпо', 'Стеклянные', 'Поддоны для горшков']
            },
            {
              catalogItemSubListId: 5,
              catalogItemSubListName: 'Подставки и опоры',
              catalogItemSubListItems: ['Опоры для садовых растений', 'Подставки для комнатных цветов']
            }
          ]
        },
        {
          catalogItemId: 2,
          catalogItemName: 'Инструмент, инвентарь',
          catalogItemSubList: [
            {
              catalogItemSubListId: 0,
              catalogItemSubListName: 'Садовый инструмент',
              catalogItemSubListItems: ['Лопаты', 'Грабли', 'Топоры и пилы', 'Другие инструменты']
            },
            {
              catalogItemSubListId: 1,
              catalogItemSubListName: 'Теплицы и парники',
              catalogItemSubListItems: ['Теплицы', 'Парники', 'Покрытие']
            },
            {
              catalogItemSubListId: 2,
              catalogItemSubListName: 'Тачки и компостеры',
              catalogItemSubListItems: ['Садовые такчки и телеги', 'Компостеры', 'Аксессуары к тачкам и телегам']
            },
            {
              catalogItemSubListId: 3,
              catalogItemSubListName: 'Укрывной материал',
              catalogItemSubListItems: ['Пленка', 'Укрытия для растений', 'Агротекстиль', 'Сетка']
            },
            {
              catalogItemSubListId: 4,
              catalogItemSubListName: 'Все для полива',
              catalogItemSubListItems: ['Ведра и тазы', 'Бочки и баки', 'Лейки', 'Шланги', 'Поливочные пистолеты']
            },
            {
              catalogItemSubListId: 5,
              catalogItemSubListName: 'Рабочая одежда и средства защиты',
              catalogItemSubListItems: ['Обувь, одежда, перчатки', 'Средства индивидуальной защиты']
            }
          ]
        },
        {
          catalogItemId: 3,
          catalogItemName: 'Садовая техника',
          catalogItemSubList: [
            {
              catalogItemSubListId: 0,
              catalogItemSubListName: 'Газонокосилки и триммеры',
              catalogItemSubListItems: ['Кусторезы', 'Газонокосилки и триммеры', 'Газонокосилки', 'Триммеры']
            },
            {
              catalogItemSubListId: 1,
              catalogItemSubListName: 'Культиваторы и мотоблоки',
              catalogItemSubListItems: ['Культиваторы и мотоблоки']
            },
            {
              catalogItemSubListId: 2,
              catalogItemSubListName: 'Воздуходувы и измельчители',
              catalogItemSubListItems: ['Воздуходувы', 'Садовые измельчители', 'Садовые пылесосы']
            },
            {
              catalogItemSubListId: 3,
              catalogItemSubListName: 'Цепные пилы',
              catalogItemSubListItems: ['Цепные пилы', 'Ручные пилы']
            },
            {
              catalogItemSubListId: 4,
              catalogItemSubListName: 'Мойки, полив, дренаж',
              catalogItemSubListItems: ['Мойки', 'Полив и дренаж']
            },
            {
              catalogItemSubListId: 5,
              catalogItemSubListName: 'Снегоуборщики',
              catalogItemSubListItems: ['Снегоуборщики бензиновые', 'Снегоуборщики электрические', 'Аксессуары для снегоуборщиков']
            }
          ]
        },
        {
          catalogItemId: 4,
          catalogItemName: 'Садовый декор',
          catalogItemSubList: [
            {
              catalogItemSubListId: 0,
              catalogItemSubListName: 'Садовые декоративные фигуры',
              catalogItemSubListItems: ['Садовые фигуры', 'Иммитация камня, крышки на люки, валуны', 'Прочий фигурный декор']
            },
            {
              catalogItemSubListId: 1,
              catalogItemSubListName: 'Емкости для выращивания растений',
              catalogItemSubListItems: ['Садовые кашпо', 'Балконные ящики', 'Поддоны и прочее']
            },
            {
              catalogItemSubListId: 2,
              catalogItemSubListName: 'Пруды, фонтаны и бассейны',
              catalogItemSubListItems: ['Пруды и аксессуары', 'Бассейны и аксессуары', 'Садовые фонтаны']
            },
            {
              catalogItemSubListId: 3,
              catalogItemSubListName: 'Садовые светильники',
              catalogItemSubListItems: ['Светильники на солнечных батареях', 'Уличное электрическое освещение']
            },
            {
              catalogItemSubListId: 4,
              catalogItemSubListName: 'Заборчики и бордюры',
              catalogItemSubListItems: ['Бордюры и ленты', 'Декоративные заборы', 'Декоративная решетка']
            },
            {
              catalogItemSubListId: 5,
              catalogItemSubListName: 'Плитка, брусчатка, камень',
              catalogItemSubListItems: ['Покрытие "дорожка"', 'Покрытие модульное', 'Решетка газонная', 'Декорирование поверхности почвы']
            }
          ]
        },
        {
          catalogItemId: 5,
          catalogItemName: 'Товары для дома',
          catalogItemSubList: [
            {
              catalogItemSubListId: 0,
              catalogItemSubListName: 'Все для ремонта',
              catalogItemSubListItems: ['Инструмент для покраски', 'Краски, лаки, растворители', 'Обустройство рабочего места', 'Крепеж и скобянка', 'Лестницы и стремянки']
            },
            {
              catalogItemSubListId: 1,
              catalogItemSubListName: 'Декор для дома',
              catalogItemSubListItems: ['Цветы искусственные', 'Настенный декор', 'Зеркала', 'Ящики и сундуки', 'Крючки и вешалки', 'Ключницы']
            },
            {
              catalogItemSubListId: 2,
              catalogItemSubListName: 'Хоз. товары',
              catalogItemSubListItems: ['Товары для уборки', 'Средства для стирки', 'Средства от бытовых насекомых', 'Бумажная продукция']
            },
            {
              catalogItemSubListId: 3,
              catalogItemSubListName: 'Кухня',
              catalogItemSubListItems: ['Емкости для хранения продуктов', 'Бутылки', 'Кадки', 'Мелкая бытовая техника', 'Посуда']
            },
            {
              catalogItemSubListId: 4,
              catalogItemSubListName: 'Домашний текстиль',
              catalogItemSubListItems: ['Домашняя одежда и обувь', 'Подушки, одеяла, постельное белье', 'Шторы, скатерти', 'Полотенца']
            },
            {
              catalogItemSubListId: 5,
              catalogItemSubListName: 'Биотуалеты и аксессуары',
              catalogItemSubListItems: ['Биотуалеты', 'Биотуалеты типа "ведро"', 'Химия для биотуалетов']
            }
          ]
        },
        {
          catalogItemId: 6,
          catalogItemName: 'Отдых в саду',
          catalogItemSubList: [
            {
              catalogItemSubListId: 0,
              catalogItemSubListName: 'Садовая мебель',
              catalogItemSubListItems: ['Садовые качели и аксессуары', 'Столы, стулья, скамейки и лавки', 'Гаражи, сараи', 'Детская мебель', 'Наборы мебели', 'Шезлонги']
            },
            {
              catalogItemSubListId: 1,
              catalogItemSubListName: 'Садовые грили и мангалы',
              catalogItemSubListItems: ['Мангалы и барбекю', 'Аксессуары для мангалов и барбекю']
            },
            {
              catalogItemSubListId: 2,
              catalogItemSubListName: 'Товары для бани и сауны',
              catalogItemSubListItems: ['Банный текстиль', 'Инвентарь для бани', 'Бондарные изделия', 'Средства гигиены']
            },
            {
              catalogItemSubListId: 3,
              catalogItemSubListName: 'Товары для пикника',
              catalogItemSubListItems: ['Уголь, дрова и прочее', 'Средства для розжига']
            },
            {
              catalogItemSubListId: 4,
              catalogItemSubListName: 'Товары для кемпинга',
              catalogItemSubListItems: ['Рыбалка и прочее', 'Гамаки и мебель для кемпинга', 'Спортивный инвентарь']
            },
            {
              catalogItemSubListId: 5,
              catalogItemSubListName: 'Зоотовары',
              catalogItemSubListItems: ['Товары для собак', 'Товары для кошек', 'Товары для птиц', 'Прочие зоотовары']
            }
          ]
        }
      ],
      ours: [
        {
          oursItemId: 0,
          oursItemName: 'Интерактивный календарь садовника',
          oursItemImg: 'book.png',
          oursItemImgAlt: 'Записная книжка',
          oursItemLink: 'https://mazirov.ru/online-servisy/gardener-calendar/'
        },
        {
          oursItemId: 1,
          oursItemName: 'Мастер классы',
          oursItemImg: 'pencil.png',
          oursItemImgAlt: 'Карандаши',
          oursItemLink: 'https://mirnov.ru/master-sadovod'
        },
        {
          oursItemId: 2,
          oursItemName: 'Мы в инстаграм',
          oursItemImg: 'notebook.png',
          oursItemImgAlt: 'Открытый ноутбук',
          oursItemLink: 'https://www.instagram.com/'
        },
        {
          oursItemId: 3,
          oursItemName: 'Наш канал на YouTube',
          oursItemImg: 'notebookClose.png',
          oursItemImgAlt: 'Закрытый ноутбук',
          oursItemLink: 'https://www.youtube.com/'
        }
      ],
      adv: [
        {
          advItemId: 0,
          advItemName: 'Собственное производство',
          advItemDescr: 'Сами производим торф, удобрения и грунт',
          advImg: 'adv__1.png',
          advImgAlt: 'Тачка'
        },
        {
          advItemId: 1,
          advItemName: 'Собственный питомник',
          advItemDescr: 'Выращиваем сами более 1000 видов растений',
          advImg: 'adv__2.png',
          advImgAlt: 'Корзина'
        },
        {
          advItemId: 2,
          advItemName: 'Опытные садоводы',
          advItemDescr: 'Доверьте уход за садом садовнику из садового центра',
          advImg: 'adv__3.png',
          advImgAlt: 'Садовод'
        }
      ],
      slider: [
        {
          sliderId: 0,
          sliderImg: 'partner__1.png',
          sliderAlt: 'Фаско'
        },
        {
          sliderId: 1,
          sliderImg: 'partner__2.png',
          sliderAlt: 'ИНТА-ВИР'
        },
        {
          sliderId: 2,
          sliderImg: 'partner__3.png',
          sliderAlt: 'Тимирязевский Питомник'
        },
        {
          sliderId: 3,
          sliderImg: 'partner__4.png',
          sliderAlt: 'Terrasol'
        },
        {
          sliderId: 4,
          sliderImg: 'partner__5.png',
          sliderAlt: 'Щедрая земля'
        },

      ],
      articles: [
        {
          articleId: 0,
          articleName: 'Базилик',
          articleDescr: 'Базилик – это однолетнее растение, семейства Яснотковые. История этого растения началась в Индии, там...',
          articleImg: 'article__1.jpg',
          articleLink: 'basil'
        },
        {
          articleId: 1,
          articleName: 'Сикомора',
          articleDescr: 'Сикомор – это дерево, которое может вырасти от 18 до 40 метров и может прожить от 600 до 1200 лет...',
          articleImg: 'article__2.jpg',
          articleLink: 'sycamore'
        },
        {
          articleId: 2,
          articleName: 'Можжевельник китайский',
          articleDescr: 'Можжевельник китайский и можжевельник средний очень часто путают и воспринимают как синонимы...',
          articleImg: 'article__3.jpg',
          articleLink: 'juniper'
        }
      ],
      about: [
        {
          aboutDescr: 'Сейчас Дарвин - это 4 гипермаркета в Подольске, Солнечногорске, Зеленограде и Пушкино.\n' +
              'Свыше 30 000 товарных позиций на любой вкус и кошелек, более 10 000 м² площади.\n' +
              'В нашем каталоге вы можете найти: уличные растения от ведущих питомников России и мира, средства по уходу за любыми растениями, товары для отдыха в саду и многое другое.\n' +
              'Так же еженедельно мы поводим мастер-классы, на которых показываем, как сделать сад уютнее.',
          aboutImg: 'about__1.jpg'
        }
      ],
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
      payMethods: [
        {
          payMethodId: 0,
          payMethodImg: 'mastercard.svg',
          payMethodImgAlt: 'MasterCard'
        },
        {
          payMethodId: 1,
          payMethodImg: 'qiwi.svg',
          payMethodImgAlt: 'QIWI'
        },
        {
          payMethodId: 2,
          payMethodImg: 'visa.svg',
          payMethodImgAlt: 'Visa'
        }
      ],
      addToCartFlag: false
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),

    addToCart(e) { //топорно, но работает. Нахожу название товара через таргет и по этому названию нахожу нужный объект
      let currentProductName = e.target.parentNode.parentNode.parentNode.querySelector('.leaders__block_name').innerHTML
      let currentProduct = this.GET_PRODUCT_LIST.find(e => e.productName === currentProductName)

      if (!this.CART.includes(currentProduct)) {
        this.$set(currentProduct, 'productCount', 1)
        this.ADD_TO_CART(currentProduct)
        this.addToCartFlag = true
        setTimeout(() => this.addToCartFlag = false, 1000)
      } else {
        this.ADD_TO_CART(currentProduct)
      }
    },
    imgUrl: function (path) {     //Функция для доступа к картинкам через относительный путь
      return images('./' + path)
    },
  },
  computed: {
    ...mapGetters([
      'CART',
      'PRODUCTS',
      'GET_PRODUCT_LIST'
    ]),
  }
};

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

p
  margin-bottom: 20px

h1
  margin-bottom: 30px

h2
  font-size: 3rem

h3
  margin-bottom: 20px
  margin-top: 30px

.fa-shopping-basket
  color: white
  cursor: pointer

.promo
  margin-bottom: 100px
  &__block
    background-color: $orange
    display: flex
    overflow: hidden
    position: relative
  &__text
    display: flex
    flex-direction: column
    color: white
    padding: 6% 0 6% 8%
    &_first
      font-size: 3rem
      text-transform: uppercase
      margin-bottom: 30px
      @media ( max-width: 1180px )
        font-size: 2rem
        margin-bottom: 15px
    &_second
      font-size: 4.8rem
      width: 40%
      font-weight: 700
      margin-bottom: 45px
      @media ( max-width: 1180px )
        width: 55%
        font-size: 3.8rem
        margin-bottom: 25px
      @media ( max-width: 880px )
        width: 80%
        font-size: 3.8rem
        margin-bottom: 25px
    &_link
      font-size: 2.4rem
      text-decoration: underline
  &__photo
    position: absolute
    left: 50%
    top: -45%
    @media ( max-width: 1180px )
      left: 60%
      top: -85%
    @media ( max-width: 880px )
      display: none

.ours
  margin-bottom: 145px
  &__blocks
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    @media ( max-width: 880px )
      justify-content: center
  &__block
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    text-align: center
    background-color: $grey
    width: 21%
    padding: 30px 1% 0 1%
    min-height: 325px
    border-radius: 10px
    transition: 0.2s all
    &:hover
      box-shadow: 0 0 13px 0 rgba(0,0,0,0.3)
      transform: scale(1.01)
      & .ours__block_link
        color: $orange
        transition: 0.2s all
    @media ( max-width: 1180px )
      width: 45%
      margin-bottom: 30px
    @media ( max-width: 880px )
      width: 100%
    &_link
      width: 90%
      border-top: 1px #d3d2d2 solid
      padding: 25px 0
    &_img
      &-move
        transform: translateX(-20px)

.leaders
  margin-bottom: 100px
  &__title
    margin-bottom: 65px
  &__body
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    @media ( max-width: 880px )
      justify-content: center
  &__block
    background-color: $grey
    width: 32%
    padding: 25px 25px 0 25px
    min-height: 265px
    display: flex
    flex-direction: column
    justify-content: space-between
    border-radius: 10px
    margin-bottom: 40px
    @media ( max-width: 1180px )
      width: 41%
    @media ( max-width: 880px )
      width: 100%
      max-width: 515px
    &_orange
      display: block
      background-color: $orange
      cursor: pointer
    &_catalog
      font-size: 1.6rem
      text-transform: uppercase
      color: white
      text-align: center
    &_img
      margin-right: 10px
      width: 150px
      border-radius: 5px
    &_top
      display: flex
      justify-content: space-around
      align-items: center
      margin-bottom: 30px
      padding: 0 25px 0 25px
    &_text
      max-width: 120px
    &_name
      font-size: 1.8rem
      margin-bottom: 25px
      transition: 0.2s
      &:hover
        color: $orange
    &_price
      font-size: 2.5rem
      color: $orange
      font-weight: 700
    &_bot
      display: flex
      justify-content: center
      border-top: 1px #d3d2d2 solid
      cursor: pointer
      min-height: 65px
      padding-bottom: 25px
      &:hover
        .leaders__block_basket
          color: $orange
          transition: 0.2s all
    &_toggle-bot
      display: flex
      justify-content: center
      border-top: 1px #d3d2d2 solid
      min-height: 65px
      padding-bottom: 25px
    &_add
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      margin-top: 25px
    &_basket
      font-size: 1.6rem
      font-weight: 500
    &_plus
      width: 40px
      height: 40px
      background-color: $orange
      border-radius: 5px
      position: relative
      margin-right: 10px
      &::after
        content: ''
        position: absolute
        background-color: #fff
        width: 20px
        height: 1px
        top: 50%
        left: 25%
      &::before
        content: ''
        position: absolute
        background-color: #fff
        width: 20px
        height: 1px
        top: 50%
        left: 25%
        transform: rotate(90deg)

.adv
  display: flex
  justify-content: space-between
  margin-bottom: 150px
  flex-wrap: wrap
  &__block
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    text-align: center
    min-height: 200px
    width: 30%
    @media ( max-width: 880px )
      width: 100%
      margin-bottom: 50px
    &_wrapper
      height: 130px
      display: flex
      align-items: flex-end
      margin-bottom: 30px
    &_title
      font-size: 2.4rem
      font-weight: 500
      margin-bottom: 30px
    &_descr
      font-size: 2rem
      line-height: 30px

.swiper-button-next::after, .swiper-button-prev::after
  display: none

.swiper
  &-container
    margin-bottom: 150px
    width: 80%
  &-slide
    display: flex
    justify-content: center
    &-next, &-prev
      border-radius: 100%
      padding: 0 10px
      background-size: 20px 20px

.articles
  margin-bottom: 95px
  &__title
    margin-bottom: 65px
  &__body
    padding: 10px
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    overflow: hidden
    height: 600px
    &_full
      height: 100%
    @media ( max-width: 880px )
      justify-content: center
  &__block
    width: 30%
    background-color: $grey
    display: inline-flex
    flex-direction: column
    align-items: center
    text-align: center
    border-radius: 10px
    justify-content: space-between
    min-height: 520px
    padding: 20px 30px 35px 30px
    margin-bottom: 25px
    &:hover
      box-shadow: 0 0 13px 0 rgba(0,0,0,0.3)
      transform: scale(1.01)
    @media ( max-width: 1180px )
      width: 40%
    @media ( max-width: 880px )
      max-width: 350px
      width: 100%
    &_img
      width: 18vw
      @media ( max-width: 1180px )
        width: 30vw
      @media ( max-width: 880px )
        width: 90%
    &_title
      font-size: 2rem
      font-weight: 500
    &_descr
      font-size: 1.8rem
    &_link
      color: $orange
      border-bottom: 1px $orange solid
  &__more
    color: $orange
    text-align: center
    display: flex
    justify-content: center
  &__wrapper
    cursor: pointer
    width: 100%
    padding-bottom: 50px
    display: flex
    flex-direction: column
  &__arrows
    text-align: center
    position: relative
    margin-bottom: 10px
  &__arrow
    width: 15px
    height: 1px
    content: ' '
    background-color: $orange
    position: absolute
    top: 0
    left: 50%
    transform: rotate(45deg)
    &::after
      width: 15px
      height: 1px
      content: ' '
      background-color: $orange
      position: absolute
      top: -700%
      left: 50%
      transform: rotate(-90deg)
    &_down
      transform: rotate(225deg)
      left: 50%
    &_bot
      top: 10px


.about
  margin-bottom: 150px
  &__body
    display: flex
    justify-content: space-between
    align-items: center
    @media ( max-width: 1180px )
      flex-direction: column
  &__text
    width: 45%
    @media ( max-width: 1180px )
      width: 100%
  &__text
    & p
      margin-bottom: 30px
      margin-top: 0
      &:nth-child(2)
        margin-bottom: 50px
  &__img
    width: 40vw
    @media ( max-width: 1180px )
      width: 80vw
    @media ( max-width: 880px )
      width: 90vw
  &__title
    margin-bottom: 65px




::-webkit-scrollbar
  background-color: #f5f5f5
  width: 10px
::-webkit-scrollbar-thumb
  background-color: $green
  border-radius: 10px


.add-product-popup
  position: fixed
  z-index: 100
  top: -50px
  right: 5px
  display: block
  padding: 10px
  background-color: $orange
  color: #fff
  font-weight: 500
  border-radius: 10px
  transition: all 0.5s
  &__active
    top: 5px

</style>
