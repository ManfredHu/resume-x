<template>
  <div class="w-full">
    <section class="py-2 w-full">
      <div v-for="(item, idx) in mainContent" :key="`body` + idx" class="my-2">
        <!-- subTitle start -->
        <h2
          v-if="item.subTitle"
          className="rounded-full text-xl mh-c-text-const bg-primary px-4 py-1 inline-block"
        >
          {{ t(item.subTitle) }}
        </h2>
        <!-- subTitle end -->

        <!-- period start -->
        <div v-if="item.period" class="flex flex-row mt-4">
          <h3 class="text-lg text-primary flex-shrink-0">
            {{
              `${timePeriodSymbol[0]}
              ${item.period?.timePeriod && t(item.period.timePeriod)}
              ${timePeriodSymbol[1]}`
            }}
          </h3>
          <div class="text-lg ml-2 mh-c-text">
            {{ item.period.headship && t(item.period.headship) }}
          </div>
        </div>
        <!-- period end -->

        <!-- rewards start -->
        <div v-if="item.rewards" class="text-lg mt-4 flex flex-col gap-y-4">
          <div
            v-for="(reward, rIdx) in item.rewards"
            :key="`body-rewards` + rIdx"
          >
            <h3 class="text-lg text-primary flex-shrink-0 inline-block">
              {{
                `${rewardsTypeSymbol[0]}${
                  reward.rewardsType && t(reward.rewardsType)
                }${rewardsTypeSymbol[1]}`
              }}
            </h3>
            <span class="mh-c-text">{{ t(reward.text) }}</span>
          </div>
        </div>
        <!-- rewards end -->

        <!-- textList start -->
        <div v-if="item.textList" class="py-3">
          <ol v-if="Array.isArray(item.textList) && item.textList.length > 0">
            <li
              v-for="(j, idx) in item.textList"
              :key="`body-textList` + idx"
              class="text-lg mh-c-text list-decimal list-inside"
            >
              {{ t(j) }}
            </li>
          </ol>
          <div v-else class="text-lg mh-c-text">
            {{ item.textList && t(item.textList as string) }}
          </div>
        </div>
        <!-- textList end -->
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { MainIntroductionContent } from "@/types/components";
import { timePeriodSymbol, rewardsTypeSymbol } from "@/config/symbol";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// trick to pass array's type
defineProps<{
  mainContent: MainIntroductionContent[];
}>();
</script>

<style scoped></style>
