<template>
  <div class="wrapper">
    <AdminSideMenu />
    <div class="container">
      <div class="dashboard">
        <h1>Entries - Batch 2</h1>
        <p>Comprises of all that applied for batch 2</p>
      </div>
      <form action="">
        <table class="table">
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
              <td>
                <input type="checkbox" id="username1" name="username" value= />
                <label for="username"
                  >{{ applicant.firstname }} {{ applicant.lastname }}</label
                ><br />
              </td>
              <td>{{ applicant.email }}</td>
              <td>{{ applicant.address }} - {{ getAge(applicant.address) }}</td>
              <td>{{ applicant.dob }}</td>
              <td>{{ applicant.university }}</td>
              <td>{{ applicant.cgpa }}</td>
              <td class="scores">
                <span>15 </span
                ><button>
                  <img
                    src="../../assets/svgs/three-dots.svg"
                    alt="send bulk email"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSideMenu from "@/components/AdminSideMenu.vue";
export default {
  data: () => ({
    applicants: null,
  }),
  methods: {
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
  },
  components: {
    AdminSideMenu,
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_SERVER_URL}/admin/application-entries`)
      .then((response) => {
        this.applicants = response.data.data;
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  display: flex;
}
.container{
    margin: 111px 20px 0px 323px;
    width:100%;
}
.dashboard {
  margin-bottom: 35px;
}
.dashboard h1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.dashboard p {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #4f4f4f;
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
  min-width: 1042px;
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
  margin-right: 35px;
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

.table-data {
  padding: 14px 12px;
  margin-top: 32px;
  background: #ffffff;
  border-left: 7px solid #ffffff;
  border-spacing: 30px;
  border-radius: 8px;
}