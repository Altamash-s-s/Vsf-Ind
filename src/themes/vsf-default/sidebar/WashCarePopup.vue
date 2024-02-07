<template>
    <div class="popup-overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <!-- Add a cancel icon in the top-right corner -->
        <button class="popup-cancel" @click="closePopup">&#10005;</button>
        <div class="popup-content">
          <div class="heading-bg-img-pop">
            <h2 class="popup-head">Wash Care</h2>
          </div>
        <ul class="popup-text">
          <li>Following the right wash care instructions and methods are essential to preserve the condition and functionality of the products, reducing environmental impact and utility costs.</li>
          <li>Full load machine (avoid less clothes or over all loaded machine washes).</li>
          <li>Wash in low temperature (at or below 30C).</li>
          <li>Wash in cold temperature - Washing clothes on a hot cycle uses 75% more energy than cold water and warm water is also more likely to break down dyes and cause shrinkage.</li>
          <li>Low spin wash - reduces pilling and saves energy.</li>
          <li>Turn clothes inside out while washing to avoid damage to the print on the T-shirts.</li>
          <li>Preferably hand wash in cold water if it is embroidered or has beadwork.</li>
          <li>Do not bleach.</li>
          <li>Secret tip - Air out your clothes - you don't have to always wash a garment, instead just let it soak in the sun or brush it.</li>
        </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 import './popup.css';
  export default {
    name: 'WashCarePopup',
    methods: {
      closePopup() {
        this.$emit('close-popup');
      },
    },
  };
  </script>
  

  