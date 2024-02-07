<template>
  
  <div class="media-gallery-carousel">

    <div class="product_closeup_video_dv">
          <video class="product-video" playsinline autoplay muted loop>
            <source :src="prd_c_vdo" type="video/mp4">
          </video> 
    </div>
      
    <carousel
      :per-page="1"
      :mouse-drag="false"
      :navigation-enabled="true"
      pagination-active-color="#828282"
      pagination-color="transparent"
      navigation-next-label="<i class='material-icons p15 cl-bg-tertiary pointer'>keyboard_arrow_right</i>"
      navigation-prev-label="<i class='material-icons p15 cl-bg-tertiary pointer'>keyboard_arrow_left</i>"
      ref="carousel"
      :speed="carouselTransitionSpeed"
      @pageChange="pageChange"
      :navigate-to="currentPage"
      
    >
      <!-- <slide>
        <div class="product_closeup_video_dv">
          <video class="product-video" autoplay muted loop>
            <source :src="prd_c_vdo" type="video/mp4">
          </video> 
        </div>
      </slide> -->
      <slide
        v-for="(images, index ) in gallery"
        :key="images.src"
      >
        <div
          class="product-image-container bg-cl-secondary"
          :class="{'video-container w-100 h-100 flex relative': images.video}"
        >
          <product-image
            v-show="hideImageAtIndex !== index"
            @dblclick="openOverlay"
            class="pointer image"
            :image="images"
            :alt="productName | htmlDecode"
          />
          <product-video
            v-if="images.video && (index === currentPage)"
            v-bind="images.video"
            :index="index"
            @video-started="onVideoStarted"
          />
        </div>
      </slide>
    </carousel>

    <!-- <div
        v-for="(images, index ) in gallery"
        :key="images.src"
        class="prd_img"
      >
        <div
          class="product-image-container bg-cl-secondary"
          :class="{'video-container w-100 h-100 flex relative': images.video}"
        >
          <product-image
            v-show="hideImageAtIndex !== index"
            @dblclick="openOverlay"
            class="pointer image"
            :image="images"
            :alt="productName | htmlDecode"
          />
          <product-video
            v-if="images.video && (index === currentPage)"
            v-bind="images.video"
            :index="index"
            @video-started="onVideoStarted"
          />
        </div>
      </div> -->
    
    <!-- <i
      class="zoom-in material-icons p15 cl-bgs-tertiary pointer"
      @click="openOverlay"
    >zoom_in</i> -->
  </div>
</template>

<script>
import config from 'config'
import ProductImage from './ProductImage'
import ProductVideo from './ProductVideo'
import reduce from 'lodash-es/reduce'
import map from 'lodash-es/map'

export default {
  name: 'ProductGalleryCarousel',
  components: {
    'Carousel': () => import(/* webpackChunkName: "vue-carousel" */ 'vue-carousel').then(Slider => Slider.Carousel),
    'Slide': () => import(/* webpackChunkName: "vue-carousel" */ 'vue-carousel').then(Slider => Slider.Slide),
    ProductImage,
    ProductVideo
  },
  props: {
    gallery: {
      type: Array,
      required: true
    },
    productName: {
      type: String,
      default: ''
    },
    configuration: {
      type: Object,
      required: true
    },
    prd_c_vdo: {
      type: [Number, String],
      required: false
    }
  },
  data () {
    return {
      carouselTransition: true,
      carouselTransitionSpeed: 0,
      currentColor: 0,
      currentPage: 0,
      hideImageAtIndex: null
    }
  },
  computed: {},
  beforeMount () {
    this.$bus.$on('product-after-configure', this.selectVariant)
    this.$bus.$on('product-after-load', this.selectVariant)
  },
  mounted () {
    this.selectVariant()

    if (this.configuration.color) {
      const { color } = this.configuration
      this.currentColor = color.id
    }

    this.$emit('loaded')

    $(document).ready(function () {

      // $('.color_button').click(function () {
      //   // $('.VueCarousel-slide').css('display','none');
      //     $('.VueCarousel-slide.VueCarousel-slide-active.VueCarousel-slide-center').css('display','block');
      // });

    });
  },
  beforeDestroy () {
    this.$bus.$off('product-after-configure', this.selectVariant)
    this.$bus.$off('product-after-load', this.selectVariant)
  },
  methods: {
    navigate (index) {
      if (index < 0) return
      this.currentPage = index
    },
    async selectVariant (configuration) {
      await this.$nextTick()
      if (config.products.gallery.mergeConfigurableChildren) {
        const option = reduce(map(this.configuration, 'attribute_code'), (result, attribute) => {
          result[attribute] = this.configuration[attribute].id
          return result
        }, {})
        if (option) {
          let index = this.gallery.findIndex(
            obj => obj.id && Object.entries(obj.id).toString() === Object.entries(option).toString(), option)
          if (index < 0) index = this.gallery.findIndex(obj => String(obj.id && obj.id.color) === String(option.color))
          this.navigate(index)
        }
      }

      this.$emit('close')
    },
    openOverlay () {
      const currentSlide = this.$refs.carousel.currentPage
      this.$emit('toggle', currentSlide)
    },
    switchCarouselSpeed () {
      const { color } = this.configuration
      if (color && this.currentColor !== color.id) {
        this.currentColor = color.id
        var abc = this.currentColor = color.value
        $('.VueCarousel-slide').attr('data-parentID', abc);
        this.carouselTransitionSpeed = 0
      } else {
        this.carouselTransitionSpeed = 500
      }
    },
    pageChange (index) {
      this.switchCarouselSpeed()
      this.hideImageAtIndex = null
    },
    onVideoStarted (index) {
      this.hideImageAtIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/animations/transitions';
.media-gallery-carousel {
  position: relative;
  text-align: center;
  height: 100%;
}
.zoom-in {
  position: absolute;
  bottom: 0;
  right: 0;
}
.image{
  opacity: 1;
  will-change: opacity;
  transition: .3s opacity $motion-main;
  &:hover{
    opacity: .9;
  }
}
.video-container {
  align-items: center;
  justify-content: center;
}

.VueCarousel-slide.VueCarousel-slide-active.VueCarousel-slide-center.show_image , .VueCarousel-slide.VueCarousel-slide-active.VueCarousel-slide-center{
  display: block !important;
}
.VueCarousel-slide.hide_image {
  display: none;
}
</style>

<style lang="scss">

// .VueCarousel-inner {
//   display: block !important;
// }
// .VueCarousel-slide {
//     float: left;
//     width: 100%;
//     height: 100%;
// }
button.VueCarousel-dot {
  background-color: #969696 !important;
}
button.VueCarousel-dot.VueCarousel-dot--active {
  background-color: #666 !important;
}
.VueCarousel-navigation-button i {
    font-size: 35px;
    padding-right: 0px;
    padding-left: 0px;
}

.media-gallery-carousel,
.media-zoom-carousel {
  .VueCarousel-pagination {
    position: absolute;
    bottom: -74px;
    background: #e5e5e5;
    padding-bottom: 26px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .VueCarousel-navigation-button {
    margin: 0;
    transform: translateY(-50%) !important;
  }
  .VueCarousel-slide {
    backface-visibility: unset;
  }
  .VueCarousel-navigation {
    opacity: 0;
    &--disabled {
      display: none;
    }
  }
  .VueCarousel-dot {
    padding: 8px !important;
    button {
      border: 2px solid #828282;
    }
  }
  &:hover {
    .VueCarousel-navigation {
      opacity: .9;
    }
    .VueCarousel-navigation-button {
      transition: opacity 3s;
      &:after {
        background-color: transparent;
      }
    }
  }
}
.product_closeup_video_dv {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.product_closeup_video_dv video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

@media only screen and (min-device-width: 767px) and (max-device-width:1200px) {

  .VueCarousel {
    height: auto !important;
  }
  

  .VueCarousel-wrapper {
    height: auto !important;
  }
  .VueCarousel-inner {
    height: auto !important;
  }
  
  .media-gallery-carousel {
    height: auto !important;
  }

}


</style>   