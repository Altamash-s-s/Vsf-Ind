<template>
  <div class="base-input-number">
    <!-- <label class="base-input-number__label cl-primary flex" :for="getInputId">{{ name }}</label> -->

    <div class="quantity-section">
      <button @click="decreaseQuantity" :disabled="inputValue <= 1" class="quantity-button">-</button>
    <input
      :id="getInputId"
      type="number"
      :min="min"
      :max="max"
      :disabled="disabled"
      class="m0 no-outline base-input-number__input brdr-cl-primary bg-cl-transparent h4 shp-input-nm"
      :focus="autofocus"
      v-model="inputValue"
      @blur="$emit('blur', $event.target.value)"
    >
    <button @click="increaseQuantity" :disabled="max && inputValue >= max" class="quantity-button">+</button>
  
  </div>
    <ValidationMessages v-if="validations" :validations="validations" />
  </div>
</template>

<script>
import ValidationMessages from './ValidationMessages.vue'
export default {
  name: 'BaseInput',
  components: {
    ValidationMessages
  },
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    validations: {
      type: Array,
      default: () => []
    },
    onlyPositive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getInputId () {
      return `input_${this._uid}`
    },
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        if (!this.onlyPositive) {
          this.$emit('input', value)
        } else {
          const targetValue = parseInt(value, 10)
          if (!isNaN(targetValue)) {
            this.$emit('input', targetValue !== 0 ? Math.abs(targetValue) : 1)
          }
        }
      }
    }
  },
  methods: {
    increaseQuantity() {
      if (this.inputValue < this.max || !this.max) {
        this.$emit('input', this.inputValue + 1);
      }
    },
    decreaseQuantity() {
      if (this.inputValue > 1) {
        this.$emit('input', this.inputValue - 1);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';

.base-input-number {
  &__input {
    border-style: solid;
    border-width: 0 0 1px 0;
    width: 50px;
    height: 1.4rem;
    line-height: 1.7rem;
    @media (min-width: 768px) {
      height: 1.7rem;
    }
  }

  &__input {
    &,
    &:focus {
      -webkit-appearance: none !important;
      appearance: none !important;
    }
    border-style: solid;
    border-width: 0 0 1px 0;
    width: 50px;
    height: 1.4rem;
    line-height: 1.7rem;
    @media (min-width: 768px) {
      height: 1.7rem;
    }
  }
  

  &__label {
    font-size: 0.8rem;
    line-height: 1.2rem;
    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;

}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.shp-input-nm {
    border: transparent;
    text-align: center;
    width: 31px;
    font-size: 20px;
}
.quantity-section{
  display: flex;
}
.quantity-button {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #FFF;
    border-width: 1px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}


@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .shp-input-nm {
    width: 18px;
    font-size: 15px;
  }
  .quantity-button[data-v-5fa86bab] {
    width: 14px;
    height: 14px;
    font-weight:700;
  } 
}
</style>
