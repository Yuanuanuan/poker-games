<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <q-form>
          <q-input v-model="input"></q-input>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>
