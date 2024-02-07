<template>
    <div id="collabration" class="cstm-page-layout collabration-btm">
        <div class="head-section">
            <img class="hd-img" src="../assets/home/collabration.png">
        </div>
        <div class="cr-head">
            <h3 class="inside-hd"> WELCOME MESSAGE </h3>
            <P class="inside-para">Welcome to the intersection of creativity and couture! At Human Abstract, we're on a mission to redefine fashion by fusing the worlds of art and apparel. If you're an artist with a passion for making a statement through style, we invite you to collaborate with us and bring your unique vision to life.
            </P>
            <h3 class="inside-hd cstm-clr-hd">Why Collaborate with HUMAN ABSTRACT</h3>
            <h4 class="para-txt cstm-para">1. Artistry Meets Fashion:</h4>
            <P class="inside-para">Imagine your art walking down the runway, becoming a living, breathing expression of style. HUMAN ABSTRACT is not just a clothing label; it's a canvas for artists to showcase their work in a way that transcends conventional boundaries. Join us in creating a fashion narrative that blurs the lines between art and apparel.
            </P>
            <h4 class="para-txt cstm-para">2. Global Exposure:</h4>
            <P class="inside-para">Collaborating with HUMAN ABSTRACT means stepping onto a global stage. Your creations won't just be limited to galleries – they'll be worn by individuals who appreciate the artistry behind every stitch. Gain exposure to a diverse audience and make your mark in the fashion world on an international scale.
            </P>
            <h4 class="para-txt cstm-para">3. Amplify Your Portfolio:</h4>
            <P class="inside-para">Whether you specialize in illustrations, paintings, or digital art, collaborating with HUMAN ABSTRACT adds a dynamic dimension to your portfolio. Your art becomes more than just a visual experience; it transforms into a tangible, wearable masterpiece that reflects perspective.
            </P>
            <h4 class="para-txt cstm-para">4. Collaborative Innovation:</h4>
            <P class="inside-para">We believe in the magic that happens when different forms of creativity collide. By joining forces with HUMAN ABSTRACT, you'll have the opportunity to collaborate with our design team, infusing your artistic flair into our collections. This is a chance to be part of the creative process from ideation to the final stitch.
            </P>
            <h3 class="inside-hd cstm-clr-hd">How It Works</h3>
            <h4 class="para-txt cstm-para">1. Submission of Portfolio:</h4>
            <P class="inside-para">Ready to make your mark in the fashion world? Submit your portfolio showcasing your artistic journey. We're looking for artists whose work aligns with our vision of pushing boundaries and creating fashion that tells a story.
            </P>
            <h4 class="para-txt cstm-para">2. Curated Collaborations:</h4>
            <P class="inside-para">Upon acceptance into our collaborative network, we carefully pair artists with our design team to ensure a seamless fusion of art and fashion. This curated approach allows for a synergistic creative process that respects and highlights each artist's unique voice.
            </P>
            <h4 class="para-txt cstm-para">3. Production and Showcasing:</h4>
            <P class="inside-para">As a collaborator, you'll witness your art transform into a wearable masterpiece. From the production process to showcasing in our collections, your creations will be celebrated at fashion events, exhibitions, and beyond
            </P>
            <h4 class="para-txt cstm-para">4. Recognition and Royalties (Subject to Application):</h4>
            <P class="inside-para">Your contributions won't go unnoticed. As a collaborator, you'll have the opportunity to apply for recognition and royalties, ensuring that your talent is valued and rewarded. The application process for these benefits will be detailed upon acceptance into our collaborative network.
            </P>       
        </div>
        <div class="form_dv apply-btn">
                 <button @click="openSidebar">COLLABORATION NOW </button>
                    <div class="arrow-wrapper">
                         <div class="arrow"></div>
                    </div>
            <collabrationSidebar ref="collabrationSidebar"></collabrationSidebar>
                  </div>
    </div>
</template>
<script>
import '../css/cstm-page-layout.css';
import collabrationSidebar from '../forms/collabrationSidebar.vue'

export default {
    name: 'collabration',
    components: {
        collabrationSidebar,
    },
    methods: {
        openSidebar() {
            // Access the sidebar component using refs
            this.$refs.collabrationSidebar.openSidebar(); // Call the openSidebar method from the collabrationSidebar component
        }
    },

};
</script>
<style>
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

.cstm-clr-hd {
    margin-top: 40px;
    margin-bottom: -20px;
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
    .collabration-btm{
        padding-bottom: 50px;
    }

}

@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {

}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    .para-txt {
    font-size: 20px;
    line-height: 23px;
    margin-top: 25px;
    margin-bottom: 0;
}
.cr-head {
    margin-top: 5px;
}
#collabration {
    padding-bottom: 40px !important;
}

}
</style>


