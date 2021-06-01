<template>
  <div class="delivery padding">
    <h1>Доставка</h1>
    <p>По Москве и МО, доставка осуществляется силами собственного автопарка компании или ТК СДЭК</p>
    <p>Стоимость подъема, выгрузки и проноса на этаж к Клиенту (разгрузка в комнату на выбор, пронос товара не более 20м)</p>

    <table class="delivery__table" border="1">
      <tr>
        <th>Вес</th>
        <th>Тариф</th>
      </tr>
      <tr>
        <td>Подъем / Пронос до 15 кг</td>
        <td>бесплатно</td>
      </tr>
      <tr>
        <td>Подъем по лестнице каждые 15 кг /1 этаж</td>
        <td>100 руб.</td>
      </tr>
      <tr>
        <td>Подъем на лифте каждые 15 кг</td>
        <td>200 руб.</td>
      </tr>
      <tr>
        <td>За каждые последующие 15 кг / 20 м</td>
        <td>100 руб.</td>
      </tr>
      <tr>
        <td>Разгрузка грунтов и газонов более 200 кг</td>
        <td>100 руб. за каждые 100 кг.</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Delivery"
}
</script>

<style lang="sass">
.delivery
  &__table
    width: 100%
    & td
      padding: 10px
</style>