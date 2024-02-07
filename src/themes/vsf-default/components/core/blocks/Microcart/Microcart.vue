<template>
  <div
    class="microcart cl-accent relative shop_cart"
    :class="[productsInCart.length ? 'bg-cl-secondary' : 'bg-cl-primary']"
    data-testid="microcart"
  >
    <transition name="fade">
      <div v-if="isEditMode" class="overlay" @click="closeEditMode" />
    </transition>
    <div class="row bg-cl-primary px40 actions sc_prt1">
      <div class="col-xs end-xs">
        <button
          type="button"
          class="p0 brdr-none bg-cl-transparent close"
          @click="closeMicrocartExtend"
          data-testid="closeMicrocart"
        >
          <i class="material-icons py20 cl-accent">
            close
          </i>
        </button>
      </div>
    </div>

    

    <div class="row">
      <div class="col-lg-8 col-md-8 col-12 shop_cart_col1">

        <div class="row middle-xs bg-cl-primary top-sm px40 actions sc_prt2">
          <div class="col-xs-12 col-12 shop_crt_ttl_col">
            <h2
             
              class="cl-accent mt35 mb35 shop_cart_ttl"
            >
              Shopping cart
            </h2>
          </div>
          
        </div>

        <h4 v-if="!productsInCart.length" class="cl-accent ml30">
          {{ $t('Your shopping cart is empty.') }}
        </h4>
        <div v-if="!productsInCart.length" class="ml30" @click="closeMicrocartExtend">
          {{ $t("Don't hesitate and") }}
          <router-link :to="localizedRoute('/')">
            {{ $t('browse our catalog') }}
          </router-link>
          {{ $t('to find something beautiful for You!') }}
        </div>

        <div class="col-xs-12 col-sm mt35 mb35 mt0 end-sm clearcart-col">
            <clear-cart-button
              v-if="productsInCart.length"
              @click.native="clearCart"
            />
        </div>
        <ul class="shop_crt_prd_ttls" v-if="productsInCart.length">
          <li class="item_ttl">Item</li>
          <li class="quantity_ttl">Quantity</li>
          <li class="price_ttl">Price</li>
        </ul>
        <ul v-if="productsInCart.length" class="bg-cl-primary m0 px40 pb40 products sc_prt3">
          <product v-for="product in productsInCart" :key="product.server_item_id || product.id" :product="product" />
        </ul>


      </div>
      <div class="col-lg-4 col-md-4 col-12 shop_cart_col2">

        <div v-if="productsInCart.length" class="summary cl-accent serif sc_prt4">
            <h3 class="m0 pt40 mb30 weight-400 summary-heading">
              {{ $t('Shopping summary') }}
            </h3>

            <div class="sumry_calu_dv">

              <div v-for="(segment, index) in totals" :key="index" class="row py15" v-if="segment.code !== 'grand_total'">
                  <div class="col-xs">
                    {{ segment.title }}
                    <button v-if="appliedCoupon && segment.code === 'discount'" type="button" class="p0 brdr-none bg-cl-transparent close delete-button ml10" @click="clearCoupon">
                      <i class="material-icons cl-accent">
                        close
                      </i>
                    </button>
                  </div>
                  <div v-if="segment.value != null" class="col-xs align-center">
                    {{ segment.value | price(storeView) }}
                  </div>
              </div>

              <div class="row py20">
                <div v-if="OnlineOnly && !addCouponPressed" class="col-xs-12">
                  <button
                    class="p0 brdr-none serif fs-medium-small cl-accent bg-cl-transparent"
                    type="button"
                    @click="addDiscountCoupon"
                  >
                    {{ $t('Add a discount code') }}
                  </button>
                </div>
                <div v-if="OnlineOnly && addCouponPressed" class="col-xs-12 pt30 coupon-wrapper">
                  <div class="coupon-input">
                    <label class="h6 cl-secondary">{{ $t('Discount code') }}</label>
                    <base-input type="text" id="couponinput" :autofocus="true" v-model.trim="couponCode" @keyup.enter="setCoupon" />
                  </div>
                  <button-outline color="dark" :disabled="!couponCode" @click.native="setCoupon">
                    {{ $t('Add discount code') }}
                  </button-outline>
                </div>
              </div>

              <div class="row pt20 pb20 weight-700 middle-xs" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'grand_total'">
                <div class="col-xs h4 total-price-label">
                  {{ segment.title }}
                </div>
                <div class="col-xs align-center h2 total-price-value">
                  {{ segment.value | price(storeView) }}
                </div>
              </div>

            </div>
            
        </div>

        <div
            class="row py20 px40 middle-xs actions sc_prt5"
            v-if="productsInCart.length && !isCheckoutMode"
          >
            
            <div class="col-xs-12 col-lg-12 col-md-12">
              <button-full
                class="shp_crt_checkout_btn1"
                :link="{ name: 'checkout' }"
                @click.native="closeMicrocartExtend"
              >
                {{ $t('Go to checkout') }}
              </button-full>
              <instant-checkout v-if="isInstantCheckoutRegistered" class="shp_crt_checkout_btn2 no-outline button-full block brdr-none w-100 px10 py20 bg-cl-mine-shaft :bg-cl-th-secondary ripple weight-400 h4 cl-white sans-serif fs-medium mt20" />
            </div>
            <div class="col-xs-12 col-12 col-lg-12">
              <router-link :to="localizedRoute('/')" class="no-underline cl-secondary link return_shop_link">
                <span @click="closeMicrocartExtend">
                  {{ $t('Return to shopping') }}
                </span>
              </router-link>
            </div>

        </div>


      </div>
    </div>
    

 

    
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import i18n from '@vue-storefront/i18n'
import { isModuleRegistered } from '@vue-storefront/core/lib/modules'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

import VueOfflineMixin from 'vue-offline/mixin'
import onEscapePress from '@vue-storefront/core/mixins/onEscapePress'
import InstantCheckout from 'src/modules/instant-checkout/components/InstantCheckout.vue'
import { registerModule } from '@vue-storefront/core/lib/modules'

import BaseInput from 'theme/components/core/blocks/Form/BaseInput'
import ClearCartButton from 'theme/components/core/blocks/Microcart/ClearCartButton'
import ButtonFull from 'theme/components/theme/ButtonFull'
import ButtonOutline from 'theme/components/theme/ButtonOutline'
import Product from 'theme/components/core/blocks/Microcart/Product'
import EditMode from './EditMode'
import { InstantCheckoutModule } from 'src/modules/instant-checkout'

export default {
  components: {
    Product,
    ClearCartButton,
    ButtonFull,
    ButtonOutline,
    BaseInput,
    InstantCheckout
  },
  mixins: [
    VueOfflineMixin,
    EditMode,
    onEscapePress
  ],
  data () {
    return {
      addCouponPressed: false,
      couponCode: '',
      componentLoaded: false,
      isInstantCheckoutRegistered: isModuleRegistered('InstantCheckoutModule')
    }
  },
  props: {
    isCheckoutMode: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  beforeCreate () {
    registerModule(InstantCheckoutModule)
  },
  mounted () {
    this.$nextTick(() => {
      this.componentLoaded = true
    })
  },
  computed: {
    ...mapGetters({
      productsInCart: 'cart/getCartItems',
      appliedCoupon: 'cart/getCoupon',
      totals: 'cart/getTotals',
      isOpen: 'cart/getIsMicroCartOpen'
    }),
    storeView () {
      return currentStoreView()
    }
  },
  methods: {
    ...mapActions({
      applyCoupon: 'cart/applyCoupon'
    }),
    addDiscountCoupon () {
      this.addCouponPressed = true
    },
    clearCoupon () {
      this.$store.dispatch('cart/removeCoupon')
      this.addCouponPressed = false
    },
    toggleMicrocart () {
      this.$store.dispatch('ui/toggleMicrocart')
    },
    async setCoupon () {
      const couponApplied = await this.applyCoupon(this.couponCode)
      this.addCouponPressed = false
      this.couponCode = ''
      if (!couponApplied) {
        this.$store.dispatch('notification/spawnNotification', {
          type: 'warning',
          message: i18n.t("You've entered an incorrect coupon code. Please try again."),
          action1: { label: i18n.t('OK') }
        })
      }
    },
    closeMicrocartExtend () {
      this.toggleMicrocart()
      this.$store.commit('ui/setSidebar', false)
      this.addCouponPressed = false
    },
    onEscapePress () {
      this.$store.dispatch('ui/closeMicrocart')
    },
    clearCart () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: i18n.t('Are you sure you would like to remove all the items from the shopping cart?'),
        action1: { label: i18n.t('Cancel'), action: 'close' },
        action2: { label: i18n.t('OK'),
          action: async () => {
            // We just need to clear cart on frontend and backend.
            // but cart token can be reused
            await this.$store.dispatch('cart/clear', { disconnect: false })
          }
        },
        hasNoTimeout: true
      })
    }
  }
}
</script>



<style>
.shop_cart {
  background-color: #fff;
  height:100%;
}
.shop_cart  > .row {
  height: 100%;
}
/*------------- shop_cart_col1 CSS Start*/
.shop_cart_col1 .sc_prt2 {
  background-image: url('../../../../assets/patch_img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.shop_cart_col1 .sc_prt3 {
    padding: 10px 10px 0px 25px;
    height: 600px;
    overflow: auto;
}
.shop_crt_ttl_col {
    padding-left: 32px;
}
.shop_cart_ttl {
  font-size: 50px;
  line-height: 20px;
  width: fit-content;
}
.shop_cart_col1 .clearcart-col {
    margin-top: 15px;
}
.shop_cart_col1 .clearcart-col button{
    font-size: 15px;
}
.shop_cart_col1 .clearcart-col button i{
    font-size: 17px;
}

ul.shop_crt_prd_ttls {
    padding: 0;
    list-style: none;
    display: flex;
}
.shop_crt_prd_ttls li {
  font-size: 17px;
    line-height: 20px;
    font-weight: 400;
    display: block;
    text-align: center;
    font-weight: 600;
}
li.item_ttl {
    width: 395px;
}
li.quantity_ttl {
    width: 106px;
}
li.price_ttl {
    width: 64px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .shop_crt_ttl_col {
    padding-left: 15px;
  }
  .shop_cart_ttl {
    font-size: 32px;
  }
  .clearcart-col {
    justify-content: end;
    margin-top: 11px !important;
    margin-bottom: 20px;
  }
  li.item_ttl {
    width: 62%;
  }
  li.quantity_ttl {
    width: 18%;
  }
  li.price_ttl {
    width: 20%;
  }
  .shop_crt_prd_ttls li {
    font-size: 15px;
  }
}
/*------------- shop_cart_col1 CSS End*/


/*------------- shop_cart_col2 CSS Start*/
.shop_cart_col2 {
  background: #F2F2F2;
}
.sc_prt1 {
    position: absolute;
    top: 0;
    right: 23px;
    background: transparent;
    height:auto !important;
    padding-right: 0;
}
.sc_prt4 {
    margin-top: 90px;
}
.shop_cart .summary-heading {
    font-size: 30px;
    text-align: center;
    text-transform: capitalize;
}
.sumry_calu_dv {
    margin-top: 120px;
    padding: 0 10px;
}
.shop_cart .total-price-label , .shop_cart  .total-price-value{
    font-size: 22px;
}
.shp_crt_checkout_btn1 , .shp_crt_checkout_btn2{
    padding: 7px;
    font-size: 18px;
    font-weight: 400;
    min-width: auto;
    text-align: center;
}
.shop_cart .return_shop_link {
  margin-top: 20px;
  display: block;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .sc_prt1 {
    right: -3px;
  }
  .sc_prt4 {
    margin-top: 0px;
  }
  .sumry_calu_dv {
    margin-top: 20px;
  }
  .sumry_calu_dv .py15 {
    padding-top: 10px;
    padding-bottom: 10px
  }
  .sumry_calu_dv .align-center {
    text-align: right;
  }
  .shop_cart .return_shop_link {
    padding: 0px 20px 20px 20px;
  }
}
/*------------- shop_cart_col2 CSS End*/
</style>

<style lang="scss" scoped>
  @import "~theme/css/animations/transitions";

  .close {
    i {
      opacity: 0.6;
    }
    &:hover,
    &:focus {
      i {
        opacity: 1;
      }
    }
  }

  .mt0 {
    @media (max-width: 767px) {
      margin-top: 0;
    }
  }

  .clearcart {
    &-col {
      display: flex;
      align-self: center;
    }
  }

  .products {
    @media (max-width: 767px) {
      padding: 30px 15px;
    }
  }

  .actions {
    @media (max-width: 767px) {
      padding: 0 15px;
    }
    .link {
      @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        padding: 20px 70px;
        &.checkout {
          margin-top: 55px;
          padding: 0;
        }
      }
    }
  }

  .summary {
    @media (max-width: 767px) {
      padding:  0 15px;
      font-size: 15px;
    }
  }

  .summary-heading {
    @media (max-width: 767px) {
      font-size: 23px;
      padding-top: 25px;
    }
  }

  .total-price-label {
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  .total-price-value {
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  .delete-button {
    vertical-align: middle;
  }

  .coupon-wrapper {
    display: flex;

    .button-outline {
      text-transform: inherit;
      width: 50%;
    }

    .coupon-input {
      margin-right: 20px;
      width: 100%;
    }
  }

  .overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 0;
    height: 100%;
    background:rgba(0, 0, 0, 0.4);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
