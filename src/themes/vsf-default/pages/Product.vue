<template>
  <div id="product" ref="productContainer">
    <div class="top_product_video">
    <video class="product_video_desk " playsinline autoplay muted loop>
      <source :src="getCurrentProduct.product_video" type="video/mp4">
    </video>
    <video class="product_video_desk_mob" playsinline autoplay muted loop>
      <source :src="getCurrentProduct.product_closeup_mob_video" type="video/mp4">
    </video>
    </div>

    <section class="bg-cl-secondary px20 product-top-section">
      <div class="container product_container">
        <section class="row m0">
          <div class="col-xs-12 col-md-6 center-xs middle-xs image img_slider_col">
            <product-gallery :offline="getOfflineImage" :gallery="getProductGallery"
              :configuration="getCurrentProductConfiguration" :product="getCurrentProduct"
              :prd_video="getCurrentProduct.product_closeup_video" />
          </div>

          <div class="col-xs-12 col-md-5 data prd_detail_col">

            <div class="prd_dtls_inner">
              <!-- <breadcrumbs
                class="pt40 pb20 hidden-xs"
              /> -->
              <h1 class="mb20 mt0 cl-mine-shaft product-name" data-testid="productName">
                {{ getCurrentProduct.name | htmlDecode }}
                <web-share :title="getCurrentProduct.name | htmlDecode" text="Check this product!" class="web-share" />

                <AddToWishlist :product="getCurrentProduct" class="wishlist_cstm" />

              </h1>

              <div class="mb20 uppercase cl-secondary sku_cstm" :content="getCurrentProduct.sku">
                {{ $t('SKU: {sku}', { sku: getCurrentProduct.sku }) }}

                <!-- <div class="zaid" v-html="getCurrentProduct.size_guide"></div>  -->
              </div>
              <div>
                <product-price class="mb40 price-cstm" v-if="getCurrentProduct.type_id !== 'grouped'"
                  :product="getCurrentProduct" :custom-options="getCurrentCustomOptions" />
                <div class="short-description" v-html="getCurrentProduct.short_description"> </div>
                <div class="cl-primary variants" v-if="getCurrentProduct.type_id == 'configurable'">
                  <div class="error" v-if="getCurrentProduct.errors && Object.keys(getCurrentProduct.errors).length > 0">
                    {{ getCurrentProduct.errors | formatProductMessages }}
                  </div>
                  <div class="h5" v-for="option in getProductOptions" :key="option.id">
                    <div class="variants-label" data-testid="variantsLabel">
                    </div>

                    <div class="row top-xs m0 pt15 pb40 variants-wrapper cstm_size">
                      <div v-if="option.label == 'Color'" class="color-bt-border prd_color">
                        <color-selector v-for="filter in getAvailableFilters[option.attribute_code]" :key="filter.id"
                          :variant="filter" :selected-filters="getSelectedFilters" @change="changeFilter"
                          class='color_button' />
                        <div class="variants-label" data-testid="variantsLabel">
                          <span  v-if="option.label === 'Color'" class="weight-700 color_text">
                            {{ getDisplayNameByColorCode(getOptionLabel(option)) }}
                          </span>
                          

                        </div>

                      </div>



                      <div class="sizes" v-else-if="option.label == 'Size'">
                        <size-selector class="mr10 mb10" v-for="filter in getAvailableFilters[option.attribute_code]"
                          :key="filter.id" :variant="filter" :selected-filters="getSelectedFilters"
                          @change="changeFilter" />
                      </div>
                      <div :class="option.attribute_code" v-else>
                        <generic-selector class="mr10 mb10" v-for="filter in getAvailableFilters[option.attribute_code]"
                          :key="filter.id" :variant="filter" :selected-filters="getSelectedFilters"
                          @change="changeFilter" />
                      </div>

                    </div>



                    

                  </div>
                </div>

              </div>
              <product-links v-if="getCurrentProduct.type_id == 'grouped'" :products="getCurrentProduct.product_links" />
              <product-bundle-options
                v-if="getCurrentProduct.bundle_options && getCurrentProduct.bundle_options.length > 0"
                :product="getCurrentProduct" />
              <product-custom-options
                v-else-if="getCurrentProduct.custom_options && getCurrentProduct.custom_options.length > 0"
                :product="getCurrentProduct" />
              <!-- <product-quantity
                class="row m0 mb35"
                v-if="getCurrentProduct.type_id !== 'grouped' && getCurrentProduct.type_id !== 'bundle'"
                v-model="getCurrentProduct.qty"
                :max-quantity="maxQuantity"
                :loading="isStockInfoLoading"
                :is-simple-or-configurable="isSimpleOrConfigurable"
                :show-quantity="manageQuantity"
                :check-max-quantity="manageQuantity"
                @error="handleQuantityError"
              /> -->

              <div class="size-part">
                  <i class="pr5 material-icons size-guide-icon">accessibility</i>
                  <button id="size_btn">Size Guide</button>
                  <div id="size_container">
                    <img class="size_icon" src="../assets/icons/size-guide.png">
                    <h3 class="size-heading">Size Guide</h3>
                    <p class="size-para">Human Abstract helps you find your perfect fit.</p>
                    <div class="size_border-btm"></div>
                    <button class="popup-cancel" id="size-close-btn">&#10005;</button>
                    <!-- <div class="size-title" v-html="getCurrentProduct.name"></div>  -->
                    <div v-html="getCurrentProduct.size_guide"></div>
                  </div>
                </div>

              <div class="row m0">
                <add-to-cart :product="getCurrentProduct" :disabled="isAddToCartDisabled"
                  class="col-xs-12 col-sm-4 col-md-6 cstm_add_cart" />
              </div>

              <div class="design_story_section">
                <button id="story_btn">know the design Story</button>
                <div id="story_overlay"></div>
                <div id="story_container">
                  <button class="popup-cancel" id="close-btn">&#10005;</button>
                  <!-- <div class="stroy-title" v-html="getCurrentProduct.name"></div> -->
                  <div class="story-para" v-html="getCurrentProduct.product_story"></div>
                </div>
              </div>


              <div class="container px15 pt50 pb35 cl-accent details prd_tab_section accordion-sec">
                <!-- Accordion for Fabric Composition -->
                <h2 @click="toggleAccordion('fabricComposition')"
                  class="h3 m0 mb10 serif lh20 details-title accordion-heading">
                  Fabric Composition
                  <svg v-if="accordionOpen !== 'fabricComposition'" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" class="inline-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                    </path>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="inline-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
                  </svg>
                </h2>
                <div v-show="accordionOpen === 'fabricComposition'" class="care_description lh30 h5"
                  v-html="getCurrentProduct.description"></div>

                <!-- Accordion for Care -->
                <h2 @click="toggleAccordion('care')" class="h3 m0 mb10 serif lh20 details-title accordion-heading">
                  Care
                  <svg v-if="accordionOpen !== 'care'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" class="inline-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                    </path>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="inline-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
                  </svg>
                </h2>
                <div v-show="accordionOpen === 'care'" class="care_description lh30 h5">{{ getCurrentProduct.care }}</div>

                <!-- Accordion for Product Care -->
                <h2 @click="toggleAccordion('productCare')" class="h3 m0 mb10 serif lh20 details-title accordion-heading hd-title-care">
                  Product Care
                  <svg v-if="accordionOpen !== 'productCare'" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" class="inline-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                    </path>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="inline-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
                  </svg>
                </h2>
                <div v-show="accordionOpen === 'productCare'" class="care_description hd-description-care">
                  <div class="flex-dsc" v-html="getCurrentProduct.product_care"></div>
                </div>
              </div>





              <!-- <div class="row py40 add-to-buttons">
              <div class="col-xs-6 col-sm-3 col-md-6">
                <AddToWishlist :product="getCurrentProduct" />
              </div>
              <div class="col-xs-6 col-sm-3 col-md-6">
                <AddToCompare :product="getCurrentProduct" />
              </div>
            </div> -->
            </div>
          </div>

        </section>
      </div>
    </section>


    <!-- <lazy-hydrate when-idle>
      <reviews
        :product-name="getCurrentProduct.name"
        :product-id="getCurrentProduct.id"
        v-show="isOnline"
        :product="getCurrentProduct"
      />
    </lazy-hydrate> -->


    <!-- <lazy-hydrate when-idle>
      <related-products type="upsell" :heading="$t('We found other products you might like')" />
    </lazy-hydrate> -->
    <!-- <lazy-hydrate when-idle>
      <promoted-offers single-banner />
    </lazy-hydrate> -->
    <lazy-hydrate when-idle>
      <related-products type="related" />
    </lazy-hydrate>
    <SizeGuide :size_chart="getCurrentProduct.size_guide" />
    <StoryModel />
    <script v-html="getJsonLd" type="application/ld+json" />
  </div>
</template>

<script>
import i18n from '@vue-storefront/i18n'
import VueOfflineMixin from 'vue-offline/mixin'
import config from 'config'
import RelatedProducts from 'theme/components/core/blocks/Product/Related.vue'
import Reviews from 'theme/components/core/blocks/Reviews/Reviews.vue'
import AddToCart from 'theme/components/core/AddToCart.vue'
import GenericSelector from 'theme/components/core/GenericSelector'
import ColorSelector from 'theme/components/core/ColorSelector.vue'
import SizeSelector from 'theme/components/core/SizeSelector.vue'
import Breadcrumbs from 'theme/components/core/Breadcrumbs.vue'
import ProductAttribute from 'theme/components/core/ProductAttribute.vue'
import ProductQuantity from 'theme/components/core/ProductQuantity.vue'
import ProductLinks from 'theme/components/core/ProductLinks.vue'
import ProductCustomOptions from 'theme/components/core/ProductCustomOptions.vue'
import ProductBundleOptions from 'theme/components/core/ProductBundleOptions.vue'
import ProductGallery from 'theme/components/core/ProductGallery'
import Spinner from 'theme/components/core/Spinner'
import PromotedOffers from 'theme/components/theme/blocks/PromotedOffers/PromotedOffers'
import focusClean from 'theme/components/theme/directives/focusClean'
import WebShare from 'theme/components/theme/WebShare'
import BaseInputNumber from 'theme/components/core/blocks/Form/BaseInputNumber'
import SizeGuide from 'theme/components/core/blocks/Product/SizeGuide'
import StoryModel from 'theme/components/core/blocks/Product/StoryModel.vue'
import AddToWishlist from 'theme/components/core/blocks/Wishlist/AddToWishlist'
import AddToCompare from 'theme/components/core/blocks/Compare/AddToCompare'
import { mapGetters } from 'vuex'
import LazyHydrate from 'vue-lazy-hydration'
import { ProductOption } from '@vue-storefront/core/modules/catalog/components/ProductOption.ts'
import { getAvailableFiltersByProduct, getSelectedFiltersByProduct } from '@vue-storefront/core/modules/catalog/helpers/filters'
import { isOptionAvailableAsync } from '@vue-storefront/core/modules/catalog/helpers/index'
import { localizedRoute, currentStoreView } from '@vue-storefront/core/lib/multistore'
import { htmlDecode } from '@vue-storefront/core/filters'
import { ReviewModule } from '@vue-storefront/core/modules/review'
import { RecentlyViewedModule } from '@vue-storefront/core/modules/recently-viewed'
import { registerModule, isModuleRegistered } from '@vue-storefront/core/lib/modules'
import { onlineHelper, isServer, productJsonLd } from '@vue-storefront/core/helpers'
import { catalogHooksExecutors } from '@vue-storefront/core/modules/catalog-next/hooks'
import ProductPrice from 'theme/components/core/ProductPrice.vue'
import { doPlatformPricesSync } from '@vue-storefront/core/modules/catalog/helpers'
import { filterChangedProduct } from '@vue-storefront/core/modules/catalog/events'



export default {
  components: {
    AddToCart,
    AddToCompare,
    AddToWishlist,
    Breadcrumbs,
    ColorSelector,
    GenericSelector,
    ProductAttribute,
    ProductBundleOptions,
    ProductCustomOptions,
    ProductGallery,
    ProductLinks,
    PromotedOffers,
    RelatedProducts,
    Reviews,
    SizeSelector,
    WebShare,
    SizeGuide,
    LazyHydrate,
    ProductQuantity,
    ProductPrice,
  },
  mixins: [ProductOption],
  directives: { focusClean },
  beforeCreate() {
    registerModule(ReviewModule)
    registerModule(RecentlyViewedModule)
  },
  data() {
    return {
      detailsOpen: false,
      maxQuantity: 0,
      quantityError: false,
      isStockInfoLoading: false,
      hasAttributesLoaded: false,
      manageQuantity: true,
      accordionOpen: null,
    }
  },
  computed: {
    ...mapGetters({
      getCurrentCategory: 'category-next/getCurrentCategory',
      getCurrentProduct: 'product/getCurrentProduct',
      getProductGallery: 'product/getProductGallery',
      getCurrentProductConfiguration: 'product/getCurrentProductConfiguration',
      attributesByCode: 'attribute/attributeListByCode',
      getCurrentCustomOptions: 'product/getCurrentCustomOptions'
    }),
    getOptionLabel() {
  return (option, variant) => {
    if (option.label === 'Color' && variant && variant.name) {
      // Return the color name if available
      return variant.name;
    }

    // Fallback to the default behavior for other options
    const configName = option.attribute_code ? option.attribute_code : option.label.toLowerCase();
    return this.getCurrentProductConfiguration[configName] ? this.getCurrentProductConfiguration[configName].label : configName;
  }
},

    isOnline(value) {
      return onlineHelper.isOnline
    },
    getProductOptions() {
      if (
        this.getCurrentProduct.errors &&
        Object.keys(this.getCurrentProduct.errors).length &&
        Object.keys(this.getCurrentProductConfiguration).length
      ) {
        return []
      }
      return this.getCurrentProduct.configurable_options
    },
    getOfflineImage() {
      return {
        src: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height),
        error: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height),
        loading: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height)
      }
    },
    getCustomAttributes() {
      return Object.values(this.attributesByCode || [])
        .filter(
          a => a.is_visible && a.is_user_defined && (parseInt(a.is_visible_on_front) || a.is_visible_on_front === true) && this.getCurrentProduct[a.attribute_code]
        )
        .sort((a, b) => { return a.attribute_id > b.attribute_id })
    },
    getAvailableFilters() {
      return getAvailableFiltersByProduct(this.getCurrentProduct)
    },
    getSelectedFilters() {
      return getSelectedFiltersByProduct(this.getCurrentProduct, this.getCurrentProductConfiguration)
    },
    isSimpleOrConfigurable() {
      return ['simple', 'configurable'].includes(this.getCurrentProduct.type_id)
    },
    isAddToCartDisabled() {
      if (this.quantityError || this.isStockInfoLoading) {
        return false
      }

      return this.isOnline && !this.maxQuantity && this.manageQuantity && this.isSimpleOrConfigurable
    },
    storeView() {
      return currentStoreView()
    },
    getJsonLd() {
      return productJsonLd(this.getCurrentProduct, this.getCurrentProductConfiguration.color && this.getCurrentProductConfiguration.color.label, this.$store.state.storeView.i18n.currencyCode, this.getCustomAttributes)
    }
  },
  async mounted() {
    await this.$store.dispatch('recently-viewed/addItem', this.getCurrentProduct)

    $(document).ready(function () {
      

      $('.color_button').click(function () {
          $('.product_closeup_video_dv').hide();
          $('.VueCarousel').show();
      });

      $('.tab-navigation button').click(function () {
        $('.tab-navigation button').removeClass('active');
        $(this).addClass('active');
      });

    });

    $("#story_btn").click(function () {
        $("#story_overlay").fadeIn(0); // You can set this to 0 or a small value to make the overlay appear instantly
        $("#story_container").addClass('open_story_popup'); 
        $('header').css('z-index','0');
        $('.product_closeup_video_dv').css('z-index','0');
        $('.product-listing ').css('z-index','-1');
        $("body").addClass("disable-scroll");
        
      });

      $("#close-btn, #story_overlay").click(function () {
        $("#story_overlay").fadeOut(0); 
        $("#story_container").removeClass('open_story_popup');
        $('header').css('z-index','2');
        $('.product_closeup_video_dv').css('z-index','1');
        $('.product-listing ').css('z-index','0');
        $("body").removeClass("disable-scroll");
      });

    $("#size_btn").click(function () {
      $("#size_overlay").fadeIn(300);
      $("#size_container").slideDown(300);
      $('.product-listing ').css('z-index','-1');
      $("body").addClass("disable-scroll");
    });

    $("#size-close-btn, #size_overlay").click(function () {
      $("#size_overlay").fadeOut(300);
      $("#size_container").slideUp(300);
      $('.product-listing ').css('z-index','0');
      $("body").removeClass("disable-scroll");
    });

  },
  async asyncData({ store, route, context }) {
    if (context) context.output.cacheTags.add('product')
    const product = await store.dispatch('product/loadProduct', { parentSku: route.params.parentSku, childSku: route && route.params && route.params.childSku ? route.params.childSku : null })
    const loadBreadcrumbsPromise = store.dispatch('product/loadProductBreadcrumbs', { product })
    if (isServer) await loadBreadcrumbsPromise
    catalogHooksExecutors.productPageVisited(product)
  },
  beforeRouteEnter(to, from, next) {
    if (isServer) {
      next()
    } else {
      next((vm) => {
        vm.getQuantity()
      })
    }
  },
  watch: {
    isOnline: {
      handler(isOnline) {
        if (isOnline) {
          this.getQuantity()
        }
      }
    }
  },
  methods: {

    getDisplayNameByColorCode(colorCode) {
      if (colorCode === '#2d2c2f') {
        return 'Jet Black';
      } else if (colorCode === '#00539c') {
        return 'Princess Blue';
      } else if (colorCode === '#ff7520') {
        return 'Vibrant Orange';
      } else if (colorCode === '#f4f9ff') {
        return 'Bright White';
      } else {
        // Add more conditions for other color codes if needed
        return 'Unknown Color';
      }
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },

    toggleAccordion(section) {
      this.accordionOpen = this.accordionOpen === section ? null : section;
      this.toggleBodyScroll();
    },
    showTab(tabName) {
      // Hide all tabs
      const tabs = document.querySelectorAll('.tab-content');
      tabs.forEach((tab) => {
        tab.style.display = 'none';
      });

      // Show the selected tab
      document.getElementById(tabName).style.display = 'block';
    },
    showDetails(event) {
      this.detailsOpen = true
      event.target.classList.add('hidden')
    },
    notifyOutStock() {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t(
          'The product is out of stock and cannot be added to the cart!'
        ),
        action1: { label: this.$t('OK') }
      })
    },
    notifyWrongAttributes() {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t(
          'No such configuration for the product. Please do choose another combination of attributes.'
        ),
        action1: { label: this.$t('OK') }
      })
    },
    async changeFilter(variant) {
      const selectedConfiguration = Object.assign({ attribute_code: variant.type }, variant)
      await filterChangedProduct(selectedConfiguration, this.$store, this.$router)
      this.getQuantity()
    },
    openSizeGuide() {
      this.$bus.$emit('modal-show', 'modal-sizeguide')
    },
    openStoryModel() {
      this.$bus.$emit('modal-show', 'modal-storymodel')
    },
    isOptionAvailable(option) { // check if the option is available
      const currentConfig = Object.assign({}, this.getCurrentProductConfiguration)
      currentConfig[option.type] = option
      return isOptionAvailableAsync(this.$store, { product: this.getCurrentProduct, configuration: currentConfig })
    },
    async getQuantity() {
      if (this.isStockInfoLoading) return // stock info is already loading
      this.isStockInfoLoading = true
      try {
        if (config.products.alwaysSyncPricesClientSide) {
          doPlatformPricesSync([this.getCurrentProduct]);
        }
        const res = await this.$store.dispatch('stock/check', {
          product: this.getCurrentProduct,
          qty: this.getCurrentProduct.qty
        })

        this.manageQuantity = res.isManageStock
        this.maxQuantity = res.isManageStock ? res.qty : null
      } finally {
        this.isStockInfoLoading = false
      }
    },
    handleQuantityError(error) {
      this.quantityError = error
    }
  },
  metaInfo() {
    const storeView = currentStoreView()
    return {
      /* link: [
        { rel: 'amphtml',
          href: this.$router.resolve(localizedRoute({
            name: this.getCurrentProduct.type_id + '-product-amp',
            params: {
              parentSku: this.getCurrentProduct.parentSku ? this.getCurrentProduct.parentSku : this.getCurrentProduct.sku,
              slug: this.getCurrentProduct.slug,
              childSku: this.getCurrentProduct.sku
            }
          }, storeView.storeCode)).href
        }
      ], */
      title: htmlDecode(this.getCurrentProduct.meta_title || this.getCurrentProduct.name),
      meta: this.getCurrentProduct.meta_description ? [{ vmid: 'description', name: 'description', content: htmlDecode(this.getCurrentProduct.meta_description) }] : []
    }
  }
}
</script>

<style>
/* body.disable-scroll {
  overflow: hidden;
} */
</style>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-primary: color(primary);
$color-tertiary: color(tertiary);
$color-secondary: color(secondary);
$color-white: color(white);
$bg-secondary: color(secondary, $colors-background);

/* product detail changes start here */

.product_video_desk_mob{
  display: none;
}

/* snap scroll  */

.size-part {
    display: flex;
    border: 1px solid;
    width: fit-content;
    padding: 5px;
    color: #D9D9D9;
    margin-bottom: 15px;
}

.inline-svg {
  width: 14px;
  float: right;
}

.details.prd_tab_section.accordion-sec {
  padding-left: 0;
  padding-right: 0;
  border: 1px solid #ccc;
  padding-top: 25px;
  padding-bottom: 0px;
}
h2.h3.m0.mb10.serif.lh20.details-title.accordion-heading.hd-title-care {
    border-bottom: 0;
    margin-bottom: 10px;
}
.care_description.hd-description-care{
  border-top: 1px solid #ccc;
  margin-left: 15px;
  margin-right: 15px;
}

.details-title.accordion-heading {
  color: #717171;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: 1px solid #ccc;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 0;
  margin-bottom: 13px;
  padding-bottom: 13px;
  cursor: pointer;
}

.care_description.lh30.h5 {
  padding: 0px 25px 20px;
}

.prd_detail_col {
  padding-left: 78px;
}

.prd_dtls_inner {
  max-width: 435px;
  position: relative;
}

.mb20.uppercase.cl-secondary.sku_cstm {
  border: 1px solid #c6c4c4;
  color: #000;
  width: fit-content;
  padding: 4px;
}

.color_text {
  color: #717171;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-top: 15px;
}

.pb40.cstm_size {
  padding-bottom: 10px;
}

.size-guide-icon {
  font-size: 22px;
  color: #717171;
}



.cstm_add_cart {
  margin-top: 20px;
}

/* product detail changes end here */

.product_container {
  max-width: 100%;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
  margin-top: -6px;
}

.product-top-section {
  padding: 0px;
  margin-top: -4px;
}

.img_slider_col {
  padding-left: 0px;
  padding-right: 0;
}

.stroy-title {
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
}

.open_story_popup{
  right: 0 !important;
}


#story_container {
  position: fixed;
  top: 0;
  right: -100%; /* Start off-screen to the right */
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  height: 100%;
  width: 800px;
  z-index: 5;
  transition: all 0.5s linear;
}

#story_overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.518);
}

#close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 19px;
}

.design_story_section {
  display: flex;
  align-items: end;
  gap: 5px;
  margin-top: 20px;
}

#story_btn {
  color: #717171;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  background: 0;
  border: 0;
  border: 1px solid #cacaca;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-top: 30px;
  padding: 4px;
  margin-left: 0px;
}

#story_container p {
  font-size: 14px;
  line-height: 21px;
}

.product {
  &__add-to-compare {
    display: none;

    @media (min-width: 767px) {
      display: block;
    }
  }
}

.breadcrumbs {
  @media (max-width: 767px) {
    margin: 15px 0;
    padding: 15px 0 0 15px;
  }
}

.error {
  color: red;
  font-weight: bold;
  padding-bottom: 15px;
}

.data {
  @media (max-width: 767px) {
    border-bottom: 1px solid $bg-secondary;
  }
}

.image {
  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
}

.product-name {
  @media (max-width: 767px) {
    font-size: 36px;
  }
}

.variants-label {
  @media (max-width: 767px) {
    font-size: 14px;
  }
}

.variants-wrapper {
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }

  .sizes {
    @media (max-width: 767px) {
      width: 74%;
    }
  }

  .size-guide {
    height: 40px;

    @media (max-width: 767px) {
      width: 100%;
      margin-left: 0;
    }
  }
}

.product-top-section {
  @media (max-width: 767px) {
    padding: 0;
    background-color: $color-white;
  }
}

.add-to-buttons {
  @media (max-width: 767px) {
    padding-top: 30px;
    margin-bottom: 40px;
  }
}

.details {
  @media (max-width: 767px) {
    padding: 50px 15px 15px;
  }
}

.details-title {
  padding: 0 8px;

  @media (max-width: 767px) {
    font-size: 18px;
    margin: 0;
  }
}

.details-wrapper {
  @media (max-width: 767px) {
    position: relative;
    max-height: 140px;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: 14px;
  }

  &--open {
    max-height: none;
  }
}

.details-overlay {
  @media (max-width: 767px) {
    position: absolute;
    height: 75%;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    cursor: pointer;
    background: linear-gradient(rgba($color-white, 0), rgba($color-white, 1));

    &.hidden {
      display: none;
    }
  }
}

.action {
  &:hover {
    color: $color-tertiary;
  }
}

#size_container {
  display: none;
  width: 410px;
  max-width: 100%;
  background-color: #141414;
  height: 440px;
  border-radius: 30px 30px 0 0;
  padding: 54px 15px 30px;
  position: fixed;
  flex-direction: column;
  gap: 10px;
  z-index: 11;
  bottom: 0%;
  right: 1%;
}

.size-heading {
  margin: 0;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 14%;
}

.size_border-btm {
  border: 1px solid #FFFF;
  margin-top: 30px;
}

.size-para {
  color: #fff;
  font-size: 10px;
  margin-left: 14%;
}

.size_icon {
  width: 42px;
  float: inline-start;
}

#size_overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

#size-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 19px;
  color: #FFF;
}

button#size_btn {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
  border: none;
  margin-top: 4px;
  padding: 0;
  padding-bottom: 2px;
  color: #717171;
}

.attributes {
  list-style-type: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
.web-share {
  float: right;
  cursor: pointer;
  padding-left: 10px;
}

.product_video_desk {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.wishlist_cstm {
  float: right;
  color: #969696;
  border-right: 1px solid;
}

.product-name {
  color: #302A2A;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 15px;
  border-bottom: 1px solid #C1C1C1;
  padding-top: 30px;
}

.cl-secondary {
  color: #828282;
  font-size: 13px;
}

.price-cstm {
  color: #302A2A;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.short-description {
  color: #302A2A;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 40px;
}

.color-bt-border {
  border-bottom: 1px solid #C1C1C1;
  width: 100%;
  padding-bottom: 25px;
}

.bg-cl-secondary {
  background-color: #FFFF;
}

.row.top-xs.m0.pt15.pb40.variants-wrapper {
  display: flex;
  justify-content: space-between;
}

.dv_sticky {
  position: sticky;
  height: fit-content;
  width: 100%;
  top: 20px;
}

/* Tab Styling  */
#productCareTab {
  display: none;
}

#careTab {
  display: none;
}

.tab-navigation button {
  background-color: #555;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tab-navigation button:hover {
  background-color: #777;
}

.tab-navigation {
  display: flex;
  background-color: #fff;
  margin-bottom: 20px;
  border-bottom: 1px solid #C1C1C1;
}

.tab-navigation button {
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  flex: 1;
  transition: background-color 0.3s;
  color: #000;
  text-align: left;
  font-size: 16px;
}

.tab-navigation button.active {
  border-bottom: 1px solid #000;
}

.tab-navigation button:hover {
  border-bottom: 1px solid #000;
  background-color: transparent;
}

.tab-content {
  display: none;
  padding: 40px 20px;
  border: 1px solid #ccc;
}

.tab-content.active {
  display: block;
}


.details-wrapper {
  margin-top: 20px;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}

.details-wrapper--open {
  max-height: 1000px;
}

.care_description {
  line-height: 1.5;
}

.prd_tab_section {
  margin-top: 50px;
  margin-bottom: 30px;
}

.related_prd_div {
  margin-bottom: 50px;
}


@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {

  .prd_detail_col {
    padding-left: 20px;
    padding-right: 20px;
  }

  .prd_tab_section {
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .related_prd_div .prd_lst_col {
    margin-bottom: 15px;
  }
  .product_video_desk {
    height:50vh;
  }
}
</style>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 834px) {

  .prd_detail_col {
    padding-left: 20px;
    padding-right: 20px !important;
  }

  .prd_tab_section {
    margin-top: 10px !important;
    margin-bottom: 0px !important;
  }

  .related_prd_div .prd_lst_col {
    margin-bottom: 15px !important;
  }

  .related_prd_div .product-listing {
    justify-content: unset !important;
  }

  .design_story_section {
    margin-top: 5px !important;
    margin-bottom: 33px !important;
  }

  #size_container {
    width: 90% !important;
    margin-right: 1px;
  }

  #story_container {
    max-width: 100% !important;
  }
  .product_video_desk_mob{
    display: block !important;
    width:100%;
  }
  .product_video_desk{
    display: none !important;
  }

}

@media only screen and (min-device-width: 768px) and (max-device-width: 992px) {
  .prd_detail_col {
    padding-left: 30px !important;
  }

  #story_btn {
    margin-top: 51px;
  }

  #size_container {
    width: 338px !important;
  }

  .design_story_section {
    margin-bottom: 29px !important;
  }

  .col-xs-12.col-md-5.data.prd_detail_col {
    max-width: 384px;
  }

  .size-guide-icon[data-v-5c899206] {
    font-size: 20px;
    color: #717171;
    padding-right: 0;
    /* margin-top: -4px; */
  }

  .size-part[data-v-5c899206] {
    display: flex;
  }

  button#size_btn[data-v-5c899206] {
    font-size: 14px;

  }
}
</style>
