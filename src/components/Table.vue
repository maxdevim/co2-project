<script setup lang="ts">
interface Props {
  columns: string[];
  rows: (string | number)[][];
}

defineProps<Props>();
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col" scope="col">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="(row, index) in rows" :key="index">
        <th v-for="cell in row" :key="cell">{{ cell }}</th>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
