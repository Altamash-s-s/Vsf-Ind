<template>
    <div>
      <div class="overlay" @click="closeSidebar" v-if="isOpen"></div>
      <div class="right-sidebar" :class="{ open: isOpen }">
        <!-- Sidebar content goes here -->
        <button class="close_btn giveaway" @click="closeSidebar">
          <img class="close_icon" src="../assets/icons/close.svg">
        </button>
        <div class="mina-form">

          <div class="popup_ttl_dv">
            <h2 class="main-hd main-hd">Giveaway Form</h2>
          </div>
          
          <Giveaway_from /> 
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Giveaway_from from './Giveaway_from.vue';

  export default {
    name: 'sidebarForm',
    components: {
      Giveaway_from,
    },
    data() {
        return {
            isOpen: false,
        };
    },
    created() {
        // Add a click event listener to the document to close the sidebar
        document.addEventListener('click', this.handleDocumentClick);
    },
    destroyed() {
        // Remove the event listener when the component is destroyed
        document.removeEventListener('click', this.handleDocumentClick);
    },
    methods: {
        openSidebar() {
            this.isOpen = true;
        },
        closeSidebar() {
            this.isOpen = false;
        },
    },

};
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background color */
    z-index: 999; /* Place it below the sidebar */
    pointer-events: none; /* Make the overlay non-interactive */
  }
  .main-hd.main-hd {
    padding-left: 37px;
}

.popup_ttl_dv {
  background-image: url('../assets/patch_img.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 118px;
  display: flex;
  align-items: center;
}
  .popup_ttl_dv h2 {
    font-size: 40px;
  }
  .forms_detail form {
    margin-top: 30px;
}
  .right-sidebar {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: right 0.3s;
    z-index: 999;
  }
  
  .right-sidebar.open {
    right: 0;
    width: 700px;
  }
  
  .sidebar-content {
    padding: 20px;
  }
     /* Form Css start here  */
 .giveaway_hd{
    margin-left: 35px;
    margin-top: 0;
    font-family: 'PoppinsRegular';
 }
.close_btn {
  display: block;
  margin: auto;
  margin-right: 27px;
  background: transparent;
  position: absolute;
  top: 15px;
  right: 0;
  width: 21px;
  padding: 0;
}
.close_icon {
    width:100%;
}
@media only screen and (max-width: 767px) {
    .right-sidebar.open {
        right: 0 !important;
        width: auto !important;
        padding: 0 0px !important;
    }
    
    .main-hd{
        margin-left: 0;
        margin-top: 0;
        font-family: 'PoppinsRegular';
    }
    .close_btn.giveaway {
      display: block;
      margin: auto;
      margin-right: 0;
      padding-right: 0px;
      padding-top: 15px;
      right:40px;
  }
    
    .inside-hd {
        margin-top: 20px;
        font-size: 26px;
        line-height: 36px;
        margin-bottom: 0;
    }
    .popup_ttl_dv h2{
      font-size: 27px;
      line-height: 29px;
      padding-left: 20px !important;
  }
  .popup_ttl_dv{
    height: 100px !important;
  }
    }



     /* Form Css start end here  */

  </style>
  