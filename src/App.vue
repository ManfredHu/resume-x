<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import { RouterView } from "vue-router";
import FooterPage from "@/components/FooterPage.vue";
</script>

<template>
  <div class="w-full mh-c-page-bg">
    <SideBar />
    <RouterView />
    <FooterPage />
  </div>
</template>

<style scoped></style>
