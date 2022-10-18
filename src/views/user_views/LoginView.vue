<template>
  <div class="message_containe" v-show="elementVisible">
    <p class="message">{{ message }}</p>
  </div>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <img src="@/assets/svgs/Group1.svg" alt="company-logo" />
        <p class="title">Log In</p>
      </div>
      <form action="" @submit.prevent="login">
        <label for="lname">Email Address</label><br />
        <input
          type="email"
          id="email"
          name="email"
          v-model="user.email"
        /><br />
        <label for="password">Password</label><br />
        <input
          type="password"
          id="password"
          name="password"
          v-model="user.password"
        /><br />
        <button class="login">Sign In</button>
      </form>
      <div class="footer">
        <p>
          Don’t have an account yet?
          <router-link to="/signup">Sign Up</router-link>
        </p>
        <router-link to="/forgotpassword" class="forgot-p"
          >Forgot Password?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
// import F
// import router from "@/router";

export default {
  data: () => ({
    user: {
      email: "",
      password: "",
    },
    elementVisible: true,
  }),
  methods: {
    ...mapActions([
      "userLogin",
      "fetchAccessToken",
      "removeAccessToken",
      "fetchUser",
    ]),
    login() {
      if (!this.user.email || !this.user.password) {
        return;
      }
      this.userLogin(this.user);
      setTimeout(() => (this.elementVisible = false), 3000);

      console.log("Message", this.message);
    },
  },
  computed: {
    ...mapState({ message: (state) => state.user_dashboard.message }),
    ...mapState({ accessToken: (state) => state.user_dashboard.accessToken }),
    ...mapGetters(["isAuthenticated"]),
  },
  created() {
    // console.log(this.$flashMessage);
    // setTimeout(() => (this.elementVisible = false), 10);
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
input {
  width: 100%;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  padding: 15px;
  border-radius: 4px;
}
input:focus {
  outline: none !important;
  border: 1px solid #7557d3;
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