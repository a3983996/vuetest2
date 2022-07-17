<template>
  <div>
    <button type="button" @click="logout">登出</button>
  </div>
</template>

<script>
import { inject } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const axios = inject("axios");
    const router = useRouter();
    function logout() {
      const api = `${process.env.VUE_APP_API}/logout`;

      axios.post(api).then((res) => {
        if (res.data.success) {
          const { token } = res.data;
          document.cookie = `hexToken=${token};`;
          console.log(res.data);
          router.push("/adminLogin");
        }
      });
    }
    return { logout };
  },
};
</script>

<style lang="scss"></style>
