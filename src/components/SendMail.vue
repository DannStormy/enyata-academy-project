<template>
  <div class="button_container">
    <a :href="mail">
      <img src="@/assets/svgs/email.svg" alt="mail_icon" />
      <p>{{ val }}</p>
    </a>
  </div>
</template>

<script scoped>
export default {
  props: {
    mail: String,
    val: String,
  },
  name: "SendMail",
};
</script>

<style>
.button_container a {
  width: 111px;
  height: 37px;
  background: rgba(223, 224, 224, 0.5);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: black;
  text-decoration: none;
  margin: 5px;
  margin-bottom: -40px;
  margin-right: -20px;
}
</style>