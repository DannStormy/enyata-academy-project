<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <img src="@/assets/svgs/Group1.svg" alt="company-logo" />
        <p class="title">Application Form</p>
      </div>
      <form class="form-container" @submit.prevent="submit">
        <div class="files">
          <div class="uploads">
          <div class="fileUpload">
            <input type="file" class="upload" />
            <span>
              <img src="@/assets/svgs/upload.svg" alt="upload-icon" class="upload-img"/>
              Upload CV
            </span>
        </div>
        </div>
          <!-- <button class="upload-buttons">
            <img
              src="@/assets/svgs/upload.svg"
              alt="upload-icon"
              class="upload-img"
            />
            Upload CV
          </button> -->
          <div class="fileUpload">
            <input type="file" class="upload" />
            <span>
              <img src="@/assets/svgs/upload.svg" alt="upload-icon" class="upload-img"/>
              Upload Photo
            </span>
        </div>
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
              type="date"
              id="dob"
              name="dob"
              placeholder="dd/mm/yyyy"
            /><br />
            <label for="university">University</label><br />
            <input type="text" id="university" name="university" /><br />
            <label for="cgpa">CGPA</label><br />
            <input type="number" id="cgpa" name="cgpa" /><br />
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
.files{
    display: flex;
    justify-content: center;
    gap: 32px;
}
.fileUpload {
	overflow: hidden;
	position: relative;
	text-align: center;
  cursor: pointer;
  padding: 14px;
  border: 1.5px dashed #2B3C4E;
  border-radius: 2.87205px;
  width: 211px;
  background: white;
}
.fileUpload:hover{
  cursor: pointer;
}
.fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
    width: 148px;
    height: 46px;
  cursor: pointer;
}

input[type="file"] {
    position: fixed;
    right: 100%;
    bottom: 100%;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
span {
  display: block;
}
.wrapper {
  background: white;
  background-image: url("~@/assets/svgs/background.svg");
  background-repeat: no-repeat;
  background-position: right -8% top -10%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.container {
  width: 784px;
  margin: 0 auto;
}
.heading {
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.heading img {
  width: 110px;
  height: 21px;
}
.title {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin-top: 24px;
  font-style: italic;
}
.form-container {
  display: flex;
  flex-direction: column;
}
.form-sub-container {
  display: flex;
  justify-content: space-between;
}
.form__input {
  height: 100px;
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
  width: 365px;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding: 15px;
}
input:focus {
  outline: none !important;
  border: 1px solid #7557d3;
}
.submit {
  width: 520px;
  height: 50px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
}
.submit:disabled {
  opacity: 0.6;
}
</style>