<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <img src="../assets/svgs/Group1.svg" alt="company-logo" />
        <p class="title">Application Form</p>
      </div>
      <form class="form-container">
        <div class="uploads">
          <button class="upload-buttons">
            <img
              src="../assets/svgs/upload.svg"
              alt="upload-icon"
              class="upload-img"
            />
            Upload CV
          </button>
          <button class="upload-buttons">
            <img
              src="../assets/svgs/upload.svg"
              alt="upload-icon"
              class="upload-img"
            />
            Upload Photo
          </button>
        </div>
        <div class="form-sub-container">
          <div class="form-right">
            <label for="fname">First Name</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="lname">Email</label><br />
            <input type="email" id="email" name="email" /><br />
            <label for="address">Address</label><br />
            <input type="text" id="address" name="address" /><br />
            <label for="course">Course of Study</label><br />
            <input type="text" id="course" name="course" /><br />
          </div>
          <div class="form-left">
            <label for="lname">Last Name</label><br />
            <input type="text" id="lname" name="lname" /><br />
            <label for="dob">Date of Birth</label><br />
            <input
              type="text"
              id="dob"
              name="dob"
              placeholder="dd/mm/yyyy"
            /><br />
            <label for="university">University</label><br />
            <input type="text" id="university" name="university" /><br />
            <label for="cgpa">CGPA</label><br />
            <input type="text" id="cgpa" name="cgpa" /><br />
          </div>
        </div>
        <button class="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ApplicationForm",
};
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
body {
  font-family: "Lato", sans-serif;
}
.wrapper {
  background: white;
  background-image: url("~@/assets/svgs/background.svg");
  background-repeat: no-repeat;
  background-position: right -23.82% top -84.06%;
  padding-top: 230px;
  padding-bottom: 170px;
}
.container {
  width: 963px;
  margin: 0 auto;
}
.heading {
  height: 21px;
  margin: auto;
  margin-bottom: 69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin-top: 24px;
  font-style: italic;
}
.form-container {
  display: flex;
  flex-direction: column;
  padding: 0 61px;
}
.form-sub-container {
  display: flex;
  justify-content: space-between;
  /* gap: 73px; */
}
label {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 22px;
}
input {
  padding: 18px 13px;
  width: 379px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  outline: none;
  font-size: 16px;
}
input:focus {
  border: 1.5px solid #2b3c4e;
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
  margin-top: 43px;
  margin-bottom: 145px;
  font-weight: 700;
  font-size: 16px;
}
.sign-in {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  text-align: center;
  font-style: italic;
}
a {
  text-decoration-line: underline;
  color: #1a2c56;
}
.upload-buttons {
  padding: 14px 53px;
  background-color: white;
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  font-family: "Lato", sans-serif;
  color: #2b3c4e;
  font-weight: 400;
  font-size: 16px;
}
button:hover {
  cursor: pointer;
}
.upload-img {
  margin-right: 13.97px;
}
.uploads {
  display: flex;
  justify-content: center;
  margin-top: 93.58px;
  margin-bottom: 32.03px;
}
.uploads > button:first-child {
  margin-right: 32px;
}
</style>