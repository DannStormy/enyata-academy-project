<template>
    <div class="flex-container">
      <AdminSideMenu />
      <div class="container">
        <h1>Dashboard</h1>
        <div class="dashboard-status">
          <div class="current-applciation">
            <p class="titles">Current Applications</p>
            <p class="data">233</p>
            <hr />
            <p class="comments">Academy 2.0</p>
          </div>
          <div class="total-application">
            <p class="titles">Total Applications</p>
            <p class="data">4253</p>
            <hr />
            <p class="comments">All entries do far</p>
          </div>
          <div class="batch">
            <p class="titles">Academy’s</p>
            <p class="data">4.0</p>
            <hr />
            <p class="comments">So far</p>
          </div>
        </div>
        <div class="further-info">
          <div class="history">
            <p class="finfo">History</p>
            <p class="finfo-description">Last Update  18:24, 22/02/19</p>
            <ul>
              <li>
                <p class="history-title">Academy Batch 1.0</p>
                <p class="candidates">15 candidates</p>
                <p class="history-date">started 11/09/15</p>
              </li>
             <li>
                <p class="history-title">Academy Batch 1.0</p>
                <p class="candidates">15 candidates</p>
                <p class="history-date">started 11/09/15</p>
              </li>
              <li>
                <p class="history-title">Academy Batch 1.0</p>
                <p class="candidates">15 candidates</p>
                <p class="history-date">started 11/09/15</p>
              </li>
            </ul>
          </div>
          <div class="assessments">
            <p class="finfo">Create Assessment</p>
            <div class="assessment-details">
              <p>Create test question for an incoming academy <br>students</p>
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
  </template>
  
  <script>
  import AdminSideMenu from "@/components/AdminSideMenu.vue";
  export default {
    name: "AdminDashboard",
    components: {
        AdminSideMenu,
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
  * {
    font-family: "Lato", sans-serif;
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
    margin-bottom: 65.28px
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
    margin: 8px 0 11px
  }
  hr {
    width: 148px;
    border: 4px solid #006df0;
    border-radius: 4px;
    margin-bottom: 9px
  }
  .total-application > hr {
    border: 4px solid #00F026;
  }
  .batch > hr {
    border: 4px solid #F09000;
  }
  .comments {
    font-size: 12px;
    font-weight: 400;
    color: #4f4f4f;
    margin-bottom: 97px;
  }
  .further-info {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 100%;
    gap: 2%
  }
  .history,
  .assessments {
    border: 1px solid #ececf9;
    border-radius: 4px;
    padding: 25px 35px;
    width: 482px;
  }
  .history{
    border: none
  }
  .finfo {
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #2b3c4e;
  }
  .finfo-description{
    font-size: 12px;
    margin-top: 4px
  }
  li {
    list-style: none;
    max-width: 412.5px;
    padding: 22px 18px;
    margin-top: 32px;
    background: #FFFFFF;
    border-left: 7px solid #FFFFFF;
    display: flex;
    justify-content: space-between;
  }
  li:hover{
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    border-left: 7px solid #7557D3;
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
    background-color: hsl(0, 0%, 69%);
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 10px 42px;
    border-radius: 4px;
    font-weight: 700;
    margin-top: 34px;
  }
  .assessment-button:hover {
    background-color: hsl(0, 0%, 75%);
    transition: .1s
    }
  </style>