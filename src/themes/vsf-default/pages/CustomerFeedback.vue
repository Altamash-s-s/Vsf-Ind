<template>
    <div id="customerfeedback" class="cstm-page-layout">
        <div class="head-section cstm-feedback">
          <img class="hd-img" src="/assets/home/feedback.jpg">
      </div>
        <div class="cr-head cstm-hd-feedback">
            <h3 class="wl-msg">A warm embrace from the Human Abstract family! We're delighted to have you on board and
                sincerely hope your shopping venture with us has been nothing short of extraordinary.
            </h3>
            <h3 class="wl-msg two">Our mission at Human Abstract is to provide not only exceptional products but also an
                unparalleled shopping experience. Your satisfaction is our driving force, and your insights are invaluable
                to us. We invite you to share your thoughts on your recent visit, be it praise, suggestions, or even
                constructive feedback. Your input guides us in continually refining our services. As a heartfelt thank-you
                in advance, we're excited to send you a special gift voucher via email. This token of our appreciation is
                our way of saying thank you for taking the time to share your thoughts.
            </h3>
        </div>
        <div class="Form-Section">
            <FeedbackForm />
        </div>
    </div>
</template>
<script>
import '../css/cstm-page-layout.css';
import FeedbackForm from '../forms/FeedbackForm.vue'
export default {
    name: 'CustomerFeedback',
    components: {
        FeedbackForm,
    },

}


</script>

<style scoped>
.wl-msg.two {
    margin-top: 0;
}
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) {
    .wl-msg{
    margin-top: 20px !important;
    }
    .forms_detail.Career {
    padding-bottom: 50px;
    }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
    .wl-msg{
    margin-top: 0 !important;
    }
    
}

</style>