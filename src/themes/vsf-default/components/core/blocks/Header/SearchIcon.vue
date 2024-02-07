<template>
  <button
    type="button"
    :aria-label="$t('Open search panel')"
    class="bg-cl-transparent brdr-none inline-flex"
    @click="toggleSearchpanel"
    data-testid="openSearchPanel"
  >
    <!-- <i class="material-icons">search</i> -->
    <img class="search-icon" src="../../../../assets/header/search_icon.png">
  </button>
</template>

<script>
import SearchIcon from '@vue-storefront/core/compatibility/components/blocks/Header/SearchIcon'

export default {
  mixins: [SearchIcon]
}
</script>

<style scoped>
.search-icon{
  width: 20px;
}
</style>
