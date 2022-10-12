<template>
  <p class="timer-title">Timer Setting</p>
  <div class="line"></div>
  <form action="">
    <input type="number" name="hour" id="hour" value="00" /> hour
    <input type="number" name="minutes" id="minutes" value="00" /> minutes<br />
    <button>Save</button>
  </form>
</template>

<script>
export default {
  name: "TimeSettings",
};
</script>

<style scoped>
.timer-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4a4a4a;
  margin-bottom: 16px;
}
.line {
  background: #ffffff;
  border: 1px solid #f2f2f2;
  margin-bottom: 6px;
}
input {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 10px;
  background: rgba(117, 87, 211, 0.04);
  border: none;
  margin-bottom: 50px;
}
button {
  width: 127px;
  height: 38px;
  background: #7557d3;
  border-radius: 3px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>