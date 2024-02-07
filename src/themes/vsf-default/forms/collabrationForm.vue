<template>
    <div class="forms_detail Collaboration">
      <form @submit.prevent="submitForm" v-if="!submitted">
        <label for="firstName">First Name:</label>
        <input placeholder="First Name" class="first_name cstm-input" id="first-name" type="text" v-model="formData.firstName" required />
  
        <label for="middleName">Middle Name:</label>
        <input placeholder="Middle Name" class="middle_name cstm-input" id="middle-name" type="text" v-model="formData.middleName" />
  
        <label for="lastName">Last Name:</label>
        <input placeholder="Last Name" class="last_name cstm-input" type="text" v-model="formData.lastName" required />
  
        <label for="email">Email:</label>
        <input placeholder="Email" class="email cstm-input" id="from_email" type="email" v-model="formData.email" required />
  
        <label for="age">Age:</label>
        <input placeholder="Age" class="age cstm-input" type="number" v-model="formData.age" required />
  
        <label class="gender" for="gender">Gender:</label>
        <select v-model="formData.gender" required>
          <option value disabled>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
  
        <label for="dob">Date of Birth:</label>
        <input placeholder="Date of Birth: " class="dob cstm-input" type="date" v-model="formData.dob" required />
  
        <label for="phoneNumber">Phone Number:</label>
        <input placeholder="Phone Number" class="phonenumber cstm-input" type="tel" v-model="formData.phoneNumber" required />
  
        <label for="faxNumber">Fax Number:</label>
        <input placeholder="Fax Number" class="faxnumber cstm-input" type="tel" v-model="formData.faxNumber" />
  
        <label for="mailingAddress">Mailing Address:</label>
        <textarea placeholder="Mailing Address" class="mailing_address cstm-input" v-model="formData.mailingAddress" ></textarea>

        <label for="description">Description (100-125 words):</label>
        <textarea placeholder="TELL US ABOUT YOU (125 - 150 WORD):" class="description cstm-input" v-model="formData.description" required></textarea>

        <label for="portfolioUrl">Portfolio or CV URL Link:</label>
        <input placeholder="PORTFOLIO/ BUSINESS/ SOCILA MEDIAL PAGE URL" class="portfolio cstm-input"  type="url" v-model="formData.portfolioUrl" />
  
        <button class="submit" type="submit">Submit</button>
      </form>
      <div v-else>
        <div class="thanks-message">
          <img class="thumbs-img" src="../assets/icons/thumbs-up.png">
          <p class="message">Thank you for submitting the form!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import './form.css'
  export default {
    name: 'CollaborationForm',
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
          const formName = "Collaboration Form"; // Change this to your desired form name
        const subject = `Form Submission - ${formName}`;
          Email.send({
            Host: "smtp.elasticemail.com",
            Username: "humanabstract9@gmail.com",
            Password: "1B9F22996B66A8740340E33D305549C344C2",
            To: 'collaboration@humansabstract.com',
            From: 'humanabstract9@gmail.com',
            Subject: 'Form Submission',
            Body: this.getEmailBody(formName),
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
      getEmailBody(formName) {
        // Create the email body with form data
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
            <td>Middle Name</td>
            <td>${this.formData.middleName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>${this.formData.lastName}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>${this.formData.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>${this.formData.gender}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>${this.formData.dob}</td>
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
            <td>Fax Number</td>
            <td>${this.formData.faxNumber}</td>
          </tr>
          <tr>
            <td>Mailing Address</td>
            <td>${this.formData.mailingAddress}</td>
          </tr>
          <tr>
            <td>PORTFOLIO/ BUSINESS/ SOCILA MEDIAL PAGE URL</td>
            <td>${this.formData.portfolioUrl}</td>
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
      const ageNameInput = document.querySelector('.age');
      const genderNameInput = document.querySelector('.gender');
      const emailNameInput = document.querySelector('.email');
      const phonenumberNameInput = document.querySelector('.phonenumber');
      const faxnumberNameInput = document.querySelector('.faxnumber');
      const mailing_addressNameInput = document.querySelector('.mailing_address');
      const last_jobNameInput = document.querySelector('.last_job');
      const last_experienceNameInput = document.querySelector('.last_experience');
      const yearNameInput = document.querySelector('.year');
      const portfolioNameInput = document.querySelector('.portfolio');
      const descriptionNameInput = document.querySelector('.description');
  
    },
  };
  </script>
  <style scoped>

.forms_detail.Collaboration {
    overflow: auto;
    height: 827px;
}
@media only screen and (min-device-width: 1370px) and (max-device-width: 1440px) {
      .forms_detail.Collaboration {
          overflow: auto;
          height: 700px;
  }
}

@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) {
  .forms_detail.Collaboration {
    overflow: auto;
    height: 650px;
}
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .forms_detail.Collaboration {
    overflow: auto;
    height: 600px;
}
}



  </style>

    