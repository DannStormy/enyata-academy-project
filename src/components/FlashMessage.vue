<template>
  <div class="error_container" v-if="showMessage">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    showMessage: String,
  },
  name: "FlashMessage",
};
</script>

<style scoped>
.c {
  margin: 0 auto;
}
.error_container {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(220, 213, 244, 0.5);
  text-align: center;
  padding: 15px;
}
</style>