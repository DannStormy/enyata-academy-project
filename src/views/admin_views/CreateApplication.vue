<template>
  <ScrollBar />
  <div class="confirmation-container" v-if="isActive">
    <div class="confirmation-box">
      <form class="question-box" @submit.prevent>
        <div class="que">Are you sure you want to submit this application?</div>
        <div class="buttons">
          <button @click="submit">Yes</button>
          <button @click="noConfirm">No</button>
        </div>
      </form>
    </div>
  </div>
  <div :class="['flex-container', { active: isActive }]">
    <AdminSideMenu />
    <div class="application">
      <div class="title">
        <p>Create Application</p>
      </div>
      <form action="" class="container" @submit.prevent="createApplication">
        <div class="top">
          <div>
            <label for="closure">Application closure date</label><br />
            <input
              :disabled="isActive"
              type="date"
              id="date"
              name="date"
              placeholder="dd/mm/yyyy"
              v-model="appInfo.date"
            /><br />
          </div>
          <div>
            <label for="batch">Batch ID</label><br />
            <input
              :disabled="isActive"
              type="text"
              step=".01"
              id="id"
              name="batch-ID"
              placeholder="Enyata Academy 6.0"
              v-model="appInfo.batch_id"
            /><br />
          </div>
        </div>
        <label for="instructions">Instructions</label><br />
        <textarea
          :disabled="isActive"
          rows="9"
          cols="50"
          v-model="appInfo.instructions"
        >
        </textarea>
        <div>
          <span>
            <label for="files" class="btn">Select question</label>
            <input id="files" style="display: none" type="file" />
          </span>
        </div>
        <br />
        <div class="button-container">
          <button @submit="submit" class="submit" :disabled="isActive">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import ScrollBar from "@/components/ScrollBar.vue";
import axios from "axios";
export default {
  data: () => ({
    isActive: false,
    appInfo: {
      selectedFile: "",
      batch_id: null,
      date: null,
      instructions: "",
    },
  }),
  methods: {
    createApplication() {
      this.isActive = true;
    },
    noConfirm() {
      this.isActive = false;
    },
    async submit() {
      this.isActive = false;
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_SERVER_URL}/admin/create-application`,
          this.appInfo
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  name: "CreateApplication",
  components: { AdminSideMenu, ScrollBar },
};
</script>

<style scoped>
.confirmation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -250px;
  z-index: 30;
}
.confirmation-box {
  width: 477px;
  height: 300px;
  border-radius: 4px;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  filter: blur(0);
  display: flex;
  align-items: center;
  justify-content: center;
}
.question-box {
  width: 257px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.que {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #4f4f4f;
  margin-bottom: 48px;
}
.buttons button {
  width: 128.5px;
  height: 48px;
  color: black;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  border: none;
}
.buttons button:hover {
  background: #7557d3;
  color: white;
}
.flex-container {
  display: flex;
}
.nav-buttons a {
  background-color: red;
}
.active {
  background: rgb(25, 13, 74, 0.2);
  filter: blur(2px);
}
.container {
  width: 100%;
}
.application {
  margin-top: 137px;
  margin-left: 367px;
  width: 100%;
}
.title {
  font-family: "Lato";
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 90px;
}
.top {
  display: flex;
  gap: 64px;
}
label {
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: #2b3c4e;
  display: inline-block;
  margin-bottom: 5px;
}
input {
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  width: 350px;
  height: 41px;
  padding: 15px;
  margin-bottom: 36px;
  background-color: inherit;
}
input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #7557d3;
}
textarea {
  width: 764px;
  margin-bottom: 14px;
  padding: 5px;
  border: 1.5px solid #2b3c4e;
  background-color: inherit;
}
span {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #2b3c4e;
  border-radius: 10px;
  width: 145px;
  height: 36px;
  padding: 8px 16px;
}
label[for="files"] {
  color: white;
  cursor: pointer;
}
.submit {
  width: 379px;
  height: 50px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 200px;
  font-weight: 600;
  font-size: 16px;
}
.button-container {
  width: 764px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>