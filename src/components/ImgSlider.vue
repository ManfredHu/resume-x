<template>
  <div
    ref="container"
    class="w-full mt-6 mb-2"
    :style="{ height: `${containerHeight}px` }"
  >
    <n-carousel
      :slides-per-view="computedImgLen"
      :autoplay="true"
      :space-between="containerSpaceBetween"
      :loop="false"
      draggable
      show-arrow
      :interval="2000"
    >
      <n-carousel-item v-for="(url, idx) in imgs" :key="`img` + idx">
        <n-image :src="url" object-fit="contain" />
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script setup lang="ts">
import { NCarousel, NCarouselItem, NImage } from "naive-ui";
import { onMounted, ref } from "vue";
const props = defineProps<{
  imgs?: string[];
}>();

const containerHeight = ref(0);
const computedImgLen = ref(0);
const maxContainerHeight = 400;
const containerSpaceBetween = 5;
const container = ref<HTMLElement>();

onMounted(() => {
  const imgs = props.imgs;
  if (imgs && Array.isArray(imgs) && imgs.length > 0) {
    const img = new Image();
    // try to load image
    img.src = imgs[0];
    img.onload = () => {
      if (container?.value?.clientWidth) {
        if (img.height < maxContainerHeight) {
          containerHeight.value = img.height;
        } else {
          containerHeight.value = maxContainerHeight;
        }
        if (imgs.length > 1) {
          computedImgLen.value = Math.floor(
            container?.value?.clientWidth /
              ((maxContainerHeight * img.width) / img.height +
                containerSpaceBetween)
          );
        } else {
          computedImgLen.value = imgs.length;
        }
      }
    };
  }
});
</script>

<style scoped></style>
