<template>
  <router-link :to="localizedRoute('/')" :title="$t('Home Page')" class="no-underline inline-flex">
    <img
      :width="width"
      :height="height"
      src="/assets/logo_txt.png"
      :alt="$t(defaultTitle)"
    >
  </router-link>
</template>

<script>
import config from 'config'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

export default {
  data () {
    const storeView = currentStoreView()
    return {
      defaultTitle: storeView.seo.defaultTitle ? storeView.seo.defaultTitle : config.seo.defaultTitle
    }
  },
  props: {
    width: {
      type: [String, Number],
      required: true
    },
    height: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style>



@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
  .ha_txt_logo img {
    width: 100%;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .ha_txt_logo img {
    width: 100%;
  }

}
 
</style>
