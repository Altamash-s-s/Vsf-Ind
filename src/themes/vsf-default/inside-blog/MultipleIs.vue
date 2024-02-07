<template>
    <div id="hopeblog" class="cstm-page-layout blog">
        <div class="head-section">
          <h3 class="breadcrum_blog"><a href="/">Home</a>  /  <a href="/blog">Blog</a> / <span>Multiple I'S</span></h3>
          <h2 class="blg-title">The 'I' Within Our Shared Humanity </h2>
          <img class="hd-img blog" src="./Blog-Images/BLOG-MULTIPLE I'S.jpg">
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
        

        <p class="blg-parapragh">Amidst the ceaseless energy, where life moves at a frenzied pace– whispers are hushed. This silent message transcends words and finds its expression in everyday life. It's a story about the complexities of human identity and the shared humanity that binds us all, regardless of age, emotions, or background.  </p>

        <p class="blg-parapragh">Picture this: a vibrant, diverse cityscape, teeming with people from every walk of life, each a living testament to the kaleidoscope of human existence, and lost in their own thoughts, and each encapsulating their unique 'I.' </p>

        <p class="blg-parapragh">Our story begins with a young boy, eyes brimming with curiosity and face, a portrait of innocence. His 'I' signifies the purity of youth and the unbridled joy of discovery. He's the embodiment of 'I,' the very essence of untamed wonder that resides within us all. His 'I' stands for 'Innocence. </p>

        <p class="blg-parapragh">As he traverses the city, he encounters a teenager, caught in the throes of adolescence, emotions shifting like the tides. His 'I' stands for "Intrigue", where questions about life and identity take root, and where one begins to explore the depths of self. </p>

        <p class="blg-parapragh">Further along, the teenager encounters an older gentleman, whose 'I' signifies "Insight." He carries the weight of years of experience, the stories of a life lived, etched into the lines on his face. He smiles at the teenager, recognizing the same spark of 'I' once burned brightly within him. It's a connection that transcends generations, a shared 'I' of wisdom.</p>

        <p class="blg-parapragh">As the older gentleman strolls on, he comes across a young woman, her 'I' representing "Independence."She strides with confidence, emblematic of a new generation ready to conquer the world. Her 'I' radiates with the fire of ambition and the determination to carve her unique path.</p>

        <p class="blg-parapragh">Our tale takes an unexpected turn as we meet a middle-aged man, whose 'I' is "Inspiration." He has seen the ebb and flow of life's journey and tasted both its sweet and bitter moments. His 'I' shines as he shares his wisdom and experiences, inspiring those around him to chase their own dreams. </p>

        <p class="blg-parapragh">In this bustling metropolis, these 'I's merge, overlap, and intertwine, reminding us that no matter where we are in this journey, we all carry a piece of the same 'I.' Our 'I's are not isolated but threads in the same intricate fabric of life. </p>

        <h3 class="blg-short-title">Design Philosophy </h3>

        <p class="blg-parapragh">In a world often consumed by our differences, our design philosophy takes a different path. It reminds us of our common thread, the shared humanity that unites us all, irrespective of age, emotions, or backgrounds.  </p>

        <p class="blg-parapragh">The narrative within this design embodies the fluidity and boldness of existence itself. It captures the essence of 'Multiple I's' in a way that is thought-provoking and lighthearted. ' Typography serves as the medium through which diverse age groups and emotions seamlessly intertwine, each 'I' merging into the next. </p>
        
        <p class="blg-parapragh">Beyond its visual appeal, it encourages reflection on the diversity of human identity. It's a gentle reminder that we all share the same planet, breathe the same air, and harbour the same dreams in the core of our 'I.'</p>

        <h3 class="blg-short-title">Designer’s Note </h3>

        <p class="blg-parapragh">As you wear this, you're not simply making a fashion statement. You're embracing a philosophy celebrating the intricacies of human identity while highlighting our shared humanity. You become a walking canvas of stories, an embodiment of the 'Multiple I's' weaving the beautiful fabric of life. We're also committed to our shared home, practising eco-friendly choices every step of the way. .</p>
        
        <p class="blg-parapragh">Whether you're in the bloom of your twenties or the wisdom of your sixties, this narrative symbolizes that your 'I' is part of a grander masterpiece, interwoven with the threads of countless others. It's a celebration of our shared humanity, our collective identity, and the myriad 'I's that construct the mosaic of life </p>
                
        <p class="blg-parapragh">Remember that we're all in this together navigating the complex, colorful labyrinth of life. It's an invitation to embrace your 'I' and celebrate the 'Multiple I's' that unite us, regardless of where we're from or where we're headed. Cause the 'I' in the mirror is the 'I' in them, the 'I' in you and the 'I' in us all. </p>

        <h3 class="blg-summary-title bottom-brdr">Summary (For lookbook and website)</h3>

        <h3 class="blg-short-title">The 'I' Within Our Shared Humanity. </h3>
                        
        <p class="blg-parapragh">Across the universe, diverse 'I's converge, each telling a story of youth, intrigue, insight, independence, and inspiration. These 'I's, embodying different ages and emotions, merge and overlap, reminding us of our shared humanity. </p>
                                
        <p class="blg-parapragh">Our design philosophy transcends differences, encouraging reflection on the essence of human identity. The typography-based design seamlessly weaves these 'I's together, symbolizing the unity in diversity.  </p>

        <p class="blg-parapragh">Beyond fashion, our commitment to the environment echoes in every step. As you wear this unique canvas of stories, remember that your 'I' is both personal and universal, a note in the symphony of life. We are all in this colorful labyrinth together, celebrating 'Multiple I's.'</p>
    </div>

    </div>



    </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import './blog.css'


export default {
  name: 'multipleis',

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