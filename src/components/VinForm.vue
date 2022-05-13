<template>
  <div>
    <div class="mt-1 flex rounded-md shadow-lg">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <input
          type="vin"
          name="vin"
          id="vin"
          class="bg-gray-50 block w-full rounded-none rounded-l-md p-2 sm:text-sm border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="VIN"
          v-model="vinRef"
          v-on:keyup.enter="lookupVin"
        />
      </div>
      <button
        type="button"
        @click="lookupVin"
        class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        <span>Search</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/solid";
import { ref } from "@vue/reactivity";
import { router } from "../router";
import { useToast } from "vue-toastification";
import { validateVin } from "@/helpers/validate-vin";

const toast = useToast();
const props = defineProps<{ vin: string }>();

const vinRef = ref(props?.vin);

function lookupVin() {
  try {
    const vin = vinRef.value.toString().trim();
    if (vin.length === 0) {
      toast.error("Please specify a VIN.");
      return;
    }

    if (vin.length < 17) {
      toast.error("Invalid VIN, the VIN must be 17 characters long.");
      return;
    }

    if (!validateVin(vin)) {
      toast.error("Invalid VIN, please check the VIN and try again.");
      return;
    }

    router.push({
      name: "vin",
      params: {
        vin: vinRef.value,
      },
    });
  } catch (e) {
    if ((e as Error)?.message?.includes("required param")) {
      toast.error("You must specify a VIN.");
    }
    console.error("Failed to navigate", e);
  }
}
</script>
