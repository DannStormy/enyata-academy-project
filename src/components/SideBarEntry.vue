<template>
  <!-- <ScrollBar /> -->
  <div class="confirmation-container" v-if="isActive">
    <div class="confirmation-box">
      <form class="question-box" @submit.prevent>
        <div class="que">
          {{ question }}
        </div>
        <div class="buttons">
          <button @click="yesConfirm()">Yes</button>
          <button @click="noConfirm()">No</button>
        </div>
      </form>
    </div>
  </div>
  <div class="wrapper" v-if="!isActive">
    <div class="container">
      <div class="profile-picture">
        <img :src="image" alt="dummy-logo" />
      </div>
      <p class="details">Personal details</p>
      <form action="">
        <div class="options">
          <div>
            <p><label for="name">Name</label></p>
            <input type="text" id="name" name="name" :placeholder="name" />
          </div>
          <div>
            <p><label for="email">Email</label></p>
            <input type="text" id="email" name="email" :placeholder="email" />
          </div>
          <div>
            <p><label for="address">Address</label></p>
            <input
              type="text"
              id="address"
              name="address"
              :placeholder="address"
            />
          </div>
          <div>
            <p><label for="university">University</label></p>
            <input
              type="text"
              id="university"
              name="university"
              :placeholder="university"
            />
          </div>
          <div>
            <p><label for="course">Course of study</label></p>
            <input
              type="text"
              id="course"
              name="course"
              :placeholder="course"
            />
          </div>
          <div>
            <p><label for="dob">Date of birth</label></p>
            <input type="text" id="dob" name="dob" :placeholder="dob" />
          </div>
          <div>
            <p><label for="cgpa">CGPA</label></p>
            <input type="text" id="cgpa" name="cgpa" :placeholder="cgpa" />
          </div>
          <div>
            <p><label for="cv">CV</label></p>
            <!-- <a target="_blank"><iframe :src="pdf">Open</iframe></a> -->
            <div class="pdf-container">
              <img src="@/assets/images/pdf.svg" alt="pdf-image" />
              <a :href="pdf" download="file.pdf">Download</a>
            </div>
            <!-- <object :data="pdf" type="application/pdf"></object> -->
            <!-- <input type="text" id="cgpa" name="cgpa" placeholder="5.0"> -->
          </div>
        </div>
      </form>
      <div class="decide">
        <button class="approve" @click="approveApplication">Approve</button>
        <button class="decline" @click="declineApplication">Decline</button>
      </div>
    </div>
  </div>
</template>

<script>
// import ScrollBar from "@/components/ScrollBar.vue";
export default {
  data: () => ({
    isActive: false,
    question: "",
  }),
  props: {
    name: String,
    email: String,
    address: String,
    university: String,
    course: String,
    dob: String,
    cgpa: String,
    image: String,
    pdf: String,
  },
  methods: {
    approveApplication() {
      this.question = "Are you sure you want to approve this application";
      this.isActive = true;
    },
    declineApplication() {
      this.question = "Are you sure you want to decline this application";
      this.isActive = true;
    },
    yesConfirm() {
      this.$emit("sendConfirm", false);
    },
    noConfirm() {
      this.isActive = false;
    },
  },
  emits: ["sendConfirm"],
  name: "SideBarEntry",
  //   components: { ScrollBar },
};
</script>

<style scoped>
* {
  color: #7d7d7d;
}

.wrapper {
  background-color: white;
  position: fixed;
  overflow-y: scroll;
  width: 600px;
  max-height: 100%;
  z-index: 25;
  right: 0;
  /* inset: auto 0 auto auto; */
}

.confirmation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -250px;
  z-index: 30;
  background-color: red;
}

.confirmation-box {
  width: 477px;
  height: 300px;
  border-radius: 4px;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  filter: blur(0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.question-box {
  width: 257px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.que {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #4f4f4f;
  margin-bottom: 48px;
}

.buttons button {
  width: 128.5px;
  height: 48px;
  color: black;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  border: none;
}
.active {
  background: rgb(25, 13, 74, 0.2);
  filter: blur(2px);
}

.buttons button:hover {
  background: #7557d3;
  color: white;
}

.wrapper {
  width: 600px;
  float: right;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.container {
  margin-left: 48px;
  margin-right: 58px;
}

.profile-picture {
  width: 179px;
  height: 179px;
  margin-top: 94px;
  margin-bottom: 43px;
}
.profile-picture img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.details {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 47px;
  color: #7d7d7d;
}
.options {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 32px;
}
label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b1b1b1;
  width: 37px;
  height: 17px;
  margin-bottom: 8px;
}
input {
  width: 231px;
  height: 48px;
  border: 1px solid #cdcfd6;
  border-radius: 4px;
  margin-bottom: 36px;
  padding: 14px 18px;
}
input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #7557d3;
}
.pdf-container {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 18px;
}
.decide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px 108px;
}
.approve {
  width: 125px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #cdcfd6;
  color: #cecece;
  cursor: pointer;
}
.decline {
  width: 125px;
  height: 48px;
  border: 1px solid #cdcfd6;
  border-radius: 4px;
  cursor: pointer;
  color: #cecece;
  margin-left: 24px;
}
button:hover {
  background: #7557d3;
  color: white;
}
</style>