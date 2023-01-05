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
  </aside>
</template>

<script setup lang="ts">
import { DarkModeOutlined, LightModeOutlined } from "@vicons/material";
import { NSwitch, NIcon } from "naive-ui";
import { ref, onMounted } from "vue";
const active = ref(false);

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
