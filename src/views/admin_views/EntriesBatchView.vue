<template>
  <SideBarEntry
    @close="closeModal"
    :name="applicantData?.firstname + ' ' + applicantData?.lastname"
    :email="applicantData?.email"
    :address="applicantData?.address"
    :university="applicantData?.university"
    :course="applicantData?.course"
    :dob="applicantData?.dob"
    :cgpa="applicantData?.cgpa"
    :pdf="applicantData?.cv"
    :image="applicantData?.profilepic"
    @sendConfirm="confirmation"
    v-if="isActive"
  />

  <div :class="['wrapper', { active: isActive }]">
    <AdminSideMenu />
    <div class="container">
      <div class="dashboard">
        <LoaderComp v-if="isLoading" />
        <div v-if="!isLoading">
          <div class="header">
            <label for="batch">Entries - </label>
            <div class="select">
              <select
                id="batch"
                name="batchlist"
                form="batchform"
                v-model="selectedBatch"
                @change="getBatch()"
              >
                <option disabled value="">Select Batch</option>
                <option v-for="(batch, i) in batches" :key="i">
                  Batch {{ batch.batch_id?.split(" ")[2] }}
                </option>
              </select>
              <img
                class="polygon"
                src="@/assets/svgs/select.svg"
                alt="polygon"
              />
            </div>
            <p class="sub">
              Comprises of all that applied for
              {{ selectedBatch || "all batches" }}
            </p>
          </div>

          <form action="" @submit.prevent>
            <table class="table">
              <tbody>
                <tr class="header-row">
                  <th>Name</th>
                  <th>Email</th>
                  <th @click="chooseAgeSort">
                    DOB - Age<img
                      src="../../assets/svgs/sort-arrow.svg"
                      alt="icon for sort"
                    />
                  </th>
                  <th>Address</th>
                  <th>University</th>
                  <th @click="chooseCgpaSort">
                    CGPA<img
                      src="../../assets/svgs/sort-arrow.svg"
                      alt="icon for sort"
                    />
                  </th>
                </tr>
                <tr
                  :class="['table-data', { active: isActive }]"
                  v-for="applicant in applicants"
                  :key="applicant.id"
                  @click="
                    getUser(applicant);
                    switchActive();
                  "
                >
                  <td class="check">
                    <input
                      type="checkbox"
                      id="username1"
                      name="username"
                      :checked="applicant.status"
                      readonly
                    />
                    <label for="username"
                      >{{ applicant.firstname }} {{ applicant.lastname }}</label
                    ><br />
                  </td>
                  <td>{{ applicant.email }}</td>
                  <td class="age">
                    {{ applicant.dob }} - {{ getAge(applicant.dob) }}
                  </td>
                  <td>{{ applicant.address }}</td>
                  <td>{{ applicant.university }}</td>
                  <td>{{ applicant.cgpa }}</td>
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
import axios from "axios";
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import SideBarEntry from "@/components/SideBarEntry.vue";
import LoaderComp from "@/components/LoaderComp.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => ({
    applicantData: null,
    isActive: false,
    confirm: false,
    batches: null,
    selectedBatch: "",
    sortCgpa: false,
    sortAge: false,
  }),
  computed: {
    ...mapState({
      applicants: (state) => state.admin.applicants,
      isLoading: (state) => state.admin.isLoading,
    }),
    ...mapGetters(["sortCgpaUp", "sortCgpaDown", "sortAgeUp", "sortAgeDown"]),
  },
  methods: {
    ...mapActions(["getEntries", "getEntriesByBatch"]),
    chooseCgpaSort() {
      this.sortCgpa = !this.sortCgpa;
      if (this.sortCgpa) {
        this.sortCgpaDown;
      } else {
        this.sortCgpaUp;
      }
    },
    chooseAgeSort() {
      this.sortAge = !this.sortAge;
      if (this.sortAge) {
        this.sortAgeDown;
      } else {
        this.sortAgeUp;
      }
    },
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
    async getAllBatches() {
      const admin = JSON.parse(localStorage.getItem("admin"));
      const customConfig = {
        headers: {
          Authorization: `Basic ${admin.accessToken}`,
        },
      };
      const batches = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/admin/all_batches`,
        customConfig
      );
      this.batches = batches.data.batches;
    },
    getBatch() {
      const batch = this.selectedBatch.split(" ")[1];
      let searchBatch = `Enyata Academy ${batch}`;
      this.getEntriesByBatch(searchBatch);
    },
    getUser(applicant) {
      this.applicantData = applicant;
    },
    switchActive() {
      this.isActive = true;
    },
    confirmation(value) {
      this.isActive = value;
    },
    closeModal() {
      this.isActive = false;
    },
  },
  components: {
    AdminSideMenu,
    SideBarEntry,
    LoaderComp,
  },
  mounted() {
    this.getEntries();
    this.getAllBatches();
  },
  name: "EntriesBatchView",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  display: flex;
  height: 100vh;
}
.container {
  margin: 107px 20px 0px 323px;
  width: 100%;
  /* height: 900px; */
}
.active {
  background: rgb(25, 13, 74, 0.2);
  filter: blur(2px);
  pointer-events: none;
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
.sub {
  margin-bottom: 50px;
}
.header,
select {
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;

  font-size: 36px;
  line-height: 52px;
  letter-spacing: -0.02em;
}
select > option {
  font-size: 16px;
  background: white;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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
  background: inherit;
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
  /* width: 5em; */
  /* overflow: hidden; */
}
.polygon {
  margin-left: 3px;
}
.header-title {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 38px;
}
select::-ms-expand {
  display: none;
}
.check {
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-top: 10px;
}
.select {
  position: relative;
  display: inline-flex;
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
tr {
  cursor: pointer;
}
th {
  /* width: 10px; */
  padding: 15px 4px;
}
.age {
  white-space: nowrap;
}
td {
  padding: 15px 4px;
  margin-right: 35px;
  text-align: left;
  /* width: 10px; */
  width: fit-content;
  background: inherit;
}

th img {
  margin-left: 7px;
}

input {
  margin-right: 4px;
}

table button {
  background-color: inherit;
  border: none;
  outline: none;
}

.table-data {
  padding: 14px 12px;
  margin-top: 32px;
  font-size: 15px;
  /* background: #ffffff; */
  background: inherit;
  /* border-left: 7px solid #ffffff; */
  border-spacing: 30px;
  border-radius: 8px;
}
.table_data {
  vertical-align: middle;
}
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