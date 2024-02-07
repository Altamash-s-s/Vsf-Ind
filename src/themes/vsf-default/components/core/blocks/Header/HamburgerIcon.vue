<template>
  <button
    type="button"
    class="bg-cl-transparent brdr-none inline-flex humb_icon"
    @click="openSidebarMenu"
    :aria-label="$t('Open menu')"
    data-testid="menuButton"
  >
    <i class="material-icons">dehaze</i>
  </button>
</template>

<script>
import HamburgerIcon from '@vue-storefront/core/compatibility/components/blocks/Header/HamburgerIcon'

export default {
  mixins: [HamburgerIcon]
}
</script>

<style>
.humb_icon i {
  color: #000 !important;
}

</style>