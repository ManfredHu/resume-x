<template>
  <div class="w-full">
    <section class="py-2 w-full">
      <!-- item means MainIntroductionContent -->
      <div v-for="(item, idx) in content" :key="`body` + idx" class="my-4">
        <!-- contentTitle start -->
        <h2
          v-if="item.contentTitle"
          className="rounded-full text-xl mh-c-text-const bg-primary px-4 py-1 inline-block"
        >
          {{ t(item.contentTitle) }}
        </h2>
        <!-- contentTitle end -->

        <!-- section start -->
        <div
          v-for="(section, sectionIdx) in item.section"
          :key="`section` + sectionIdx"
          class=""
        >
          <div
            v-if="section.sectionTitle || section.sectionDesc"
            class="flex flex-row mt-4"
          >
            <h3 class="text-lg text-primary flex-shrink-0">
              {{
                `${sectionTitleSymbol[0]}
                ${section?.sectionTitle && t(section?.sectionTitle)}
                ${sectionTitleSymbol[1]}`
              }}
            </h3>
            <div class="text-lg ml-2 mh-c-text">
              {{ section?.sectionDesc && t(section?.sectionDesc) }}
            </div>
          </div>

          <!-- section texts start -->
          <div v-if="section.texts" class="py-3">
            <ol v-if="Array.isArray(section.texts) && section.texts.length > 0">
              <li
                v-for="(j, textsIdx) in section.texts"
                :key="`section${sectionIdx}-texts${textsIdx}`"
                class="text-lg mh-c-text list-decimal list-inside"
              >
                {{ t(j) }}
              </li>
            </ol>
            <div v-else class="text-lg mh-c-text">
              {{ section.texts && t(section.texts as string) }}
            </div>
          </div>
          <!-- section texts end -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { MainIntroductionContent } from "@/types/components";
import { sectionTitleSymbol } from "@/config/symbol";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// trick to pass array's type
defineProps<{
  content: MainIntroductionContent[];
}>();
</script>

<style scoped></style>
