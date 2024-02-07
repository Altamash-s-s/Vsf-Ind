<template>
  <div id="career" class="cstm-page-layout join-team">
      <div class="head-section">
          <img class="hd-img" src="../assets/home/join.png">

      </div>
      <div class="cr-head">
          <h3 class="inside-hd">Embark on a Journey of Innovation: Join HUMAN ABSTRACT</h3>
          <P class="inside-para">At HUMAN ABSTRACT, we're not just building careers; we're crafting a future. Our DNA
              thrives on audacious
              ideas, relentless collaboration, and a culture that values the
              extraordinary. If you're weary of the mundane and seek a professional adventure, you've found your tribe.
          </P>
          <h3 class="inside-hd">Why Us?</h3>
          <P class="inside-para">Picture a workplace where innovation is a daily ritual, not an exception. We celebrate
              the rebels, the
              dreamers, and those unafraid to challenge the status quo. Here, you're
              not an employee; you're a co-author of our success story.
          </P>
          <h3 class="inside-hd">Beyond the Desk</h3>
          <P class="inside-para">Work-life balance isn't a myth here—it's a commitment. Flexible schedules, remote
              possibilities, and an environment that nurtures personal growth are the pillars of HUMAN ABSTRACT's ethos.
              We don't just want you to fit into our culture; we want you to enhance it.
          </P>
          <h3 class="inside-hd">Join the Movement</h3>
          <P class="inside-para">Our team isn't just a collection of individuals; we're a force. Join us on a mission
              where your ideas matter,
              your voice resonates, and your career takes flight. This is not just a
              job; it's a passport to a future shaped by passion, innovation, and shared success. Click on APPLY NOW and
              start you success journey with us at HUMAN ABSTRACT

          </P>
      </div>
        <div class="form_dv apply-btn">
            <button @click="openSidebar">APPLY NOW</button>
            <div class="arrow-wrapper">
                  <div class="arrow"></div>
            </div>
            <CareerSidebar ref="CareerSidebar"></CareerSidebar>
        </div>

  </div>
</template>
<script>
import '../css/cstm-page-layout.css';
import CareerSidebar from '../forms/CareerSidebar.vue';

export default {
  name: 'career',
  components: {
    CareerSidebar,
  },
  methods: {
  openSidebar() {
    this.$refs.CareerSidebar.openSidebar();
  },
},

};
</script>

<style scoped>
.apply-btn {
  display: flex;
  justify-content: center;
  padding: 30px 0px 30px 0px;
}
button {
--primary-color: #444444;
--secondary-color: #fff;
--hover-color: #444444;
--arrow-width: 10px;
--arrow-stroke: 2px;
box-sizing: border-box;
border: 0;
color: var(--secondary-color);
padding: 1em 1.8em;
background: var(--primary-color);
display: flex;
transition: 0.2s background;
align-items: center;
gap: 0.6em;
font-weight: bold;
font-weight: 400;
letter-spacing: 2px;
cursor: pointer;
}

button .arrow-wrapper {
display: flex;
justify-content: center;
align-items: center;
}

button .arrow {
margin-top: 1px;
width: var(--arrow-width);
background: var(--primary-color);
height: var(--arrow-stroke);
position: relative;
transition: 0.2s;
}

button .arrow::before {
content: "";
box-sizing: border-box;
position: absolute;
border: solid var(--secondary-color);
border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
display: inline-block;
top: -3px;
right: 3px;
transition: 0.2s;
padding: 3px;
transform: rotate(-45deg);
}

button:hover {
background-color: var(--hover-color);
}

button:hover .arrow {
background: var(--secondary-color);
}

button:hover .arrow:before {
right: 0;
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
            .join-team{
              padding-bottom: 20px;
            }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {

}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {

.inside-hd {
  font-size: 21px;
  line-height: 28px;
  margin-top: 26px;
}
.forms_detail.Career {
    padding-bottom: 50px;
}
.join-team{
  padding-bottom: 40px !important;
}
}

</style>