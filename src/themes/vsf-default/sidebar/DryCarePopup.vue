<template>
    <div class="popup-overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <!-- Add a cancel icon in the top-right corner -->
        <button class="popup-cancel" @click="closePopup">&#10005;</button>
        <div class="popup-content">          
          <div class="heading-bg-img-pop">
            <h3 class="popup-head">Drying Your Clothes</h3>
          </div>
        <ul class="popup-text">
          <li>Line dry clothing - drying open in the sun instead of machine dry reducing damage to the fabric and print, while saving energy. </li>
          <li>Turn clothes inside out while drying.</li>
          <li>Flat dry instead of hanging. to avoid change in shape of the garment. </li>
        </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import './popup.css';
  export default {
    name: 'DryCarePopup',
    methods: {
      closePopup() {
        this.$emit('close-popup');
      },
    },
  };
  </script>
  

  