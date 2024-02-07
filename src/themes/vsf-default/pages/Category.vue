<template>
  <div id="category" >


    <header class="bg-cl-secondary spc py35 pl20 category_header bag-img bag-img-mob ">
      <div class="cstm-page-layout">
        <breadcrumbs />
        <div class="row middle-sm">
          <h1 class="col-sm-8 category-title mb10">
            {{ getCurrentCategory.name }}
          </h1>
        </div>
      </div>

      <!-- <div class="cstm-page-layout">
        <div class="row m0">
          <button
            class="col-xs-5 mt25 mr15 p15 mobile-filters-button bg-cl-th-accent brdr-none cl-white h5 sans-serif fs-medium-small"
            @click="openFilters"
          >
            {{ $t('Filters') }}
          </button>
          <div class="mobile-sorting col-xs-6 mt25">
            <sort-by
              @change="changeFilter"
              :value="getCurrentSearchQuery.sort"
            />
          </div>
        </div>
      </div> -->


    </header>

    <div class="cstm-page-layout pb60 product_collection_flw">
      <div class="row m0 pt15">
        <div class="col-md-3 start-xs category-filters">
          <sidebar :filters="getAvailableFilters" @changeFilter="changeFilter" />
        </div>
        <div class="col-md-3 start-xs mobile-filters" v-show="mobileFilters">
          <div class="close-container absolute w-100">
            <i class="material-icons p15 close cl-accent" @click="closeFilters">close</i>
          </div>
          <sidebar class="mobile-filters-body" :filters="getAvailableFilters" @changeFilter="changeFilter" />
          <div class="relative pb20 pt15">
            <div class="brdr-top-1 brdr-cl-primary absolute divider w-100" />
          </div>
          <button-full
            class="mb20 btn__filter"
            @click.native="closeFilters"
          >
            {{ $t('Filter') }}
          </button-full>
        </div>
        <div class="col-md-12 px10 border-box products-list">
          <!-- <p class="col-xs-12 end-md m0 pb20 cl-secondary">
            {{ $t('{count} items', { count: getCategoryProductsTotal }) }}
          </p> -->
          <div v-if="isCategoryEmpty" class="hidden-xs">
            <h4 data-testid="noProductsInfo">
              {{ $t('No products found!') }}
            </h4>
            <p>{{ $t('Please change Your search criteria and try again. If still not finding anything relevant, please visit the Home page and try out some of our bestsellers!') }}</p>
          </div>
          <lazy-hydrate :trigger-hydration="!loading" v-if="isLazyHydrateEnabled">
        <!-- Pass category ID to ProductListing component -->
        <product-listing :columns="defaultColumn" :products="getCategoryProducts" :categoryid="getCurrentCategory.id" />
      </lazy-hydrate>
      <product-listing v-else :columns="defaultColumn" :products="getCategoryProducts" :categoryid="getCurrentCategory.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import Sidebar from '../components/core/blocks/Category/Sidebar.vue'
import ProductListing from '../components/core/ProductListing.vue'
import Breadcrumbs from '../components/core/Breadcrumbs.vue'
import SortBy from '../components/core/SortBy.vue'
import { isServer } from '@vue-storefront/core/helpers'
import { Logger } from '@vue-storefront/core/lib/logger'
import { getSearchOptionsFromRouteParams } from '@vue-storefront/core/modules/catalog-next/helpers/categoryHelpers'
import config from 'config'
import Columns from '../components/core/Columns.vue'
import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import { mapGetters } from 'vuex'
import onBottomScroll from '@vue-storefront/core/mixins/onBottomScroll'
import rootStore from '@vue-storefront/core/store';
import { catalogHooksExecutors } from '@vue-storefront/core/modules/catalog-next/hooks'
import { localizedRoute, currentStoreView } from '@vue-storefront/core/lib/multistore'
import { htmlDecode } from '@vue-storefront/core/filters'

const THEME_PAGE_SIZE = 50

const composeInitialPageState = async (store, route, forceLoad = false) => {
  try {
    const filters = getSearchOptionsFromRouteParams(route.params)
    const cachedCategory = store.getters['category-next/getCategoryFrom'](route.path)
    const currentCategory = cachedCategory && !forceLoad ? cachedCategory : await store.dispatch('category-next/loadCategory', { filters })
    const pageSize = store.getters['url/isBackRoute'] ? store.getters['url/getCurrentRoute'].categoryPageSize : THEME_PAGE_SIZE
    await store.dispatch('category-next/loadCategoryProducts', { route, category: currentCategory, pageSize })
    const breadCrumbsLoader = store.dispatch('category-next/loadCategoryBreadcrumbs', { category: currentCategory, currentRouteName: currentCategory.name, omitCurrent: true })

    if (isServer) await breadCrumbsLoader
    catalogHooksExecutors.categoryPageVisited(currentCategory)
  } catch (e) {
    Logger.error('Problem with setting Category initial data!', 'category', e)()
  }
}

export default {
  components: {
    LazyHydrate,
    ButtonFull,
    ProductListing,
    Breadcrumbs,
    Sidebar,
    SortBy,
    Columns
  },
  mixins: [onBottomScroll],
  data () {
    return {
      mobileFilters: false,
      defaultColumn: 3,
      loadingProducts: false,
      loading: true
    }
  },
  computed: {
    ...mapGetters({
      getCurrentSearchQuery: 'category-next/getCurrentSearchQuery',
      getCategoryProducts: 'category-next/getCategoryProducts',
      getCurrentCategory: 'category-next/getCurrentCategory',
      getCategoryProductsTotal: 'category-next/getCategoryProductsTotal',
      getAvailableFilters: 'category-next/getAvailableFilters'
    }),
    isLazyHydrateEnabled () {
      return config.ssr.lazyHydrateFor.includes('category-next.products');
    },
    isCategoryEmpty () {
      return this.getCategoryProductsTotal === 0;
    }
  },
  async asyncData ({ store, route, context }) { // this is for SSR purposes to prefetch data - and it's always executed before parent component methods
    if (context) context.output.cacheTags.add('category')
    await composeInitialPageState(store, route)
  },
  async beforeRouteEnter (to, from, next) {
    if (isServer) next() // SSR no need to invoke SW caching here
    else if (!from.name) { // SSR but client side invocation, we need to cache products and invoke requests from asyncData for offline support
      next(async vm => {
        vm.loading = true
        await composeInitialPageState(vm.$store, to, true)
        await vm.$store.dispatch('category-next/cacheProducts', { route: to }) // await here is because we must wait for the hydration
        vm.loading = false
      })
    } else { // Pure CSR, with no initial category state
      next(async vm => {
        vm.loading = true
        vm.$store.dispatch('category-next/cacheProducts', { route: to })
        vm.loading = false
      })
    }
  },
  methods: {
    openFilters () {
      this.mobileFilters = true
    },
    closeFilters () {
      this.mobileFilters = false
    },
    async changeFilter (filterVariant) {
      this.$store.dispatch('category-next/switchSearchFilters', [filterVariant])
    },
    columnChange (column) {
      this.defaultColumn = column
    },
    async onBottomScroll () {
      if (this.loadingProducts) return
      this.loadingProducts = true
      try {
        await this.$store.dispatch('category-next/loadMoreCategoryProducts')
      } catch (e) {
        Logger.error('Problem with fetching more products', 'category', e)()
      } finally {
        this.loadingProducts = false
      }
    }
  },
  metaInfo () {
    const storeView = currentStoreView()
    const { meta_title, meta_description, name, slug } = this.getCurrentCategory
    const meta = meta_description ? [
      { vmid: 'description', name: 'description', content: htmlDecode(meta_description) }
    ] : []
    /* const categoryLocaliedLink = localizedRoute({
      name: 'category-amp',
      params: { slug }
    }, storeView.storeCode)
    const ampCategoryLink = this.$router.resolve(categoryLocaliedLink).href */

    return {
      // link: [ { rel: 'amphtml', href: ampCategoryLink } ],
      title: htmlDecode(meta_title || name),
      meta
    }
  }
}
</script>

<style lang="scss" scoped>
.product_collection_flw {
    height: 100vh;
    padding-left: 26px;
}
.pb60{
  padding-top: 80px;
  padding-bottom: 80px;
}
  .btn {
    &__filter {
      min-width: 100px;
    }
  }
  .divider {
    width: calc(100vw - 8px);
    bottom: 20px;
    left: -36px;
  }
  .category-filters {
    width: 242px;
    display: none;
  }

  .mobile-filters {
    display: none;
    overflow: auto;
  }

  .mobile-filters-button {
    display: none;
  }

  .mobile-sorting {
    display: none;
  }

  .category-title {
    line-height: 65px;
  }

  .sorting {
    label {
      margin-right: 10px;
    }
  }

  .bag-img{
    background-image: url('../assets/home/background-img.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 770px) {
    .category-title {
      margin: 0;
      font-size: 25px;
      line-height: 40px;
    }
    .prd_lst_col {
        margin-bottom: 20px;
    }
    .products-list {
      width: 100%;
      max-width: none;
    }

    .mobile-filters {
      display: block;
    }

    .mobile-filters-button {
      display: block;
      height: 45px;
    }

    .sorting {
      display: none;
    }

    .mobile-sorting {
      display: block;
    }

    .category-filters {
      display: none;
    }

    .product-listing {
      justify-content: center;;
    }

    .mobile-filters {
      position: fixed;
      background-color: #F2F2F2;
      z-index: 5;
      padding: 0 40px;
      left: 0;
      width: 100vw;
      height: 100vh;
      top: 0;
      box-sizing: border-box;
    }

    .mobile-filters-body {
      padding-top: 50px;
    }
  }

  .close-container {
    left: 0;
  }

  .close {
    margin-left: auto;
  }
</style>
<style lang="scss">

.bg-cl-secondary.spc{
    padding: 15px;
}

.category_header {
    padding-top: 150px !important;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 992px) {

  .pb60 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }   
  .product-listing {
    justify-content: unset !important;
  }

}
@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {

  .prd_lst_col {
    margin-bottom: 25px;
  }

}
@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .prd_lst_col {
    margin-bottom: 30px;
  }
  .product_collection_flw {
    height: auto !important;
  }
    .bag-img{
      background-image: url('/assets/collection/collection_mob_bg.png') !important;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .category_header {
    padding-top: 25px !important;
    height: 60px;
    margin-top: 71px;
    }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1200px) {
  .category-title{
    line-height: 0 !important;
    margin-top: 35px !important;
  }
  .category_header {
    padding-top: 80px !important;
  }
}
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) {
  .category-title{
    line-height: 0 !important;
    margin-top: 35px !important;
  }
  .category_header {
    padding-top: 106px !important;
    padding-left: 40px !important;
  }
}

</style>
