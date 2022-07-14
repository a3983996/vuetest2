<template>
  <div class="backgroundbox">
    <TVWallComponent :tvwallList="tvwallList"></TVWallComponent>
    <form @submit.prevent="signIn" class="form_login">
      <p>後台登入</p>
      <div class="item_info">
        <input
          type="email"
          autocomplete="on"
          class="form-control"
          v-model="user.username"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <label for="exampleInputEmail1" class="">Email address</label>
      </div>
      <div class="item_info">
        <input
          type="password"
          autocomplete="on"
          class="form-control"
          v-model="user.password"
          id="exampleInputPassword1"
          required
        />
        <label for="exampleInputPassword1" class="">Password</label>
      </div>

      <button type="submit" class="">登入</button>
    </form>
    <form @submit.prevent="register" class="form_login">
      <p>後台註冊</p>
      <div class="item_info">
        <input
          type="email"
          autocomplete="on"
          class="form-control"
          v-model="user.username"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <label for="exampleInputEmail1" class="">Email address</label>
      </div>
      <div class="item_info">
        <input
          type="password"
          autocomplete="on"
          class="form-control"
          v-model="user.password"
          id="exampleInputPassword1"
          required
        />
        <label for="exampleInputPassword1" class="">Password</label>
      </div>

      <button type="submit" class="">註冊</button>
    </form>
  </div>
</template>

<script>
import TVWallComponent from "@/components/TVWallComponent.vue";
import bcrypt from "bcryptjs";
import { ref, reactive, inject } from "vue";
export default {
  components: {
    TVWallComponent,
  },
  setup() {
    const tvwallList = ref([
      require("@/assets/background0.jpg"),
      require("@/assets/background1.jpg"),
      require("@/assets/background2.jpg"),
    ]);
    const axios = inject("axios");
    const user = reactive({ username: "", password: "" });
    function encryptPassword(password) {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    }
    function signIn() {
      let account = user.username;
      let hashpassword = encryptPassword(user.password);
      axios
        .post("http://www.xiaokai.ml/admin/signin", { account, hashpassword })
        .then((res) => {
          console.log(res.data);
        });
    }
    function register() {
      let account = user.username;
      let hashpassword = encryptPassword(user.password);
      axios
        .post("http://www.xiaokai.ml/admin/register", { account, hashpassword })
        .then((res) => {
          console.log(res.data);
        });
    }
    // function signI() {
    //   const api = `${process.env.VUE_APP_API}admin/signin`;
    //   axios.post(api, user).then((res) => {
    //     if (res.data.success) {
    //       const { token, expired } = res.data;
    //       document.cookie = `hexToken=${token};
    //        expires=${new Date(expired)}`;

    //       console.log("登入成功");
    //     }
    //   });
    // }
    return {
      tvwallList,
      user,
      signIn,
      register,
    };
  },
};
</script>

<style lang="scss">
.backgroundbox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .form_login {
    position: absolute;
    background-color: rgba($color: #ffffff, $alpha: 0.8);
    box-shadow: 4px 6px 16px rgba(0, 0, 0, 1);
    width: 90%;
    max-width: 500px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    &:nth-child(3) {
      position: fixed;
      top: 1rem;
      left: 1rem;
    }
    p {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0;
    }
    .item_info {
      margin: 1rem 0;
      position: relative;
      width: 90%;

      input {
        width: 100%;
        height: 3rem;
        border: none;
        outline: none;
        border-radius: 5px;
        padding-left: 1rem;
        padding-top: 1rem;
      }

      label {
        position: absolute;
        top: 1rem;
        left: 1rem;
        transition: 0.3s;
      }
      input:valid ~ label,
      input:focus ~ label {
        font-size: 0.8rem;
        top: 0.5rem;
        color: $color3;
      }
    }
    button {
      width: 90%;
      border: none;
      background-color: $color4;
      color: $color1;
      margin: 1rem 0;
      height: 3rem;
      border-radius: 5px;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
