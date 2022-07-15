<template>
  <div class="page_content">
    <NavbarComponent :isWhiteNav="isWhiteNav"></NavbarComponent>
    <router-view @push-isWhiteNav="isWhiteNav = $event" />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    const isLoading = ref(true);
    isLoading.value = false;
    const isWhiteNav = ref(false);
    const router = useRouter();
    router.push({ name: "home" });

    return {
      isLoading,
      isWhiteNav,
    };
  },
};
</script>
<style lang="scss"></style>
