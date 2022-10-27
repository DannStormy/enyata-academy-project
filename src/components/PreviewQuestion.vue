<template>
  <div class="container">
    <p class="title">Preview Question</p>
    <div class="question_container" v-for="doc in docs" :key="doc.numb">
      <p class="question">Question {{ doc.numb }}</p>
      <div class="choose_file" v-if="doc.img">
        <img :src="doc?.img" alt="question-image" />
      </div>
      <textarea
        id="question"
        name="question"
        :value="doc.question"
        readonly
      ></textarea>
      <div class="options">
        <div>
          <p><label for="A">Option A</label></p>
          <input
            :class="{ correct: doc.options[0].correct }"
            type="text"
            id="A"
            name="A"
            :value="doc.options[0].text"
            readonly
          />
        </div>
        <div>
          <label for="B">Option B</label>
          <input
            :class="{ correct: doc.options[1].correct }"
            type="text"
            id="B"
            name="B"
            :value="doc.options[1].text"
            readonly
          />
        </div>
        <div>
          <p><label for="C">Option C</label></p>
          <input
            :class="{ correct: doc.options[2].correct }"
            type="text"
            id="C"
            name="C"
            :value="doc.options[2].text"
            readonly
          />
        </div>
        <div>
          <p><label for="D">Option D</label></p>
          <input
            :class="{ correct: doc.options[3].correct }"
            type="text"
            id="D"
            name="D"
            :value="doc.options[3].text"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="button_container">
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    docs: Array,
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
  name: "PreviewQuestion",
};
</script>

<style scoped>
.correct {
  background: #31d283;
  font-weight: 500;
}
.container {
  background: #fdfdff;
}
.question_container {
  margin-left: 334px;
  width: 800px;
}
.title {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 50px;
  margin-left: 334px;
  margin-top: 111px;
}
.choose_file img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}
.options {
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  column-gap: 60px;
}
.question {
  margin-bottom: 30px;
}
textarea {
  width: 876px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  height: 144px;
  margin-bottom: 47px;
  padding: 15px;
  font-style: italic;
}

.options input {
  border: 1.5px solid #2b3c4e;
  margin-bottom: 47px;
  border-radius: 4px;
  height: 41px;
  width: 406px;
  padding: 15px;
  font-style: italic;
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #7557d3;
}

label {
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 5px;
}
.button_container {
  display: flex;
  justify-content: center;
  margin-top: 300px;
  margin-bottom: 100px;
  margin-left: 334px;
}
button {
  width: 205px;
  height: 41px;
  background: #7557d3;
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>