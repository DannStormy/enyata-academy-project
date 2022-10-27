<template>
  <div class="wrapper">
    <div class="container">
      <nav class="navbar">
        <div class="company_logo">
          <img src="@/assets/svgs/Group1.svg" alt="company-logo" />
        </div>
        <ul class="navigation">
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/login"><li>Sign In</li></router-link>
        </ul>
      </nav>
      <div class="article">
        <div class="left">
          <p class="article-bold">
            Ever had a Dream of Becoming a Software <span>Engineer?</span>
          </p>
          <p class="article-thin">
            Join enyata academy today and bring your long awaiting dream to
            reality.
          </p>
          <router-link :class="{ isActive: !isActive }" to="/applicationform">
            <button class="register-button">Register Now</button>
          </router-link>
          <div v-if="!isActive" class="error">
            <img src="@/assets/svgs/error.svg" alt="error" />
            <p>Registration not open</p>
          </div>
        </div>
        <div class="right">
          <img
            src="@/assets/images/Group2.png"
            alt="a picture of a tutor and student"
          />
        </div>
      </div>
      <div class="services">
        <div class="services-heading">
          <img src="@/assets/svgs/Group5.svg" alt="golden dash" />
          <p>Why us?</p>
        </div>
        <div class="allservices">
          <div class="each-service dark">
            <p class="service-title">Learn from the best</p>
            <p class="service-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
          <div class="each-service">
            <p class="service-title">100% online classes</p>
            <p class="service-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
          <div class="each-service dark">
            <p class="service-title">Get paid while learning</p>
            <p class="service-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
          <div class="each-service">
            <p class="service-title">Work on real project</p>
            <p class="service-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>Copyright © Enyata 2021</footer>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    isActive: true,
  }),
  methods: {
    async getClosure() {
      const response = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/admin/application-closure`
      );
      console.log(response.data.closure[0].date);
      console.log(
        `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`
      );
      if (
        response.data.closure[0].date >
        `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`
      ) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
  mounted() {
    this.getClosure();
  },
  name: "LandingPageView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.isActive {
  pointer-events: none;
}
.wrapper {
  background: white;
  background-image: url("~@/assets/svgs/background.svg");
  background-repeat: no-repeat;
  /* background-position: right -13.82% top 5.94%; */
  background-position: right -8% top -10%;
  padding-top: 50px;
}
.container {
  width: 85%;
  margin: 0 auto;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 70px; */
  margin-bottom: 128px;
}
.company_logo {
  cursor: pointer;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
}
.navigation li {
  list-style: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 31, 38, 0.71);
  cursor: pointer;
}
a {
  text-decoration: none;
}
.article {
  width: 100%;
  display: flex;
  margin-bottom: 134px;
  justify-content: space-between;
}
.left {
  margin-top: 95px;
}
.right img {
  width: 100%;
  height: 450px;
}
.article-bold {
  font-weight: 700;
  font-size: 41px;
  line-height: 57px;
  letter-spacing: 0.035em;
  color: #211f26;
  width: 633px;
  height: 173.32px;
  margin-bottom: 23px;
}
.article-bold span {
  color: #7557d3;
}
.article-thin {
  width: 508px;
  height: 67px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: rgba(33, 31, 38, 0.71);
  margin-bottom: 32px;
}
.register-button {
  width: 152px;
  height: 48px;
  color: #ffffff;
  background-color: #7557d3;
  border-radius: 2px;
  border: none;
  cursor: pointer;
}
.error {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 0, 0, 0.71);
  gap: 3px;
  margin-top: 25px;
}
.services-heading {
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-bottom: 40px;
}
.services-heading p {
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
}
.allservices {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}
.each-service {
  width: 292px;
  height: 202px;
  padding: 19px;
}
.dark {
  background: rgba(117, 87, 211, 0.1);
}
.service-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
  margin-bottom: 12px;
}
.service-paragraph {
  font-weight: 400;
  font-size: 14px;
  line-height: 156%;
  letter-spacing: 0.01em;
  color: rgba(33, 31, 38, 0.6);
}
footer {
  width: 100%;
  text-align: center;
  padding-top: 55px;
  padding-bottom: 88px;
  background: #7557d3;
  color: white;
}
</style>