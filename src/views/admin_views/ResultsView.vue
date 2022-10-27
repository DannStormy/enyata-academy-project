<template>
  <div class="flex-container">
    <AdminSideMenu />
    <div class="container">
      <LoaderComp v-if="isLoading" />
      <div v-else>
      <div class="header">
        <label for="batch">Results - </label>
        <div class="select">
          <select id="batch" name="batchlist" form="batchform">
            <option value="batch1">Batch 1</option>
            <option value="batch2" selected>Batch 2</option>
            <option value="batch3">Batch 3</option>
          </select>
        </div>
        <p class="header-title">Comprises of all that applied for batch 2</p>
      </div>
      <div>
        <form action="" @submit.prevent>
          <table class="table" style="width: 100%">
            <tbody>
              <tr class="header-row">
                <th>Name</th>
                <th>Email</th>
                <th>
                  DOB - Age<img
                    src="../../assets/svgs/sort-arrow.svg"
                    alt="icon for sort"
                  />
                </th>
                <th>Address</th>
                <th>University</th>
                <th>
                  CGPA<img
                    src="../../assets/svgs/sort-arrow.svg"
                    alt="icon for sort"
                  />
                </th>
                <th>
                  Test Scores
                  <img
                    src="../../assets/svgs/sort-arrow.svg"
                    alt="icon for sort"
                  />
                </th>
              </tr>
              <tr
                class="table-data"
                v-for="(applicant, i) in applicants"
                :key="i"
              >
                <td class="check">
                  <input
                    type="checkbox"
                    id="username1"
                    name="username"
                    :checked="applicant.status"
                  />
                  <label for="username"
                    >{{ applicant.firstname }} {{ applicant.lastname }}</label
                  ><br />
                </td>
                <td>{{ applicant.email }}</td>
                <td>{{ applicant.dob }} - {{ getAge(applicant.dob) }}</td>
                <td>{{ applicant.address }}</td>
                <td>{{ applicant.university }}</td>
                <td>{{ applicant.cgpa }}</td>
                <td class="scores">
                  <div class="top">
                    <span>{{ applicant.test_score || "N/A" }} </span
                    ><button @click="getEmail(applicant)">
                      <img
                        src="../../assets/svgs/three-dots.svg"
                        alt="send bulk email"
                      />
                    </button>
                  </div>
                  <SendMail
                    :mail="`mailto:${email.email}`"
                    v-if="isActive && email.email === applicant.email"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import SendMail from "@/components/SendMail.vue";
import LoaderComp from "@/components/LoaderComp.vue";
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    isActive: false,
    email: "",
  }),
  methods: {
    ...mapActions(["getEntries"]),
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    getEmail(val) {
      this.isActive = !this.isActive;
      this.email = val;
      console.log(this.email);
    },
    active() {},
  },
  computed: {
    ...mapState({
      applicants: (state) => state.admin.applicants,
      isLoading: (state) => state.admin.isLoading,
    }),
  },
  mounted() {
    this.getEntries();
  },
  name: "ResultsView",
  components: {
    AdminSideMenu,
    SendMail,
    LoaderComp
  },
};
</script>

<style scoped>
* {
  color: #2b3c4e;
  box-sizing: border-box;
}
.flex-container {
  display: flex;
}
.container {
  margin: 107px 0 40px 290px;
  /* padding: 0 0 0 40px;
  width: 100%; */

  /* margin: 107px 93px 86px 290px; */
  padding: 0 30px;
}
.check {
  /* display: flex; */
  align-items: center;
  /* margin-top: 10px; */
}
.header,
select {
  font-weight: 300;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: -0.02em;
}
select > option {
  font-size: 16px;
}
select {
  border: none;
  outline: none;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #ffffff;
  background-image: none;
  flex: 1;
  cursor: pointer;
}
select::-ms-expand {
  display: none;
}
.select {
  position: relative;
  display: inline-flex;
  width: 5em;
  overflow: hidden;
}
.select::after {
  content: "\25BC";
  position: absolute;
  left: 120px;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}
.header-title {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 38px;
}
.table {
  border-collapse: collapse;
  width: 100%;
  padding: 0 15px;
  border: none;
}
.header-row {
  background-color: #2b3c4e;
  border: none;
  outline: none;
}
.header-row > th {
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}

th {
  padding: 15px 4px;
}
td {
  padding: 15px 4px;
  margin-right: 40px;
  /* text-align: center; */
  /* width: fit-content; */
}
th img {
  margin-left: 7px;
}
input {
  margin-right: 4px;
}
table button {
  background-color: #ffffff;
  border: none;
  outline: none;
}
button img {
  cursor: pointer;
}
/* tr{
    border-collapse:collapse;
    border-spacing:0 15px;
  } */
.table-data:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  transition: 0.2s;

  margin: 20px 0;
}
.table-data:hover td:first-of-type {
  position: relative;
}
.table-data:hover td:first-of-type::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: #7557d3;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.top {
  display: flex;
  justify-content: space-around;
}
/* td.scores {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */
/* .scores > button > img {
  margin-left: 16px;
  width: 100%;
  height: 100%;
}  */
table {
  table-layout: auto;
  word-wrap: break-word;
  width: 100%;
}
form {
  height: 400px;
  overflow-y: scroll;
}
</style>