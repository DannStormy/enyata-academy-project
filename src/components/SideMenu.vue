<template>
  <div class="side-menu">
    <div class="user-details">
      <div>
        <img
          :src="profile?.profilepic"
          class="profile-pic"
          alt="user profile picture"
        />
      </div>
      <p class="user-name">{{ profile?.firstname }} {{ profile?.lastname }}</p>
      <p class="user-email">{{ profile?.email }}</p>
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
    ...mapActions(["fetchUser", "removeAccessToken", "dashboardPic"]),
    logout() {
      this.removeAccessToken();
      router.push("/login");
    },
  },
  computed: {
    ...mapState({ currentUser: (state) => state.user_dashboard.currentUser }),
    ...mapState({ profile: (state) => state.user_dashboard.profile }),
  },
  mounted() {
    this.fetchUser();
    this.dashboardPic();
  },
  name: "SideMenu",
};
</script>

<style scoped>
* {
  font-family: "Lato", sans-serif;
  font-size: 16px;
}
.side-menu {
  min-width: 290px;
  max-width: 292px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  height: 100vh;
  position: fixed;
  background-color: white;
  z-index: 1;
}
.user-details {
  background-color: #7557d3;
  padding: 57px 0;
  text-align: center;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
}
.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.user-name {
  margin: 13px 0 5px;
  font-weight: 700;
  font-size: 20px;
}
.user-email {
  font-style: italic;
  font-weight: 400;
}
.nav-button-img {
  margin-right: 16.56px;
}
.nav-buttons a,
.logout {
  height: 49px;
  display: block;
  background-color: #ffffff;
  color: #2b3c4e;
  outline: none;
  border: none;
  border-left: 4px solid #ffffff;
  padding-left: 30px;
  cursor: pointer;
  line-height: 19.2px;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
}
a.router-link-exact-active {
  border-left: 4px solid #7557d3;
  font-weight: 700;
}
a {
  text-decoration: none;
}
.assessment-button {
  margin: 28px 0 57px;
}
</style>