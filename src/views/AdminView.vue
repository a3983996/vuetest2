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
      router.push("/adminLogin");
    }
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(api).then((res) => {
      if (!res.data.success) {
        router.push("/adminLogin");
      }
    });
    return {};
  },
};
</script>

<style lang="scss"></style>
