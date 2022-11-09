<template>
  <FlashMessage :message="message" :showMessage="message" />
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <img src="@/assets/svgs/Group1.svg" alt="company-logo" />
        <p class="title">Reset Password</p>
      </div>
      <form action="" @submit.prevent="resetPassword">
        <label for="lname">New Password</label><br />
        <input type="password" id="p" name="text" v-model="user.password" />

        <label for="password">Retype Password</label>
        <div class="input-container">
          <input
            v-if="showPassword"
            type="text"
            id="pass"
            name="password"
            v-model="user.retypePassword"
          />
          <input
            v-else
            type="password"
            id="password"
            name="password"
            v-model="user.retypePassword"
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
        <div class="btn_container">
          <button class="login">Reset Password</button>
          <FormLoaderVue v-if="isLoading" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FormLoaderVue from "@/components/FormLoader.vue";
import FlashMessage from "@/components/FlashMessage.vue";
import axios from "axios";

export default {
  data: () => ({
    showPassword: false,
    message: "",
    user: {
      password: "",
      retypePassword: "",
    },
    showMessage: true,
  }),
  methods: {
    async resetPassword() {
      if (!this.user.password || !this.user.retypePassword) {
        return;
      }
      if (this.user.password !== this.user.retypePassword) {
        this.message = "passwords dont match";
        setTimeout(() => {
          this.message = null;
        }, 2000);
        return;
      }
      try {
        let r = this.$router.currentRoute.value.params;
        const customConfig = {
          headers: {
            Authorization: `Basic ${r.token}`,
          },
        };
        const response = await axios.put(
          `${process.env.VUE_APP_SERVER_URL}/applicant/update-password`,
          { password: this.user.password, email: r.email },
          customConfig
        );
        this.message = response.data.message;
        this.$router.push("/login");
      } catch (error) {
        this.message = error.response.data.message;
        setTimeout(() => {
          this.message = null;
        }, 2000);
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  components: {
    FormLoaderVue,
    FlashMessage,
  },
  name: "LoginView",
};
</script>

<style scoped>
.wrapper {
  background: white;
  background-image: url("@/assets/svgs/background.svg");
  background-repeat: no-repeat;
  background-position: right -8% top -10%;
  padding-top: 100px;
}
.heading {
  margin: auto;
  margin-bottom: 60px;
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
form {
  width: 380px;
  margin: 0 auto;
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
#password,
#p {
  width: 100%;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  padding: 15px;
  border-radius: 4px;
}
.input-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
}
.eye {
  width: 15px;
  height: 15px;
  margin-bottom: 4px;
  margin-left: 351px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
}
.eye i {
  width: 100%;
  height: 100%;
}
.input-container input {
  width: 100%;
  height: 48px;
  border: none;
  padding: 15px;
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
  position: relative;
}
input:focus {
  outline: none !important;
  border: 1px solid #7557d3;
}
.btn_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login {
  width: 100%;
  height: 50px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
}
.login:active {
  opacity: 0.8;
}
.footer {
  width: 380px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  color: #4f4f4f;
}
a {
  text-decoration-line: underline;
  color: #1a2c56;
}
.forgot-p {
  text-decoration: none;
}
</style>