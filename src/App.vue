<script setup lang="ts">
import NavHeader from "@/components/NavHeader.vue";
import { RouterView } from "vue-router";
import FooterPage from "@/components/FooterPage.vue";
</script>

<template>
  <div class="w-full mh-c-page-bg">
    <NavHeader />
    <RouterView />
    <FooterPage />
  </div>
</template>

<style scoped></style>
