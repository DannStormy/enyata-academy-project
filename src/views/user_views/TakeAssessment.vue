<template>
  <!-- <QuestionsView v-if="showQuestions" /> -->
  <ScrollBar />
  <div class="wrapper">
    <SideMenu />
    <div class="container">
      <div class="header">
        <div class="assessment">
          <h1 class="title">Take Assessment</h1>
          <p class="description">
            Click the button below to start assessment, you have limited time
            for this test
          </p>
        </div>
        <!-- <TimerBar
          :displayMinutes="displayMinutes"
          :displaySeconds="displaySeconds"
        /> -->
      </div>
      <div class="main">
        <div class="logo">
          <img src="@/assets/svgs/hourglass-logo.svg" alt="TimeSand-logo" />
        </div>
        <p class="notification">
          We have 4 days left until the next assessment Watch this space
        </p>
        <router-link to="/questions">
          <button @click="start">Take Assessment</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import ScrollBar from "@/components/ScrollBar.vue";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "TakeAssessment",

  data: () => ({
    showQuestions: false,
    timer: null,
  }),

  methods: {
    ...mapActions(["changeAssessmentStatus"]),
    start() {
      this.changeAssessmentStatus();
      this.showQuestions = true;
    },
    async getTime() {
      const response = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/applicant/timer`
      );
      this.timer = response.data.time[0].time * 60;
      localStorage.setItem("timer", this.timer);
    },
  },
  components: {
    SideMenu,
    ScrollBar,
  },
  mounted() {
    this.getTime();
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
  margin: 111px 0 86px 292px;
  width: 100%;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-left: 47px;
  margin-bottom: 130px;
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
  width: 72px;
  height: 72px;
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
  background-color: #b1b1b1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #7557d3;
}
button:active {
  opacity: 0.7;
}
</style>