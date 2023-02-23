<template>
  <nav
    class="w-full mh-c-page-main-bg top-0 py-4 px-16 flex items-center justify-end border-b nav"
  >
    <n-select
      class="w-28 mr-6"
      v-model:value="topicValue"
      :options="topicOptions"
      @update:value="changeTopic"
    />
    <n-select
      class="w-48 mr-6"
      v-model:value="langValue"
      :options="langOptions"
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
import { languageConfig } from "@/config/language";
import type { Topic } from "@/config/topic";
import type { Locale } from "@/config/language";
import topicConfig from "@/config/topic";

const router = useRouter();

// darkmode switch logic
const active = ref(false);
const theme = ref<GlobalTheme | null>(null);
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

// language logic
const langValue = ref("en");
const langOptions = languageConfig.map((item) => {
  return {
    label: item.localizedDisplayName,
    value: item.locale,
  };
});
function changeLanguage(value: Locale) {
  const [, topic] = router.currentRoute.value.params.path as [Locale, Topic];
  router.push({
    path: `/${value}/${topic}`,
  });
}

// topic logic
const topicValue = ref("vue");
const topicOptions = Object.entries(topicConfig).map(([key, value]) => {
  return {
    label: value.label,
    value: key,
  };
});
function changeTopic(value: Topic) {
  const [lang] = router.currentRoute.value.params.path as [Locale];
  router.push({
    path: `/${lang}/${value}`,
  });
}
</script>

<style scoped>
.nav {
  border-color: var(--mh-c-primary);
}
</style>
