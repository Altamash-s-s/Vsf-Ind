<template>
  <div class="product-listing row m0 center-xs start-md">
    <div
      v-for="(product, key) in products"
      :key="product.id"
      class="col-sm-6 flex prd_lst_col col-xs-12p col-md-4 col-lg-3 recent-view-product"
      
    >
      <product-tile :product="product" :cateId="categoryid" />

    </div>
  </div>
</template>

<script>
import ProductTile from 'theme/components/core/ProductTile'
let lastHero = 0

export default {
  name: 'ProductListing',
  components: {
    ProductTile
  },
  props: {
    products: {
      type: null,
      required: true
    },
    columns: {
      type: [Number, String],
      required: true
    },
    categoryid: {
      type: Number,
      required: false
    }
  },
  methods: {
    wide(isOnSale, isNew, index) {
      let deltaCondition = index > 0 && ((index - 1) - lastHero) % 2 === 0
      let isHero = ((isOnSale === '1' || isNew === '1') && deltaCondition) || (index === this.products.length - 1 && (index - lastHero) % 2 !== 0)
      if (isHero) {
        lastHero = index
      }
      console.log(`Product Category ID: ${this.products[index].category_id}`);
      console.log(`Show Product: ${this.products[index].category_id === 16}`);
      return isHero ? 'col-xs-12' : 'col-xs-6'
    }
  }
}
</script>

<style>
.product-listing {
  margin: 50px 0px 30px 0px;
}
.recent-view-product{
  margin-bottom: 50px;
}
</style>
