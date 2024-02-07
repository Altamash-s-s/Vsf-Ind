<template>
  <modal name="modal-sizeguide" :width="620">
    <div slot="header">
      Size Guide
    </div>
    <div slot="content">
      <SizeGuideContent />
      <div class="size_chart_img" v-html="size_chart"></div>
    </div>
  </modal>
</template>

<script>
import { mapState } from 'vuex'
import Modal from 'theme/components/core/Modal'
import SizeGuideContent from 'theme/components/theme/blocks/Static/Example'

export default {
  name: 'SizeGuide',
  computed: {
    ...mapState({
      activeElem: state => state.ui.authElem
    })
  },
  components: {
    Modal,
    SizeGuideContent
  },
  props: {
    size_chart: {
      type: [Number, String],
      required: false
    }
  },
  methods: {
    close(e) {
      if (e) localStorage.removeItem('redirect')
      this.$bus.$emit('modal-hide', 'modal-sizeguide')
    }
  }
}
</script>

<style >
.modal {
  font-size: 18px;
}

.modal-content {
  max-height: 80%;
}

.size_chart_img img {
  width: 100%;
}
</style>
