<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <img src="../assets/svgs/Group1.svg" alt="company-logo" />
        <p class="title">Sign Up</p>
      </div>
      <form class="form-container">
        <div class="form-sub-container">
          <div class="form-right">
            <label for="fname">First Name</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="lname">Email Address</label><br />
            <input type="email" id="email" name="email" /><br />
            <label for="password">Password</label><br />
            <input type="password" id="password" name="password" /><br />
          </div>
          <div class="form-left">
            <label for="lname">Last Name</label><br />
            <input type="text" id="lname" name="lname" /><br />
            <label for="tel">Phone Number</label><br />
            <input type="tel" id="tel" name="phone-number" /><br />
            <label for="confirm-password">Confirm Password</label><br />
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
            /><br />
          </div>
        </div>
        <button class="sign-up">Sign Up</button>
      </form>
      <p class="sign-in">
        Already have an account? <router-link to="/login">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
body {
  font-family: "Lato", sans-serif;
}
.wrapper {
  background: white;
  background-image: url("~@/assets/svgs/background.svg");
  background-repeat: no-repeat;
  background-position: right -23% top -50%;
  padding-top: 230px;
  padding-bottom: 170px;
}
.container {
  width: 784px;
  margin: 0 auto;
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
  font-weight: 500;
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
label {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 22px;
}
input {
  width: 365px;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding: 15px;
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
  margin-top: 40px;
  margin-bottom: 10px;
}
.sign-in {
  font-weight: 400;
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