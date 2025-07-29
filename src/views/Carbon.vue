<script setup lang="ts">
import Table from "@/components/Table.vue";
import EmissionData from "../../data/emission-data.json";

const data: (string | number)[][] = EmissionData.map((item) => [
  item.company,
  item.country,
  item.emissions["2018"],
  item.emissions["2019"],
  item.emissions["2020"],
  item.emissions["2021"],
  item.emissions["2022"],
  item.emissions["2023"],
]);
</script>

<template>
  <div class="table-responsive">
    <Table
      class="mt-2"
      :columns="[
        'Company',
        'Country',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
      ]"
      :rows="data"
    ></Table>
  </div>
</template>
