<template>
    <div class="popup-overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <!-- Add a cancel icon in the top-right corner -->
        <button class="popup-cancel" @click="closePopup">&#10005;</button>
        <div class="popup-content"> 
            <div class="heading-bg-img-pop">
              <h3 class="popup-head">Eco Friendly Tips</h3>
          </div>
        <ul class="popup-text">
          <li>Repair your clothes - stitch small torn areas, fix buttons etc. instead of throwing it away </li>
          <li>Switch to minimal packaging, laundry products and cleaning solutions</li>
        </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
   import './popup.css';

  export default {
    name: 'EcoCarePopup',
    methods: {
      closePopup() {
        this.$emit('close-popup');
      },
    },
  };
  </script>
  

  