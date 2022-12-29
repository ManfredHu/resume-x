<script setup lang="ts">
import type { MainIntroduction } from "@/types/components";
import MainIntroductionTitle from "./MainIntroductionTitle.vue";
defineProps<MainIntroduction>();
</script>

<template>
  <div class="w-full flex flex-col">
    <div
      v-for="(item, idx) in content"
      :key="`main-introduction` + idx"
      class="flex flex-col items-center"
    >
      <MainIntroductionTitle
        :key="`main-introduction-title` + idx"
        v-bind="item.header"
      />
    </div>
  </div>
</template>

<style scoped></style>
