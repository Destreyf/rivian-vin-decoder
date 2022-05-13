<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <CardContainer class="max-w-2xl mx-auto">
    <div
      class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">Lookup Rivian VIN.</span>
      </h2>
      <div class="mt-8 flex justify-center">
        <VinForm vin=""></VinForm>
      </div>
    </div>
  </CardContainer>
</template>

<script setup lang="ts">
import VinForm from "./VinForm.vue";
import CardContainer from "./CardContainer.vue";
</script>
