<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>Human X AI</span></h3>
          <h2 class="blg-title">Human X AI: A Symbiotic Relationship</h2>
      <img class="hd-img blog" src="./Blog-Images/BLOG PAGES-HUMAN X AI.jpg">
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
         

         <p class="blg-parapragh">In an age where artificial intelligence (AI) seems to be infiltrating every facet of our lives, there's a critical question that's been lingering in the air like a digital whisper: Is AI bigger than humans? This inquiry may appear abstract at first, but it delves deep into our fundamental relationship with the digital entities we've brought to life. This is about an idea, a connection, and a philosophical exploration of the interplay between human ingenuity and the technology we've ushered into existence - the Human X AI. </p>
 
         <h3 class="blg-short-title">Design Philosophy </h3>
 
         <p class="blg-parapragh">Our concept hinges on the interconnection between humans and AI, an intricate choreography that unfolds daily in our existence. It's not about establishing superiority; it's about the unique symbiosis evolving. What adorns your attire isn't just fabric; it's a vessel of thought. </p>
 
         <p class="blg-parapragh">Picture a world where thoughts pulse in binary code, where lines of code resonate like human heartbeats AI doesn't reign as superior or inferior; it's a marvel born from human ingenuity. </p>
         
         <p class="blg-parapragh">The bold font on the garment’s facade signifies the omnipresence of AI, while digital nuances echo its heartbeat within us. These design elements bridge the ethereal connection between humanity and technology, creating a convergence of the abstract and tangible. AI, an offspring of human creativity, symbolizes our intentions and control. </p>
                 
         <p class="blg-parapragh">As you embrace this concept, you're not just adorning clothing; you're an embodiment of an idea, an invitation to engage in dialogue and contemplation regarding AI's role in your life and the broader society. </p>
 
         <h3 class="blg-short-title">The Designer’s Note</h3>
 
         <p class="blg-parapragh">In a world racing towards a digital horizon, we pause to reflect on our tangible reality. The Human X AI concept transcends mere fashion; it's a viewpoint on the interplay between the digital and tangible. </p>
         
         <p class="blg-parapragh">The colors chosen, black and blue, aren't arbitrary but a representation of the challenges and solutions within our community. Our world may be vast, but AI's impact is localized, influencing our daily lives, professions, and society in our own backyard.Our concept, like a well-choreographed dance, harmonizes global and local influences, seamlessly blending abstract concepts with tangible realities and the digital concept with the physical reality we experience every day. </p>
                 
         <p class="blg-parapragh">Is AI bigger than humans? This isn't a challenge, but a call for reflection. We are integral to a narrative where AI and humanity dance in unison, where we breathe life into technology and shape its trajectory. The question isn't about who is superior; it's about understanding our place in a world where humanity and technology intricately intertwine. </p>
 
         <p class="blg-parapragh">So let’s embrace this conversation, and as you don this apparel, you're not just wearing a garment; you envelop yourself in a profound philosophy. You become a part of a movement that values sustainability, community, and discourse. Conversations will spark, introspection will stir, and you’ll come to explore the grand interplay between humanity and technology and who truly leads this dance.  </p>
 
         <h3 class="blg-short-summary bottom-brdr">Summary (For lookbook and website)</h3>
 
         <h3 class="blg-short-title">Human X AI: A Symbiotic Relationship </h3>
                         
         <p class="blg-parapragh">In a world dominated by AI, a fundamental question lingers: Is AI bigger than humans? The concept explores the intricate dance between human ingenuity and technology in the Human X AI collection. </p>
                                 
         <p class="blg-parapragh">Our design concept emphasizes the unique symbiosis between humans and AI. Attire becomes more than fabric; it's a vessel of thought, bridging humanity and technology. </p>
 
         <p class="blg-parapragh">As we navigate a digital future, we find meaning in the tangible. Our concept represents the interplay between digital and reality, harmonizing global and local influences. </p>
         
         <p class="blg-parapragh">Embrace this conversation, envelop yourself in profound philosophy, and join a movement valuing sustainability, community, and discourse. Conversations spark, introspection stirs, and you explore the grand interplay between humanity and technology.</p>
 
     </div>
 
 








    </div>



    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'humanai',

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