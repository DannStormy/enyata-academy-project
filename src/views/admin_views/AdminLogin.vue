<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <img src="@/assets/svgs/enyata-white.svg" alt="company-logo" />
        <p class="title">Admin Log In</p>
      </div>
      <form action="" @submit.prevent="adminLogin">
        <label for="lname">Email Address</label><br />
        <input
          type="email"
          id="email"
          name="email"
          v-model="details.email"
        /><br />
        <label for="password">Password</label><br />
        <input
          type="password"
          id="password"
          name="password"
          v-model="details.password"
        /><br />
        <button class="login">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  data: () => ({
    details: { email: "", password: "" },
  }),
  methods: {
    async adminLogin() {
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_SERVER_URL}/admin/login`,
          this.details
        );
        let token = response.data.data.token;
        let email = response.data.data.admin[0].email;
        const adminAuth = {
          accessToken: token,
          email: email,
        };
        localStorage.setItem("admin", JSON.stringify(adminAuth));
        router.push("/admin-dashboard");
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  name: "AdminLogin",
};
</script>

<style scoped>
.wrapper {
  background: #7557d3;
  background-image: url("@/assets/images/Group.png");
  background-repeat: no-repeat;
  background-position: right -8% top 100px;
  padding-top: 240px;
  height: 928px;
}
.heading {
  margin: auto;
  margin-bottom: 24px;
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
  color: white;
  margin-top: 24px;
  font-style: italic;
}
form {
  width: 380px;
  margin: 0 auto;
}
label {
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  color: white;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 22px;
}
input {
  width: 100%;
  height: 48px;
  border: 1.5px solid white;
  background-color: #7557d3;
  padding: 15px;
  border-radius: 4px;
  color: white;
}
input:focus {
  outline: none !important;
}
.login {
  width: 100%;
  height: 50px;
  background: white;
  color: #7557d3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 300px;
  font-weight: 600;
  font-size: 16px;
}
</style>