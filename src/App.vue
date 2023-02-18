<template>
  <div class="w-full mh-c-page-bg">
    <NavHeader />
    <RouterView />
    <FooterPage />
  </div>
</template>

<script setup lang="ts">
import FooterPage from "@/components/FooterPage.vue";
import NavHeader from "@/components/NavHeader.vue";
import { RouterView } from "vue-router";
</script>
<style scoped></style>
