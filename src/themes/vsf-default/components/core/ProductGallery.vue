<template>
  <div class="media-gallery">
    <div v-if="isOnline" class="relative w-100 mg_dv">
      <product-gallery-overlay
        v-if="isZoomOpen"
        :current-slide="currentSlide"
        :product-name="product.name"
        :gallery="gallery"
        @close="toggleZoom"
      />
      <no-ssr>
        <product-gallery-carousel
          v-if="showProductGalleryCarousel"
          :gallery="gallery"
          :configuration="configuration"
          :product-name="product.name"
          @toggle="openOverlay"
          @close="onEscapePress"
          @loaded="carouselLoaded = true"
          :prd_c_vdo="prd_video"
        />
      </no-ssr>
    </div>
    <product-image v-else :image="offline" />
  </div>
</template>

<script>
import { ProductGallery } from '@vue-storefront/core/modules/catalog/components/ProductGallery.ts'
import ProductGalleryOverlay from './ProductGalleryOverlay'
import onEscapePress from '@vue-storefront/core/mixins/onEscapePress'
import NoSSR from 'vue-no-ssr'
import ProductImage from './ProductImage'
import { onlineHelper } from '@vue-storefront/core/helpers'
import ProductGalleryCarousel from './ProductGalleryCarousel.vue'

export default {
  components: {
    ProductGalleryCarousel,
    'no-ssr': NoSSR,
    ProductGalleryOverlay,
    ProductImage
  },
  props: {
    prd_video: {
      type: [Number, String],
      required: false
    }
  },
  mixins: [
    ProductGallery,
    onEscapePress
  ],
  watch: {
    '$route': 'validateRoute'
  },
  data () {
    return {
      isZoomOpen: false,
      showProductGalleryCarousel: false,
      currentSlide: 0,
      carouselLoaded: false
    }
  },
  mounted () {
    this.showProductGalleryCarousel = true
  },
  computed: {
    isOnline (value) {
      return onlineHelper.isOnline
    }
  },
  methods: {
    // openOverlay (currentSlide) {
    //   this.currentSlide = currentSlide
    //   this.toggleZoom()
    // },
    validateRoute () {
      this.$forceUpdate()
    },
    toggleZoom () {
      this.isZoomOpen = !this.isZoomOpen
    },
    onEscapePress () {
      if (this.isZoomOpen) {
        this.toggleZoom()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.media-gallery {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  min-height: calc(90vw * 1.1);

  @media only screen and (min-width:768px) {
    min-height: inherit;
  }

  &--loaded {
    background-image: none;
  }
}


.media-gallery .mg_dv {
  height: 100% !important;
}

@media only screen and (min-device-width: 767px) and (max-device-width:1200px) {


.media-gallery .mg_dv {
  height: 100% !important;
}


}

</style>
