<template>
  <ScrollBar />
  <div class="wrapper">
    <SideMenu />
    <div class="container">
      <div class="header">
        <div class="assessment">
          <h1 class="title">Take Assessment</h1>
          <p class="description">Thank you</p>
        </div>
        <!-- <TimerBar
                :displayMinutes="displayMinutes"       
                :displaySeconds="displaySeconds"/> -->
      </div>
      <div class="main">
        <div class="logo">
          <img src="@/assets/svgs/confetti-logo.svg" alt="confetti-logo" />
        </div>
        <p class="notification">
          We have received your assessment test, we will get back to you soon.
          Best of luck
        </p>
        <router-link to="/dashboard">
          <button>Home</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import ScrollBar from "@/components/ScrollBar.vue";
export default {
  name: "SuccessfulView",
  components: {
    SideMenu,
    ScrollBar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

* {
  font-family: "Lato", sans-serif;
  color: #2b3c4e;
  margin: 0;
  padding: 0;
}

.wrapper {
  display: flex;
}

.container {
  margin: 111px 0 8px 292px;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 68px;
  margin-left: 47px;
}

.assessment {
  align-items: center;
}

.title {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
}

.description {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.logo {
  width: 148px;
  height: 148px;
  margin-bottom: 21px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.notification {
  width: 342.91px;
  height: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;
  color: #4f4f4f;
  margin-bottom: 24px;
}

button {
  width: 205px;
  height: 41px;
  background-color: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 112px;
}
</style>