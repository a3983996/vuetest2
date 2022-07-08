<template>
  <div class="page_content">
    <!-- <LoadingComponent :active="isLoading"></LoadingComponent> -->
    <NavbarComponent :isWhiteNav="isWhiteNav"></NavbarComponent>
    <router-view @push-isWhiteNav="isWhiteNav = $event" />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// import LoadingComponent from "./components/LoadingComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { ref } from "vue";
export default {
  components: {
    // LoadingComponent,
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    const isLoading = ref(true);
    // setTimeout(() => {
    //   isLoading.value = false;
    // }, 3000);
    isLoading.value = false;
    const isWhiteNav = ref(false);

    return {
      isLoading,
      isWhiteNav,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/all";
</style>
