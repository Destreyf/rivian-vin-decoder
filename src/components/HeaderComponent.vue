<template>
  <nav class="bg-gray-800">
    <div
      class="flex flex-col sm:flex-row max-w-2xl px-2 sm:px-6 lg:px-8 py-4 mx-auto space-x-4 items-center justify-between h-32 sm:h-24"
    >
      <router-link
        to="/"
        class="flex-shrink-0 align-middle text-white text-2xl"
      >
        Rivian VIN Decoder
      </router-link>
      <VinForm v-if="!isHome" :vin="vin" :key="vin"></VinForm>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import VinForm from "./VinForm.vue";

const route = useRoute();
const isHome = computed(() => route.name === "home");
const vin = computed(() => route.params?.vin?.toString() ?? "");
</script>
