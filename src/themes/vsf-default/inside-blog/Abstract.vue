<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>Abstract Human Face</span></h3>
           <h2 class="blg-title">Unraveling the Multifaceted You</h2>
      <img class="hd-img blog" src="./Blog-Images/BLOG-HUMAN ASBTRACT.jpg">
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

        <p class="blg-parapragh">In a world that often seems to be moving at the speed of light, there is something extraordinary in slowing down and observing the intricacies of our surroundings.Human faces, the very windows to the soul, can tell tales that are both profound and multifaceted. We're living in a world where faces cease to be mere masks of skin and bones, and instead, emerge as vibrant works of art weaving together the intricate threads of human emotions and identity.</p>

        <p class="blg-parapragh">Step into a realm where we uncover the profound complexities of the human spirit. These garments are more than mere attire; they are storytellers. 'Faces,' the mirrors reflecting our emotions and canvases of our stories, possess a unique allure. Beyond the smiles and beneath the wrinkles, lies an intricate web of emotions and identities, waiting to be uncovered.</p>

        <h3 class="blg-short-title">Designer’s Note</h3>

        <p class="blg-parapragh">Our journey into the realm of abstract human faces begins with the mesmerizing movement of Cubism. Rather than simply being an art style, Cubism is an all-encompassing philosophy that beckons us to perceive the world through a multitude of perspectives simultaneously. It's as if it invites us to explore life through the ever-changing facets of a kaleidoscope, each angle revealing a different story, a new emotion, and a fresh layer of identity.</p>
        
        <p class="blg-parapragh">Imagine Picasso and Braque as they ventured into this uncharted territory, shattering the traditional notions of form and representation. They reconstructed reality into a vivid mosaic of shapes, colors, and expressions, much like the intricacies of the human spirit. In this artistic revolution, they discovered that the aprofound and the multifaceted often lie beneath the surface.</p>
                
        <p class="blg-parapragh">However, what truly sets our designs apart is their unique ability to transcend the realm of emotions and venture deep into the territory of identity. Upon closer inspection, you'll discover that our abstract faces express a diverse spectrum of emotions. This is a subtle nod to the idea that human identity is an ever-evolving masterpiece, shaped by the tapestry of experiences and emotions woven throughout our lives. Regardless of where you are in life, our pieces symbolize that your emotional landscape is a continually evolving work of art.</p>

        <h3 class="blg-short-title">More Than Just Fabric</h3>

        <p class="blg-parapragh">Wearing these garments transcends the boundaries of fashion; it's an opportunity to reflect on the complexities of human identity and emotions. Each face serves as an invitation to delve deeper into the intricacies of the human spirit. As you gaze upon these abstract faces, you're not merely observing a design; you're peering into a mirror that reflects your inner world. You become a storyteller, a silent ambassador of the myriad human emotions—your own.</p>

        <h3 class="blg-short-title">The Art of Abstract Expression</h3>
        
        <p class="blg-parapragh">The ideology behind our abstract human faces celebrates diversity, embraces emotions, and acknowledges the multitude of identities that exist in our world. Our designs symbolize unity, reminding us that, despite our differences, we all share in the vast range of human emotions and the journey of personal evolution.</p>

        <h3 class="blg-short-title">Designer’s Note</h3>
                
        <p class="blg-parapragh">While our passion lies in our design philosophy and conceptual ideas, we're equally committed to our planet. Human Abstract is more than just a clothing brand; it's a brand with a conscience for sustainability with environmental friendliness at the core of our initiative. Just as our abstract faces symbolize the depth of human experience, we aim to inspire positivity and motivation through our art.</p>

        <p class="blg-parapragh">In a world where superficiality often takes the stage, we offer a glimpse into the profound. We invite you to connect, reflect, and celebrate the beautiful complexity of emotions and the many faces of our identity, a testament to the depth and diversity of the human experience. After all, we are all Abstract Human Faces, waiting to be understood, cherished, and celebrated.</p>

        <h3 class="blg-summary-title bottom-brdr">Summary (For lookbook and website)</h3>

        <h3 class="blg-short-title">Unraveling the Multifaceted You</h3>
                        
        <p class="blg-parapragh">Explore the intricate world of Human Abstract's Cubism-inspired abstract faces,uncovering the depths of human emotions and identity. These garments transcend mere fashion; they are storytellers, reflecting the profound complexity of the human spirit. Celebrate the rich spectrum of emotions that shape human identity, reminding us that it's a continually evolving masterpiece.</p>
                                
        <p class="blg-parapragh">With a commitment to sustainability, Human Abstract is more than a clothing brand—it's a conscientious celebration of diversity and unity.</p>

        <p class="blg-parapragh">We invite you to connect, reflect, and celebrate the beautiful complexity of emotions, a testament to the depth and diversity of the human experience.</p>
        
        <p class="blg-parapragh">Weareall abstractpersonalitiesandpeople, waitingtobeunderstood, cherished, and celebrated.</p>


    </div>

  

    </div>





    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'hopeblog',

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

