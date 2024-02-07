<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>HA Branding Blog #11</span></h3>
          <h2 class="blg-title">Stories in Threads– Beyond Fashion with Human Abstract </h2>
         <img class="hd-img blog" src="./Blog-Images/BLOG PAGES-HA BRANDING.jpg">
    </div>


    <div class="main-section blog">

      
      <div class="social-media">

          <a class="icon-link" href="https://www.instagram.com/humansabstract/" target="_blank" rel="noopener noreferrer"><img class="ss-icon" src="../assets/social-icon/Frame 19626483.png" alt="Facebook"></a>

          <a class="icon-link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img class="ss-icon" src="../assets/social-icon/Frame 19626481.png" alt="Twitter"></a>

          <a class="icon-link" href="https://www.youtube.com/@Humansabstract." target="_blank" rel="noopener noreferrer"><img class="ss-icon" src="../assets/social-icon/Frame 19626482.png" alt="Instagram"></a>

          <a class="icon-link" href="https://www.facebook.com/people/Human-Abstract/61551077677068/" target="_blank" rel="noopener noreferrer"><img class="ss-icon" src="../assets/social-icon/Frame 19626480.png" alt="LinkedIn"></a>
          
          </div>


      <div class="blg-section">
         

         <p class="blg-parapragh">In a world saturated with conformity, Human Abstract emerges as a beacon of individuality and consciousness. More than a clothing brand, it is a curator of stories, a harbinger of philosophy, and a silent revolution in the fashion landscape. As we thread our way through the conceptual masterpieces of Human Abstract, we unravel profound ideologies that shape each design– inviting you to connect, reflect, and embrace the essence of a brand that transcends mere fashion. </p>
 
         <h3 class="blg-short-title">The Design Philosophy</h3>
 
         <p class="blg-parapragh">At the heart of Human Abstract lies a design philosophy that surpasses the boundaries of traditional fashion. Each piece is a canvas narrating a heartfelt story and representing a facet of the rich human experience. These designs are not just aesthetically pleasing; they are carefully crafted narratives that spark conversations about real-life situations, emotions, and experiences. The intricate details and thoughtful placements of brand elements are not arbitrary; they carry profound meanings, allowing wearers an opportunity to connect with themselves on a deeper level. </p>
 
         <p class="blg-parapragh">In the world of fashion, Human Abstract stitches together a narrative that goes beyond trends and seasons. Our commitment to eco-consciousness and sustainability is not just a trend but a core value that influences every aspect of our design process. The materials used in our creations are chosen with care, reflecting our dedication to ethical practices. Each design is a conscious effort to bridge the gap between style and sustainability, a testament to our belief that fashion can be both beautiful and responsible. </p>
         
         <p class="blg-parapragh">In current times where fast fashion dominates, Human Abstract stands as a symbol of slow, thoughtful creation. We believe that clothing should not only be an expression of individuality but also a statement of responsibility towards our planet. Our designs are not just products; they are a reflection of our dedication to a better, more sustainable future. </p>
 
         <h3 class="blg-short-title">Designer’s Note </h3>
 
         <p class="blg-parapragh">Human Abstract isn't just a brand; it's a narrative, an exploration of the human experience woven into the fabric of conceptual masterpieces. As you wear these stories, remember that you are part of a movement, a silent revolution, and an ambassador of positive change. Connect with the philosophy, embrace the depth, and let each piece resonate with the multifaceted masterpiece that is you. Welcome to Human Abstract, where art, philosophy, and fashion converge to redefine the way we express ourselves—known as the ART OF COMFORT. With every meticulously crafted design, Human Abstract seamlessly merges artistic expression with the soothing embrace of comfort, ensuring that each piece not only tells a unique story but also envelops you in a wearable sanctuary of tranquillity. </p>
 
         <h3 class="blg-summary-title">Look Book Summary: Stories in Threads– Beyond Fashion with Human Abstract </h3>
 
         <p class="blg-parapragh">Set out on a journey with Human Abstract, a brand transcending fashion norms. Beyond mere clothing, it curates stories, philosophy, and a silent revolution. The design philosophy, rooted in heartfelt narratives, transforms each piece into a canvas of human experience. Thoughtful placements and eco-conscious practices redefine fashion, bridging style with sustainability. </p>
 
         <p class="blg-parapragh">In a world dominated by fast fashion, Human Abstract emerges as a symbol of slow, thoughtful creation, a commitment to a better, more sustainable future. We're here to invite you to connect with a movement, embracing the depth of each conceptual masterpiece. </p>
 
         <p class="blg-parapragh">Welcome to Human Abstract, where art, philosophy, and fashion converge—the ART OF COMFORT—a unique blend of creativity and comfort propelling you into a conscious, comfortable, and connected world.</p>
 
     </div>
 






    </div>




    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'habranding',

  mounted () {

        $(window).on('resize scroll', function() {  

            if ($('.social-media').isInViewport()) {
              $('.social-media').addClass('social-sticky');
              $('#app').css('overflow-x','clip');
              $('#viewport').css('overflow-x','clip');
            } else {
              $('.social-media').removeClass('social-sticky');
              $('#app').css('overflow-x','hidden');
              $('#viewport').css('overflow-x','hidden');
            }

            
        });

        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };


},

};
</script>

<style>



</style>