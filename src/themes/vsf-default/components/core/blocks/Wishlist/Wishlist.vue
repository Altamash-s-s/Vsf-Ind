<template>
  <div class="wishlist cl-accent">
    <!-- <div class="row">
      <div class="col-md-12 end-xs">
        <i class="material-icons p15 pointer cl-accent" @click="closeWishlist">close</i>
      </div>
    </div> -->
    <div class="middle-xs px40 wishlist_title">
      <h2  class="col-sm cl-accent">
        {{ $t('Wishlist') }}
      </h2>
      <div class="end-xs">
        <i class="material-icons p15 pointer cl-accent" @click="closeWishlist">close</i>
      </div>
      
    </div>
    <div class="clear_btn">
      <clear-wishlist-button v-if="productsInWishlist.length" @click="clearWishlist" class="col-xs-12 col-sm mt35 mb35 end-sm clear-btn-btn" />
    </div>
    <h4 v-if="!productsInWishlist.length" class="cl-accent ml30">
      {{ $t('Your wishlist is empty.') }}
    </h4>
    <div v-if="!productsInWishlist.length" class="ml30">
      {{ $t("Don't hesitate and") }}
      <router-link :to="localizedRoute('/')" @click.native="closeWishlist">
        {{ $t('browse our catalog') }}
      </router-link>
      {{ $t('to find something beautiful for You!') }}
    </div>
    <ul class="products">
      <product v-for="wishlistProduct in productsInWishlist" :key="wishlistProduct.id" :product="wishlistProduct" />
    </ul>
  </div>
</template>

<script>
import Wishlist from '@vue-storefront/core/compatibility/components/blocks/Wishlist/Wishlist'
import Product from 'theme/components/core/blocks/Wishlist/Product'
import ClearWishlistButton from 'theme/components/core/blocks/Wishlist/ClearWishlistButton'

export default {
  props: {
    product: {
      type: Object,
      required: false,
      default: () => { }
    }
  },
  components: {
    Product,
    ClearWishlistButton
  },
  methods: {
    clearWishlist () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t('Are you sure you would like to remove all the items from the wishlist?'),
        action1: { label: this.$t('OK'),
          action: () => {
            this.$store.dispatch('wishlist/clear')
          }
        },
        action2: { label: this.$t('Cancel'), action: 'close' },
        hasNoTimeout: true
      })
    }
  },
  mixins: [Wishlist]
}
</script>

<style lang="scss" scoped>
@import "~theme/css/animations/transitions";
  i {
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  .wishlist_title{
    background-image: url('../../../../assets/patch_img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .clear_btn {
    display: flex;
    padding-right: 50px;
  }
  .clear-btn-btn {
      font-size: 15px;
  }
  .middle-xs.px40.wishlist_title {
    display: flex;
  }
</style>
