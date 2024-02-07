<template>
  <div id="about" class="cstm-page-layout">
    <div class="head-section">
      <img class="hd-img" src="../assets/home/about-us.png">
    </div>

    <div class="main-section">
      <h2 class="hd-heading about-us-hd">ABOUT HUMAN ABSTRACT</h2>
    </div>

    <div class="content-section">
   
        <div class="tab">
          <button class="tablinks" @click="activateTab('firstTab')" :class="{ active: activeTab === 'firstTab' }">TEAM</button>
          <button class="tablinks" @click="activateTab('secondTab')" :class="{ active: activeTab === 'secondTab' }">BRAND VISION</button>
          <button class="tablinks" @click="activateTab('thirdTab')" :class="{ active: activeTab === 'thirdTab' }">ABOUT US</button>
        </div>

        <div id="firstTab" class="tabcontent" v-show="activeTab === 'firstTab'">
          
          <h3 class="heading-para">TEAM</h3>
          <img class="tab-img" src="../assets/home/img-2.png">
          <p class="para-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p class="para-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>

        <div id="secondTab" class="tabcontent" v-show="activeTab === 'secondTab'">
          <h3 class="heading-para">BRAND VISION</h3>
          <img class="tab-img" src="../assets/home/img-1.png">
          <p class="para-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p class="para-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>

        <div id="thirdTab" class="tabcontent" v-show="activeTab === 'thirdTab'">
          <h3 class="heading-para">ABOUT US</h3>
          <img class="tab-img" src="../assets/home/img-2.png">
          <p class="para-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p class="para-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
  
  </div>
</template>

<script>
import '../css/cstm-page-layout.css';


export default {
  name: 'knowus',
  components: {},
  data() {
    return {
      activeTab: 'firstTab', // Set the default active tab
    };
  },
  methods: {
    activateTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>
<style>
.tab-img {
  width: 100%;
  padding-bottom: 15px;
}

* {box-sizing: border-box}


.tab {
float: left;
border: 1px solid #000;
width: 20%;
height: 250px;

}

.tab button {
display: block;
background-color: inherit;
color: black;
padding: 22px 16px;
width: 90%;
border: none;
outline: none;
text-align: left;
cursor: pointer;
transition: 0.3s;
font-size: 17px;
margin: 5%;
border-radius: 4px;
}

.tab button.active {
  color: #717171;
}

.tabcontent {
  float: left;
  padding: 0px 0px;
  width: 75%;
  border-left: none;
  margin-left: 62px;
}
.para-text{
  color: #302A2A;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; 
  padding-bottom: 17px;
}
.heading-para{
  font-size: 21px !important;
  font-weight: 700 !important;
  color: #302A2A;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 37px;
}
@media only screen and (min-device-width: 1200px) and (max-device-width: 1280px) {
  .tabcontent {
    margin-left: 47px;
    width: 76%;
}
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
              .tabcontent{
                width: 75%;
                margin-left: 45px;
              }
              .heading-para{
                padding-bottom: 15px;
              }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
            .tabcontent {
              width: 75%;
              margin-left: 33px;
          }
          .heading-para{
            padding-bottom: 15px;
          }
          .tab button{
            padding: 16px 16px;
          }
          .tab{
            height: 215px;
          }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
            .tab{
              width: 100%;
            }
            .tabcontent {
              margin-left: 0;
              width: 100%;
          }
          .main-section {
              margin-top: 10px;
              margin-bottom: -35px;
          }
          .heading-para {
              padding-bottom: 5px;
              padding-top: 21px;
          }
          .about-us-hd {
          margin-bottom: 50px;
      }
      .tab button{
          padding-left: 0px !important;
      }
}



</style>