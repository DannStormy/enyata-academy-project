<template>
  <div class="flex-container">
    <AdminSideMenu />
    <div class="application">
      <div class="title">
        <p>Create Application</p>
      </div>
      <form action="" class="container">
        <div class="top">
          <div>
            <label for="closure">Application closure date</label><br />
            <input
              type="date"
              id="date"
              name="date"
              placeholder="dd/mm/yyyy"
            /><br />
          </div>
          <div>
            <label for="batch">Batch ID</label><br />
            <input
              type="number"
              id="id"
              name="batch-ID"
              placeholder="Enyata Academy 6.0"
            /><br />
          </div>
        </div>
        <label for="instructions">Instructions</label><br />
        <textarea rows="9" cols="50"> </textarea>
        <div>
          <span>
            <img src="@/assets/svgs/Paperclip.svg" alt="paperclip" />
            Attach question
          </span>
        </div>
        <br />
        <div class="button-container">
          <button class="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
export default {
  name: "CreateApplication",
  components: { AdminSideMenu },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  gap: 75px;
}
.container {
  width: 100%;
}
.application {
  margin-top: 137px;
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
}
textarea {
  width: 764px;
  margin-bottom: 14px;
  padding: 5px;
  border: 1.5px solid #2b3c4e;
}
span {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
  display: flex;
  align-items: center;
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
  margin-bottom: 12px;
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