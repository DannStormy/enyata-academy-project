<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <img src="@/assets/svgs/Group1.svg" alt="company-logo" />
        <p class="title">Sign Up</p>
      </div>
      <form class="form-container" @submit.prevent="signup">
        <div class="form-sub-container">
          <div class="form-right">
            <div class="form__input">
              <label for="firstName">First Name</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.firstName.$error,
                }"
                type="text"
                id="firstName"
                name="firstName"
                v-model="userData.firstName"
              />
              <div
                v-if="submitted && !v$.userData.firstName.$model"
                class="invalid-feedback"
              >
                First Name is required
              </div>
            </div>
            <div class="form__input">
              <label for="email">Email Address</label><br />
              <input
                :class="{ 'is-invalid': submitted && v$.userData.email.$error }"
                type="email"
                id="email"
                name="email"
                v-model="userData.email"
              /><br />
              <div
                v-if="submitted && v$.userData.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!v$.userData.email.$model">Email is required</span>
              </div>
            </div>
            <div class="form__input">
              <label for="password">Password</label>
              <div class="input-container">
                <input
                  :class="{
                    'is-invalid': submitted && v$.userData.password.$error,
                  }"
                  v-if="showPassword"
                  type="text"
                  id="password"
                  name="password"
                  v-model="userData.password"
                />
                <input
                  :class="{
                    'is-invalid': submitted && v$.userData.password.$error,
                  }"
                  v-else
                  type="password"
                  id="password"
                  name="password"
                  v-model="userData.password"
                />
                <div @click="toggleShow" class="eye">
                  <img
                    v-if="!showPassword"
                    src="@/assets/svgs/eye-icon.svg"
                    alt="eye-icon"
                  />
                  <iconify-icon
                    v-if="showPassword"
                    icon="ph:eye-slash-thin"
                    width="15"
                    height="15"
                  ></iconify-icon>
                </div>
              </div>
              <div
                v-if="submitted && v$.userData.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!v$.userData.password.$model"
                  >Password is required</span
                >
                <span
                  v-if="
                    v$.userData.password.$model &&
                    !v$.userData.password.$validator
                  "
                  >Password must be at least 6 characters</span
                >
                <span
                  v-if="
                    v$.userData.password.$model &&
                    v$.userData.password.containsUppercase.$invalid
                  "
                  >At least one UpperCase Value</span
                >
                <span
                  v-if="
                    v$.userData.password.$model &&
                    v$.userData.password.containsLowercase.$invalid
                  "
                  >At least one LowerCase Value</span
                >
                <span
                  v-if="
                    v$.userData.password.$model &&
                    v$.userData.password.containsNumber.$invalid
                  "
                  >At least one Number</span
                >
                <span
                  v-if="
                    v$.userData.password.$model &&
                    v$.userData.password.containsSpecial.$invalid
                  "
                  >At least one Special Character: #?!@$%^&*-</span
                >
              </div>
            </div>
          </div>
          <div class="form-left">
            <div class="form__input">
              <label for="lname">Last Name</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.lastName.$error,
                }"
                type="text"
                id="lastName"
                name="lastName"
                v-model="userData.lastName"
              /><br />
              <div
                v-if="submitted && !v$.userData.lastName.$model"
                class="invalid-feedback"
              >
                Last Name is required
              </div>
            </div>
            <div class="form__input">
              <label for="tel">Phone Number</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.phone.$error,
                }"
                type="tel"
                id="tel"
                min="11"
                max="11"
                name="phone-number"
                v-model="userData.phone"
              /><br />
              <div
                v-if="submitted && !v$.userData.phone.$model"
                class="invalid-feedback"
              >
                Phone Number is required
              </div>
            </div>
            <div class="form__input">
              <label for="confirm-password">Confirm Password</label>
              <div class="input-container">
                <input
                  :class="{
                    'is-invalid':
                      submitted && v$.userData.confirmPassword.$error,
                  }"
                  v-if="confirmPassword_show"
                  type="text"
                  id="confirm-password"
                  name="confirm-password"
                  v-model="userData.confirmPassword"
                />
                <input
                  :class="{
                    'is-invalid':
                      submitted && v$.userData.confirmPassword.$error,
                  }"
                  v-else
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  v-model="userData.confirmPassword"
                />
                <div @click="toggleConfirmShow" class="eye">
                  <img
                    v-if="!confirmPassword_show"
                    src="@/assets/svgs/eye-icon.svg"
                    alt="eye-icon"
                  />
                  <iconify-icon
                    v-if="confirmPassword_show"
                    icon="ph:eye-slash-thin"
                    width="15"
                    height="15"
                  ></iconify-icon>
                </div>
              </div>
              <div
                v-if="submitted && v$.userData.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!v$.userData.confirmPassword.$model"
                  >Confirm Password is required</span
                >
                <span v-else-if="!v$.userData.confirmPassword.$validator"
                  >Passwords must match</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="btn_container">
          <button class="sign-up">Sign Up</button>
          <FormLoaderVue v-if="loading" />
        </div>
      </form>
      <p class="sign-in">
        Already have an account? <router-link to="/login">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

import FormLoaderVue from "@/components/FormLoader.vue";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    showPassword: false,
    confirmPassword_show: false,
    loading: false,
    userData: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    submitted: false,
    valid: false,
    firstName: true,
    lastName: true,
  }),
  validations: {
    userData: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      phone: { required },
      password: {
        required,
        minLength: minLength(6),
        containsUppercase: function (value) {
          return /[A-Z]/.test(value);
        },
        containsLowercase: function (value) {
          return /[a-z]/.test(value);
        },
        containsNumber: function (value) {
          return /[0-9]/.test(value);
        },
        containsSpecial: function (value) {
          return /[#?!@$%^&*-]/.test(value);
        },
      },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmShow() {
      this.confirmPassword_show = !this.confirmPassword_show;
    },
    signup() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      this.loading = true;
      axios
        .post(
          `${process.env.VUE_APP_SERVER_URL}/applicant/signup`,
          this.userData
        )
        .then(function (response) {
          if (response) {
            alert(`Registered successfully`);
          }
          router.push("/login");
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
      this.loading = false;
    },
  },
  name: "SignUpView",
  components: {
    FormLoaderVue,
  },
};
</script>

<style scoped>
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
span {
  display: block;
}
.wrapper {
  background: white;
  background-image: url("~@/assets/svgs/background.svg");
  background-repeat: no-repeat;
  background-position: right -8% top -10%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.container {
  width: 784px;
  margin: 0 auto;
}
.heading {
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.heading img {
  width: 110px;
  height: 21px;
}
.title {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin-top: 24px;
  font-style: italic;
}
.form-container {
  display: flex;
  flex-direction: column;
}
.form-sub-container {
  display: flex;
  justify-content: space-between;
}
.form__input {
  height: 100px;
}
label {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 22px;
}
.input-container {
  display: flex;
  align-items: center;
  width: 365px;
  height: 48px;
}
.eye {
  width: 15px;
  height: 15px;
  margin-bottom: 4px;
  margin-left: 335px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
}
.eye i {
  width: 100%;
  height: 100%;
}
.input-container input {
  width: 365px;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding: 15px;
  position: relative;
}
input {
  width: 365px;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding: 15px;
}
input:focus {
  outline: none !important;
  border: 1px solid #7557d3;
}
.btn_container {
  display: flex;
  align-items: flex-end;
}
.sign-up {
  width: 520px;
  height: 50px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
}
.sign-up:active {
  opacity: 0.8;
}
.sign-up:disabled {
  opacity: 0.6;
}
.sign-in {
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #4f4f4f;
  text-align: center;
  font-style: italic;
}
a {
  text-decoration-line: underline;
  color: #1a2c56;
}
</style>