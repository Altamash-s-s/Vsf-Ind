<template>


  <div class="product align-center w-100" v-observe-visibility="visibilityChanged">
    

    <router-link
      class="block no-underline product-link"
      :to="productLink"
      data-testid="productLink"
    >

      <div
        class="product-cover"
        :class="[{ sale: labelsActive && isOnSale }, { new: labelsActive && isNew }]"
      >
        <product-image
          class="product-cover__thumb"
          :image="thumbnailObj"
          :alt="product.name | htmlDecode"
          :calc-ratio="false"
          data-testid="productImage"
        />
      </div>
      
      <div class="add_card">

        <svg class="plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>

        <p class="mb0 cl-accent mt0" v-if="!onlyImage">
          {{ product.name | htmlDecode }}
        </p>

        <div class="product__icons">
            <AddToWishlist :product="product">
              <div
                class="product__icon"
                :class="{'product__icon--active': isOnWishlist }"
                :title="isOnWishlist ? $t('Remove') : $t('Add to favorite') "
                @click="toggleActiveState"
              >
                <!-- <i class="material-icons">{{ favoriteIcon }}</i> -->
                <img v-if="!isActive" src="../core/icon/bookmark.png" class="bookmar-icon" >
                <img v-else src="../core/icon/fill-bookmark.png" class="bookmar-icon">
              </div>
            </AddToWishlist>
            <AddToCompare :product="product">
              <div
                class="product__icon"
                :class="{'product__icon--active':isOnCompare } "
                :title="isOnCompare ? $t('Remove from compare') : $t('Add to compare')"
              >
                <!-- <i class="material-icons">compare</i> -->
              </div>
            </AddToCompare>
        </div>

      </div>
  
      <span
        class="price-original mr5 lh30 cl-secondary"
        v-if="product.special_price && parseFloat(product.original_price_incl_tax) > 0 && !onlyImage"
      >{{ product.original_price_incl_tax | price(storeView) }}</span>

      <span
        class="price-special lh30 cl-accent weight-700"
        v-if="product.special_price && parseFloat(product.special_price) > 0 && !onlyImage"
      >{{ product.price_incl_tax | price(storeView) }}</span>
      
      <span
        class="lh30 cl-secondary"
        v-if="!product.special_price && parseFloat(product.price_incl_tax) > 0 && !onlyImage && cateId === 16"
      >{{ product.price_incl_tax | price(storeView) }}</span>
    </router-link>
  </div>
</template>

<script>
import rootStore from '@vue-storefront/core/store'
import { ProductTile } from '@vue-storefront/core/modules/catalog/components/ProductTile.ts'
import config from 'config'
import ProductImage from './ProductImage'
import AddToWishlist from 'theme/components/core/blocks/Wishlist/AddToWishlist'
import AddToCompare from 'theme/components/core/blocks/Compare/AddToCompare'
import { IsOnWishlist } from '@vue-storefront/core/modules/wishlist/components/IsOnWishlist'
import { IsOnCompare } from '@vue-storefront/core/modules/compare/components/IsOnCompare'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

export default {
  mixins: [ProductTile, IsOnWishlist, IsOnCompare],
  components: {
    ProductImage,
    AddToWishlist,
    AddToCompare
  },
  
  props: {
    labelsActive: {
      type: Boolean,
      default: true
    },
    onlyImage: {
      type: Boolean,
      default: false
    },
    cateId: {
      type: Number,  // Adjust the type based on your actual data type
      required: false
    }
  },
  computed: {
    thumbnailObj () {
      return {
        src: this.thumbnail,
        loading: this.thumbnail
      }
    },
    favoriteIcon () {
      return this.isOnWishlist ? 'favorite' : 'favorite_border'
    },
    storeView () {
      return currentStoreView()
    }
  },
  methods: {
    onProductPriceUpdate (product) {
      if (product.sku === this.product.sku) {
        Object.assign(this.product, product)
      }
    },
    toggleActiveState() {
    this.isActive = !this.isActive;
  },
    visibilityChanged (isVisible, entry) {
      if (
        isVisible &&
        config.products.configurableChildrenStockPrefetchDynamic &&
        config.products.filterUnavailableVariants &&
        this.product.type_id === 'configurable' &&
        this.product.configurable_children &&
        this.product.configurable_children.length > 0
      ) {
        const skus = [this.product.sku]
        for (const confChild of this.product.configurable_children) {
          const cachedItem = rootStore.state.stock.cache[confChild.id]
          if (typeof cachedItem === 'undefined' || cachedItem === null) {
            skus.push(confChild.sku)
          }
        }
        if (skus.length > 0) {
          rootStore.dispatch('stock/list', { skus: skus }) // store it in the cache
        }
      }
    }
  },
  beforeMount () {
    this.$bus.$on('product-after-priceupdate', this.onProductPriceUpdate)
  },
  beforeDestroy () {
    this.$bus.$off('product-after-priceupdate', this.onProductPriceUpdate)
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/animations/transitions';
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';

$bg-secondary: color(secondary, $colors-background);
$border-secondary: color(secondary, $colors-border);
$color-white: color(white);

.product {
  width: 90%;
  position: relative;
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
  &__icons {
    display: flex;
    flex-direction: column;
    padding-top: 0px;
  }
  &__icon {
    padding-top: 0px;
    opacity: 1;
    z-index: 2;
    transition: 0.3s opacity $motion-main;
    @media (max-width: 767px) {
      opacity: 1;
    }
    &--active {
      opacity: 1;
    }
  }
  &:hover {
    .product__icon {
      opacity: 1;
    }
  }
}

.price-original {
  text-decoration: line-through;
}

%label {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: $border-secondary;
  text-transform: uppercase;
  color: $color-white;
  font-size: 12px;
}

.product-cover {
  float: left;
  width: 100%;
  @media screen and (min-width: 768px) {
    &:hover {
      .product-cover__thumb {
        opacity: 1;
      }
      &.sale::after,
      &.new::after {
        opacity: 0.8;
      }
    }
  }

  &.sale {
    &::after {
      @extend %label;
      content: 'Sale';
    }
  }
  &.new {
    &::after {
      @extend %label;
      content: 'New';
    }
  }
}
///cstm css //
.plus-icon {
    margin: auto;
    background-color: rgba(255, 255, 255, 0.4);
    color: #000;
    padding: 5px;
    transform: scale(1.5);
    border-radius: 100%;
    position: absolute;
    top: -45px;
}

img.icon-img1 {
    width: 20px;
    height: 20px;
}
.mb0.cl-accent.mt10.icon_btn {
    border-radius: 100%;
    border: 0;
    padding: 10px;
    margin-top: 0;
    height: 40px;
    width: 40px;
    background-color: #ffffff80;
}
// .product-listing .product {
//   background-color: #cdced2;
//   margin: 0 8px;
// }
.add_card {
  text-align: left;
  margin-top: 10px;
  float: left;
  border: 1px solid #C1C1C1;
  width: 100%;
  padding: 5px 7px;
  display: flex;
  box-sizing: border-box;
  position: relative;
  justify-content: center;

}
.add_card p {
  line-height: 20px;
  font-size: 15px;
  width:95%;
}
.bookmar-icon {
    width: 19px;
    float: right;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {

  .product {
    width: 100%;
    &__icons {
      bottom: 14px;
    }
  }
  .add_card p{
    width: 85%;
  }
  

}
/// css css end//
</style>
