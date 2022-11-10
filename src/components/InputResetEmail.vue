<template>
  <FlashMessage :message="message" :showMessage="message" />
  <div class="container">
    <form action="" @submit.prevent>
      <label for="password">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <br />
      <div class="btn_container">
        <button @click="sendLink" :disabled="isDisabled">Send Link</button>
        <FormLoaderVue v-if="isLoading" />
      </div>
    </form>
  </div>
</template>

<script>
import FlashMessage from "@/components/FlashMessage.vue";
import FormLoaderVue from "@/components/FormLoader.vue";

import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    email: "",
  }),
  methods: {
    ...mapActions(["getEmail"]),
    sendLink() {
      this.getEmail(this.email);
    },
  },
  computed: {
    ...mapState({
      message: (state) => state.user_dashboard.message,
      isLoading: (state) => state.user_dashboard.isLoading,
    }),
    isDisabled() {
      return !this.email || this.isLoading;
    },
  },
  name: "InputResetEmail",
  components: {
    FlashMessage,
    FormLoaderVue,
  },
};
</script>

<style scoped>
.container {
  width: 614px;
  height: auto;
  background: #ffffff;
  padding-bottom: 20px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn_container {
  display: flex;
  align-items: center;
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
button {
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
button:active {
  opacity: 0.8;
}
button:disabled {
  background-color: grey;
  pointer-events: none;
}
</style>