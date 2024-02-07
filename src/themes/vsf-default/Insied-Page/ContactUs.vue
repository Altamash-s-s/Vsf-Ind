<template>
    <div id="contact-us" class="cstm-page-layout contant-page-top">

                <div class="head-section">
                    <img class="hd-img" src="../assets/home/contact-us.jpg">
                </div>


                <div class="main-cn-section">

                    <!-- <div class="heading-content-icon">
                      <div class="heading-main-sec">
                        <img class="location-img" src="../assets/icons/location.png">
                        <h4 class="hd-of-head">Head Office</h4>
                        <p class="hd-para-head">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>  

                    <div class="con-social-icon">
                        <h4 class="hd-of-head social-hd-head">SOCIAL MEDIA</h4>
                        <div class="social-icon-img">
                            <a href="https://www.linkedin.com/" class="a-icon">
                                <img class="icon-img" src="../assets/social-icon/linkedin (1).png">
                            </a>
                            <a href="https://www.instagram.com/humansabstract/" class="a-icon">
                                <img class="icon-img" src="../assets/social-icon/Frame 19626483.png">
                            </a>
                            <a href="https://twitter.com/" class="a-icon">
                                <img class="icon-img" src="../assets/social-icon/Frame 19626481.png">
                            </a>
                            <a href="https://www.youtube.com/@Humansabstract." class="a-icon">
                                <img class="icon-img" src="../assets/social-icon/Frame 19626482.png">
                            </a>
                            <a href="https://www.facebook.com/people/Human-Abstract/61551077677068/" class="a-icon">
                                <img class="icon-img" src="../assets/social-icon/Frame 19626480.png">
                            </a>
                        </div>

                     </div> 


                     <div class="heading-telecom-sec">
                        <img class="telecom-img" src="../assets/icons/telecom.png">
                        <h4 class="hd-of-head">TELEPHONE</h4>
                        <p class="hd-para-head top-telecom">1800 539 2030</p>
                        <p class="hd-para-head bot-telecom">1800 539 2030</p>
                    </div>  

                     </div> -->


                     <div class="content-left-side">

                        <h1>Contact Us</h1>

                        <div class="form-section">

                            <form @submit.prevent="submitForm" v-if="!submitted">
                                    <label for="firstName">First Name:</label>
                                    <input placeholder="First Name" class="first_name cstm-input contact-form-name" id="first-name" type="text" v-model="formData.firstName" required />
                            
                                    <label for="email">Email:</label>
                                    <input placeholder="Email" class="email cstm-input contact-form-mail" id="from_email" type="email" v-model="formData.email" required />

                                    <label for="phoneNumber">Phone Number:</label>
                                    <input placeholder="Phone Number" class="phonenumber cstm-input" type="tel" v-model="formData.phoneNumber" required />
                                                    
                                    <label for="description">Description (100-125 words):</label>
                                    <textarea placeholder="Description (100-125 words):" class="description cstm-input " v-model="formData.description" required></textarea>
                                    <button class="submit contact_btn" type="submit">Submit</button>
                            </form>

                            <div v-else>
                                <div class="thanks-message">
                                <img class="thumbs-img" src="../assets/icons/thumbs-up.png">
                                <p class="message">Thank you for submitting the form!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
</template>

<script>
import '../css/cstm-page-layout.css';
import '../forms/form.css'

export default {
  name: 'contact-us',
  data() {
    return {
      formData: {
        firstName: "",
        email: "",
        phoneNumber: "",
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      // Check if the form is valid before sending the email
      if (this.validateForm()) {
        // Replace with the appropriate function from your email library
        const formName = "Contact Us Form"; // Change this to your desired form name
        const subject = `Form Submission - ${formName}`;
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "humanabstract9@gmail.com",
          Password: "1B9F22996B66A8740340E33D305549C344C2",
          To: 'support@humansabstract.com',
          From: 'humanabstract9@gmail.com',
          Subject: 'Form Submission',
          Body: this.getEmailBody( formName),
        }).then((message) => {
          this.submitted = true;
          this.sendThankYouEmail();
        });
      } else {
        console.error("Form data is missing or incomplete.");
      }
    },
    sendThankYouEmail() {
      // Replace with the appropriate function from your email library
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "humanabstract9@gmail.com",
        Password: "1B9F22996B66A8740340E33D305549C344C2",
        To: this.formData.email,
        From: 'humanabstract9@gmail.com',
        Subject: 'Thank You for Submitting the Form',
        Body: 'Thank you for submitting the form. We appreciate your interest!',
      }).then((message) => {
        console.log('Thank-you email sent to the user.');
      });
    },
    validateForm() {
      return (
        this.formData.firstName &&
        this.formData.email &&
        this.formData.description
      );
    },
    getEmailBody(formName) {
      return `
        <table>
          <tr>
            <td>Form Name</td>
            <td>${formName}</td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>${this.formData.firstName}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${this.formData.email}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>${this.formData.phoneNumber}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>${this.formData.description}</td>
          </tr>
        </table>
      `;
    },
  },
};
</script>


<style>

.main-cn-section{
    display: flex;
    margin: 70px 0px 70px 0px;
}
.contact_btn {
  margin-top:12px !important;
}
.heading-content-icon {
    width: 35%;
    padding: 50px;
    border: 1px solid #ccc;
    margin-top: 44px;
}
.location-img {
    float: left;
}
.hd-of-head {
    margin: 0px;
    margin-left: 50px;
    color: #000;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;
}
.hd-para-head {
    margin-left: 50px;
    margin-top: 5px;
}
.social-hd-head {
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 12px;
}
.social-icon-img {
    display: flex;
    gap: 5px;
    margin-left: 50px;
}
.icon-img {
    width: 50%;
}
.heading-telecom-sec {
    margin-top: 70px;
}

.contact-form-mail {
    width: 49%;
}
.contact-form-name {
    width: 48%;
    margin-right: 2% !important;
}
.bot-telecom {
    margin-top: -14px;
}
.top-telecom {
    margin-top: 12px;
}
.telecom-img {
    float: left;
    margin-top: -11px;
}
a.underline:after, a:not(.no-underline):hover:after{
  background: #0000 !important;
  text-decoration: none;
}
.a-icon {
    width: 32px;
    display: block;
    margin-right: 10px;
}
.social-icon-img img.icon-img {
    width: 100%;
}
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) {
    .content-left-side {
    margin-right: 31px !important;
}
.heading-content-icon {
    margin-left: 25px !important;
}
.heading-content-icon {
    padding: 35px;
}
}
@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    .main-cn-section {
          display: block;
          margin: 0;
    }

    .heading-content-icon {
    width: 81%;
    padding: 30px;
    }
    .content-left-side {
    margin-bottom: 80px;
}
  .contant-page-top {
      display: block;
  }
  .contact-form-name{
    width: 100%;
  }
  .contact-form-mail {
    width: 100%;
}
}
</style>