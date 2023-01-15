<template>
  <section class="flex flex-row pb-7 gap-x-24">
    <!-- person infomation, like phone number or name e.g. -->
    <div class="flex flex-row">
      <div class="flex flex-col text-center items-center">
        <div
          class="flex flex-row items-center justify-center rounded-full w-56 h-56 border-3 border-primary p-0.5"
        >
          <img class="rounded-full w-full" :src="avator" alt="avator" />
        </div>
        <span class="block text-primary text-4xl mt-4">{{ t("name") }}</span>
        <span class="block text-primary text-2xl mt-1">{{
          t("nickName")
        }}</span>
      </div>
    </div>

    <!-- person infomation detail -->
    <div class="flex flex-col flex-1 relative justify-between">
      <div
        class="flex flex-row items-center p-7 pt-0 border-b-2 border-primary border-dashed bottom-line-dot-r bottom-line-dot-l gap-x-5"
      >
        <div class="rounded-full text-xl text-white bg-primary py-2 px-4">
          {{ t("applyPosition") }}
        </div>
        <div class="text-xl mh-c-text">{{ t("target") }}</div>
      </div>
      <div
        class="p-7 grid grid-cols-2 gap-4 border-b-2 border-primary bottom-line-dot-r"
      >
        <div
          v-for="(baseInfoItem, idx) in baseInfoList"
          :key="idx"
          class="text-xl mh-c-text flex flex-row items-center gap-4"
        >
          <ion-icon
            v-bind="baseInfoItem"
            :color="baseInfoItem.color"
          ></ion-icon>

          <a
            class="hover:underline cursor-pointer"
            v-if="baseInfoItem.link"
            :href="baseInfoItem.link"
            target="_blank"
            >{{ t(baseInfoItem.text) }}</a
          >
          <span v-else>
            {{ t(baseInfoItem.text) }}
          </span>
        </div>
      </div>
      <i class="sp-line-dot"></i>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BaseInfoType } from "@/types/components";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps<BaseInfoType>();
</script>

<style scoped lang="less">
.bottom-line-mixins() {
  content: " ";
  width: 8px;
  height: 8px;
  background: var(--mh-c-primary);
  border-radius: 50%;
  position: absolute;
  margin-left: -5px;
  margin-bottom: -5px;
}
.bottom-line-dot-l,
.bottom-line-dot-r {
  position: relative;
}
.bottom-line-dot-l:before {
  .bottom-line-mixins();
  left: 0;
  bottom: 0;
}
.bottom-line-dot-r:after {
  .bottom-line-mixins();
  right: 0;
  bottom: 0;
}

@spLineDotHeight: 5rem;
.sp-line-dot {
  // background: var(--mh-c-primary);
  // opacity: .5;
  content: " ";
  height: @spLineDotHeight;
  width: 1rem;
  margin-left: -1 * @spLineDotHeight;
  position: absolute;
  transform-origin: top left;
  transform: skewX(45deg);
  border-left: 2px solid var(--mh-c-primary);
  left: 0px;
  bottom: 1px;
  z-index: 11;
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 8px;
    background: var(--mh-c-primary);
    border-radius: 50%;
    margin-left: -5px;
    margin-top: -5px;
    transform: skewX(-45deg);
  }
}

ion-icon {
  border-radius: 50%;
  padding: 8px;
  font-size: 24px;
  color: var(--mh-c-icons);
  background-color: var(--mh-c-primary);
}
</style>
