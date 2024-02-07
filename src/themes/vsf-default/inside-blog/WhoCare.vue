<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>Who Cares?</span></h3>
          <h2 class="blg-title">Embrace the 'Who Cares?' Attitude: A Journey of Growth and Positivity</h2>
          <img class="hd-img blog" src="./Blog-Images/BLOG PAGES-WHO CARES.jpg">
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
         

         <p class="blg-parapragh">In a world where conformity often takes precedence, a quiet revolution is underway. It's a revolution that doesn't involve protests or slogans but is stitched into the very fabric of what "HUMAN ABSTRACT" stands for. </p>
 
         <p class="blg-parapragh">Enter the bold and intriguing question: "WHO CARES?"</p>
 
         <p class="blg-parapragh">This isn't just a question though; it's an invitation to embark on a transformative journey of self-discovery. It challenges you to cast aside the weight of societal expectations and embrace a mindset that can change your life. "WHO CARES?" isn't about indifference; it's about reclaiming your autonomy and investing your emotional energy wisely, freeing yourself from minor worries that hold you back and drain your creative spirit. It's about prioritizing your passions over others' judgments.  </p>
 
         <h3 class="blg-short-title">Design Philosophy </h3>
 
         <p class="blg-parapragh">The butterfly symbolizes transformation and growth, mirroring an individual's path from feeling confined and constrained by societal expectations, much like a caterpillar in its cocoon. </p>
         
         <p class="blg-parapragh">But as they embraced the "WHO CARES?" philosophy, they started to spin a cocoon of self-belief around themselves. With time, that cocoon transforms them into a vibrant, beautiful butterfly, bursting forth with colors that reflect the emotional richness and beauty that blossomed as they embraced their true selves. </p>
                 
         <p class="blg-parapragh">This is the metaphorical transformation that awaits anyone who dares to embrace the "WHO CARES?" attitude. Just like this butterfly, we can all undergo our own remarkable growth when we prioritize authenticity and personal growth over others’ expectations.</p>
 
         <p class="blg-parapragh">The power of "WHO CARES?" extends beyond words; it embodies essential values. In a world where societal norms often dictate our actions, it's easy to lose sight of our true selves amidst the clamor of social media. "WHO CARES?" is a guiding light amidst this chaos, encouraging you to break free from the shackles of conformity and embrace your individuality. </p>
 
         
         <p class="blg-parapragh">It embodies a philosophy—a philosophy that prioritizes authenticity over conformity, courage over fear, and personal growth over stagnation. It's a reminder to be yourself, pursue your dreams, and live life on your terms. As life unfolds, challenges arise, but this subtle reminder on your chest anchors you, nudging you to focus on what truly matters, and affirming that you won't be bound by external expectations. It's a message of courage, resilience, and personal growth.It's not merely a piece of clothing; it's a symbol of empowerment and authenticity. Forging connections with like-minded individuals who share your commitment to personal growth and self-expression. So remember you're not alone on this journey. As you don your "WHO CARES?" T-shirt from "HUMAN ABSTRACT," remember that you're part of a silent yet impactful revolution—a movement that celebrates individuality, creativity, and boundless potential. </p>
 
         <h3 class="blg-short-title">Designer’s Note </h3>
 
         <p class="blg-parapragh">In today's world, environmental responsibility matters. "HUMAN ABSTRACT" offers a T-shirt that aligns with this ethos. It's a small step toward a better world. Imagine wearing clothing that symbolizes your individuality and values, a quiet rebellion against the norms, a commitment to growth, and a step towards a better world.
  </p>
         
         <p class="blg-parapragh">So, will you embrace the"WHO CARES?" attitude and let your values guide you on your journey of personal transformation? Join us in this silent revolution, celebrating the beauty of authenticity.  </p>
                 
         <p class="blg-parapragh">Choose wisely, choose growth, and remember it's more than a piece of clothing–it's an invitation to be the change you wish to see and to live life authentically.  </p>
 
         <p class="blg-parapragh">Are you ready to make a statement? Will you allow the "WHO CARES?" attitude to transform not just your wardrobe but your life? The choice is yours, and the journey beckons.   </p>
 
         <h3 class="blg-summary-title bottom-brdr">Summary (For lookbook and website)</h3>
 
         <h3 class="blg-short-title">Embrace the 'Who Cares?' Attitude: A Journey of Growth and Positivity </h3>
                         
         <p class="blg-parapragh">Set out on a transformative journey of self-discovery with our latest look, "WHO CARES?" In a world where conformity often takes precedence, we invite you to challenge societal expectations and embrace the mindset that can change your life.  </p>
                                 
         <p class="blg-parapragh">The butterfly, a symbol of transformation, reflects your journey from confinement to vibrant authenticity. More than just clothing, it's a symbol of empowerment that connects like-minded individuals.  </p>
 
         <p class="blg-parapragh">Our T-shirt isn't just a fashion statement; it's a step toward a better world. Join us in this silent revolution, choose growth, and become the change you wish to see. Your journey of personal transformation beckons.</p>
         
 
     </div>





    </div>




    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'whocare',

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