<script setup lang="ts">
import type { FooterPage } from "@/types/components";

defineProps<FooterPage>();
</script>
<template>
  <footer>
    <section class="py-8 gap-y-4 w-full bg-primary flex flex-col items-center">
      <div
        class="text-base text-center text-icons"
        v-for="(item, idx) in footerTextArr"
        :key="`footer` + idx"
      >
        {{ item }}
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
