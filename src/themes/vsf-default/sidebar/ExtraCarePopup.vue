<template>
    <div class="popup-overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <!-- Add a cancel icon in the top-right corner -->
        <button class="popup-cancel" @click="closePopup">&#10005;</button>
        <div class="popup-content">            
            <div class="heading-bg-img-pop">
              <h3 class="popup-head">Extra Care</h3>
          </div>
        <ul class="popup-text">
          <li>To avoid pilling, wash inside out / use lint remover </li>
          <li>Iron at low temperature </li>
          <li>Turn clothes inside out while ironing to avoid damage to the print or embroidery</li>
          <li>Opt for wet cleaning service instead of dry cleaning as it is considered to be more sustainable because it does not involve the use of hazardous solvents</li>
        </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import './popup.css';
  export default {
    name: 'ExtraCarePopup',
    methods: {
      closePopup() {
        this.$emit('close-popup');
      },
    },
  };
  </script>
  
