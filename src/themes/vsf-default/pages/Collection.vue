<template>
    <div>
        <div class="video-element collection">
            <div class="parallax-section snap first_fold">
                <div class="parallax-image section5">
    
                    <img class=top-img src="../assets/collection/one_liner_top_img2.png">
                    <!-- <img class="mobile-img" src="../assets/collection/line-mob.png"> -->

                </div>
            </div>
        </div>
        <div class="description-container">
            <p class="dscrpt-txt">In publishing and graphic design, &amp;Lorem ipsum is a placeholder text commonly used to
                    demonstrate The visual form of a document or a typeface without relying on meaningful content. Lorem
                    ipsum may be used as a placeholder before final copy is available</p>
        </div>

        

        <div class="collection-section">
            <Collection_slider></Collection_slider>
            <div class="collect_img_cnt">
                <img class="head-img-cl" src="../assets/collection/ha_text.svg">
                <a href="ha-onliner-23-24.html" class="section_btn">
                <div class="">
                    <p>See All</p>
                </div>
                </a>
            </div>
        </div>

    </div>
</template>
  
<script>
import Collection_slider from '../pages/Collection_slider.vue'


export default {
    name: 'collection',
    data() {
        return {
            loading: true
        };
    },
    components: {
        Collection_slider
    },
    mounted () {
    }
};
</script>


<style scoped>
.mute_icon {
    display: none;
}
.video-container {
    position: relative;
    width: 100%;
    height: 100%;
}
.video-abs {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
img.play-img {
    width: 50px;
    position: absolute;
    bottom: 4px;
    left: 0px;
    cursor: pointer;
}
img.pause-img {
    width: 50px;
    position: absolute;
    bottom: 4px;
    left: 0px;
    cursor: pointer;
}
button.video-control {
    border: 0;
    background-color: #0000;
}
.video-control.show {
    display: block;
}
img.mute_icon {
    position: absolute;
    right: 25px;
    width: 24px;
    bottom: 15px;
    cursor: pointer;
}
img.unmute_icon {
    position: absolute;
    right: 25px;
    width: 24px;
    bottom: 15px;
    cursor: pointer;
}
.video-control:not(.playing) .video-control-play, .video-control.playing .video-control-pause {
    display: none;
}
.parallax-section .parallax-content {
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.1em;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 100%;
    position: relative;
    z-index: 2;
}
.head-text {
    position: absolute !important;
    bottom: 30px;
    left: 40%;
}
h2.text-hd {
    margin-left: 6px;
}
.section_btn {
    background-color: rgba(25, 17, 11, .2);
    border-color: #fff;
    border: 1px solid #FFF;
    backdrop-filter: blur(2px);
    color: #FFF;
    font-weight: 400;
    padding: 16px 22px;
    width: -moz-fit-content;
    width: fit-content;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin: auto;
    margin-top: 22px;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 8rem;
    cursor: pointer;
    margin-left: 35px;
}
.section_btn:hover {
    background: #00000029;
    color: #FFF;
    border: 1px solid #FFF;
    cursor: pointer;
}
.section_btn div {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
    position: relative;
}
.section_btn div p {
    margin: 0;
    margin-left: 7px;
    transition: all 0.4s;
}
.parallax-section.snap.first_fold {
    height: 100vh;
    overflow: visible;
    position: relative;
}
.parallax-image {
    position: relative;
}
.video-container {
    position: relative;
    width: 100%;
    height: 100%;
}
video {
    width: 100%;
    /* Ensure the video takes the full width of its container */
    height: 100%;
    /* Ensure the video takes the full height of its container */
    object-fit: cover;
    /* Maintain aspect ratio and cover the entire container */
}
.parallax-section .parallax-image {
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    height: 100%;
    left: 0;
    opacity: 1.5;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    filter: alpha(opacity=50);
    position: absolute;
    top: 0;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -o-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    width: 100%;
    z-index: 1;
}
.section_btn:hover div p {
    margin-left: -6px;
}
.section_btn div img {
    width: 20px;
    margin-left: 7px;
    display: none;
}
.section_btn div::after {
    content: '';
    background-image: url('../assets/icons/chevron-1.svg');
    position: absolute;
    width: 20px;
    height: 20px;
    top: -2px;
    right: -12px;
    background-size: cover;
    opacity: 0;
    transition: all 0.4s;
}
.section_btn:hover div::after {
    opacity: 1;
}
.description-container {
    padding: 9.2% 0 9.2%;
    background-color: #000;
    position: relative;
    z-index:1;
}
p.dscrpt-txt {
    color: #FFF;
    text-align: center;
    font-size: 24px;
    line-height: 34px;
    font-weight: 300;
}
.top-img{
    width: 100%;
    height: 100%;
}
.mobile-img{
        display: none;
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

    .parallax-section.snap.first_fold{
        height: 100vh;
    }

}

@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
    .head-text{
       left: 35%;
    }
    p.dscrpt-txt{
        font-size: 14px;
        line-height: 25px;
        padding: 38px;
    }
    .parallax-section.snap.first_fold{
        height: 100vh;
    }

}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    .head-text{
        left: 20%;
    }
    p.dscrpt-txt{
        font-size: 14px;
        line-height: 17px;
        padding:0 50px;
    }
    h2.text-hd{
        margin-left: 16px;
        font-size: 35px;
    }

    .parallax-section.snap.first_fold{
        height: 100vh;
    }
    .top-img {
        display: none;
    }
    .mobile-img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
    }

    .first_fold .parallax-image {
        background-image: url('../assets/collection/line-mob.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
    }

}

@media only screen and (min-device-width: 768px) and (max-device-width: 1200px) {
    .video-element.collection{
        position: relative;
        z-index: 1;
    }
    .parallax-section.snap.first_fold{
        height: auto !important;
    }
    .parallax-section .parallax-image{
        position: relative;
        z-index: 0;
    }
    .description-container{
        margin-top: -6px;
    }
}

</style>









