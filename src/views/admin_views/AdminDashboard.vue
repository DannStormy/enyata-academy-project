<template>
    <div class="flex-container">
      <AdminSideMenu />
      <div class="container">
        <h1>Dashboard</h1>
        <p class="description">
          Your Application is currently being review, you wil be notified if
          successful
        </p>
        <div class="dashboard-status">
          <div class="dofapplication">
            <p class="titles">Date of Application</p>
            <p class="data">09.09.19</p>
            <hr />
            <p class="comments">4 days since applied</p>
          </div>
          <div class="status">
            <p class="titles">Application Status</p>
            <p class="data">Pending</p>
            <hr />
            <p class="comments">We will get back to you</p>
          </div>
        </div>
        <div class="further-info">
          <div class="updates">
            <p class="finfo">Updates</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="assessments">
            <p class="finfo">Take Assessment</p>
            <div class="assessment-details">
              <p>We have 4 days left until the next assessment</p>
              <p>Watch this space</p>
              <router-link to="/assessment"
                ><button class="assessment-button">
                  Take Assessment
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
  }
  .description {
    font-weight: 500;
    font-style: italic;
    margin: 14.28px 0 61px;
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
  }
  hr {
    width: 148px;
    border: 4px solid #006df0;
    border-radius: 4px;
    margin: 19px 0 9px;
  }
  .status > hr {
    border: 4px solid #f09000;
  }
  .comments {
    font-size: 12px;
    font-weight: 400;
    color: #4f4f4f;
    margin-bottom: 97px;
  }
  .further-info {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    gap: 74px;
  }
  .updates,
  .assessments {
    border: 1px solid #ececf9;
    border-radius: 4px;
    padding: 25px 35px;
    width: 482px;
  }
  .finfo {
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #2b3c4e;
  }
  ul li {
    list-style: none;
    border-bottom: 1px solid #cecece;
    padding-top: 74px;
    max-width: 412.5px;
  }
  .assessment-details {
    text-align: center;
    font-size: 16.73px;
    font-weight: 400;
    line-height: 20.07px;
    color: #4f4f4f;
    margin: 144px 0;
  }
  .assessment-button {
    background-color: #b1b1b1;
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