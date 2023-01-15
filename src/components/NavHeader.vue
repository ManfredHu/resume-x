<template>
  <nav
    class="w-screen mh-c-page-main-bg top-0 py-4 px-16 flex items-center justify-end border-b nav"
  >
    <n-select
      class="w-28 mr-6"
      v-model:value="value"
      :options="options"
      @update:value="changeLanguage"
    />
    <n-switch v-model:value="active" @update:value="handleChange">
      <template #checked-icon>
        <n-icon :component="DarkModeOutlined" />
      </template>
      <template #unchecked-icon>
        <n-icon :component="LightModeOutlined" />
      </template>
    </n-switch>
  </nav>
</template>

<script setup lang="ts">
import { DarkModeOutlined, LightModeOutlined } from "@vicons/material";
import { NSwitch, NIcon, NSelect, darkTheme } from "naive-ui";
import { ref, onMounted } from "vue";
import type { GlobalTheme } from "naive-ui";
import { useRouter } from "vue-router";
import { SupportLang } from "@/types/enum";

const active = ref(false);
const value = ref("zh");

const options = [
  { label: "中文", value: SupportLang.zh },
  { label: "English", value: SupportLang.en },
  { label: "Deutsch", value: SupportLang.de },
  { label: "Fran\u00e7ais", value: SupportLang.fr },
  { label: "\u65e5\u672c\u8a9e", value: SupportLang.ja },
];
const theme = ref<GlobalTheme | null>(null);
const router = useRouter();

function setDarkMode() {
  document.documentElement.classList.add("dark");
  active.value = true;
  theme.value = darkTheme;
}

function setLightMode() {
  document.documentElement.classList.remove("dark");
  active.value = false;
  theme.value = null;
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

function changeLanguage(value: string) {
  router.push({
    path: `/${value}`,
  });
}
</script>

<style scoped>
.nav {
  border-color: var(--mh-c-primary);
}
</style>
