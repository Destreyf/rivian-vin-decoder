<script setup lang="ts">
import { parseVin } from "@/helpers/parse-vin";
import type { DecodedVin } from "@/types/vin";
import { computed, type ComputedRef } from "@vue/reactivity";
import CardContainer from "./CardContainer.vue";

const props = defineProps<{ vin: string }>();

const decoded: ComputedRef<DecodedVin | null> = computed(() => {
  try {
    return parseVin(props?.vin);
  } catch (e) {
    return null;
  }
});

const valid = computed(() => decoded.value && decoded.value?.wmi);

const parse = (v?: string | number | null | undefined) => {
  if (!v) return "Unknown";

  if (Array.isArray(v)) return v.map((v) => v.toString()).join("\n");

  return v;
};
</script>

<template>
  <div class="text-center">
    <CardContainer class="w-auto inline-block">
      <table class="border mx-auto rounded-md divide-y" v-if="valid">
        <tr>
          <th>World Manufacturer Identifier:</th>
          <td>{{ parse(decoded?.wmi) }}</td>
        </tr>
        <tr>
          <th>Model Line / Body Style:</th>
          <td>{{ parse(decoded?.model_line_body_style) }}</td>
        </tr>
        <tr>
          <th>GVWR / Brake System:</th>
          <td>{{ parse(decoded?.gvwr_brake) }}</td>
        </tr>
        <tr>
          <th>Engine / Motor / Drivetrain:</th>
          <td>{{ parse(decoded?.motor_drivetrain) }}</td>
        </tr>
        <tr>
          <th>Restraints:</th>
          <td>{{ parse(decoded?.restraints) }}</td>
        </tr>
        <tr>
          <th>Trim:</th>
          <td>{{ parse(decoded?.trim) }}</td>
        </tr>
        <tr>
          <th>Model Year:</th>
          <td>{{ parse(decoded?.model_year) }}</td>
        </tr>
        <tr>
          <th>Manufacturing Plant:</th>
          <td>{{ parse(decoded?.manufacturing_plant) }}</td>
        </tr>
        <tr>
          <th>Serial Number:</th>
          <td>{{ parse(decoded?.serial_number) }}</td>
        </tr>
      </table>
      <div v-if="!valid" class="mx-auto text-center block space-y-4">
        <p>It appears {{ vin }} is invalid.</p>
      </div>
    </CardContainer>
  </div>
</template>

<style lang="scss" scoped>
td,
th {
  @apply p-2 sm:p-2 md:p-4;
}

th {
  @apply text-right border-r align-top;
}

td {
  @apply whitespace-pre-line;
}
</style>
