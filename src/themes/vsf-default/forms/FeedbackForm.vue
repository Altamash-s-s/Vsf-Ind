<template>
    <div class="forms_detail feedback">
      <form @submit.prevent="submitForm" v-if="!submitted">
        <label for="firstName">First Name:</label>
        <input placeholder="First Name" class="first_name cstm-input" id="first-name" type="text" v-model="formData.firstName" required />
  
        <label for="middleName">Middle Name:</label>
        <input  placeholder="Middle Name" class="middle_name cstm-input" id="middle-name" type="text" v-model="formData.middleName" />
  
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
  
        <label for="feedback">Feedback (100-125 words):</label>
        <textarea placeholder="Feedback (100-125 words)" class="feedback cstm-input" v-model="formData.feedback" required></textarea>
  
        <!-- <label for="imageUpload">Image Upload:</label>
        <input placeholder="Image Upload" class="image_upload cstm-input" type="file" @change="handleImageUpload" accept="image/*" /> -->

        <div class="box">
          <input
          type="file"
          name="file-2[]"
          id="file-2"
          class="inputfile inputfile-2"
          data-multiple-caption="{count} files selected"
          multiple
          @change="handleFileUpload"
          accept=".pdf, .doc, .docx"
        />
					<label for="file-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a PDF or DOC/DOCX file&hellip;</span></label>
				</div>
  
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
    name: 'FeedbackForm',
    data() {
      return {
        formData: {
          firstName: "",
          middleName: "",
          lastName: "",
          age: null,
          gender: "",
          dob: "",
          phoneNumber: "",
          feedback: "",
        },
        submitted: false,
      };
    },
    methods: {
      validateForm() {
    return true; 
  },
  handleFileUpload(event) {
          const file = event.target.files[0];
          if (file) {
            const allowedExtensions = ['.pdf', '.doc', '.docx'];
            const extension = file.name.toLowerCase().slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
            if (allowedExtensions.includes(`.${extension}`)) {
              this.formData.fileUpload = file;
            } else {
              console.error('Invalid file type. Please choose a PDF or DOC/DOCX file.');
            }
          }
        },

        submitForm() {
  // Check if the form is valid before sending the email
  if (this.validateForm()) {
    // Convert the file to base64
    this.getBase64File().then((base64File) => {
      // Send the email to your email address
      Email.send({
        Host: "smtp.elasticemail.com",
            Username: "humanabstract9@gmail.com",
            Password: "1B9F22996B66A8740340E33D305549C344C2",
            To: 'support@humansabstract.com',
            From: 'humanabstract9@gmail.com',
            Subject: 'Form Submission',
            Body: this.getEmailBody(),
        Attachments: [
          {
            name: this.generateUniqueFileName(),
            data: base64File,
          },
        ],
        // ... (your email configuration)
      }).then((message) => {
        this.submitted = true;
        this.sendThankYouEmail();
      });
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
        getEmailBody() {
  const tableRows = Object.entries(this.formData)
    .map(([key, value]) => `
      <tr>
        <td>${key.charAt(0).toUpperCase() + key.slice(1)}</td>
        <td>${value}</td>
      </tr>
    `)
    .join('');

  return `
    <table>
      ${tableRows}
    </table>
  `;
},


generateUniqueFileName() {
  // Generate a unique filename based on timestamp or other criteria
  // Example: Use the current timestamp
  const timestamp = new Date().getTime();
  return `file_${timestamp}.pdf`;
},

getBase64File() {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(this.formData.fileUpload);
  });
},


    },
  
    mounted(){
      const firstNameInput = document.querySelector('.first_name');
      const middleNameInput = document.querySelector('.middle_name');
      const lastNameInput = document.querySelector('.last_name');
      const ageInput = document.querySelector('.age');
      const genderInput = document.querySelector('.gender');
      const emailInput = document.querySelector('.email');
      const phoneNumberInput = document.querySelector('.phonenumber');
      const feedbackInput = document.querySelector('.feedback');
      const imageUploadInput = document.querySelector('.image_upload');


  const inputfile = document.querySelector('.inputfile');
  inputfile.addEventListener('change', function (e) {
    const fileName = e.target.files.length > 0 ? e.target.files[0].name : 'No file selected';
    const label = inputfile.nextElementSibling;
    label.querySelector('span').textContent = fileName;
  });


    // form //

                'use strict';

            ;( function( $, window, document, undefined )
            {
              $( '.inputfile' ).each( function()
              {
                var $input	 = $( this ),
                  $label	 = $input.next( 'label' ),
                  labelVal = $label.html();

                $input.on( 'change', function( e )
                {
                  var fileName = '';

                  if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                  else if( e.target.value )
                    fileName = e.target.value.split( '\\' ).pop();

                  if( fileName )
                    $label.find( 'span' ).html( fileName );
                  else
                    $label.html( labelVal );
                });

                // Firefox bug fix
                $input
                .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
                .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
              });
            })( jQuery, window, document );
              
                },
  };
  </script>
    <style scoped>
    .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.inputfile + label {
    max-width: 80%;
    font-size: 1.25rem;
    /* 20px */
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    padding: 0.625rem 1.25rem;
    /* 10px 20px */
}

.no-js .inputfile + label {
    display: none;
}

.inputfile + label * {
  font-size: 16px;
    color: #302A2A;
    font-family: 'Nunito';
    font-weight: 500;
    text-transform: uppercase;
}

.inputfile + label svg {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    margin-top: -0.25em;
    /* 4px */
    margin-right: 0.25em;
    /* 4px */
}
.inputfile-2 + label {
    color: #252525;
    border: 1px solid #0000003b;
    margin: 15px 0px;
}

.inputfile-2:focus + label,
.inputfile-2.has-focus + label,
.inputfile-2 + label:hover {
    color: #494949;
}


@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {
  .forms_detail.Career {
              padding-bottom: 50px !important;
          }
    
}

    @media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
          .forms_detail.Career {
              padding-bottom: 50px !important;
          }
    
    }   
    
    
    
    </style>
  