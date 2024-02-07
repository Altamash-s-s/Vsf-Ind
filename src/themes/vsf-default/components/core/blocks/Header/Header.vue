<template>
  <div class="header">
    <header
      class="fixed w-100"
      :class="{ 'is-visible': navVisible }"
    >
      <div class="header_container px40">
        <div class="row between-xs middle-xs" v-if="!isCheckoutPage || isThankYouPage">
          <div class="col-md-4 col-xs-3 middle-xs">
            <div class="logo_dv">
              <hamburger-icon class="p15 icon  pointer menu_icon" />
              <a href="/">
              <img  class="ha_logo" src="../../../../assets/logo.png"/>
            </a>
            </div>
          </div>
          <div class="col-xs-2 visible-xs mob_search_icon hidden-xs">
            <search-icon class="p15 icon pointer" />
          </div>
          <div class="col-md-4 col-xs-7 center-xs pt5 ha_txt_logo">
            <div>
              <logo width="auto" height="40px"/>
            </div>
          </div>
          <div class="col-xs-2 visible-xs mob_wishlist_icon hidden-xs">
            <wishlist-icon class="p15 icon pointer" />
          </div>
          <div class="col-md-4 col-xs-2 end-xs">
            <div class="inline-flex right-icons">
              <search-icon class="p15 icon hidden-xs pointer" />
              <wishlist-icon class="p15 icon hidden-xs pointer" />
              <compare-icon class="p15 icon hidden-xs pointer" />
              <microcart-icon class="p15 icon pointer" />
              <account-icon class="p15 icon hidden-xs pointer" />
            </div>
          </div>
        </div>
        <div class="row between-xs middle-xs " v-if="isCheckoutPage && !isThankYouPage">
          <div class="col-md-4 col-xs-3 middle-xs">
            <div class="logo_dv">
              <hamburger-icon class="p15 icon  pointer menu_icon" />
              <a href="/">
              <img  class="ha_logo" src="../../../../assets/logo.png"/>
            </a>
            </div>
          </div>
          <div class="col-xs-2 visible-xs mob_search_icon hidden-xs">
            <search-icon class="p15 icon pointer" />
          </div>
          <div class="col-md-4 col-xs-7 center-xs pt5 ha_txt_logo">
            <div>
              <logo width="auto" height="40px"/>
            </div>
          </div>
          <div class="col-xs-2 visible-xs mob_wishlist_icon hidden-xs">
            <wishlist-icon class="p15 icon pointer" />
          </div>
          <div class="col-md-4 col-xs-2 end-xs">
            <div class="inline-flex right-icons">
              <search-icon class="p15 icon hidden-xs pointer" />
              <wishlist-icon class="p15 icon hidden-xs pointer" />
              <compare-icon class="p15 icon hidden-xs pointer" />
              <microcart-icon class="p15 icon pointer" />
              <account-icon class="p15 icon hidden-xs pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CurrentPage from 'theme/mixins/currentPage'
import AccountIcon from 'theme/components/core/blocks/Header/AccountIcon'
import CompareIcon from 'theme/components/core/blocks/Header/CompareIcon'
import HamburgerIcon from 'theme/components/core/blocks/Header/HamburgerIcon'
import Logo from 'theme/components/core/Logo'
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
import SearchIcon from 'theme/components/core/blocks/Header/SearchIcon'
import WishlistIcon from 'theme/components/core/blocks/Header/WishlistIcon'

export default {
  name: 'Header',
  components: {
    AccountIcon,
    CompareIcon,
    HamburgerIcon,
    Logo,
    MicrocartIcon,
    SearchIcon,
    WishlistIcon
  },
  mixins: [CurrentPage],
  data () {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54
    }
  },
  computed: {
    ...mapState({
      isOpenLogin: state => state.ui.signUp,
      currentUser: state => state.user.current
    }),
    isThankYouPage () {
      return this.$store.state.checkout.isThankYouPage
        ? this.$store.state.checkout.isThankYouPage
        : false
    }
  },
  beforeMount () {
    window.addEventListener(
      'scroll',
      () => {
        this.isScrolling = true
      },
      { passive: true }
    )

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled()
        this.isScrolling = false
      }
    }, 250)
  },
  methods: {
    gotoAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup')
    },
    hasScrolled () {
      this.scrollTop = window.scrollY
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false
      } else {
        this.navVisible = true
      }
      this.lastScrollTop = this.scrollTop
    }
  }
}
</script>

<style>
.header {
    scroll-snap-align: start;
    scroll-snap-stop: always;
}
</style>
<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-icon-hover: color(secondary, $colors-background);

.ha_logo {
  width: 34px;
}
.menu_icon i.material-icons {
    color: #000;
}
.logo_dv {
    display: flex;
    align-items: center;
    gap: 10px;
}
.header_container {
  max-width: 100%;
    width: -webkit-fill-available;
    margin: auto;
    background-color: #0000002e;
    height: 70px;
    display: grid;
    align-items: center;
    transition: all 0.3s;
}
.header_container:hover {
    background-color: #FFF;
    cursor: pointer;
}
header {
  height: 54px;
  top: -70px;
  z-index: 3;
  transition: top 0.2s ease-in-out;
  &.is-visible {
    top: 0;
  }
}
.icon {
  opacity: 0.6;
  &:hover,
  &:focus {
    background-color: $color-icon-hover;
    opacity: 1;
  }
}
.right-icons {
  //for edge
  float: right;
}
// .header-placeholder {
//   height: 54px;
// }
.links {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .row.middle-xs {
    margin: 0 -15px;

    &.py5 {
      margin: 0;
    }
  }
  .col-xs-2:first-of-type {
    padding-left: 0;
  }
  .col-xs-2:last-of-type {
    padding-right: 0;
  }
  a,
  span {
    font-size: 12px;
  }
  
}


@media only screen and (min-device-width: 1200px) and (max-device-width: 1280px) {
}

@media only screen and (min-device-width: 1281px) and (max-device-width: 1369px) {
}

@media only screen and (min-device-width: 1370px) and (max-device-width: 1440px) {
}

@media only screen and (min-device-width: 1441px) and (max-device-width: 1536px) {
}

@media only screen and (min-device-width: 1537px) and (max-device-width: 1600px) {
}

@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) {
}

@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {

  .header_container {
    padding: 0 20px;
  }
  .menu_icon {
    padding-left: 7px;
    padding-right: 7px;
  } 
  .logo_dv img{
    width: 25px;
  }
}



</style>
