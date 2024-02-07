<template>
  <div class="default-layout">
    <overlay v-if="overlayActive" />
    <loader />
    <div id="viewport" class="w-100 relative">
      <main-header />
      <async-sidebar
        :async-component="SearchPanel"
        :is-open="isSearchPanelOpen"
        @close="$store.commit('ui/setSearchpanel')"
      />
      <async-sidebar
        :async-component="Microcart"
        :is-open="isMicrocartOpen"
        @close="$store.commit('ui/setMicrocart')"
      />
      <async-sidebar
        :async-component="SidebarMenu"
        :is-open="isSidebarOpen"
        @close="$store.commit('ui/setSidebar')"
        direction="left"
      />
      <async-sidebar
        :async-component="Wishlist"
        :is-open="isWishlistOpen"
        @close="$store.commit('ui/setWishlist')"
      />
      <slot />
      <main-footer />
      <notification />
      <sign-up />
      <cookie-notification />
      <offline-badge />
      <order-confirmation :orders-data="ordersData" v-if="loadOrderConfirmation" />
    </div>
    <vue-progress-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AsyncSidebar from 'theme/components/theme/blocks/AsyncSidebar/AsyncSidebar.vue'
import MainHeader from 'theme/components/core/blocks/Header/Header.vue'
import MainFooter from 'theme/components/core/blocks/Footer/Footer.vue'
import Overlay from 'theme/components/core/Overlay.vue'
import Loader from 'theme/components/core/Loader.vue'
import Notification from 'theme/components/core/Notification.vue'
import SignUp from 'theme/components/core/blocks/Auth/SignUp.vue'
import CookieNotification from 'theme/components/core/CookieNotification.vue'
import OfflineBadge from 'theme/components/core/OfflineBadge.vue'
import { isServer } from '@vue-storefront/core/helpers'
import Head from 'theme/head'
import config from 'config'

const SidebarMenu = () => import(/* webpackPreload: true */ /* webpackChunkName: "vsf-sidebar-menu" */ 'theme/components/core/blocks/SidebarMenu/SidebarMenu.vue')
const Microcart = () => import(/* webpackPreload: true */ /* webpackChunkName: "vsf-microcart" */ 'theme/components/core/blocks/Microcart/Microcart.vue')
const Wishlist = () => import(/* webpackPreload: true */ /* webpackChunkName: "vsf-wishlist" */ 'theme/components/core/blocks/Wishlist/Wishlist.vue')
const SearchPanel = () => import(/* webpackChunkName: "vsf-search-panel" */ 'theme/components/core/blocks/SearchPanel/SearchPanel.vue')
const OrderConfirmation = () => import(/* webpackChunkName: "vsf-order-confirmation" */ 'theme/components/core/blocks/Checkout/OrderConfirmation.vue')

export default {
  data () {
    return {
      loadOrderConfirmation: false,
      ordersData: [],
      Microcart,
      Wishlist,
      SearchPanel,
      SidebarMenu
    }
  },
  computed: {
    ...mapState({
      overlayActive: state => state.ui.overlay,
      isSearchPanelOpen: state => state.ui.searchpanel,
      isSidebarOpen: state => state.ui.sidebar,
      isMicrocartOpen: state => state.ui.microcart,
      isWishlistOpen: state => state.ui.wishlist
    })
  },
  methods: {
    onOrderConfirmation (payload) {
      this.loadOrderConfirmation = true
      this.ordersData = payload
      this.$bus.$emit('modal-show', 'modal-order-confirmation')
    },
    fetchMenuData () {
      return this.$store.dispatch('category-next/fetchMenuCategories', {
        level: config.entities.category.categoriesDynamicPrefetch && config.entities.category.categoriesDynamicPrefetchLevel >= 0
          ? config.entities.category.categoriesDynamicPrefetchLevel
          : null,
        skipCache: isServer
      })
    }
  },
  serverPrefetch () {
    return this.fetchMenuData()
  },
  beforeMount () {
    // Progress bar on top of the page
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      this.$Progress.increase(40)
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
    this.$bus.$on('offline-order-confirmation', this.onOrderConfirmation)
  },
  mounted () {


      // function lockPortraitOrientation() {
      //     var isiPad = navigator.userAgent.match(/iPad/i) !== null;
      //     function handleOrientationChange() {
      //       if (isiPad) {
      //         if (window.orientation === 0) {

      //           alert("Please rotate your device to landscape orientation.");
      //           const content = document.getElementById('app');
      //           const tab_msg = document.getElementById('tab_mgs');
      //           content.style.display = 'none';
      //           tab_msg.style.display = 'block';

      //         }
      //         else {
      //           const content = document.getElementById('app');
      //           const tab_msg = document.getElementById('tab_mgs');
      //           content.style.display = 'block';
      //           tab_msg.style.display = 'none';
      //         }
      //       }
      //     }

      //     window.addEventListener("orientationchange", handleOrientationChange);

      //     handleOrientationChange();
      // }

      // lockPortraitOrientation();


    


    $(window).on('resize scroll', function() {
        if ($('.prd_detail_col').isInViewport()) {
          $('.prd_detail_col').addClass('dv_sticky');
          $('#app').css('overflow-x','clip');
          $('#viewport').css('overflow-x','clip');
        } else {
          $('.prd_detail_col').removeClass('dv_sticky');
          $('#app').css('overflow-x','hidden');
          $('#viewport').css('overflow-x','hidden');
        }
        
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };


  },
  beforeDestroy () {
    this.$bus.$off('offline-order-confirmation', this.onOrderConfirmation)
  },
  metaInfo: Head,
  components: {
    MainHeader,
    MainFooter,
    SidebarMenu, // eslint-disable-line vue/no-unused-components
    Overlay,
    Loader,
    Notification,
    SignUp,
    CookieNotification,
    OfflineBadge,
    OrderConfirmation,
    AsyncSidebar
  }
}
</script>

<style lang="scss" src="theme/css/main.scss"></style>


<style>

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
 #tab_mgs {
  display: block !important;
 }
 #app {
  display: none;
 }
}

/* @media only screen and (min-device-width: 776px) and (max-device-width: 1194px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}


@media only screen and (min-device-width: 810px) and (max-device-width: 1080px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
} */

/* Apply styles only in portrait mode for iPads */
/* @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}

@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}

@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}

@media only screen and (min-device-width: 834px) and (max-device-width: 1194px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
  body{
    width:100vh;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
} */


#tab_mgs {
  display: none;
  width: 100%;
  height: auto;
}
.cstm-page-layout{
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    padding-bottom: 60px;
}


@media only screen and (min-device-width: 320px) and (max-device-width: 992px) {

  .pb60[data-v-1437de77] {
    padding-top: 40px;
    padding-bottom: 40px;
  }   

}

@media only screen and (min-device-width: 1200px) and (max-device-width: 1280px) {

  .cstm-page-layout {
      padding: 0 30px;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
    .cstm-page-layout {
        padding: 0 30px;
    }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    .cstm-page-layout {
        padding: 0 20px;
    }
}

a.underline:after, a:not(.no-underline):hover:after{
  background:  transparent !important;
}
</style>
