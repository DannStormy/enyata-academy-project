<template>
  <div class="wrapper">
    <div class="container">
      <div class="sub_container">
        <h1>404</h1>
        <p>Oops, Page Not Found</p>
        <button @click="goBack">Go back</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goBack() {
      router.back();
    },
  },
  name: "NotFound",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
}
.container {
  width: 784px;
  margin: auto;
  margin-top: 130px;
}
h1 {
  font-size: 100px;
  color: grey;
}
p {
  text-align: center;
  margin: 30px;
  font-size: 30px;
  color: grey;
}
button {
  width: 127px;
  height: 38px;
  background: #7557d3;
  border-radius: 3px;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 100px;
}
.sub_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>