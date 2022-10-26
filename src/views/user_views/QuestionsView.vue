<template>
  <div class="wrapper">
    <div :class="{ disable: disable }">
      <SideMenu />
    </div>
    <div class="container">
      <div class="container-body">
        <div class="header">
        <div class="assessment">
          <h1 class="title">Take Assessment</h1>
          <p class="description">
            Click the button below to start assessment, you have limited time
            for this test
          </p>
        </div>
        <TimerBar :displayMinutes="minutes" :displaySeconds="seconds" />
      </div>
      <div
        class="main"
        v-for="(question, index) in quiz"
        :key="question.numb"
        v-show="index === questionIndex"
      >
        <div class="question">
          <p>Question {{ question.numb + 1 }}</p>
          <span>{{ question.question }}</span>
          <img :src="question.img" alt="" />
          <div
            :class="{ active: isActive }"
            v-for="(option, i) in question.options"
            :key="i"
          >
            <input
              type="radio"
              :id="option.text"
              :name="index"
              :value="i"
              v-model="userResponses[index]"
              @click="glow"
            />
            <label :for="option.text">{{ option.text }}</label>
          </div>
          <div class="navigate">
            <div class="buttons">
              <button class="previous" v-on:click="prev" :disabled="checkPrev">
                Previous
              </button>
              <button class="next" v-on:click="next" :disabled="checkNext">
                Next
              </button>
            </div>
            <!-- <router-link to="/success"> -->
            <button
              class="finish"
              :disabled="checkFinish"
              @click="finishAssessment"
            >
              Finish
            </button>
            <!-- </router-link> -->
            <p>Total score: {{ score() }} / {{ quiz?.length }}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SideMenu from "@/components/SideMenu.vue";
import TimerBar from "@/components/TimerBar.vue";
import router from "@/router";
import { mapState } from "vuex";

export default {
  name: "QuestionsView",
  data: () => ({
    isActive: false,
    currentTimer: 0,
    quiz: null,
    questionIndex: 0,
    userResponses: null,
    minutes: 0,
    userScore: 0,
    seconds: 0,
    disable: false,
    isGlow: false,
    finish: false,
  }),

  mounted() {
    this.startInterval();
    this.getQuestions();
    this.userResponse();
  },

  methods: {
    startInterval: function () {
      let sec = localStorage.getItem("timer");
      let count = setInterval(() => {
        this.disable = true;
        let min = Math.floor(sec / 60),
          remSec = sec % 60;
        if (remSec < 10) {
          remSec = "0" + remSec;
        }
        if (min < 10) {
          min = "0" + min;
        }
        if (sec > 0) {
          sec = sec - 1;
        } else {
          clearInterval(count);
        }
        if (this.finish) {
          clearInterval(count);
          sec = 0;
        }
        localStorage.setItem("timer", sec);
        this.minutes = min;
        this.seconds = remSec;
      }, 1000);
    },
    userResponse() {
      this.userResponses = Array(this.quiz?.length).fill(false);
    },
    next: function () {
      this.questionIndex++;
    },
    prev: function () {
      this.questionIndex--;
    },
    score: function () {
      let score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz[i].options[this.userResponses[i]] !== "undefined" &&
          this.quiz[i].options[this.userResponses[i]].correct
        ) {
          score++;
        }
      }
      return score;
    },
    async finishAssessment() {
      this.finish = true;
      const userScore = this.score();
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/applicant/score`,
        {
          result: userScore,
          user: this.currentUser.email,
        }
      );
      if (response) {
        router.push("/success");
      }
    },
    glow() {
      this.isGlow = true;
    },
    async getQuestions() {
      const response = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/applicant/get-assessment`
      );
      console.log(response.data.quiz);
      this.quiz = JSON.parse(response.data.quiz[0].questions);
    },
  },
  computed: {
    checkPrev: function () {
      return this.questionIndex > 0 ? false : true;
    },
    checkNext: function () {
      return this.questionIndex < this.quiz?.length - 1 ? false : true;
    },
    checkFinish: function () {
      return this.questionIndex == this.quiz?.length - 1 ? false : true;
    },
    ...mapState({
      currentUser: (state) => state.user_dashboard.currentUser,
    }),
  },
  components: {
    SideMenu,
    TimerBar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
.disable {
  pointer-events: none;
}
* {
  font-family: "Lato", sans-serif;
  color: #2b3c4e;
  margin: 0;
  padding: 0;
}

.glow {
  background: red;
}
.wrapper {
  display: flex;
}

.container {
  margin: 90px 0 8px 292px;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  /* margin-left: 47px; */
  margin-bottom: 64px;
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
  height: 299px;
  /* margin-left: 47px; */
  margin-bottom: 206px;
}
.main p {
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* width: 65px;
  height: 17px; */
  margin-bottom: 14px;
}
.main span {
  display: inline-block;
  width: 100%;
  /* height: 29px; */
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 48px;
  /* word-break: break-all; */
  white-space: normal;
}

input {
  width: 8px;
  height: 8px;
  margin-right: 42px;
  border: 1px solid #2b3c4e;
  margin-bottom: 37px;
}

label {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* width: 252px; */
  height: 20px;
  color: #2b3c4e;
}

.active {
  width: 355.08px;
  height: 33px;
  background: #31d283;
}
.navigate {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
}
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 80px;
  gap: 220px;
}
button {
  font-weight: 700;
}
button:hover {
  cursor: pointer;
}
.next:disabled,
.previous:disabled {
  border: 1px solid #00000040;
  width: 125px;
  height: 41px;
  color: #211f26;
  background-color: #fff;
  cursor: not-allowed;
}
.previous,
.next {
  width: 125px;
  height: 41px;
  background-color: #7557d3;
  color: white;
  border-radius: 4px;
  border: none;
  /* margin-right:220px; */
}
.finish {
  width: 205px;
  height: 41px;
  background-color: #7557d3;
  color: white;
  border-radius: 4px;
  border: none;
  /* margin-right:220px; */
}

.finish:disabled {
  width: 205px;
  height: 41px;
  background-color: #cecece;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
}
.container-body{
  margin: 0 47px;
}
</style>