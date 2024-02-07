<template>
  <div id="shipment_return" class="cstm-page-layout">
    <div class="head-section">
          <img class="hd-img" src="../assets/home/shipping-return.jpg">
      </div>
    <div class="head-section">
      <h3 class="wl-msg">Greetings from Human Abstract! We're thrilled to have you here at our Shipping and Return Center. Navigating the journey from order placement to delivery and beyond should be seamless, and that's exactly what we strive for.
      Explore our shipping policy for insights into delivery times and tracking details. Should you ever need to make a return, our hassle-free process is designed with your convenience in mind.
      </h3>

      <h3 class="inside-hd"> FREE SHIPPING  </h3>
          <P class="inside-para">Free shipping is available on orders totaling <span style="font-weight: 600;">$99.00</span> or more, excluding taxes and any applicable discounts. </P>
          <P class="inside-para"> Orders that qualify for free shipping will be clearly indicated during the checkout process. Check our website for current promotions and eligibility
          </P>
    </div>

    <div class="main-section">
      <h2 class="hd-heading">SHIPPING & RETURN</h2>
    </div>

    <div class="content-section">
   
        <div class="tab">
          <button class="tablinks" @click="activateTab('firstTab')" :class="{ active: activeTab === 'firstTab' }">SHIPPING</button>
          <button class="tablinks" @click="activateTab('secondTab')" :class="{ active: activeTab === 'secondTab' }">RETURN AND EXCHANGE</button>
        </div>

        <div id="firstTab" class="tabcontent" v-show="activeTab === 'firstTab'">
          
          <h3 class="heading-para">SHIPPING</h3>
          <div class="inside-section">
              <h4 class="para-txt">1. Order Processing:</h4>
          <P class="inside-para">All orders are processed within 2 - 3 business days (excluding weekends and holidays) after receiving payment. Please ensure that your shipping address is accurate during checkout, as we will ship to the address provided.
          </P>

          <h4 class="para-txt">2. Shipping Methods:</h4>
          <P class="inside-para">We offer standard shipping to customers within the United States. Expedited shipping options are available at an additional cost. Delivery times and costs for expedited shipping will be provided during the checkout process.
          </P>

          <h4 class="para-txt">3. Shipping Rates:</h4>
          <P class="inside-para">Shipping rates are calculated based on the weight of your order and the destination. Free shipping may be available for orders over a $99.00 certain amount. Check our website for current promotions and eligibility.
          </P>

          <h4 class="para-txt">4. Estimated Delivery Times:</h4>
          <P class="inside-para">Standard shipping typically takes 5 - 7 business days for delivery within the continental United States. Remote areas may experience longer delivery times. Please note that delivery times may be affected by factors beyond our control, such as weather conditions and carrier delays.
          </P>

          <h4 class="para-txt">5. Order Tracking:</h4>
          <P class="inside-para">Once your order has been shipped, you will receive a confirmation email with a tracking number. You can track the status of your order by visiting the carrier's website.
          </P>

          <h4 class="para-txt">6. International Shipping:</h4>
          <P class="inside-para">At this time, we only ship within the United States. We do not offer international shipping.
          </P>

          <h4 class="para-txt">7. Returns Due to Incorrect Address:</h4>
          <P class="inside-para">If a package is returned due to an incorrect or incomplete address provided by the customer, additional shipping fees may apply for reshipment.
          </P>

          <h4 class="para-txt">8. ContactInformation:</h4>
          <P class="inside-para">If you have any questions or concerns about your order, please contact our customer service team at support@humansabstract.com 
          </P>
          </div>
        </div>

        <div id="secondTab" class="tabcontent" v-show="activeTab === 'secondTab'">
          <h3 class="heading-para">RETURN AND EXCHANGE</h3>
          <div class="inside-section">
              <h4 class="para-txt">1. Returns:</h4>
          <P class="inside-para">We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, you may return it within 30 days from the date of delivery.
          </P>

          <h4 class="para-txt">2. Eligibility:</h4>
          <P class="inside-para">To be eligible for a return, your item must be unused, in the same condition as received, and in the original packaging
          </P>

          <h4 class="para-txt">3. Return Process:</h4>
          <P class="inside-para">To initiate a return, please contact our customer service team at support@humansabstract.com to request a Return shipping label. Ship the item(s) back to us using a trackable shipping method.The cost of return shipping is the responsibility of the customer, unless the return is due to a defect or error on our part.
          </P>

          <h4 class="para-txt">4. Refund Process:</h4>
          <P class="inside-para">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 30 business days.
          </P>

          <h4 class="para-txt">5. Exchanges:</h4>
          <P class="inside-para">If you need to exchange an item for a different size, color, or a replacement for a defective item, please contact our customer service team at support@humansabstract.com to request an exchange. Exchanges are subject to product availability. If the requested item is not available, we will process a refund or offer an alternative solution.
          </P>

          <h4 class="para-txt">6. Damaged or Defective Items:</h4>
          <P class="inside-para">If you receive a damaged or defective item, please contact us at support@humansabstract.com immediately with photos of the damaged or defective product. We will replace the item or provide a refund, as appropriate.
          </P>

          <h4 class="para-txt">7. Contact Information:</h4>
          <P class="inside-para">If you have any questions or concerns about our return and exchange policy, please contact our customer service team at support@humansabstract.com We are here to assist you.
          </P>
          </div>
        </div>

      
      </div>
  
  </div>
</template>

<script>
import '../css/cstm-page-layout.css';


export default {
  name: 'shipment_return',
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
<style scoped>
.tab-img {
  width: 100%;
  padding-bottom: 15px;
}
* {box-sizing: border-box}
.tab {
  float: left;
  border: 1px solid #000;
  width: 20%;
  height: auto;
}

.tab button {
display: block;
background-color: inherit;
color: black;
padding: 8px 16px;
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
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; 
  padding-bottom: 15px;
}
.heading-para{
  color: #302A2A;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 37px;
  font-weight: 700;
}
.ship-return {
  font-size: 19px;
  padding-left: 11px;
  padding-top: 9px;
}
.inside-section {
  margin-top: -40px;
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
              margin-left: 43px;
            }
            .content-section {
    padding-bottom: 50px;
}
}

@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
.tabcontent{
  width: 73%;
  margin-left: 30px;
}
.tab button
{
    font-size: 14px;
}
.wl-msg{
  margin-top: 50px;
}
.inside-section {
  margin-bottom: 50px;
}
.content-section {
    padding-bottom: 50px;
}

}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {

.tab {
  width: 100%;
}
.tabcontent{
margin-left: 0;
width: 100%;
}
.heading-para {
  padding-bottom: 25px !important;
  padding-top: 12px;
  border-bottom: 1px solid #000;
  width: fit-content;
  padding-bottom: 1px !important;
  font-weight: 700;
}
.content-section {
  margin-top: 25px;
  float: left;
}
.main-section {
  margin-top: 25px;
}
.para-txt {
  font-size: 18px;
}
.content-section {
    padding-bottom: 50px;
}
.tab button {
  padding-left: 0px;
}
.inside-section{
    margin-top: 0px;
}
}
</style>  