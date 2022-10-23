<template>
  <div class="flex-container">
    <AdminSideMenu />
    <div class="container">
      <div class="header">
        <label for="cars">Results - </label>
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
          <table class="table" width="100px">
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
                <th colspan="2">
                  Test Scores
                  <img
                    src="../../assets/svgs/sort-arrow.svg"
                    alt="icon for sort"
                  />
                </th>
              </tr>
              <tr
                class="table-data"
                v-for="applicant in applicants"
                :key="applicant.id"
              >
                <td class="check">
                  <input type="checkbox" id="username1" name="username" />
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
                  <span>15 </span
                  ><button @click="active">
                    <img
                      src="../../assets/svgs/three-dots.svg"
                      alt="send bulk email"
                    />
                  </button>
                  <SendMail
                    :mail="`mailto:${applicant.email}`"
                    v-if="isActive"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import SendMail from "@/components/SendMail.vue";
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    isActive: false,
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
    active() {
      this.isActive = true;
    },
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
  margin: 107px 0 86px 290px;
  /* padding: 0 0 0 40px;
  width: 100%; */

  /* margin: 107px 93px 86px 290px; */
  padding: 0 30px;
}
.check {
  display: flex;
  align-items: center;
  margin-top: 10px;
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
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #5c6664;
  overflow: hidden;
  border-radius: 0.25em;
}
.select::after {
  content: "\25BC";
  position: absolute;
  right: 0;
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
  text-align: center;
  width: fit-content;
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
/* tr{
    border-collapse:collapse;
    border-spacing:0 15px;
  } */
.table-data {
  padding: 22px 18px;
  margin-top: 32px;
  background: #ffffff;
  border-left: 7px solid #ffffff;
  border-spacing: 30px;
  border-radius: 8px;
}
.table-data:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-top-left-radius: 8px;
  border-left: 7px solid #7557d3;
  transition: 0.2s;
}

.scores > button > img {
  margin-left: 16px;
  /* width: 100%; */
  height: 100%;
}
</style>