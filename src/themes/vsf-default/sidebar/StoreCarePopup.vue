<template>
    <div class="popup-overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <!-- Add a cancel icon in the top-right corner -->
        <button class="popup-cancel" @click="closePopup">&#10005;</button>
        <div class="popup-content">
          <div class="heading-bg-img-pop">
            <h3 class="popup-head">Store your clothing the right way</h3>
          </div>
        <ul class="popup-text">
          <li>Store in cool, dry place</li>
          <li>When storing clothes, make sure to avoid direct sunlight to prevent fading.</li>
          <li>Avoid hanging T-shirts (fold and keep in closet)</li>
          <li>Make sure to give proper aeration and provide adequate space between to keep clothes fresh.</li>
        </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 import './popup.css';
  export default {
    name: 'StoreCarePopup',
    methods: {
      closePopup() {
        this.$emit('close-popup');
      },
    },
  };
  </script>
  

  