<template>
  <div class="flex-container">
    <AdminSideMenu />
    <div class="table-container">
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
            <tr class="table-row active">
              <td class="active">Batch 1</td>
              <td>12/07/94</td>
              <td>30</td>
              <td>30 minutes</td>
            </tr>
            <tr class="table-row">
              <td>Batch 1</td>
              <td>12/07/94</td>
              <td>30</td>
              <td>30 minutes</td>
            </tr>
            <tr class="table-row">
              <td>Batch 1</td>
              <td>12/07/94</td>
              <td>30</td>
              <td>30 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";

export default {
  name: "AssessmentHistory",
  components: { AdminSideMenu },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  gap: 75px;
  font-size: 13px;
}
.table-container {
  margin-top: 111px;
  margin-left: 334px;
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

tr.active {
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