<template>
  <section
    class="py20 new-collection cstm-page-layout px15 related_prd_div"
    v-if="getCurrentRelatedProducts.length"
  >
    <div>
      <header class="col-md-12">
        <h2 class="align-center cl-accent related_heading">
          {{ heading }}
        </h2>
      </header>
    </div>
    <product-listing columns="4" :products="getCurrentRelatedProducts" />
  </section>
</template>

<script>
import ProductListing from 'theme/components/core/ProductListing'
import { mapGetters } from 'vuex'
import { prepareRelatedQuery } from '@vue-storefront/core/modules/catalog/queries/related'
import i18n from '@vue-storefront/i18n'
import config from 'config'

export default {
  name: 'Related',
  props: {
    type: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: false,
      default: i18n.t('Do not miss these Collections')
    }
  },
  components: {
    ProductListing
  },
  beforeMount () {
    this.$bus.$on('product-after-load', this.refreshList)

    if (config.usePriceTiers) {
      this.$bus.$on('user-after-loggedin', this.refreshList)
      this.$bus.$on('user-after-logout', this.refreshList)
    }

    this.refreshList()
  },
  beforeDestroy () {
    if (config.usePriceTiers) {
      this.$bus.$off('user-after-loggedin', this.refreshList)
      this.$bus.$off('user-after-logout', this.refreshList)
    }
  },
  destroyed () {
    this.$bus.$off('product-after-load', this.refreshList)
  },
  methods: {
    async refreshList () {
      let sku = this.productLinks ? this.productLinks
        .filter(pl => pl.link_type === this.type)
        .map(pl => pl.linked_product_sku) : null

      let key = 'sku'
      if (sku === null || (sku.length === 0)) {
        sku = this.getCurrentProduct.category_ids
        key = 'category_ids'
      }
      let relatedProductsQuery = prepareRelatedQuery(key, sku)

      const { items } = await this.$store.dispatch('product/findProducts', {
        query: relatedProductsQuery,
        size: 8,
        options: {
          populateRequestCacheTags: false,
          prefetchGroupProducts: false
        }
      })
      if (items.length) {
        this.$store.dispatch('product/related', {
          key: this.type,
          items: items
        })
        this.$forceUpdate()
      }
    }
  },
  computed: {
    ...mapGetters({
      getProductRelated: 'product/getProductRelated',
      getCurrentProduct: 'product/getCurrentProduct'
    }),
    getCurrentRelatedProducts () {
      return this.getProductRelated[this.type] || []
    },
    productLinks () {
      return this.getCurrentProduct.product_links
    }
  }
}
</script>
<style scoped>
.cl-accent{
  color: #000;
}
.related_prd_div {
  margin-top: 45px;
}
.cl-accent.related_heading {
   color: #302A2A;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: end !important;
    border: 1px solid #C1C1C1;
    width: fit-content;
    padding: 8px 40px;
    margin-bottom: 44px;
}
.related_prd_div{
  padding-top: 50px;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){

  .related_prd_div {
    margin-bottom: 0;
    margin-top: 0;
  }

}
@media only screen and (min-device-width: 320px) and (max-device-width: 767px){
  .related_heading {
    text-align: left;
    font-size: 20px !important;
  }
}
</style>