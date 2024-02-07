<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>HAND GESTURES</span></h3>
          <h2 class="blg-title">Silent Expressions on Fabric– An Ode to the Unspoken Language</h2>
          <img class="hd-img blog" src="./Blog-Images/BLOG PAGES-HAND GESTURES.jpg">
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
            

            <p class="blg-parapragh">In a world where words wield immense power, being our most profound source of connection, it's easy to overlook the silent language of gestures, which has been an integral part of human communication for centuries. These timeless signals gracefully transcend borders, cultures, and languages, forging connections at the deepest human level..</p>
    
            <h3 class="blg-short-title">The Design Philosophy </h3>
    
            <p class="blg-parapragh">Join us on a journey into this realm of unspoken communication, where we unveil the profound significance of these silent poets.</p>
            
            <p class="blg-parapragh">The "thumbs up" gesture is a universal symbol of joy and enthusiasm. By wearing this emblem, you become a beacon of good vibes, illuminating every room you enter. It's a reminder that in the face of adversity, a simple gesture like this radiates positivity and can uplift the spirit. Similarly, the victory sign is a potent symbol of peace and unity. This design carries the torch for harmony, reminding us that peace conquers all. It extends an invitation to become a part of a global movement where differences are celebrated and conflicts are resolved with open arms. </p>
                    
            <p class="blg-parapragh">Embodying the essence of luck and good fortune, this good luck sign is a homage to life's unpredictable adventure. Wearing it is an embodiment of the belief that good fortune will always follow your lead and that you hold the power to shape your destiny. </p>
    
            <p class="blg-parapragh">The electrifying energy of music is celebrated with the rock 'n' roll hand sign. It's an invitation to unleash your inner superstar, allowing the music to set your soul on fire. This is a tribute to the universal language of melodies and the unifying power of music in all our lives.  </p>
    
            <p class="blg-parapragh">With the namaste, we aim to respect and honor the global language of goodwill and connection that transcends borders and languages. It's a celebration of our shared spirit of humanity. Wearing it promotes unity and pays homage to the beautiful diversity that enriches our world. </p>
    
            <p class="blg-parapragh">This next one represents resilience and self-confidence reaffirming everything will be A-OK, All the Way! It's a reminder that life may be a rollercoaster, but you are the operator. By carrying this close to your heart, you inspire those around you with your unwavering strength, reminding everyone that they, too, have the fortitude to overcome life's challenges.</p>
    
            <p class="blg-parapragh">With each symbol in this design, you embrace a piece of this unspoken language, a symbol of unity, love, and understanding. Beyond mere attire, it's an invitation to celebrate the universal language of gestures, rendering it accessible and relatable to everyone. These symbols possess the power to connect, inspire, and nurture a more compassionate and connected world. Welcome to a realm where unspoken words create profound connections through silent expressions. </p>
    
            <h3 class="blg-short-title">Designer’s Note </h3>
    
            <p class="blg-parapragh">Going beyond the boundaries of fashion, it's a celebration of the universal language uniting us all. It's a reminder that, despite our diverse backgrounds and the languages we speak, there's a common thread that binds us – the language of gestures. Each sign extends an open invitation to embrace this unspoken connection, resonating with people from all walks of life. </p>
    
            <p class="blg-parapragh">As an eco-friendly brand committed to sustainable practices, we aim to leave a positive impact on the planet so know that by wearing them, you truly join a movement that fosters unity, love, hope, and understanding, going beyond fashion to symbolize your commitment to a more compassionate and connected world.  </p>
    
            <p class="blg-parapragh">With these designs, you don your silent voice, your unspoken message, and your invitation to celebrate the universal language of gestures. Together, we can champion a world where understanding, empathy, and love are the driving forces, creating a more connected, harmonious world where unspoken words form profound connections, and each piece becomes a canvas for silent expressions. </p>
    
    
        </div>

    </div>





    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'handgestures',
  data() {
    return {
      // Add a key to force re-render
      reloadKey: 0,
    };
  },

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