<template>
  <div class="flex-container">
    <AdminSideMenu />
    <PreviewQuestion
      :docs="eachAssessment.docs"
      @close="close"
      v-if="isActive"
    />
    <div class="table-container" v-else>
      <LoaderComp v-if="isLoading" />
      <div v-else>
        <div class="title">Assessment Template</div>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>Batch</th>
                <th>Date Composed</th>
                <th>No of Questions</th>
                <th>Time Allocated</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="table-row active"
                v-for="assessment in assessments"
                :key="assessment.id"
                @click="getAssessment(assessment)"
              >
                <td class="active">Batch {{ assessment.id }}</td>
                <td>{{ formatDate(assessment.created_at) }}</td>
                <td>{{ assessment.docs.length }}</td>
                <td>30 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import PreviewQuestion from "@/components/PreviewQuestion.vue";
import LoaderComp from "@/components/LoaderComp.vue";

import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    isActive: false,
    eachAssessment: null,
  }),
  methods: {
    ...mapActions(["getAssessments"]),
    formatDate(created) {
      let date = new Date(created);
      let month = date.getUTCMonth() + 1;
      var day = date.getUTCDate();
      var year = date.getUTCFullYear()?.toString()?.slice(-2);
      return day + "/" + month + "/" + year;
    },
    getAssessment(assessment) {
      this.isActive = true;
      this.eachAssessment = assessment;
      console.log(this.eachAssessment);
    },
    close(value) {
      this.isActive = value;
    },
  },
  computed: {
    ...mapState({
      assessments: (state) => state.admin.assessments,
      isLoading: (state) => state.admin.isLoading,
    }),
  },
  mounted() {
    this.getAssessments();
  },
  name: "AssessmentHistory",
  components: { AdminSideMenu, PreviewQuestion, LoaderComp },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  gap: 75px;
  font-size: 13px;
}
.table-container {
  margin-top: 107px;
  margin-left: 353px;
  width: 800px;
}
.title {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 20px;
}
.table {
  width: 100%;
  height: 476px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  padding: 30px;
}
table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  border-spacing: 0 7px;
}
th,
td {
  padding: 20px;
  border-top: 10px solid white;
}
tr {
  cursor: pointer;
}
tr.active{
  border-left: 6px solid #ffffff;
}
tr.active:hover {
  background: white;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  /* border-radius: 8px; */
  border-left: 6px solid #7557d3;
}
thead {
  width: 736px;
  height: 42px;
  background: #2b3c4e;
  color: white;
  border-top: 1em solid transparent;
}
</style>