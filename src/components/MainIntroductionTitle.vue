<template>
  <div
    class="w-full header-container pt-3 flex flex-row items-center justify-center"
  >
    <i
      v-if="inlineStartLine"
      class="flex-grow mr-5 h-2px center-line-dot-l relative bg-primary"
    ></i>
    <div class="flex flex-col content-center gap-y-1">
      <div
        class="w-full flex flex-row text-center text-primary justify-center text-4xl items-center"
      >
        <span class="font-semibold">
          {{ inlineStartSymbol }}
        </span>
        <span class="px-8 text-3xl text-primary">{{ title }}</span>
        <span class="font-semibold">
          {{ inlineEndSymbol }}
        </span>
      </div>
      <div class="text-lg text-primary text-center">
        {{ desc }}
      </div>
    </div>
    <i
      v-if="inlineEndLine"
      class="flex-grow ml-5 h-2px center-line-dot-r relative bg-primary"
    ></i>
  </div>
</template>

<script setup lang="ts">
import type { MainIntroductionTitle } from "@/types/components";
import { TitleStyleType } from "@/types/enum";
import { computed } from "vue";
const props = defineProps<MainIntroductionTitle>();

const inlineStartSymbol = computed(() => {
  switch (props.type) {
    case TitleStyleType.AngleBracket:
      return "<";
    case TitleStyleType.CurlyBracket:
      return "{";
    case TitleStyleType.SquareBracket:
      return "[";
    default:
      return "";
  }
});
const inlineEndSymbol = computed(() => {
  switch (props.type) {
    case TitleStyleType.AngleBracket:
      return "/>";
    case TitleStyleType.CurlyBracket:
      return "}";
    case TitleStyleType.SquareBracket:
      return "]";
    default:
      return "";
  }
});
</script>

<style scoped>
.center-line-dot-l:before {
  content: " ";
  width: 8px;
  height: 8px;
  background: var(--mh-c-primary);
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: -5px;
  margin-top: -3.5px;
}
.center-line-dot-r:after {
  content: " ";
  width: 8px;
  height: 8px;
  background: var(--mh-c-primary);
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: -5px;
  margin-top: -3.5px;
}
</style>
