<template>
    <div class="forms_detail offerformthree offer_form_dv">
      <form @submit.prevent="submitForm" v-if="!submitted">
        <label for="firstName">First Name:</label>
        <input placeholder="First Name" class="first_name cstm-input" id="first-name" type="text" v-model="formData.firstName" required />
  
        <label for="middleName">Middle Name:</label>
        <input placeholder="Middle Name" class="middle_name cstm-input" id="middle-name" type="text" v-model="formData.middleName" />
  
        <label for="lastName">Last Name:</label>
        <input placeholder="Last Name" class="last_name cstm-input" type="text" v-model="formData.lastName" required />
  
        <label for="email">Email:</label>
        <input placeholder="Email" class="email cstm-input" id="from_email" type="email" v-model="formData.email" required />
  
  
        <label for="description">Description (100-125 words):</label>
        <textarea class="description" placeholder="Description (100-125 words):" v-model="formData.description" required></textarea>
        <button class="submit" type="submit">Submit</button>
      </form>
      <div v-else>
        <div class="thanks-message">
          <img class="thumbs-img offer-redeme" src="../assets/home/redeem_card.png">
          <p class="message">Thank you for submitting the form!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import './form.css'
  export default {
    name: 'offerformthree',
    data() {
      return {
        formData: {
          firstName: "",
          middleName: "",
          lastName: "",
          age: null,
          gender: "",
          dob: "",
          email: "",
          phoneNumber: "",
          faxNumber: "",
          mailingAddress: "",
          lastJobTitle: "",
          lastJobExperience: null,
          experienceUnit: "years",
          portfolioUrl: "",
          description: "",
        },
        submitted: false,
      };
    },
    methods: {
      submitForm() {
        if (this.validateForm()) {
            // Send the email to your email address
            Email.send({
              Host: "smtp.elasticemail.com",
              Username: "humanabstract9@gmail.com",
              Password: "1B9F22996B66A8740340E33D305549C344C2",
              To: 'offer@humansabstract.com',
              From: 'humanabstract9@gmail.com',
              Subject: 'Form Submission',
              Body: this.getEmailBody(),
            }).then((message) => {
              this.submitted = true;
              this.sendThankYouEmail();
            });
        } else {
        console.error("Form data is missing or incomplete.");
            }
          },
          sendThankYouEmail() {
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
                  this.formData.lastName &&
                  this.formData.email &&
                  this.formData.description
                );
              },
              getEmailBody() {
      return `
                <table>
              <tr>
                <td>First Name</td>
                <td>${this.formData.firstName}</td>
              </tr>
              <tr>
                <td>Middle Name</td>
                <td>${this.formData.middleName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>${this.formData.lastName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${this.formData.email}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>${this.formData.description}</td>
              </tr>
            </table>
      `;
    },
  },

  mounted(){
    const firstNameInput = document.querySelector('.first_name');
    const middleNameInput = document.querySelector('.middle_name');
    const lastNameInput = document.querySelector('.last_name');
    const emailNameInput = document.querySelector('.email');
    const descriptionNameInput = document.querySelector('.description');
  },
};
  </script>
  
  <style scoped>
  .offer-redeme{
    width: 40%;
    height: auto;
    margin-top:30px;
  }
  @media only screen and (min-device-width: 1370px) and (max-device-width: 1440px) {
      .forms_detail.offer_form_dv {
        padding: 0px 20px !important;
    }
    }
        @media only screen and (min-device-width: 992px) and (max-device-width: 1199px) {
          .forms_detail.offer_form_dv {
            padding: 0px 20px !important;
        }
    }
  
  @media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    .offer_form_dv {
      padding:0 15px;
    }
  }
  </style>
  
  
  
  
  
  
  