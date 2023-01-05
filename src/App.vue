<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import { RouterView } from "vue-router";
import { footerPage } from "@/data/index";
</script>

<template>
  <div class="w-full mh-c-page-bg">
    <SideBar />
    <RouterView />
    <FooterPage v-bind="footerPage" />
  </div>
</template>

<style scoped></style>
