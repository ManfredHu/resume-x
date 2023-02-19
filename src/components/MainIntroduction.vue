<script setup lang="ts">
import type { MainIntroduction } from "@/types/components";
import MainIntroductionBody from "./MainIntroductionBody.vue";
import MainIntroductionTitle from "./MainIntroductionTitle.vue";
defineProps<MainIntroduction>();
</script>

<template>
  <div class="w-full flex flex-col">
    <section
      v-for="(item, idx) in article"
      :key="`main-introduction` + idx"
      class="flex flex-col items-center pb-6"
    >
      <MainIntroductionTitle
        :key="`main-introduction-title` + idx"
        v-bind="item.heading"
      />
      <MainIntroductionBody
        :key="`main-introduction-body` + idx"
        v-bind="item"
      />
    </section>
  </div>
</template>

<style scoped></style>
