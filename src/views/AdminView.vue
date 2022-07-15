<template>
  <router-view></router-view>
</template>

<script>
import { inject } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const axios = inject("axios");
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (!token) {
      router.push("/admin/login");
    }
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    console.log(api);
    axios.post(api).then((res) => {
      if (!res.data.success) {
        // router.push("/admin/login");
      }
    });
    return {};
  },
};
</script>

<style lang="scss"></style>
