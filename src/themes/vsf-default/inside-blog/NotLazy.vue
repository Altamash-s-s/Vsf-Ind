<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>Not Lazy, Just Resting Blog</span></h3>
          <h2 class="blg-title">The Art of Downtime </h2>
          <img class="hd-img blog" src="./Blog-Images/BLOG PAGES-NOT LAZY.jpg">
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
        

        <p class="blg-parapragh">In the relentless rhythm of today's world, each tick of the clock resonates with the hustle and bustle of life's incessant demands. Amidst this cacophony of ambition and the ceaseless pursuit of success, a silent rebellion has taken root—a celebration of stolen moments from the ticking hands of time. This creation is a visual manifesto, a deliberate reminder for us to embrace the art of downtime. </p>

        <h3 class="blg-short-title">The Design Philosophy</h3>

        <p class="blg-parapragh">At its core, this is a celebration of the lighter side of life. It weaves a narrative around the humorous and lighthearted moments that follow intense periods of hard work and dedication. "Not Lazy, Just Resting" is an anthem for those who understand the importance of balance in a world that seldom stops to catch its breath.  </p>

        <p class="blg-parapragh">Imagine an ageless Italian Renaissance sculpture, once frozen in time, taking a break from its stoic pose– indulging in the simple joys of a coffee break or losing themselves in the pages of a book. This juxtaposition of classical elements in a modern setting brings a fresh perspective to the idea of rest after exertion. It's a visual feast that invites you to join in the merriment of taking a pause, a momentary escape from the relentless demands of daily life. </p>
        
        <p class="blg-parapragh">As you explore the canvas, encounter carefully curated illustrations, breathing life into classical sculptures engaging in everyday leisure activities and savoring the quietude that comes with intentional downtime. Each element whispers a story—a tale of rejuvenation amidst the chaos, a nod to the timeless pursuit of balance. Regardless of the era or artistic medium, they embody the spirit of modern relaxation. It's a testament to the universal need for a break, a timeless necessity that transcends eras and artistic mediums. '</p>

        <p class="blg-parapragh">Amid this visual feast, a bold declaration emerges, not as a mere statement but as an invitation to delve into the philosophy it conceals. "I AM ON A BREAK" is more than words on fabric; it's an anthem for intentional rest, an acknowledgement that in the ebb and flow of life, there are moments meant to be savoured. </p>

        <p class="blg-parapragh">Delving into the concept of work-life balance, let’s take a moment to reflect on the importance of recognizing when to hit the pause button. "Not Lazy, Just Resting" isn't an excuse for idleness; it's a celebration of intentional rest, an acknowledgement that rejuvenation is as crucial to success as hard work itself.</p>


        <h3 class="blg-short-title">The Designer's Note </h3>

        <p class="blg-parapragh">Envision yourself amidst the vibrant energy of New York City, where dreams soar among skyscrapers, ascending the stars and ambitions hum in the air. Here and the world over, a quiet rebellion unfolds—one that acknowledges strength found in moments of rest. This creation becomes a symbol challenging the notion that success is exclusive to the tireless. </p>
        
        <p class="blg-parapragh">Hence, this narrative paints a vivid portrait of resilience, not forged through tireless labor, but through intentional pauses that add hues to life's kaleidoscope. It's a gentle affirmation: you're not lazy; you're indulging in the art of resting with purpose. </p>
                
        <p class="blg-parapragh">"Not Lazy, Just Resting" initiates a dialogue beyond its design—it's a conversation starter, an artistic piece inviting contemplation on the importance of embracing moments of repose. As you slip into this garment, it's not merely fabric enveloping you; it's a mindset, an understanding of the intricate balance between hard work and the sweet surrender of leisure. </p>

        <p class="blg-parapragh">So, as you don this artful design echoing tales of rest and rejuvenation, remember, you're not just dressing; you're embodying a mindset attuned to life's nuanced cadence. Join the movement, embrace the philosophy, and broadcast to the world that in your pursuit of dreams, you're not idle; you're intentionally resting, indulging in the art of downtime. </p>

        <p class="blg-parapragh">As an eco-conscious and sustainable brand, we weave threads of intentionality not just into our designs but into our commitment to a greener future. Wear your values, wear the art, and declare to the world that even in repose, your choices echo a commitment to a sustainable tomorrow. </p>


        <h3 class="blg-summary-title bottom-brdr">Summary (For lookbook and website)</h3>
                        
        <p class="blg-parapragh">This visual manifesto celebrates life's lighter side, inviting you to savor intentional rest amidst the relentless rhythm of today's world. Envision ageless Italian sculptures taking a break, infusing modern settings with classical charm—a testament to the universal need for a timeless pause. Step into our canvas, where carefully curated illustrations bring classical sculptures to life, embracing everyday leisure. "I AM ON A BREAK" boldly declares intentional rest, a celebration of balance and rejuvenation.  </p>
                                
        <p class="blg-parapragh">Painting a vivid portrait of resilience, this garment embodies a mindset finely tuned to modern life's nuances. Embrace the philosophy, wear your values proudly and join a movement that champions intentional rest.</p>
    </div>

    </div>



    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'notlazy',
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