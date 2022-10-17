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
              <input
                type="file"
                accept=".pdf, .docx"
                @change="onFileChange"
                :class="[
                  'upload',
                  {
                    'is-invalid': submitted && v$.selectedFile.$error,
                  },
                ]"
              />
              <span>
                <img
                  src="@/assets/svgs/upload.svg"
                  alt="upload-icon"
                  class="upload-img"
                />
                Upload CV
              </span>
              <div
                v-if="submitted && !v$.selectedFile.$model"
                class="invalid-feedback"
              >
                No file found
              </div>
            </div>
          </div>
          <div class="fileUpload">
            <input
              type="file"
              accept=".jpeg, .png, .jpg"
              @change="onPhotoChange"
              :class="[
                'upload',
                { 'is-invalid': submitted && v$.selectedPhoto.$error },
              ]"
            />
            <span>
              <img
                src="@/assets/svgs/upload.svg"
                alt="upload-icon"
                class="upload-img"
              />
              Upload Photo
            </span>
            <div
              v-if="submitted && !v$.selectedPhoto.$model"
              class="invalid-feedback"
            >
              No photo found
            </div>
          </div>
        </div>
        <div class="form-sub-container">
          <div class="form-right">
            <div class="form__input">
              <label for="firstName">First Name</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.firstName.$error,
                }"
                type="text"
                id="firstName"
                name="firstName"
                v-model="userData.firstName"
              />
              <div
                v-if="submitted && !v$.userData.firstName.$model"
                class="invalid-feedback"
              >
                First Name is required
              </div>
            </div>
            <div class="form__input">
              <label for="email">Email</label><br />
              <input
                :class="{ 'is-invalid': submitted && v$.userData.email.$error }"
                type="email"
                id="email"
                name="email"
                v-model="userData.email"
              /><br />
              <div
                v-if="submitted && v$.userData.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!v$.userData.email.$model">Email is required</span>
              </div>
            </div>
            <div class="form__input">
              <label for="address">Address</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.address.$error,
                }"
                type="text"
                id="address"
                name="address"
                v-model="userData.address"
              />
              <div
                v-if="submitted && !v$.userData.address.$model"
                class="invalid-feedback"
              >
                Address is required
              </div>
            </div>
            <div class="form__input">
              <label for="course">Course of Study</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.course.$error,
                }"
                type="text"
                id="course"
                name="course"
                v-model="userData.course"
              />
              <div
                v-if="submitted && v$.userData.course.$error"
                class="invalid-feedback"
              >
                Course of Study is required
              </div>
            </div>
          </div>
          <div class="form-left">
            <div class="form__input">
              <label for="lname">Last Name</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.lastName.$error,
                }"
                type="text"
                id="lastName"
                name="lastName"
                v-model="userData.lastName"
              /><br />
              <div
                v-if="submitted && !v$.userData.lastName.$model"
                class="invalid-feedback"
              >
                Last Name is required
              </div>
            </div>
            <div class="form__input">
              <label for="dob">Date of Birth</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.dob.$error,
                }"
                type="date"
                id="date"
                name="date"
                v-model="userData.dob"
              /><br />
              <div
                v-if="submitted && !v$.userData.dob.$model"
                class="invalid-feedback"
              >
                Date of Birth is required
              </div>
            </div>
            <div class="form__input">
              <label for="university">University</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.university.$error,
                }"
                type="text"
                id="university"
                name="university"
                v-model="userData.university"
              /><br />
              <div
                v-if="submitted && !v$.userData.university.$model"
                class="invalid-feedback"
              >
                University is required
              </div>
            </div>
            <div class="form__input">
              <label for="cgpa">CGPA</label><br />
              <input
                :class="{
                  'is-invalid': submitted && v$.userData.cgpa.$error,
                }"
                type="text"
                id="cgpa"
                name="cgpa"
                v-model="userData.cgpa"
              /><br />
              <div
                v-if="submitted && !v$.userData.cgpa.$model"
                class="invalid-feedback"
              >
                CGPA is required
              </div>
            </div>
          </div>
        </div>
        <button class="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
import { mapActions, mapState } from "vuex";
import router from "@/router";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    userData: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      dob: "",
      university: "",
      cgpa: "",
      course: "",
    },
    selectedFile: "",
    selectedPhoto: "",
    submitted: false,
    // valid: false,
  }),
  validations: {
    userData: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      address: { required },
      dob: { required },
      university: { required },
      cgpa: { required },
      course: { required },
    },
    selectedFile: { required },
    selectedPhoto: { required },
  },
  methods: {
    ...mapActions(["fetchUser"]),
    convertToBase64(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    },
    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    onPhotoChange(e) {
      const selectedPhoto = e.target.files[0]; // accessing file
      this.selectedPhoto = selectedPhoto;
    },
    async submit() {
      const formData = new FormData();
      const file = await this.convertToBase64(this.selectedFile);
      const photo = await this.convertToBase64(this.selectedPhoto);

      formData.append("file", file);
      formData.append("image", photo);
      formData.append("user_id", this.currentUser.email);
      for (var key in this.userData) {
        formData.append(key, this.userData[key]);
      }
      this.submitted = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }

      const customConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Basic ${this.currentUser.accessToken}`,
        },
      };

      axios
        .post(
          `${process.env.VUE_APP_SERVER_URL}/applicant/apply`,
          formData,
          customConfig
        )
        .then((response) => {
          if (response.data.status === "Success") {
            alert("Application Successful");
            router.push("/dashboard");
          }
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {
    ...mapState({ currentUser: (state) => state.user_dashboard.currentUser }),
  },
  mounted() {
    this.fetchUser();
  },
  name: "ApplicationForm",
};
</script>

<style scoped>
.files {
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
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  width: 211px;
  background: white;
}
.fileUpload:hover {
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