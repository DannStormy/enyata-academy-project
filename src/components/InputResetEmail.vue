<template>
  <form action="" @submit.prevent>
    <input type="email" name="email" id="email" v-model="email" />
    <button @click="sendLink">Submit</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
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
  name: "InputResetEmail",
};
</script>

<style>
</style>