<template>
  <div class="flex-container">
    <AdminSideMenu />
    <div class="cont">
      <p class="title">Profiles and Settings</p>
      <p class="subtitle">
        Helps you set admin profile and give other users permissions
      </p>
      <nav>
        <ul>
          <li :class="{ active: isActive }" @click="isActive = true">
            Admin Profile
          </li>
          <li :class="{ active: !isActive }" @click="isActive = false">
            Timer Settings
          </li>
        </ul>
      </nav>
      <ProfileComp v-if="isActive" />
      <SettingsComp v-else />
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
import ProfileComp from "@/components/ProfileSettings.vue";
import SettingsComp from "@/components/TimerSettings.vue";

export default {
  name: "Profile-Settings",
  data: () => ({
    isActive: true,
  }),

  components: { AdminSideMenu, ProfileComp, SettingsComp },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  gap: 42px;
  font-size: 13px;
}
.cont {
  margin-top: 90px;
  width: 732px;
}
.title {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 15px;
}
.subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #202f44;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 86px;
}
nav {
  margin-bottom: 58px;
}
ul {
  display: flex;
  align-items: center;
}
li {
  width: 188px;
  height: 64px;
  list-style: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 24px 0;
}
.active {
  background: rgba(117, 87, 211, 0.1);
}
</style>