<script setup lang="ts">
import { basicInfo, mainIntroduction } from "@/data/index";
import BaseInfo from "@/components/BasicInfo.vue";
import MainIntroduction from "@/components/MainIntroduction.vue";
</script>

<template>
  <div class="mh-c-page-main-bg container mx-auto max-w-7xl px-20 pt-14 pb-32">
    <!-- https://github.com/vuejs/vue/issues/4962 -->
    <BaseInfo v-bind="basicInfo" />
    <MainIntroduction v-bind="mainIntroduction" />
  </div>
</template>

<style scoped></style>
