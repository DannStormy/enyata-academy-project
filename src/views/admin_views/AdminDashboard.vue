<template>
  <div class="flex-container">
    <AdminSideMenu />
    <div class="container">
      <LoaderComp v-if="isLoading" />
      <div v-else>
        <h1>Dashboard</h1>
        <div class="dashboard-status">
          <div class="current-applciation">
            <p class="titles">Current Applications</p>
            <p class="data">
              {{ dashboardDetails?.currentBatchCount[0].count }}
            </p>
            <hr />
            <p class="comments">
              Academy
              {{ dashboardDetails?.currentBatch[0].max?.split(" ")[2] }}
            </p>
          </div>
          <div class="total-application">
            <p class="titles">Total Applications</p>
            <p class="data">
              {{ dashboardDetails?.allBatchCount[0].count }}
            </p>
            <hr />
            <p class="comments">All entries so far</p>
          </div>
          <div class="batch">
            <p class="titles">Academys</p>
            <p class="data">
              {{ dashboardDetails?.currentBatch[0].max?.split(" ")[2] }}
            </p>
            <hr />
            <p class="comments">So far</p>
          </div>
        </div>
        <div class="further-info">
          <div class="history">
            <p class="finfo">History</p>
            <p class="finfo-description">Last Update {{ history }}</p>
            <ul>
              <li>
                <p class="history-title">
                  Academy Batch
                  {{ dashboardDetails?.updates[0]?.batch_id?.split(" ")[2] }}
                </p>
                <p class="candidates">
                  {{ dashboardDetails?.approved[0].count }} candidates
                </p>
                <p class="history-date">
                  started
                  {{ formatDate() }}
                </p>
              </li>
            </ul>
          </div>
          <div class="assessments">
            <p class="finfo">Create Assessment</p>
            <div class="assessment-details">
              <p>Create test question for an incoming academy <br />students</p>
              <router-link to="/create-application"
                ><button class="assessment-button">
                  Create Assessment
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import LoaderComp from "@/components/LoaderComp.vue";
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    totalApplications: "",
    currentApplications: "",
    currentBatch: "",
    updates: null,
    history: null,
    approved: 0,
  }),
  methods: {
    ...mapActions(["getDetails"]),
    async details() {
      var currentdate = new Date();
      this.history =
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes();
    },
    formatDate() {
      let date = new Date(this.dashboardDetails?.updates[0]?.created_at);
      let month = date.getUTCMonth() + 1;
      var day = date.getUTCDate();
      var year = date.getUTCFullYear()?.toString()?.slice(-2);
      return day + "/" + month + "/" + year;
    },
  },
  computed: {
    ...mapState({
      dashboardDetails: (state) => state.admin.dashboardDetails,
      isLoading: (state) => state.admin.isLoading,
    }),
  },
  mounted() {
    this.details();
    this.getDetails();
  },
  name: "AdminDashboard",
  components: {
    AdminSideMenu,
    LoaderComp,
  },
};
</script>
  
<style scoped>
* {
  color: #2b3c4e;
}
.flex-container {
  display: flex;
}
.container {
  margin: 107px 0 86px 290px;
  padding: 0 58px;
}
h1 {
  font-weight: 300;
  font-size: 43.56px;
  letter-spacing: -0.02em;
  margin-bottom: 65.28px;
}
.dashboard-status {
  display: flex;
  gap: 87px;
}
.titles {
  font-size: 14px;
  color: #4f4f4f;
}
.data {
  font-weight: 300;
  font-size: 48px;
  margin: 8px 0 11px;
}
hr {
  width: 148px;
  border: 4px solid #006df0;
  border-radius: 4px;
  margin-bottom: 9px;
}
.total-application > hr {
  border: 4px solid #00f026;
}
.batch > hr {
  border: 4px solid #f09000;
}
.comments {
  font-size: 12px;
  font-weight: 400;
  color: #4f4f4f;
  margin-bottom: 97px;
}
.further-info {
  display: flex;
}
.history,
.assessments {
  border: 1px solid #ececf9;
  border-radius: 4px;
  padding: 25px 25px;
  width: 435px;
}
.history {
  border: none;
}
.finfo {
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.finfo-description {
  font-size: 12px;
  margin-top: 4px;
}
li {
  list-style: none;
  max-width: 412.5px;
  padding: 22px 10px;
  margin-top: 32px;
  background: #ffffff;
  border-left: 7px solid #ffffff;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
li:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  border-left: 7px solid #7557d3;
  transition: 0.2s;
}
.assessment-details {
  text-align: center;
  font-size: 16.73px;
  font-weight: 400;
  line-height: 20.07px;
  color: #4f4f4f;
  margin: 70px 0 80px;
}
.assessment-button {
  background-color: #12c52f;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px 42px;
  border-radius: 4px;
  font-weight: 700;
  margin-top: 34px;
}
</style>
  