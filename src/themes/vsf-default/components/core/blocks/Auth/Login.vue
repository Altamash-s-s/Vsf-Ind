<template>
  <div>
    <header class="modal-header py25 px65 h1 serif weight-700 bg-cl-secondary wishlist_title login_ttl">
      {{ $t('Log in') }}
      <i
        slot="close"
        class="modal-close material-icons cl-bg-tertiary"
        @click="close"
      >
        close
      </i>
    </header>
    <div v-if="hasRedirect" class="pt10 pb10 px65 redirect-error">
      <p class="h5 mb0 mt0">
        {{ $t('You need to be logged in to see this page') }}
      </p>
    </div>
    <div class="modal-content bg-cl-primary pt30 pb60 px65 cl-secondary mob-respo">
      <form @submit.prevent="login" novalidate>
        <base-input
          class="mb10 login_input"
          type="email"
          name="email"
          focus
          v-model="email"
          @blur="$v.email.$touch()"
          :placeholder="$t('EMAIL ADDRESS *')"
          :validations="[
            {
              condition: !$v.email.required && $v.email.$error,
              text: $t('Field is required.')
            },
            {
              condition: !$v.email.email && $v.email.$error,
              text: $t('Please provide valid e-mail address.')
            }
          ]"
        />
        <base-input
          class="mb10 login_input"
          type="password"
          name="password"
          v-model="password"
          @blur="$v.password.$touch()"
          :placeholder="$t('PASSWORD *')"
          :validations="[{
            condition: !$v.password.required && $v.password.$error,
            text: $t('Field is required.')
          }]"
        />
        <div class="row">
          <base-checkbox
            class="col-xs-7 col-sm-5 mb20 rmbr-hd"
            id="remember"
            v-model="remember"
          >
            {{ $t('Remember me') }}
          </base-checkbox>
          <div class="col-xs-5 col-sm-7 mb35 flex end-xs middle-xs frg-hd">
            <a href="#" @click.prevent="remindPassword">
              {{ $t('Have you forgotten your password?') }}
            </a>
          </div>
        </div>
        <button-full class="mb20 login_btn" type="submit" data-testid="loginSubmit">
          {{ $t('Log in to your account') }}
        </button-full>
        <div class="center-xs register_dv">
          <p >{{ $t('OR') }}</p>
          <a href="#" @click.prevent="switchElem" data-testid="registerLink" class="register_btn">
            {{ $t('register') }}
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Login from '@vue-storefront/core/compatibility/components/blocks/Auth/Login'

import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import BaseCheckbox from '../Form/BaseCheckbox.vue'
import BaseInput from '../Form/BaseInput.vue'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [Login],
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  data () {
    return {
      hasRedirect: !!localStorage.getItem('redirect')
    }
  },
  methods: {
    close (e) {
      if (e) localStorage.removeItem('redirect')
      this.$bus.$emit('modal-hide', 'modal-signup')
    },
    login () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.$store.dispatch('notification/spawnNotification', {
          type: 'error',
          message: this.$t('Please fix the validation errors'),
          action1: { label: this.$t('OK') }
        })
        return
      }
      this.callLogin()
    },
    remindPassword () {
      if (!(typeof navigator !== 'undefined' && navigator.onLine)) {
        this.$store.dispatch('notification/spawnNotification', {
          type: 'error',
          message: this.$t('Reset password feature does not work while offline!'),
          action1: { label: this.$t('OK') }
        })
      } else {
        this.callForgotPassword()
      }
    },
    onSuccess () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'success',
        message: this.$t('You are logged in!'),
        action1: { label: this.$t('OK') }
      })
    },
    onFailure (result) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t(result.result),
        action1: { label: this.$t('OK') }
      })
    }
  },
  components: {
    ButtonFull,
    BaseCheckbox,
    BaseInput
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-error: color(error);
$white: color(white);

.wishlist_title{
    background-image: url('../../../../assets/patch_img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
//   .rmbr-hd {
//     margin-top: 9px;
// }
  .login_input::placeholder {
    color: #302A2A !important;
    font-size: 16px !important ;
    font-style: normal;
    font-weight: 400  !important;
    line-height: 20px  !important; 
    text-transform: uppercase !important;
  }
  a.register_btn {
    width: 100%;
    display: flex;
    border: 1px solid;
    height: 60px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
}
.login_btn{
  background-color:#444444;
  margin-top: 17px;
  margin-bottom: -7px;
  text-transform: uppercase;
}
  .frg-hd{
    font-size: 15px;
  }
  .modal-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal-close{
    cursor: pointer;
  }
  .modal-content {
    @media (max-width: 400px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .redirect-error {
    background-color: $color-error;
    color: $white;
  }

  @media (max-width: 767px) {
  .login_ttl {
    padding: 22px;
  }
  .mob-respo {
    padding-left: 27px;
    padding-right: 26px;
  }
  .login_btn {
    height: auto;
    padding: 12px 0;
    font-size: 15px;
  }

  a.register_btn {
    height: auto !important;
    padding: 12px 0;
    font-size: 15px;
  }
  }

</style>
