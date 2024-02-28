<template>
  <q-input v-bind="props"></q-input>
</template>

<script setup lang="ts">
import { QInput, QInputProps, QInputSlots } from "quasar";

const props = defineProps<QInputProps>();
const slots = defineSlots<QInputSlots>();
</script>
