<template>
    <div id="Offer" class="cstm-page-layout">
        <div class="head-section">
            <img class="hd-img" src="/assets/offer/top-img-offer.jpg">
        </div>
        <div class="main-section one top offer-main-section">
            <div class="video-part offer-img-part">
                <img class="care-video offer-img-sec" src="/assets/offer/offer-img.jpg">
            </div>
            <div class="content_part">
                <h3 class="care-head">Offer</h3>
                <P class="care-par">Following the right wash care instructions and methods are essential to preserve the condition and
                    functionality of the products, reducing environmental impact and utility costs.
                </P>
                <button class="care-btn" @click="openPopup1" >Redeem Now</button>

            </div>
        </div>

        <div class="main-section two offer-main-section">

            <div class="content_part two">
                <h3 class="care-head">Offer</h3>
                <P class="care-par">Drying clothes improperly can cause damage to the fabric and shape of the garments. 
                </P>
                <button class="care-btn" @click="openPopup2">Redeem Now</button>
            </div>

            <div class="video-part offer-img-part">
                <img class="care-video offer-img-sec" src="/assets/offer/offer-img.jpg">
            </div>

        </div>

        <div class="main-section one lst_offer offer-main-section offer-bottom">
            <div class="video-part offer-img-part">
                <img class="care-video offer-img-sec" src="/assets/offer/offer-img.jpg">
            </div>
            <div class="content_part">
                <h3 class="care-head">Offer</h3>
                <P class="care-par">Proper clothing storage not only helps maintain the condition of your garments but also makes it easier to keep your wardrobe organized and accessible.
                </P>
                <button class="care-btn" @click="openPopup3">Redeem Now</button>
            </div>
        </div>




        <div v-if="showPopup1" class="overlay" @click="closePopup1"></div>
        <div :class="{ 'offerpopup': !showPopup1, 'offerpopup show': showPopup1 }">
            <div class="popup-content">
                <div class="heading-bg-img-pop">
                    <h2>Offer Form</h2>
                </div>
                <offersidebarform />
                <button class="popup-cancel" @click="closePopup1">&#10005;</button>
            </div>
        </div>

    <!-- Second Popup -->
    <div v-if="showPopup2" class="overlay" @click="closePopup2"></div>
    <div :class="{ 'offerpopup': !showPopup2, 'offerpopup show': showPopup2 }">
      <div class="popup-content">
                <div class="heading-bg-img-pop">
                    <h2>Offer Form</h2>
                </div>
                <offerformtwo />
                <button class="popup-cancel" @click="closePopup2">&#10005;</button>
            </div>
    </div>

    <!-- Third Popup -->
    <div v-if="showPopup3" class="overlay" @click="closePopup3"></div>
    <div :class="{ 'offerpopup': !showPopup3, 'offerpopup show': showPopup3 }">
      <div class="popup-content">
                <div class="heading-bg-img-pop">
                    <h2>Offer Form</h2>
                </div>
                <offerformthree />
                <button class="popup-cancel" @click="closePopup3">&#10005;</button>
            </div>
    </div>

    <!-- Fourth Popup -->
    <div v-if="showPopup4" class="offerpopup show">
      <div class="popup-content">
        <h2>Popup 4 Content</h2>
        <p>This is the content for the fourth popup.</p>
        <button @click="closePopup4">Close</button>
      </div>
    </div>

    <!-- Fifth Popup -->
    <div v-if="showPopup5" class="offerpopup show">
      <div class="popup-content">
        <h2>Popup 5 Content</h2>
        <p>This is the content for the fifth popup.</p>
        <button @click="closePopup5">Close</button>
      </div>
    </div>

    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import offersidebarform from '../forms/offersidebarform.vue'
import offerformtwo from '../forms/offerformtwo.vue'
import offerformthree from '../forms/offerformthree.vue'

export default {
  name: 'offer',
  components: {
    offersidebarform,
    offerformtwo,
    offerformthree
    },
  data() {
    return {
      showPopup1: false,
      showPopup2: false,
      showPopup3: false,
      showPopup4: false,
      showPopup5: false,
    };
  },
  methods: {
    openPopup1() {
      this.showPopup1 = true;

    },
    openPopup2() {
      this.showPopup2 = true;
    },
    openPopup3() {
      this.showPopup3 = true;
    },
    openPopup4() {
      this.showPopup4 = true;
    },
    openPopup5() {
      this.showPopup5 = true;
    },
    closePopup1() {
      this.showPopup1 = false;
    },
    closePopup2() {
      this.showPopup2 = false;
    },
    closePopup3() {
      this.showPopup3 = false;
    },
    closePopup4() {
      this.showPopup4 = false;
    },
    closePopup5() {
      this.showPopup5 = false;
    },
  },
};
</script>


<style scoped>
/* .lst_offer {
    margin-bottom: 50px;
} */
  .heading-bg-img-pop {
    padding: 24px;
    background-image: url('/assets/patch_img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 74px;
}
.heading-bg-img-pop h2 {
    font-size: 40px;
    margin-top: 0;
}
.main-section.one.top{
    margin-top: 90px;
}
.care-video {
    width: 100%;
}

.main-section {
    display: flex;
    gap: 20px;
}

.video-part {
    width: 50%;
}

.content_part {
    width: 50%;
    margin: 50px auto;
    padding-left: 30px;
}

.main-section.two {
    margin-top: 200px;
}
.care-par {
    margin-top: -5px;
    margin-bottom: 25px;
}

.main-section.one {
    margin-top: 200px;
    margin-bottom: 70px !important;

}
.content_part.two{
    padding-left: 0;
    padding-right: 30px;
}
.care-head {
    color: #000;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
}

.care-btn {
    border: 0;
    padding: 15px;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 4px;
    background-color: #444;
    color: #FFFF;
}

.apply-btn {
    display: flex;
    justify-content: center;
    padding: 30px 0px 30px 0px;
}
.popup-cancel {
    position: absolute;
    top: 30px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #999;
  }
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value to control transparency */
  z-index: 1;
}


.offerpopup {
  position: fixed;
  top: 0;
  right: -100%; /* Initially set the right property to hide the popup */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align the popup content to the right */
  z-index: 1000;
  transition: right 0.3s ease-in-out; /* Add transition for smooth sliding effect */
}


.popup-content {
  background-color: #fff;
  border-radius:0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 70%; /* Set the width of the popup content */
  height: 100%;
}

/* Show the popup by setting the right property to 0% */
.offerpopup.show {
  right: 0%;
}


@media only screen and (min-device-width: 1200px) and (max-device-width: 1280px) {

}
@media only screen and (min-device-width: 1281px) and (max-device-width: 1369px) {



}

@media only screen and (min-device-width: 1370px) and (max-device-width: 1440px) {

 
}

@media only screen and (min-device-width: 1441px) and (max-device-width: 1536px) {
}

@media only screen and (min-device-width: 1537px) and (max-device-width: 1600px) {
}

@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) {
                .cstm-page-layout {
                  padding: 0px 30px;
              }
        .main-section.one.top {
            margin-top: 50px;
        }
        .main-section.two {
            margin-top: 100px;
        }
        .main-section.one {
            margin-top: 100px;
            margin-bottom: 50px;
        }
        .care-head {
            font-size: 29px;
          }

             
}

@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {

    .content_part{
    margin: -25px auto;
    }
    .care-head {
        font-size: 25px !important;
    }
    .care-par {
        font-size: 15px;
    }
    .care-btn{
    padding: 15px;
    }
    .main-section.one.top {
    margin-top: 50px;
    }
    .main-section.two{
    margin-top: 100px;
    }
    .main-section.one{
    margin-top: 100px;
    }
    .content_part{
    padding-left: 0;
    }
    .main-section.one.bottom {
    margin-bottom: 100px;
    }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    .main-section {
        flex-direction: column;
    }

    .content_part, .video-part {
        width: 100%;
        order: 1;
        margin: 0;
        padding: 0 2px;
    }

    .content_part {
        margin: 0;
        padding: 0 2px;
    }

    .video-part {
        order: 2;
        margin-top: 20px;
        width: 100%;
    }
    .main-section.one{
    margin-top: 20px;

    }
    .main-section.two {
        margin-top: 0px;
    }
    .main-section.one.top {
        margin-top: 30px;
    }
    .care-video {
        width: 100%;
        padding-bottom: 30px;
    }
    .content_part.two{
        padding-left: 0px;
    }
    .care-head {
        font-size: 25px;
        line-height: 22px;
    }
    .care-par {
        font-size: 16px;
    }
    .care-btn {
    padding: 16px;
    }

    .offerpopup  , .popup-content{
      width:100%;
    }

    .popup-cancel{
    top: 23px;
    right: 25px;
    padding: 0;
  }
  .offer-img-part {
    order: 1;
  }
  .offer-img-sec {
    padding-bottom: 0px;
}

}
@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
.offerpopup {
  background: #fff;
  padding: 0px;
  max-width: 100%;
}

.popup-head{
   margin-bottom: 0;
  font-size: 27px;
  margin-top: 0;
}
.popup-text {
  color: #333;
  font-size: 14px;
  line-height: 23px;
  height: 300px;
  overflow: auto;
  margin-left: 15px;
}
.popup-head{
  justify-content: left;
}
.popup-text li {
  margin-bottom: 13px;
}
.main-section{
display: flex;
gap: 10px !important;
margin-bottom: 55px !important;
}
.content_part, .video-part{
width: 97%;
order: 2 !important;
margin: 0;
padding: 0 2px;
}
.video-part{
order: 1 !important;
margin-top: 0;
width: 100%;
}
.care-par{
font-size: 16px;
margin-bottom: 10px !important;
}
.care-head{
font-size: 24px;
line-height: 25px;
margin-bottom: 15px;
margin-top: 0;
}
.care-video{
padding-bottom: 0px !important;
}
.care-par {
margin-bottom: 5px;
}
.care-btn {
  padding: 10px 12px !important;
  letter-spacing: 2.5px !important;
}
.main-section.two{
  margin-top: 0px !important;
}
.main-section.one.bottom {
  margin-bottom: 70px !important;
}
.offer-bottom{
  margin-bottom: 70px;
}
.heading-bg-img-pop h2{
    font-size: 27px;
    line-height: 29px;
    margin-top: 0;
}
.heading-bg-img-pop{
  height: 50px;
}

}

</style>