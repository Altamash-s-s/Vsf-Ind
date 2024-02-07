<template>
    <modal name="modal-storymodel" :width="620">
      <div slot="header">
        Story
      </div>
      <div slot="content">
  
      </div>
    </modal>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  import Modal from 'theme/components/core/Modal'
  
  export default {
    name: 'StoryModel',
    computed: {
      ...mapState({
        activeElem: state => state.ui.authElem
      })
    },
    components: {
      Modal
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
        this.$bus.$emit('modal-hide', 'modal-storymodel')
      }
    }
  }
  </script>
  
  <style scoped>
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