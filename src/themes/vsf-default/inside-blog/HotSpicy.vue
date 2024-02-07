<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>You are Hot, Not Spicy</span></h3>
          <h2 class="blg-title">An Unspoken Art That Ignites Hearts</h2>
      <img class="hd-img blog" src="./Blog-Images/BLOG PAGES-HOT NOT SPICY.jpg">
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
         

         <p class="blg-parapragh">Amidst the vivacious pulse of a bustling city, we set out to uncover an unspoken treasure– the forgotten art of heartfelt compliments. This genuine and warm gesture, often overshadowed by the fast-paced rhythm of our daily lives, finds its essence captured in this creation. It adds a sprinkle of warmth, a dash of humor, and a whole lot of love to our connections with one another.  </p>
 
         <p class="blg-parapragh">Amidst the soft morning glow, we meet Jake and Emma, a dynamic duo whose connection thrives on the unspoken art of compliments. Their story unfolds in the comfort of their bedroom, a sanctuary for shared laughter and quiet moments. </p>
 
         <p class="blg-parapragh">As Emma gracefully rises, slipping into the "Hot, Not Spicy" tee, the morning sun casts a warm glow, reflecting the essence of the genuine compliments this tee represents. Making her way to the kitchen, Jake, drawn by the aroma of brewing coffee, enters. His gaze falls upon Emma, adorned in the "Hot, Not Spicy" tee, and a smile plays on his lips.</p>
 
         <p class="blg-parapragh">In a tender moment, Jake whispers a compliment into Emma's ear. She turns, and to her surprise, Jake is wearing the exact same tee. A hug ensues, sealing their connection— a visual testament to the unspoken language of their love. </p>
 
         <p class="blg-parapragh">With "You are Hot, Not Spicy," each moment becomes an opportunity to celebrate the unique warmth within. It's more than a tee; it's an ode to the magic unfolding in the quiet corners of shared spaces. </p>
 
 
         <h3 class="blg-short-title">The Design Philosophy</h3>
 
         <p class="blg-parapragh">This is what our concept embodies– a poignant reminder that true attractiveness extends far beyond external appearances. It celebrates individuals who possess a magnetic charm and personalities that draw people in like moths to a flame. </p>
 
         <p class="blg-parapragh">In a world where superficial appearances often hog the limelight, it's all too easy to underestimate the significance of one's character and approachability. Yet, compliments like 'You are hot, not spicy!' gently nudge us to recognize that the warmth of one's character can be as captivating as their physical allure. </p>
         
         <p class="blg-parapragh">As you proudly wear this emblem of positivity, others can't help but glance your way, perhaps sharing a knowing smile. It's an unspoken invitation to appreciate the people in your life for more than their looks. In a world that often feels divided and polarized, this transcends all boundaries. It's a universal compliment, a way to express appreciation for friends and partners alike. It underscores the power of authentic compliments that go beyond the boundaries of background, gender or race.</p>
                 
         <p class="blg-parapragh">Imagine the impact of this concept in your daily life. You're at a social gathering, and you spot a friend who radiates both physical appeal and a warm, welcoming personality. Instead of a traditional, superficial compliment, you look at them and say, "You are hot, not spicy!" The room bursts into laughter, and your friend's face lights up with genuine joy. In that moment, you've not only brightened their day but also strengthened the bond between you two. </p>
 
         <h3 class="blg-short-title">Designer’s Note </h3>
 
         <p class="blg-parapragh">As you don this, you become an ambassador of this charming ideology. Without saying a word, you promote the power of compliments that recognize the depth of a person's character. It's a subtle but impactful way to make a difference in the lives of those around you and celebrate them. </p>
         
         <p class="blg-parapragh">At our eco-conscious brand, we take pride in not only spreading love but also in our commitment to the environment. As you carry this message of positivity, inclusivity, and the importance of recognizing the beautiful blend of attractiveness and approachability in every person you meet, you'll be making the world a brighter and greener place. </p>
                 
         <p class="blg-parapragh">So, go ahead, spread the love, and remember, you are hot, not  </p>
 
         <h3 class="blg-short-title bottom-brdr">Summary (For lookbook and website)</h3>
                         
         <p class="blg-parapragh">Discover an unspoken art that reignites the warmth of heartfelt compliments with "You are Hot, Not Spicy." </p>
                                 
         <p class="blg-parapragh">This creation captures the essence of genuine connections, adding warmth, humor, and love. Meet Sarah and her eclectic group of friends, celebrating the charm of being 'hot' and 'not spicy.' </p>
 
         <p class="blg-parapragh">The design embodies a philosophy that emphasizes the depth of character and approachability over mere appearances. It's an invitation to appreciate those around you for more than their looks and to transcend boundaries of gender, background, and race. As you embrace this message, you become an ambassador of positivity and eco-consciousness, making the world a brighter, greener place. Celebrate the beautiful blend of attractiveness and approachability with "You are Hot, Not Spicy."</p>
     </div>






    </div>





    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'hotspicy',


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