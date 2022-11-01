<template>
  <div class="container">
    <div class="header">
      <div class="title"><p>Profile Settings</p></div>
      <button @click="edit" class="edit">Edit</button>
    </div>
    <div class="line"></div>
    <form :class="{ disabled: isDisabled }" @submit.prevent="saveAdmin">
      <div class="profile-picture">
        <div class="pp_container">
          <img :src="newAdmin.profilepic" alt="" />
        </div>
        <label for="files" class="btn">Upload new image</label>
        <input
          id="files"
          style="display: none"
          type="file"
          accept=".jpeg, .png, .jpg"
          @change="previewImage"
        />
        <div class="remove">
          <img src="@/assets/svgs/Vector.svg" alt="x" />
          <p>Remove</p>
        </div>
      </div>
      <div class="form-top">
        <div>
          <label for="name">Name</label><br />
          <input
            type="text"
            id="name"
            name="name"
            :disabled="isDisabled"
            v-model="newAdmin.fn"
          /><br />
        </div>
        <div>
          <label for="email">Email</label><br />
          <input
            type="email"
            id="email"
            name="email"
            :disabled="isDisabled"
            v-model="newAdmin.email"
          /><br />
        </div>
        <div>
          <label for="phone">Phone Number</label><br />
          <input
            type="tel"
            id="phone"
            name="phone"
            :disabled="isDisabled"
            v-model="newAdmin.phone"
          /><br />
        </div>
      </div>
      <div class="form-bottom">
        <div>
          <label for="country">Country</label><br />
          <input
            type="text"
            id="country"
            name="country"
            :disabled="isDisabled"
            v-model="newAdmin.country"
          /><br />
        </div>
        <div>
          <label for="address">Address</label><br />
          <input
            type="text"
            id="address"
            name="address"
            :disabled="isDisabled"
            v-model="newAdmin.address"
          /><br />
        </div>
      </div>
      <div class="save">
        <button>Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    isDisabled: true,
    newAdmin: {
      fn: "",
      email: "",
      profilepic: "",
      phone: "",
      country: "",
      address: "",
    },
  }),
  computed: {
    ...mapState({ admin: (state) => state.admin.adminDetails }),
  },
  methods: {
    ...mapActions(["adminDetails", "adminAuth"]),
    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.newAdmin.profilepic = e.target.result;
        };
        // this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    edit() {
      this.isDisabled = !this.isDisabled;
    },
    saveAdmin() {
      if (!this.newAdmin.email) {
        alert("Admin email required");
        return;
      }
      if (!this.newAdmin.fn) {
        alert("Admin name required");
        return;
      }
      this.isDisabled = true;

      axios
        .post(
          `${process.env.VUE_APP_SERVER_URL}/admin/create-admin`,
          this.newAdmin
        )
        .then(function (response) {
          console.log(response);
          if (response) {
            alert(`Admin Saved`);
          }
        })
        .catch(function (error) {
          alert(error);
        });

      this.newAdmin = {
        fn: "",
        email: "",
        profilepic: "",
        phone: "",
        country: "",
        address: "",
      };
    },
  },
  mounted() {
    this.adminDetails();
  },
  name: "ProfileComp",
};
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4a4a4a;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.edit {
  width: 127px;
  height: 38px;
  border: 1px solid #7557d3;
  color: #7557d3;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
}
.edit:hover {
  background: #7557d3;
  color: white;
}
.line {
  background: #ffffff;
  border: 1px solid #f2f2f2;
  margin-bottom: 56px;
}
.profile-picture {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 319px;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 47px;
}
.btn {
  border-bottom: 1px solid #333758;
  color: #333758;
  opacity: 0.5;
  cursor: pointer;
}
.remove {
  color: #ff5722;
  display: flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 10px;
}
.save {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.save button {
  width: 127px;
  height: 38px;
  background: #7557d3;
  border-radius: 3px;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 100px;
}
.form-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-top,
.form-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
label {
  font-weight: 400;
  font-size: 15px;
  color: #333758;
  opacity: 0.5;
  display: inline-block;
  margin-bottom: 8px;
}
input {
  width: 216px;
  height: 54px;
  background: rgba(117, 87, 211, 0.04);
  padding: 15px;
  border: none;
}
.pp_container {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: grey;
  border: none;
}
.pp_container img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
}
.disabled {
  pointer-events: none;
  /* background: rgb(25, 13, 74, 0.1); */
  /* filter: blur(1px); */
}
#address {
  width: 469px;
}
</style>