<template>
  <div v-if="isOpen" class="popup-overlay" @click="closePopup">
    <div class="story-popup">
      <!-- Add your story content here -->
      <div v-html="getCurrentProduct.story_image"></div>
      <h2>{{ $t('Story Content') }}</h2>
      <p>{{ $t('This is the story content.') }}</p>
      <!-- You can customize the content based on your needs -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryPopup',
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    closePopup() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add styles for your popup */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}

.story-popup {
  /* Add your styling here */
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>