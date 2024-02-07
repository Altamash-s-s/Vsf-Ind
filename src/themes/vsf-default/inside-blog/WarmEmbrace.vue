<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>Warm Embrace</span></h3>
          <h2 class="blg-title">Embracing Inclusivity and Celebrating You!</h2>
          <img class="hd-img blog" src="./Blog-Images/BLOG-WARM EMBRACE.jpg">
    </div>

    <div class="main-section blog">

      <div class="social-media">

                  <div @click="shareBlog" class="icon-link">
                    <img class="ss-icon" src="../assets/social-icon/share.png" alt="Share">
                  </div>

                    <div @click="shareOnTwitter" class="icon-link">
                        <img class="ss-icon" src="../assets/social-icon/Frame 19626481.png" alt="Twitter">
                    </div>

                    <div @click="shareOnLinkedIn" class="icon-link">
                        <img class="ss-icon" src="../assets/social-icon/linkedin (1).png" alt="Linkedin">
                    </div>

                    <div @click="shareOnFacebook" class="icon-link">
                        <img class="ss-icon" src="../assets/social-icon/Frame 19626480.png" alt="Facebook">
                    </div>
                  </div>


      <div class="blg-section">
        

        <p class="blg-parapragh">In a world brimming with myriad emotions and experiences, we often seek ways to convey our values, beliefs, and the essence of who we are. In the heart of this quest, art becomes a powerful medium. It speaks to us through colors, shapes, and symbols, allowing us to connect on a deeper level with the world around us. It is in this spirit that we introduce "Warm Embrace" a transformative thought that transcends the boundaries of traditional fashion and opens the door to a world of symbolism, inclusivity, and vibrant energy. </p>

        <h3 class="blg-short-title">The Design Philosophy </h3>

        <p class="blg-parapragh">Warm Embrace is more than just a design; it's a concept that unites various symbols, signs, and colors to weave a collective narrative we call "Human Abstract." </p>

        <p class="blg-parapragh">In this realm of symbols, Warm Embrace is a treasure trove. The arrow signifies forward momentum, embracing change – the very ethos of Human Abstract– to continuously evolve, adapt, and inspire. Inclusivity is paramount, symbolized by the unisex sign, celebrating life's beautiful duality. The yin and yang depict the balance of opposites, underscoring the importance of equilibrium on our journey. </p>
        
        <p class="blg-parapragh">Delve deeper, and you’ll discover the "Namaste" symbol, transcending boundaries with heartfelt greetings, and acknowledging the universal connection we all share. Flowers represent nature's diverse beauty and our responsibility to preserve the environment. The rainbow and the sun, like a burst of happiness and energy, embody our commitment to spreading positivity and radiance. </p>

        <p class="blg-parapragh">The globe reflects our global vision, aspiring to make a difference far beyond our horizons. The plus sign represents our unwavering belief in the power of positivity, a reminder that even in the face of challenges, a positive attitude can change the world. </p>


        <h3 class="blg-short-title">Colors That Speak Volumes  </h3>

        <p class="blg-parapragh">Red, yellow, and blue - here the trifecta of primary colors hold profound significance. Red, representing passion and energy, ignites the spirit and sets the world on fire. Yellow exudes warmth and happiness, a reminder of the sunshine that brightens our lives. Blue, the color of serenity, symbolizes the depth of our beliefs and our calm determination to move forward.</p>
        
        <p class="blg-parapragh">The geometric mosaic effect in the design infuses a playful and artistic touch, creating a harmonious blend of shapes, lines, and colours. It invites you to explore, to question, and to find meaning in the intricate patterns that come together. </p>

        <h3 class="blg-short-title">Words That Connect </h3>
                        
        <p class="blg-parapragh">Every word here pays homage to the rich heritage that has nurtured us, reflecting our deep-rooted connection to the motherland and the creative spirit we derive from it. They serve as a constant reminder of the guiding principles that steer our ship and pay respect to our origins.  </p>

        <h3 class="blg-short-title">Designer’s Note </h3>
                                
        <p class="blg-parapragh">In a world that's constantly changing, finding an anchor in art, warmth, and inclusivity is heartening. So, here's our invitation to you all: a warm embrace for all. Join us and be a part of something bigger as you embrace this piece of art that whispers our values to the world. It embodies our ideology, a testament to the warmth, inclusivity, and boundless energy we aspire to bring into the world.  </p>

        <p class="blg-parapragh">We are proud to be an eco-friendly brand, dedicated to sustainability and preserving our planet. Welcome to the world of Human Abstract and the art of the Warm Embrace.</p>
    </div>



    </div>





    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'warmembrace',

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

methods: {
    // Function to handle sharing logic using Web Share API
    shareBlog() {
      if (navigator.share) {
        navigator.share({
          title: 'Unraveling the Multifaceted You',
          text: 'Check out this blog on Abstract Human Faces!',
          url: window.location.href,
        })
          .then(() => console.log('Blog shared successfully'))
          .catch((error) => console.error('Error sharing blog:', error));
      } else {
        alert('Web Share API is not supported in this browser. You can manually copy the URL to share.');
      }
    },

    // Function to handle sharing on Facebook
    shareOnFacebook() {
      this.shareOnSocialMedia('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
    },

    // Function to handle sharing on Instagram
    shareOnInstagram() {
      // Add your Instagram sharing logic here
      alert('Sharing on Instagram is not supported in this example. You can manually share the URL.');
    },

    // Function to handle sharing on Twitter
    shareOnTwitter() {
      this.shareOnSocialMedia('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href));
    },

    // Function to handle sharing on YouTube
    shareOnYouTube() {
      // Add your YouTube sharing logic here
      alert('Sharing on YouTube is not supported in this example. You can manually share the URL.');
    },

    shareOnLinkedIn() {
      this.shareOnSocialMedia('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href));
    },

    // Common function to open a new window for social media sharing
    shareOnSocialMedia(url) {
      window.open(url, '_blank', 'width=600,height=400');
    },
  },

};
</script>

<style>



</style>