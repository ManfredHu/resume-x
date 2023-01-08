<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <footer>
    <section class="py-8 gap-y-4 w-full bg-primary flex flex-col items-center">
      <div class="mh-c-text-const text-center mh-c-text">
        {{ t("footerDesc") }}
      </div>
      <div class="mh-c-text-const text-center mh-c-text">
        {{ t("copyright") }}
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
