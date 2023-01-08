<template>
  <aside class="h-screen fixed left-0 mh-c-page-main-bg p-4">
    <n-switch v-model:value="active" @update:value="handleChange">
      <template #checked-icon>
        <n-icon :component="DarkModeOutlined" />
      </template>
      <template #unchecked-icon>
        <n-icon :component="LightModeOutlined" />
      </template>
    </n-switch>

    <n-select class="mt-6 w-24" v-model:value="value" :options="options" />
  </aside>
</template>

<script setup lang="ts">
import { DarkModeOutlined, LightModeOutlined } from "@vicons/material";
import { NSwitch, NIcon, NSelect } from "naive-ui";
import { ref, onMounted } from "vue";
const active = ref(false);
const value = ref("zh-cn");
const options = [
  { label: "中文", value: "zh-cn" },
  { label: "English", value: "en" },
];

function setDarkMode() {
  document.documentElement.classList.add("dark");
  active.value = true;
}

function setLightMode() {
  document.documentElement.classList.remove("dark");
  active.value = false;
}

onMounted(() => {
  const darkMode = window?.matchMedia?.("(prefers-color-scheme: dark)");
  if (darkMode?.matches) {
    setDarkMode();
  } else {
    setLightMode();
  }
});

function handleChange(value: boolean) {
  if (value) {
    setDarkMode();
  } else {
    setLightMode();
  }
}
</script>

<style scoped></style>
