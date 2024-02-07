<template>
<div>
    <header class="bg-cl-secondary spc py35 pl20 category_header bag-img bag-img-mob ">
      <div class="cstm-page-layout">
        <breadcrumbs />
        <div class="row middle-sm">
          <h1 class="col-sm-8 category-title mb10">
            {{ getCurrentCategory.name }}
          </h1>
        </div>
      </div>
    </header>
    <div class="cstm-page-layout pb60 product_collection_flw">
      <div class="row m0 pt15">

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
        <div class="col-md-12 px10 border-box products-list collection-product">
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
    //   getCurrentCategory: 'category-next/getCurrentCategory',
      getCategoryProductsTotal: 'category-next/getCategoryProductsTotal',
      getAvailableFilters: 'category-next/getAvailableFilters'
    }),
    getCurrentCategory () {
        const categoryId = 3;
        const categories = this.$store.getters['category-next/getCategories'];
        console.log('All Categories:', categories);

        // Recursive function to search for a category by ID in nested children_data
        const findCategoryById = (categories, categoryId) => {
        for (const category of categories) {
            if (category.id === categoryId) {
            return category;
            }
            if (category.children_data && category.children_data.length > 0) {
            const foundInChildren = findCategoryById(category.children_data, categoryId);
            if (foundInChildren) {
                return foundInChildren;
            }
            }
        }
        return null;
        };

        const selectedCategory = findCategoryById(categories, categoryId);
        console.log('Selected Category:', selectedCategory);

        return selectedCategory || {};
    },
    isLazyHydrateEnabled () {
      return config.ssr.lazyHydrateFor.includes('category-next.products');
    },
    isCategoryEmpty () {
      return this.getCategoryProductsTotal === 0;
    }
  },
  async asyncData ({ store, route, context }) {
    if (context) context.output.cacheTags.add('category');
    await composeInitialPageState(store, route);
    console.log('Fetched Category:', store.getters['category-next/getCurrentCategory']);
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