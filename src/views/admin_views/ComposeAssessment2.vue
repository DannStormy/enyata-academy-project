<template>
  <div class="wrapper">
    <AdminSideMenu />
    <div class="container">
      <div class="header">
        <div class="assessment">
          <h1 class="title">Compose Assessment</h1>
        </div>
        <!-- <TimeBarAdmin /> -->
        <div class="timer">
          <p>Set Time</p>
          <div class="time">
            <div class="min">
              <h3 ref="timer" contenteditable class="val">00</h3>
              <sub style="margin-top: 44px">min</sub>
            </div>
            <div class="polygon">
              <img src="@/assets/svgs/polygon-logo.svg" alt="polygon-logo" />
            </div>
            <span>000<sub>sec</sub></span>
            <div class="polygon">
              <img src="@/assets/svgs/polygon-logo.svg" alt="polygon" />
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="assessment-1">
          <p>{{ questionIndex + 1 }}/30</p>
          <div class="choose_file" :class="{ 'no-img': !image }">
            <input
              ref="file"
              type="file"
              name="assessment-file"
              id="assessment-file"
              accept="image/*"
              @change="previewImage"
              class="upload"
            />
            <img v-show="image" :src="preview" class="img-fluid" />
            <div v-show="!image" class="no-img">
              <span>+ Choose file</span>
            </div>
          </div>
          <form>
            <p><label for="question">Questions</label></p>
            <textarea
              id="question"
              name="question"
              v-model="questions[questionIndex].question"
            ></textarea>
            <div class="options">
              <div @dblclick="answerA">
                <p><label for="A">Option A</label></p>
                <input
                  :class="{ correct: isCorrectA }"
                  type="text"
                  id="A"
                  name="A"
                  v-model="questions[questionIndex].options[0].text"
                />
              </div>
              <div v-on:dblclick="answerB">
                <p><label for="B">Option B</label></p>
                <input
                  :class="{ correct: isCorrectB }"
                  type="text"
                  id="B"
                  name="B"
                  v-model="questions[questionIndex].options[1].text"
                />
              </div>
              <div v-on:dblclick="answerC">
                <p><label for="C">Option C</label></p>
                <input
                  :class="{ correct: isCorrectC }"
                  type="text"
                  id="C"
                  name="C"
                  v-model="questions[questionIndex].options[2].text"
                />
              </div>
              <div>
                <p><label for="D">Option D</label></p>
                <input
                  :class="{ correct: isCorrectD }"
                  v-on:dblclick="answerD"
                  type="text"
                  id="D"
                  name="D"
                  v-model="questions[questionIndex].options[3].text"
                />
              </div>
            </div>
          </form>
          <div class="navigate">
            <div class="buttons">
              <button class="previous" v-on:click="prev" :disabled="checkPrev">
                Previous
              </button>
              <button class="next" v-on:click="next" :disabled="checkNext">
                Next
              </button>
            </div>
            <!-- <router-link to="/successful"> -->
            <button class="finish" @click="save" :disabled="checkFinish">
              Save
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import axios from 'axios';

export default {
  name: "ComposeAssessment2",
  data: () => ({
    isCorrectA: false,
    isCorrectB: false,
    isCorrectC: false,
    isCorrectD: false,
    isActive: false,
    preview: null,
    image: null,
    preview_list: [],
    image_list: [],
    questionIndex: 0,
    questions: [
      {
        numb: 0,
        question: "",
        img: "",
        options: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      },
    ],
  }),
  methods: {
    createApplication() {
      this.isActive = true;
    },
    noConfirm() {
      this.isActive = false;
    },
    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    next: function () {
      if (this.questions.length - 1 === this.questionIndex) {
        this.questions[this.questionIndex].img = this.preview;
        console.log(this.$refs.timer.innerText);
        this.questions.push({
          numb: this.questionIndex + 1,
          question: "",
          img: null,
          options: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
          ],
        });
      }
      this.image = null;

      this.questionIndex++;
      localStorage.setItem("questions", JSON.stringify(this.questions));
      console.log(this.questions);
    },

    computed: {
      checkPrev: function () {
        return !(this.questionIndex > 0);
      },
      checkNext: function () {
        return this.questionIndex < 4 ? false : true;
      },
      checkFinish: function () {
        return this.questionIndex == 4 ? false : true;
      },
    },
    save: async function () {
      if (this.$refs.timer.innerText == "00") {
        alert("Set Timer");
        return;
      }
      this.questions.time = this.$refs.timer.innerText;
      const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/admin/compose-assessment`, {questions: this.questions})
      console.log(response)
      console.log("save:", this.questions);
    },
    answerA: function () {
      this.questions[this.questionIndex].options[0].correct =
        !this.questions[this.questionIndex].options[0].correct;
      this.isCorrectA = this.questions[this.questionIndex].options[0].correct;
      console.log(this.questions[this.questionIndex].options[0].correct);
    },
    answerB: function () {
      this.questions[this.questionIndex].options[1].correct =
        !this.questions[this.questionIndex].options[1].correct;
      this.isCorrectB = this.questions[this.questionIndex].options[1].correct;
      console.log(this.questions[this.questionIndex].options[1].correct);
    },
    answerC: function () {
      this.questions[this.questionIndex].options[2].correct =
        !this.questions[this.questionIndex].options[2].correct;
      this.isCorrectC = this.questions[this.questionIndex].options[2].correct;
    },
    answerD: function () {
      this.questions[this.questionIndex].options[3].correct =
        !this.questions[this.questionIndex].options[3].correct;
      this.isCorrectD = this.questions[this.questionIndex].options[3].correct;
    },
  },

  computed: {
    checkPrev: function () {
      return !(this.questionIndex > 0);
    },
    checkNext: function () {
      return this.questionIndex < 30 ? false : true;
    },
    checkFinish: function () {
      return this.questionIndex == 30 ? false : true;
    },
  },
  components: {
    AdminSideMenu,
  },
};
</script>

<style scoped>
.correct {
  background: #31d283;
  color: white;
  font-weight: 900;
}
* {
  color: #2b3c4e;
  margin: 0;
  padding: 0;
}
.wrapper {
  display: flex;
}
.container {
  margin: 111px 93px 0px 292px;
  width: 876px;
}
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 47px;
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
.main {
  display: flex;
  flex-direction: column;
  width: 876px;
  margin-left: 47px;
}
.assessment-1 {
  margin-top: 62px;
}
.assessment-1 p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
.choose_file {
  margin-top: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  cursor: pointer;
  height: 170px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
  margin-bottom: 25px;
  overflow: hidden;
  position: relative;
}
.choose_file input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.choose_file img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}
.no-img {
  width: 456px;
  height: 108px;
  align-items: center;
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.options {
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  column-gap: 60px;
}
textarea {
  width: 876px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  height: 144px;
  margin-bottom: 47px;
  padding: 15px;
}

.options input {
  border: 1.5px solid #2b3c4e;
  margin-bottom: 47px;
  border-radius: 4px;
  height: 41px;
  width: 406px;
  padding: 15px;
}
input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #7557d3;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 5px;
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
  margin-bottom: 50px;
  gap: 529px;
}

.previous,
.next,
.finish {
  border: 1px solid #00000040;
  width: 125px;
  height: 41px;
  /* margin-right: 529px; */
  background-color: #211f26;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.next {
  width: 125px;
  height: 41px;
  /* margin-right: 529px; */
  background-color: #211f26;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
/* .next {
      width: 125px;
      height: 41px;
      background-color: #7557D3;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      border: none;
  } */

.previous:disabled,
.next:disabled {
  /* width: 205px;
      height: 41px; */
  background-color: #cecece;
  color: white;
  border: none;
}

.previous:disabled,
.next:disabled {
  /* width: 205px;
    height: 41px; */
  background-color: #cecece;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
  /* margin-bottom: 206px; */
}
.finish:disabled {
  width: 205px;
  height: 41px;
  background-color: #cecece;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
  margin-bottom: 206px;
}
.logo {
  width: 124px;
  height: 124px;
  margin-bottom: 16px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.timer {
  display: flex;
  flex-direction: column;
}

.timer p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b4e2e;
}

/* .time {
    display: flex;
} */

.timer {
  display: flex;
  flex-direction: column;
}

.timer p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #4f4f4f;
  margin-bottom: 4px;
}

.time {
  display: flex;
  align-items: center;
}

.time span {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  color: #2b3c4e;
}

.time sub {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #4f4f4f;
  margin-right: 5px;
}

.polygon {
  width: 12px;
  height: 12px;
  margin-left: 12px;
  margin-right: 25px;
  cursor: pointer;
}

.polygon img {
  width: 100%;
  height: 100%;
}
.val {
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  text-align: center;

  color: #2b4e2e;
}
.min {
  display: flex;
}
</style>
