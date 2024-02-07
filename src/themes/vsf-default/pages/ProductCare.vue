<template>
    <div id="productcare" class="cstm-page-layout">
        <div class="head-section">
            <img class="hd-img" src="../assets/home/care-fit.png">
        </div>
        <WashCarePopup v-if="showWashCarePopup" @close-popup="showWashCarePopup = false" />
        <DryCarePopup v-if="showDryCarePopup" @close-popup="showDryCarePopup = false" />
        <StoreCarePopup v-if="showStoreCarePopup" @close-popup="showStoreCarePopup = false" />
        <ExtraCarePopup v-if="showExtraCarePopup" @close-popup="showExtraCarePopup = false" />
        <EcoCarePopup v-if="showEcoCarePopup" @close-popup="showEcoCarePopup = false" />


        <div class="main-section one top">
            <div class="video-part">
                <img class="care-video" src="../assets/product_care/CARE PAGE_WASH CARE.jpg">
            </div>
            <div class="content_part">
                <h3 class="care-head">Wash Care</h3>
                <P class="care-par">Following the right wash care instructions and methods are essential to preserve the condition and
                    functionality of the products, reducing environmental impact and utility costs.
                </P>
                <button class="care-btn" @click="showWashCarePopup = true" >Know More</button>

            </div>
        </div>

        <div class="main-section two">

            <div class="content_part two">
                <h3 class="care-head">Drying Your Clothes</h3>
                <P class="care-par">Drying clothes improperly can cause damage to the fabric and shape of the garments. 
                </P>
                <button class="care-btn" @click="showDryCarePopup = true">Know More</button>
            </div>

            <div class="video-part">
                <img class="care-video" src="../assets/product_care/CARE PAGE_DRY CARE.jpg">
            </div>

        </div>

        <div class="main-section one">
            <div class="video-part">
                <img class="care-video" src="../assets/product_care/CARE PAGE_STORING.jpg">
            </div>
            <div class="content_part">
                <h3 class="care-head">Store your clothing the right way</h3>
                <P class="care-par">Proper clothing storage not only helps maintain the condition of your garments but also makes it easier to keep your wardrobe organized and accessible.
                </P>
                <button class="care-btn" @click="showStoreCarePopup = true" >Know More</button>
            </div>
        </div>

        <div class="main-section two">

            <div class="content_part two">
                <h3 class="care-head">Extra Care</h3>
                <P class="care-par">Treating your clothing with care and following proper care instructions is a wise investment that can lead to a more sustainable, cost-effective, and enjoyablewardrobe.
                        </P>
                <button class="care-btn" @click="showExtraCarePopup = true">Know More</button>
            </div>

            <div class="video-part">
                <img class="care-video" src="../assets/product_care/CARE PAGE_EXTRA CARE.jpg">
            </div>

        </div>


        <div class="main-section one bottom">
            <div class="video-part">
                <img class="care-video" src="../assets/product_care/CARE PAGE_ECO FRIENDLY .jpg">
            </div>
            <div class="content_part">
                <h3 class="care-head">Eco Friendly Tips</h3>
                <P class="care-par">By making more eco-conscious choices in your clothing care routine, you can be a part of the solution to the environmental challenges
                        </P>
                <button class="care-btn" @click="showEcoCarePopup = true">Know More</button>
            </div>
        </div>

    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import WashCarePopup from '../sidebar/WashCarePopup.vue'
import DryCarePopup from '../sidebar/DryCarePopup.vue'
import StoreCarePopup from '../sidebar/StoreCarePopup.vue'
import ExtraCarePopup from '../sidebar/ExtraCarePopup.vue'
import EcoCarePopup from '../sidebar/EcoCarePopup.vue'

export default {
    name: 'ProductCare',
    components: {
        WashCarePopup,
        DryCarePopup,
        StoreCarePopup,
        ExtraCarePopup,
        EcoCarePopup,
    },
    data() {
    return {
      showWashCarePopup: false,
      showDryCarePopup: false,
      showStoreCarePopup: false,
      showExtraCarePopup: false,
      showEcoCarePopup: false,
      // Add similar data properties for other sections and their popups
    };
  },
}


</script>


<style scoped>
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
    margin-bottom: 25px !important;
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
        width: 97%;
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
        margin-top: 40px;
    }
    .care-video {
        width: 100%;
        padding-bottom: 0px;
    }
    .content_part.two{
        padding-left: 0px;
    }
    .care-head {
        font-size: 25px;
    }
    .care-par {
        font-size: 16px;
    }

    .main-section{
display: flex;
gap: 10px !important;
margin-bottom: 55px !important;
}
.content_part, .video-part{
width: 100%;
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
.care-par {
margin-bottom: 5px;
}
.care-btn {
  padding: 10px 12px !important;
  letter-spacing: 2.5px !important;
}
.main-section.two{
  margin-top: 40px !important;
}
.main-section.one.bottom {
  margin-bottom: 70px !important;
}

}
</style>