<template>
  <div>
    
    <div class="section" v-for="(imageClass, index) in imageClasses" :key="index" :class="{ 'active': index === activeSection }">
      <div class="image-container">
        <div :class="['image', imageClass]">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" type="module">
export default {
  name: 'collection',
  data() {
  return {
    imageClasses: ['img-1 linear-mob-one', 'img-2 linear-mob-two', 'img-3 linear-mob-three', 'img-4 linear-mob-four'],
    activeSection: 0, // Add activeSection to track the active section
  };
},
mounted() {
  window.addEventListener('scroll', this.changeImage);
  this.changeImage(); // Call it initially to set the initial state.
},
beforeDestroy() {
  window.removeEventListener('scroll', this.changeImage);
},
methods: {
  changeImage() {
    const scroll = window.scrollY + window.innerHeight / 4;
    this.imageClasses.forEach((imageClass, index) => {
      const el = document.querySelector(`.section:nth-child(${index + 1})`) as HTMLElement;
      if (!el) return;
      
      if (el.offsetTop <= scroll && el.offsetHeight + el.offsetTop > scroll) {
        this.activeSection = index; // Update the active section
      }
    });
  },
},
};
</script>
<style>
body {
margin: 0;
}
.img-1{
  background-image: url('../assets/collection/collection-3.png')
}
.img-2{
  background-image: url('../assets/collection/collection-6.png')
}
.img-3{
  background-image: url('../assets/collection/c1.png')
}
.img-4{
  background-image: url('../assets/collection/collection-4.png')
}

.section {
  display: flex;
  min-height: 100vh;
  position: relative;
}
.image-container {
  position: relative;
  display: flex;
}
.image {
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
  opacity: 0;
  /* transition:  fade 0.5s ease; */
  transition: opacity .5s linear;
  z-index: -1;
}
.section.active .image {
  opacity: 1;
  transition: opacity .4s cubic-bezier(.25,.46,.45,.94);
}
h2.ha-head {
    position: sticky;
    top: 20rem;
    color: #FFF;
    z-index: 2;
    margin-left: 105px;
    font-size: 70px;
}
.collect_img_cnt {
    width: fit-content;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
}

.collect_img_cnt .section_btn {
  margin: auto !important;
  margin-top: 60px !important;
  max-width: 93px !important;
  padding: 16px 30px !important;
}
.collect_img_cnt .section_btn:hover {
  background: #00000029;
  color: #FFF;
  border: 1px solid #FFF;
}
.collect_img_cnt .section_btn div {
  width: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.collect_img_cnt .section_btn div p {
  margin: 0;
  margin-left: 12px;
  transition: all 0.4s;
}
.collect_img_cnt .section_btn:hover div p {
  margin-left: -6px;
}
.collect_img_cnt .section_btn div img {
  width: 20px;
  margin-left: 7px;
  display: none;
}
.collect_img_cnt .section_btn div::after {
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
.collect_img_cnt .section_btn:hover div::after {
  opacity: 1;
}


@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {

  .collect_img_cnt {
    top: 185px;
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
    left: 7.5%;
    width: 85%;
    text-align: center;
  }
  .collect_img_cnt img {
    width: 278px;
  }
  .collect_img_cnt .section_btn {
    margin-top: 22px !important;
    padding: 7px 5px !important;
  }
  .collect_img_cnt .section_btn div p { 
    margin-left: 0 !important;
    font-size:13px;
  }
  .section .image.linear-mob-one {
    background-image: url('../assets/collection/oneliner/linear-mob-1.png');
    display: block !important;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  .section .image.linear-mob-three {
    background-image: url('../assets/collection/oneliner/liner_col_4_mob.jpg');
    display: block !important;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  .section .image.linear-mob-four {
    background-image: url('../assets/collection/oneliner/liner-mob-3.jpg');
    display: block !important;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  .section .image.linear-mob-two {
    background-image: url('../assets/collection/oneliner/liner-mob-4.jpg');
    display: block !important;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  .section .image.img-1 {
    display: none;
  }
  .section .image.img-2 {
    display: none;
  }
  .section .image.img-3 {
    display: none;
  }
  .section .image.img-4 {
    display: none;
  }

}


@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {

  .collect_img_cnt {
    width: 46%;
    top: 52%;
    left: 5%;
  }
  .collect_img_cnt img {
    width: 100%;
  }
  .collect_img_cnt .section_btn {
    margin-top: 30px !important;
  }

}

@media only screen and (min-device-width : 820px) and (max-device-width : 1180px) and (orientation : landscape) {

  .collect_img_cnt {
    width: 46%;
    top: 52%;
    left: 5%;
  }
  .collect_img_cnt img {
    width: 100%;
  }
  .collect_img_cnt .section_btn {
    margin-top: 30px !important;
  }

}

@media only screen and (min-device-width : 776px) and (max-device-width : 1194px) and (orientation : landscape) {

  .collect_img_cnt {
    width: 46%;
    top: 52%;
    left: 5%;
  }
  .collect_img_cnt img {
    width: 100%;
  }
  .collect_img_cnt .section_btn {
    margin-top: 30px !important;
  }

}

@media only screen and (min-device-width : 810px) and (max-device-width : 1080px) and (orientation : landscape) {

  .collect_img_cnt {
    width: 46%;
    top: 52%;
    left: 5%;
  }
  .collect_img_cnt img {
    width: 100%;
  }
  .collect_img_cnt .section_btn {
    margin-top: 30px !important;
  }

}

</style>