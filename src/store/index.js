import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from "vue-router";

Vue.use(Vuex)
Vue.use(VueRouter)

let cart = window.localStorage.getItem('cart'); //получаем массив cart из storage

let store = new Vuex.Store({
  state: {
    products: [
      {
        groupName: 'Растения',
        groupNameEng: 'plant',
        subGroup: [
          {
            subGroupName: 'Декоративные растения',
            subGroupList: [
              {
                subGroupListName: 'Лиственные растения',
                productList: [
                  {
                    productName: 'Самшит вечнозеленый',
                    productPrice: 199,
                    productLeft: 100,
                    productDescription: 'Самшит вечнозеленый (Buxus sempervirens) - декоративный вечнозеленый кустарник. Медленнорастущий. Крона пышная густая. Ветви пряморастущие, хорошо поддаются обрезке. Листовые пластины овальные, темно-зеленые, плотные и блестящие.\n',
                    productLatin: 'someshit-vechnozelenyy',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/088/600_600_1/088be79aede95d049af82794ce765ddf.jpeg',
                    productParentGroup: 'plant'
                  },
                  {
                    productName: 'Эрика',
                    productPrice: 199,
                    productLeft: 100,
                    productDescription: 'Эрика (Erica) – красивый декоративный вечнозеленый кустарник из рода вересков. Высота взрослого растения 50 см. Листья узкие, иглообразные. Маленькие цветочки напоминают колокольчики. Цветение растения приходится на весну или позднюю осень. Создается впечатление, что эрика цветет все 6 месяцев, так как засохшие цветы еще долго держатся на растении.\n',
                    productLatin: 'erika',
                    productImg: 'https://darvin-market.ru/upload/iblock/f9d/f9d28108d46583033d5b624f314d4612.jpeg',
                    productParentGroup: 'plant'
                  },
                  {
                    productName: 'Лавровишня',
                    productPrice: 249,
                    productLeft: 100,
                    productDescription: 'Лавровишня – невысокий вечнозеленый красивый кустарник. Максимальная высота 1000 м. Листовые пластины крупные, темно-зеленые. Цветет белыми цветками, собранными в кисти 5-12 см. Ягоды съедобные, красные, внешне очень похожи на черешню. Лавровишня обладает множеством полезных свойств.',
                    productLatin: 'lavrovishnya_v2_lav',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/582/600_600_1/582c5ff0283a653a72cf81b50e85710d.jpeg',
                    productParentGroup: 'plant'
                  },

                ],
              },
              {
                subGroupListName: 'Хвойные растения',
                productList: [
                  {
                    productName: 'Кедр атласский',
                    productPrice: 299,
                    productLeft: 100,
                    productDescription: 'Вид хвойных деревьев из рода Кедр семейства Сосновые. Среди ботаников идут споры о том, является ли кедр атласский отдельным видом рода Кедр или подвидом кедра ливанского.',
                    productLatin: 'kedr-atlasskiy',
                    productImg: 'https://mylitta.ru/uploads/posts/2017-09/1505136892_cedrus-atlantica-2.jpg',
                    productParentGroup: 'plant'
                  },
                  {
                    productName: 'Сосна крымская',
                    productPrice: 299,
                    productLeft: 100,
                    productDescription: 'Сосна крымская – высокое, раскидистое хвойное дерево, использующееся для украшения садов и участков, а также создания живой изгороди. Отличается красивой широкой кроной, возвышающейся над стволом и лапами с толстыми зелеными иголками. В средней полосе дерево вырастает до 35 метров.',
                    productLatin: 'sosna-krymskaya',
                    productImg: 'https://derevo-s.ru/assets/images/resources/682/big/1.jpg',
                    productParentGroup: 'plant'
                  },
                  {
                    productName: 'Ель Перфекта',
                    productPrice: 199,
                    productLeft: 100,
                    productDescription: 'Ель Перфекта – низкорослая ель, с плотным расположением хвои. К 10 годам дерево достигает 1 метра в высоту. Такая ель не боится морозов – минимальная температура составляет -35 градусов. Расположить данную ель лучше в затемненной части участка, т.к. солнечные лучи обжигают ее. В процессе роста ели требуется умеренный полив, а также обрезка отцветших соцветий. При желании, можно вносить в почву удобрения, периодичность зависит от типа удобрений.\n',
                    productLatin: 'el-perfekta',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/01e/600_600_1/01e61fd32dc9ee0f96dd3a6cbcb44d26.jpeg',
                    productParentGroup: 'plant'
                  }
                ]
              },
              {
                subGroupListName: 'Вьющиеся и ампельные',
                productList: [
                  {
                    productName: 'Клематис Алёнушка',
                    productPrice: 199,
                    productLeft: 100,
                    productDescription: 'Клематис Алёнушка – многолетнее декоративное и оригинальное растение. Гибрид, травянистая лиана. Максимальная высота 150-200 см. Листовые пластины ярко-зеленые.\n',
                    productLatin: 'klematis_alyenushka_v_korobke_tso',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/724/600_600_1/7249cfdba0821bf702c92f8fe391f984.jpeg',
                    productParentGroup: 'plant'
                  },
                  {
                    productName: 'Вербена',
                    productPrice: 249,
                    productLeft: 100,
                    productDescription: 'Вербена – травянистый декоративный кустарник или полукустарник. Высота взрослого растения 1.5 м. Центральные стебли прямостоячие, боковые могут быть стелющимися. Листовые пластины зеленые, овальной формы. Цветки собраны в шаровидные соцветия или метелки. Их цвет зависит сорта.\n',
                    productLatin: 'verbena',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/47f/600_600_1/47f108969243c35485198256d80d28e9.jpeg',
                    productParentGroup: 'plant'
                  },
                  {
                    productName: 'Клематис Блю Лайт',
                    productPrice: 339,
                    productLeft: 100,
                    productDescription: 'Клематис Блю Лайт – многолетнее декоративное и оригинальное растение. Гибрид, травянистая лиана. Максимальная высота 150-200 см. Листовые пластины ярко-зеленые.\n',
                    productLatin: 'klematis_blyu_layt',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/acb/600_600_1/acbaf29514a1c0523ddfb82e97b20725.jpeg',
                    productParentGroup: 'plant'
                  },
                  {
                    productName: 'Ирис Голландский',
                    productPrice: 129,
                    productLeft: 100,
                    productDescription: 'Ирис (Іris) – красивое и неприхотливое растение. В зависимости от сорта растение достигает 1 м высоту. Цветы имеют различную форму и окрас. Продолжительность периода цветения с конца мая по июль. Ирис (Іris) предпочитает легкую супесчаную или суглинистую почву с нейтральной или слабокислой реакцией. Ирис теплолюбив. Высадка корневищ в открытый грунт производится весной и осенью. Место для посадки обязательно должно быть солнечным и защищенным от ветров. По окончанию цветения, а также осенью, полив ириса сокращают, во избежание загнивания корней.\n',
                    productLatin: 'iris-gollandskiy-blyu',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/840/600_600_1/84037b23cec87b998a95845d2ff9dd22.jpeg',
                    productParentGroup: 'plant',
                    productLeader: true
                  },
                  {
                    productName: 'Георгина Декоративная',
                    productPrice: 149,
                    productLeft: 100,
                    productDescription: 'Георгина (Dahlia) – красивое и неприхотливое растение, которое станет украшением Вашего сада. Продолжительность периода цветения с мая по октябрь. Георгина (Dahlia) к почве не привередлива, но предпочитает питательный и влажный грунт. Георгин теплолюбив, лучше растет на солнечном участке. Высадка клубней в открытый грунт производится поздней весной или ранним летом. Место для посадки обязательно должно быть ровным и защищено от ветров. В зависимости от сорта достигает 2 м высоту. Листья обычные, парные. Соцветия могут быть как махровыми, шаровидной формы, так и однорядные, немахровые.\n',
                    productLatin: 'georgina-dekorativnaya',
                    productImg: 'https://darvin-market.ru/upload/iblock/98b/98bde2d4738705063c9afa51083a438b.jpeg',
                    productParentGroup: 'plant',
                    productLeader: true
                  },
                  {
                    productName: 'Пион Бартзелла',
                    productPrice: 1999,
                    productLeft: 100,
                    productDescription: 'Пион - травянистый многолетник. Крупные одиночные цветки диаметром до 15—25 см. Большинство сортов очень ароматны. Пионы сажают в легкую рыхлую почву. Оптимальная кислотность почвы - нейтральная. Цветы предпочитают солнечное месторасположение, не терпят излишне влажную почву. Пионы прекрасно впишутся в сад любого стиля, будут радовать вас бурным цветением, невероятными расцветками и ароматами.\n',
                    productLatin: 'pion-bartzella',
                    productImg: 'https://darvin-market.ru/upload/iblock/fc5/fc5cef8005824ead8936b11c2651c0e7.jpeg',
                    productParentGroup: 'plant',
                    productLeader: true
                  }
                ]
              },
              {
                subGroupListName: 'Плодовые растения',
                productList: [
                  {
                    productName: 'Малина ремонтантная',
                    productPrice: 399,
                    productLeft: 100,
                    productDescription: 'Малина ремонтантная Химбо Топ - многолетний плодовый полукустарник. Сорт среднепозднего срока созревания. Максимальная высота растения 150 см. Ягода красного цвета, конической формы, весом 6-8 гр. Мякоть сочная, сладкая с небольшой кислинкой, ароматная. Урожайность с одного куста: 5 кг.\n',
                    productLatin: 'malina-remontantnaya',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/d6f/600_600_1/d6f4f42ec5f2f5d53687a7fd7f28fe88.jpeg',
                    productParentGroup: 'plant',
                    productLeader: true
                  },
                  {
                    productName: 'Жимолость Морена',
                    productPrice: 299,
                    productLeft: 100,
                    productDescription: 'Жимолость Морена – ранний сорт. Куст высокий и раскидистый, его высота и ширина достигает 1,5-1,7 метра. Плоды Морены ароматные и очень крупные (длина 2-3 см, масса 1-2 г). Форма ягоды удлиненная, внешне напоминает цилиндр. Вкус десертный кисло-сладкий, не горчит. Кожица у плода нежная, тонкая.\n',
                    productLatin: 'zhimolost-morena',
                    productImg: 'https://darvin-market.ru/upload/iblock/1c3/1c3725f6e7579140a1c319306b7a51fa.jpeg',
                    productParentGroup: 'plant',
                    productLeader: true
                  }
                ]
              }
            ]
          }
        ],
      },
      {
        groupName: 'Уход за растениями',
        groupNameEng: 'plantCare',
        subGroup: [
          {
            subGroupName: 'Грунт и торф',
            subGroupList: [
              {
                subGroupListName: 'Грунты универсальные',
                productList: [
                  {
                    productName: 'Грунт универсальный Фаско 5л',
                    productPrice: 55,
                    productLeft: 100,
                    productDescription: 'Грунт универсальный Фаско является экологически чистым грунтом, который полностью готов к эксплуатации. Основа благоприятной почвы состоит из качественного торфа с добавлением всех необходимых полезных элементов. Благодаря пропорциональному составу и балансу кислотности, грунт универсальный Фаско является оптимальной средой для активного роста растений. Высокая влаго- и воздухоемкость, и другие физические качества стимулируют прорастание семян, обеспечивают растения влагой, а также повышают их устойчивость к болезням!\n',
                    productLatin: 'grunt-universalnyy-fasko',
                    productImg: 'https://darvin-market.ru/upload/iblock/052/052fa162aebb522d3b3cae9ed1d43a9c.jpeg',
                    productParentGroup: 'plantCare'
                  },
                  {
                    productName: 'Грунт универсальный Матушка',
                    productPrice: 65,
                    productLeft: 100,
                    productDescription: 'Грунт универсальный Земля-Матушка является экологически чистым грунтом, который полностью готов к эксплуатации. Основа благоприятной почвы состоит из качественного торфа с добавлением всех необходимых полезных элементов. Благодаря пропорциональному составу и балансу кислотности, грунт универсальный Земля-Матушка является оптимальной средой для активного роста растений. Высокая влаго- и воздухоемкость, и другие физические качества стимулируют прорастание семян, обеспечивают растения влагой, а также повышают их устойчивость к болезням!\n',
                    productLatin: 'grunt-universalnyy-zemlya-matushka',
                    productImg: 'https://darvin-market.ru/upload/iblock/e10/e106eb79b887e3a4ff39354bc6a31a02.jpeg',
                    productParentGroup: 'plantCare'
                  },
                  {
                    productName: 'Грунт Огородник',
                    productPrice: 69,
                    productLeft: 100,
                    productDescription: 'Грунт Универсальный Огородник является экологически чистым грунтом, который полностью готов к эксплуатации. Благоприятная почва изготовлена на основе качественного торфа с добавлением всех необходимых полезных элементов. Благодаря пропорциональному составу и балансу кислотности, грунт Универсальный Огородник является оптимальной средой для активного роста растений. Высокая влаго- и воздухоемкость, и другие физические качества стимулируют прорастание семян, обеспечивают растения влагой, а также повышают их устойчивость к болезням!\n',
                    productLatin: 'grunt-universalnyy-ogorodnik',
                    productImg: 'https://darvin-market.ru/upload/iblock/bdf/bdf3ab05575ef22c094adea935e5d699.jpeg',
                    productParentGroup: 'plantCare'
                  }
                ]
              },
              {
                subGroupListName: 'Грунты специализированные',
                productList: [
                  {
                    productName: 'Субстрат для кактусов 0,5л',
                    productPrice: 35,
                    productLeft: 100,
                    productDescription: 'Субстрат для кактусов Сады Аурики - готовая к применению почвенная смесь на основе органических компонентов. Содержит набор питательных веществ, необходимых для полноценного роста и развития кактусов. Используется для мульчирования почвы, повышения почвенного плодородия. Благодаря высоким показателям влаго- и воздухоемкости, данный субстрат отлично способствует сопротивляемости растений к увяданию. Стоит отметить, что в составе органического вещества отсутствуют вредители и сорняки. Поэтому, субстрат Сады Аурики активно применяется для посадки суккулентов, кактусов, литопсов.\n',
                    productLatin: 'substrat-dlya-kaktusov-sady-auriki',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/691/600_600_1/6910e3c9d4682c050fec23624dd8312e.jpeg',
                    productParentGroup: 'plantCare'
                  },
                  {
                    productName: 'Грунт для цветов 2,5л',
                    productPrice: 45,
                    productLeft: 100,
                    productDescription: 'Грунт для цветов Фаско Цветочный является экологически чистым и питательным грунтом, который полностью готов к эксплуатации. Основа благоприятной почвы состоит из качественного торфа с добавлением всех необходимых минеральных удобрений. Благодаря пропорциональному и особому составу, данный грунт способен обеспечить здоровый и активный рост растениям, стимулировать прорастание семян, а также повысит их устойчивость к болезням!\n',
                    productLatin: 'grunt-dlya-tsvetov-fasko-tsvetochnyy',
                    productImg: 'https://darvin-market.ru/upload/iblock/f03/f031ad83e648ef5137f526a9f1bb93c6.jpeg',
                    productParentGroup: 'plantCare'
                  },
                  {
                    productName: 'Субстрат для фиалки 1л',
                    productPrice: 45,
                    productLeft: 100,
                    productDescription: 'Субстрат для фиалки Сады Аурики - готовая к применению почвенная смесь на основе органических компонентов. Содержит набор питательных веществ, необходимых для полноценного роста и развития растений. Используется для мульчирования почвы, повышения почвенного плодородия. Благодаря высоким показателям влаго- и воздухоемкости, данный субстрат отлично способствует сопротивляемости растений к увяданию. Стоит отметить, что в составе органического вещества отсутствуют вредители и сорняки. Поэтому, субстрат Сады Аурики активно применяется для посадки или пересадки растений, таких как фиалки глоксиний, стрептокарпусов, эсхинантусов.\n',
                    productLatin: 'substrat-dlya-fialki-sady-auriki',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/9db/600_600_1/9db1c6ed074ebff20c4eb8dcd315c0cd.jpeg',
                    productParentGroup: 'plantCare'
                  }
                ]
              },
              {
                subGroupListName: 'Керамзит, субстраты',
                productList: [
                  {
                    productName: 'Агроперлит Цветочное счастье',
                    productPrice: 28,
                    productLeft: 100,
                    productDescription: 'Агроперлит Цветочное счастье – минеральная добавка для почвенных смесей, получаемая из перлита ― горной вулканической породы. Одна из главных особенностей данного материала заключается в экологической безопасности для людей, животных и растений. Агроперлит представляет собой пористый, сыпучий, легкий, и долговечный материал, который применяют в агропромышленной сфере, растениеводстве. Агроперлит обогащает питательными веществами, поддерживает оптимально комфортный влагоемкий и воздухопроницаемый режим почвы. Также предназначен для посадки, пересадки всех видов растений, кустарников и деревьев. Сделает почву рыхлой и поспособствует развитию здоровой корневой системы.\n',
                    productLatin: 'agroperlit-tsvetochnoe-schaste',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/aa2/600_600_1/aa2b8b7c447d3aa1a1847fbadb793219.jpeg',
                    productParentGroup: 'plantCare'
                  },
                  {
                    productName: 'Дренаж Фаско мелкий',
                    productPrice: 29,
                    productLeft: 100,
                    productDescription: 'Мелкий дренаж Фаско «Цветочное счастье» - легкий в использовании, натуральный материал для выращивания различных растительных культур внутри помещений. Позволяет поддерживать оптимальный водно-воздушный режим. Обогащен питательными микроэлементами, стимулирует здоровый рост и развитие растений даже в зимнее время. Процентное соотношение дренажа к грунту варьируется в зависимости от вида растения.\n',
                    productLatin: 'drenazh-fasko-tsvetochnoe-schaste-melkiy',
                    productImg: 'https://darvin-market.ru/upload/iblock/153/153c9af9d8b5a61af00a6731f270bbd2.jpeg',
                    productParentGroup: 'plantCare'
                  },
                  {
                    productName: 'Дренаж Фаско крупный',
                    productPrice: 29,
                    productLeft: 100,
                    productDescription: 'Крупный дренаж Фаско «Цветочное счастье» - легкий в использовании, натуральный материал для выращивания различных растительных культур внутри помещений. Позволяет поддерживать оптимальный водно-воздушный режим. Обогащен питательными микроэлементами, стимулирует здоровый рост и развитие растений даже в зимнее время. Процентное соотношение дренажа к грунту варьируется в зависимости от вида растения.\n',
                    productLatin: 'drenazh-fasko-tsvetochnoe-schaste-krupnyy',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/9ab/600_600_1/9ab12c0aee9de19ab049ae24a302fe55.jpeg',
                    productParentGroup: 'plantCare'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        groupName: 'Инструмент, инвентарь',
        groupNameEng: 'inventory',
        subGroup: [
          {
            subGroupName: 'Садовый инструмент',
            subGroupList: [
              {
                subGroupListName: 'Лопаты',
                productList: [
                  {
                    productName: 'Совок металл с ручкой',
                    productPrice: 139,
                    productLeft: 100,
                    productDescription: 'Совок металл для мусора с ручкой',
                    productLatin: 'sovok-metall-dlya-musora-s-ruchkoy',
                    productImg: 'https://darvin-market.ru/upload/iblock/c77/c77491db24678c9aa14906bab9c0dfa5.jpeg',
                    productParentGroup: 'inventory'
                  },
                  {
                    productName: 'Лопата совковая с черенком',
                    productPrice: 239,
                    productLeft: 100,
                    productDescription: 'Лопата совковая ЛСП с черенком предназначена для строительных и садовых работ. Совковая часть выполнена из стали и покрыта порошковой краской, что обеспечивает устойчивость к коррозии. Инструмент подойдет для работы с песком, бетоном, щебнем и т.д. Черенок из прочного дерева позволяет работать с комфортом.',
                    productLatin: 'lopata-sovkovaya-s-cherenkom',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/94f/600_600_1/94fb3e76ee913cf28f5ab4da18ddaedf.jpeg',
                    productParentGroup: 'inventory'
                  },
                  {
                    productName: 'Лопата штыковая без черенка',
                    productPrice: 249,
                    productLeft: 100,
                    productDescription: 'Лопата штыковая без черенка ЛКО— нержавеющее изделие, без черенка, предназначенное для различной работы с грунтами и сыпучими грузами. Рабочее полотно лопаты из рельсовой стали, которая характеризуются высокой прочностью, это облегчает работу с тяжелым грунтом и значительно повышает эффективность и удобство использования. Данная модель с лаковым покрытием, продлевающая срок эксплуатации инструмента.\n',
                    productLatin: 'lopata-shtykovaya-bez-cherenka',
                    productImg: 'https://darvin-market.ru/upload/iblock/a09/a09e9c6d91ea738bcc3fc1efa2edce21.jpeg',
                    productParentGroup: 'inventory'
                  }
                ]
              },
              {
                subGroupListName: 'Грабли',
                productList: [
                  {
                    productName: 'Грабли Г-6 с ручкой',
                    productPrice: 109,
                    productLeft: 100,
                    productDescription: 'Грабли Г-6 с ручкой – инструмент для сезонной уборки на садовом участке. Грабли, с короткой деревянной рукояткой, рабочая часть выполнена из металла. С их помощью можно быстро и без труда обработать, разрыхлить и выровнять почву на клумбах и грядках. Удалить и очистить выкопанные корни сорных трав, распределить дерн. Грабли позволяют быстро и качественно провести работы в труднодоступных местах. Инструмент легкий, удобный в использовании и обеспечивает длительную эффективную работу.\n',
                    productLatin: 'grabli-g-6-s-ruchkoy',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/403/600_600_1/403c4af3115ad89d2e7c547c6833c3bc.jpeg',
                    productParentGroup: 'inventory'
                  },
                  {
                    productName: 'Грабли с пластиковой ручкой',
                    productPrice: 139,
                    productLeft: 100,
                    productDescription: 'Грабли с пластиковой ручкой,арт.67-274',
                    productLatin: 'grabli-s-plastikovoy-ruchkoy',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/a07/600_600_1/a077ea5684591750d28a250b1133011d.jpeg',
                    productParentGroup: 'inventory'
                  },
                  {
                    productName: 'Грабли с пластиковой ручкой',
                    productPrice: 139,
                    productLeft: 100,
                    productDescription: 'Грабли с пластиковой ручкой весенние, арт.67-275',
                    productLatin: 'grabli-s-plastikovoy-ruchkoy-vesennie',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/c3d/600_600_1/c3d72f4df3fa491cc3f125109b1587cd.jpeg',
                    productParentGroup: 'inventory'
                  }
                ]
              },
              {
                subGroupListName: 'Топоры и пилы',
                productList: [
                  {
                    productName: 'Топор Унитраум ',
                    productPrice: 1290,
                    productLeft: 100,
                    productDescription: 'Топор Унитраум тефлоновое покрытие — универсальный инструмент, который станет незаменимым помощником для работы дома, в саду и для похода. Орудие изготовлено из качественной стали, отличающейся долговечностью, прочностью и устойчивостью к непогоде. Топорище изготовлено из прочного материала с тефлоновым покрытием. Благодаря небольшому весу и сбалансированности, работать с инструментом удобно одной рукой. При этом, антифрикционное покрытие лезвия предотвращает его застревание в породе дерева и позволяет эффективно колоть поленья, рубить небольшие деревья, а также помогает при столярных и плотницких работах.\n',
                    productLatin: 'topor-unitraum-teflonovoe-pokrytieie',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/739/600_600_1/7397b6564223077646760b638bae7872.jpeg',
                    productParentGroup: 'inventory'
                  },
                  {
                    productName: 'Ножовка садовая',
                    productPrice: 259,
                    productLeft: 100,
                    productDescription: 'Ножовка садовая 300мм 93023',
                    productLatin: 'nozhovka-sadovaya',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/2ea/600_600_1/2ea2e0eba1a4bfae9a24bef7330444b2.jpeg',
                    productParentGroup: 'inventory'
                  },
                  {
                    productName: 'Пила садовая Феона складная',
                    productPrice: 749,
                    productLeft: 100,
                    productDescription: 'Пила садовая Феона складная 390мм',
                    productLatin: 'pila-sadovaya-feona-skladnaya',
                    productImg: 'https://darvin-market.ru/upload/resize_cache/iblock/9bc/600_600_1/9bcd123499c2e2ca32736d425aadf914.jpeg',
                    productParentGroup: 'inventory'
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    cart: cart ? JSON.parse(cart) : [], //проверяем нет ли чего-нибудь в localstorage. Если есть - запихиваем эту инфу в массив cart
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    CART(state){
      return state.cart;
    },
    GET_PRODUCT_LIST(state){
      let result = [];
      for (let i = 0; i < state.products.length; i++){
        let subGroupArr = state.products[i].subGroup;
        for(let j = 0; j < subGroupArr.length; j++){
          let subGroupListArr = subGroupArr[j].subGroupList;
          for (let k = 0; k < subGroupListArr.length; k++) {
            let allProducts = subGroupListArr[k].productList;
            for (let g = 0; g < allProducts.length; g++){
              result.push(allProducts[g])
            }
          }
        }
      }
      return result;
    },

    GET_CART_TOTAL(state){
      let result = 0;
      state.cart.forEach(e => result +=(e.productPrice * e.productCount));
      return result;
    }
  },
  mutations: {
    SET_CART: (state, product) => {
      if(state.cart.length){
        let isProductExistts = false;
        state.cart.map(function (item){
          if (item.productLatin === product.productLatin){
            isProductExistts = true;
            item.productCount++;
          }
        })
        if(!isProductExistts){
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) =>{
      state.cart.splice(index, 1);
    },
    SAVE_CART_TO_LOCALSTORAGE(state) { //сохраняем инфу в локалсторедж
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  actions: {
    ADD_TO_CART({commit}, product){
      commit('SET_CART', product);
      commit('SAVE_CART_TO_LOCALSTORAGE');
    },
    DELETE_FROM_CART({commit}, index){
      commit('REMOVE_FROM_CART', index);
      commit('SAVE_CART_TO_LOCALSTORAGE');
    },
    GET_CURRENT_PRODUCT(){
      return this.GET_PRODUCT_LIST.find(e => e.productLatin === this.productId);
    },
    DELETE_FROM_CART_IF_COUNT_0({commit}, index){
      if(!this.state.cart[index].productCount){
        commit('REMOVE_FROM_CART', index);
        commit('SAVE_CART_TO_LOCALSTORAGE');
      }
    },
    SET_INFO_IN_LOCALSTORAGE({commit}){ //нужен для использования на странице корзины
      commit('SAVE_CART_TO_LOCALSTORAGE');
    }
  },
  modules: {
  }
})

export default store;