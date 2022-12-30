<template>
  <div class="w-full">
    <section class="py-2 w-full">
      <div v-for="(item, idx) in mainContent" :key="`body` + idx" class="my-2">
        <div
          v-if="item.subTitle"
          className="rounded-full text-xl text-icons bg-primary px-4 py-1 inline-block"
        >
          {{ item.subTitle }}
        </div>
        <div v-if="item.period" class="flex flex-row mt-4">
          <div class="text-lg text-primary flex-shrink-0">
            【{{ item.period.timePeriod }}】
          </div>
          <div class="text-lg ml-2">{{ item.period.headship }}</div>
        </div>
        <div v-if="item.textList" class="py-3">
          <ol v-if="Array.isArray(item.textList) && item.textList.length > 0">
            <li
              v-for="(j, idx) in item.textList"
              :key="`body-textList` + idx"
              class="text-lg list-decimal list-inside"
            >
              {{ j }}
            </li>
          </ol>
          <div v-else class="text-lg">{{ item.textList }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { MainIntroductionContent } from "@/types/components";
// trick to pass array's type
defineProps<{
  mainContent: MainIntroductionContent[];
}>();
</script>

<style scoped></style>
