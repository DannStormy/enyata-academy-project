<template>
  <div class="side-menu">
    <div class="user-details">
      <div>
        <img src="../assets/svgs/user-profile.svg" alt="user profile picture" />
      </div>
      <p class="user-name">
        {{ currentUser.firstName }} {{ currentUser.lastName }}
      </p>
      <p class="user-email">{{ currentUser.email }}</p>
    </div>
    <div class="nav-buttons">
      <router-link to="/dashboard"
        ><img
          src="../assets/svgs/dashboard-logo.svg"
          alt="dashboard icon"
          class="nav-button-img"
        />Dashboard</router-link
      >
      <router-link to="/assessment" class="assessment-button"
        ><img
          src="../assets/svgs/assessment-logo.svg"
          alt="assessment icon"
          class="nav-button-img"
        />Assessment</router-link
      >
      <div @click="logout" class="logout">
        <img
          src="../assets/svgs/logout-logo.svg"
          alt="logout icon"
          class="nav-button-img"
        />Log Out
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    firstname: "",
    lastname: "",
  }),
  methods: {
    ...mapActions(["fetchUser", "removeAccessToken"]),
    logout() {
      this.removeAccessToken();
      router.push("/login");
    },
  },
  computed: {
    ...mapState({ currentUser: (state) => state.user_dashboard.currentUser }),
  },
  created() {
    this.fetchUser();
  },
  name: "SideMenu",
};
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
    *{
        font-family: 'Lato', sans-serif;
        font-size: 16px
    }
    .side-menu{
        width: 292px;
        box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
        height: 100vh;
        position: fixed;
        background-color: white;
        z-index: 1;
    }
    .user-details{
        background-color: #7557D3;
        padding: 57px 91px;
        text-align: center;
        color: #FFFFFF;
        letter-spacing: -0.02em;
        margin-bottom: 28px
    }
    .user-name{
        margin: 13px 0 5px;
        font-weight: 700;
        font-size: 20px;
    }
    .user-email{
        font-style: italic;
        font-weight:400;
    }
    .nav-button-img{
        margin-right: 16.56px;
    }
    .nav-buttons a{
        height: 49px;
        display: block;
        background-color:#FFFFFF;
        color: #2B3C4E;
        outline: none;
        border: none;
        border-left: 4px solid #FFFFFF;
        padding-left: 30px;
        cursor: pointer;
        line-height: 19.2px;
        text-align: left;
        width: 100%;
        display: flex;
        align-items: center;
    }
    a.router-link-exact-active{
        border-left: 4px solid #7557D3;
        font-weight: 700;
    }
    a{
        text-decoration: none;
    }
    .assessment-button{
        margin: 28px 0 57px
    }
</style>