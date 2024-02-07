<template>
  <no-ssr>
    <span v-if="isSupported" @click="share">
      <slot>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_333_289)">
    <mask id="mask0_333_289" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
      <path d="M0 1.90735e-06H18V18H0V1.90735e-06Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_333_289)">
      <path d="M8.43555 9.56445L17.4731 0.526942" stroke="#969696" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.43514 9.56486C8.43514 9.56486 3.35872 8.11445 1.34054 7.53782C0.859183 7.40029 0.527344 6.96038 0.527344 6.45972V6.45943C0.527344 5.95582 0.857672 5.51183 1.34009 5.36713C4.718 4.35375 17.4727 0.527346 17.4727 0.527346C17.4727 0.527346 13.6462 13.282 12.6329 16.6599C12.4882 17.1423 12.0442 17.4727 11.5406 17.4727H11.5403C11.0396 17.4727 10.5997 17.1408 10.4622 16.6595C9.88555 14.6413 8.43514 9.56486 8.43514 9.56486Z" stroke="#969696" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_333_289">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </slot>
    </span>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import { isServer } from '@vue-storefront/core/helpers'

export default {
  name: 'WebShare',
  components: {
    'no-ssr': NoSSR
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default () {
        return typeof window !== 'undefined' ? window.location.href : ''
      }
    }
  },
  computed: {
    isSupported () {
      return !isServer && navigator.share
    }
  },
  methods: {
    share () {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: this.text,
          url: this.url || window.location.href
        })
      }
    }
  }
}
</script>
