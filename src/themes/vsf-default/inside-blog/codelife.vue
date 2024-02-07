<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>Code Life</span></h3>
          <h2 class="blg-title">Cracking the Code of Life</h2>
          <img class="hd-img blog" src="./Blog-Images/BLOG FOLD IMAGE - CODE LIFE.jpg">
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
        

        <p class="blg-parapragh">In the digital realm, an intriguing life unfolds, hidden in plain sight—a life known intimately by those who navigate the intricate maze of code. It's a life that tests the mettle of problem solvers, ignites one’s creative spark, and often leaves us grinning in the face of perplexing puzzles. </p>

        <p class="blg-parapragh">At its core, this world whispers a simple truth: 'I am a coder.' It's a collective acknowledgement to the exclusive circle that deciphers the language of ones and zeroes. Yet, the real charm lies on the flip side, where we embrace the quirks of our digital universe: 'THERE IS ALWAYS ONE BUG TO FIX IN THE CODE LIFE.' Here, the magic happens. </p>

        <h3 class="blg-short-title">The Design Philosophy</h3>

        <p class="blg-parapragh">As we mirror the endless quest to mend glitches in software development, we come to terms that the life of a coder isn’t too different from any individual’s. </p>

        <p class="blg-parapragh">Imagine this: you've meticulously crafted a thousand lines of code, ensuring its seamless flow, only to have a bug unexpectedly surface—a seemingly insignificant quirk that challenges your work. It's like discovering a digital needle in a haystack, a riddle every coder encounters. This experience is universal, transcending the realm of code and subtly infiltrating our lives, where we grapple with complexities, conquer hurdles, and embrace the unforeseen. </p>
        
        <p class="blg-parapragh">These bugs aren't your typical creepy-crawly insects; they are the persistent reminders of the trials that every coder and individual faces. Just as coders deal with persistent bugs, these symbols represent the everyday problems we encounter. They remind us of the riddles that prompt us to put on our thinking caps and embark on quests to overcome and improve. </p>
                
        <p class="blg-parapragh">In the digital age, the language of code isn't confined to the realm of software development. It weaves into the fabric of our daily existence, much like the subtle challenges that infiltrate our lives. And these bugs serve as a reminder that our lives, much like our code– involve a series of challenges that we must decipher and resolve. </p>

        <h3 class="blg-short-title">The Designer’s Note</h3>

        <p class="blg-parapragh">In this shared journey, the camaraderie among software developers transcends boundaries, uniting brilliant minds from every corner of the world, ready to face life's unexpected twists with humor and resilience.</p>
        
        <p class="blg-parapragh">Our philosophy isn't bound by gender, age, or background; it serves as a universal metaphor for the experiences we all navigate in our unique journeys.</p>
                
        <p class="blg-parapragh">In conclusion, it's more than just a purchase; it's an invitation to be part of something greater. By embracing your inner coder, you become a member of a subtle, unspoken fraternity. We're not merely crafting products; we're shaping a greener, more responsible future , rooted in the idea of a world where art, culture, and craft come together and are celebrated. Join us in this collective experience, wear your values proudly, and contribute to a world where style and creativity go hand in hand. </p>

        <h3 class="blg-summary-title bottom-brdr">Summary (For lookbook and website)</h3>

        <h3 class="blg-short-title">Cracking the Code of Life:</h3>
                        
        <p class="blg-parapragh">In the digital realm, life intertwines with code, where every bug represents universal challenges. The journey of a coder mirrors our own, as we decipher and resolve the riddles of existence. These bugs, like persistent reminders, symbolize the trials we all face. </p>
                                
        <p class="blg-parapragh">It's more than a purchase; it's an invitation to a shared journey, where embracing your inner coder connects you to a subtle, unspoken fraternity. </p>

        <p class="blg-parapragh">We craft not just products but a sustainable future where art, culture, and craft unite. Join us, wear your values, and contribute to a world where style and creativity intertwine, celebrating life's challenges and triumphs.</p>
      </div>

  </div>





    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'codelife',

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