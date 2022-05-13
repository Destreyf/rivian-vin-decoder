<template>
  <div class="flex flex-col h-full">
    <HeaderComponent class="flex-shrink-0"></HeaderComponent>
    <div class="md:mt-4 flex-grow">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <FooterComponent class="flex-shrink-0"></FooterComponent>
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>
