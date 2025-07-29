<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  columns: string[];
  rows: (string | number)[][];
}

const props = defineProps<Props>();

const sortColumn = ref<number | null>(null);
const sortDirection = ref<"asc" | "desc">("asc");

const sortedRows = computed(() => {
  if (sortColumn.value === null) return props.rows;

  return [...props.rows].sort((a, b) => {
    const valA = a[sortColumn.value!];
    const valB = b[sortColumn.value!];

    if (valA === valB) return 0;

    const direction = sortDirection.value === "asc" ? 1 : -1;
    return valA > valB ? direction : -direction;
  });
});

const filterOptions = ref<Record<number, Set<string | number>>>({});
const showFilterDropdown = ref<number | null>(null);

function toggleFilterDropdown(index: number) {
  showFilterDropdown.value = showFilterDropdown.value === index ? null : index;
}

function updateFilter(
  columnIndex: number,
  value: string | number,
  checked: boolean
) {
  if (!filterOptions.value[columnIndex]) {
    filterOptions.value[columnIndex] = new Set();
  }
  if (checked) {
    filterOptions.value[columnIndex].add(value);
  } else {
    filterOptions.value[columnIndex].delete(value);
  }
}

const filteredRows = computed(() => {
  return sortedRows.value.filter((row) =>
    Object.entries(filterOptions.value).every(([indexStr, values]) => {
      const index = Number(indexStr);
      return values.size === 0 || values.has(row[index]);
    })
  );
});

function getUniqueValues(columnIndex: number): (string | number)[] {
  const values = new Set<string | number>();
  props.rows.forEach((row) => values.add(row[columnIndex]));
  return Array.from(values);
}

function clearFilter(columnIndex: number) {
  delete filterOptions.value[columnIndex];
}

function handleSort(index: number) {
  if (sortColumn.value === index) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = index;
    sortDirection.value = "asc";
  }
}

function formatNumber(value: string | number): string {
  const number = typeof value === "string" ? parseFloat(value) : value;
  return number.toLocaleString("de-DE");
}

function clearSort() {
  sortColumn.value = null;
  sortDirection.value = "asc";
}
function clearAllFilter() {
  props.columns.map((_, i) => clearFilter(i));
}
</script>

<template>
  <div>
    <div class="d-flex gap-3 mb-2">
      <button class="btn btn-brown" @click="clearSort">
        Sortierung zurücksetzen
      </button>
      <button class="btn btn-brown" @click="clearAllFilter">
        Filter zurücksetzen
      </button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th
            v-for="(col, colIndex) in columns"
            class="cursor-pointer"
            :key="col"
            scope="col"
            @click.self="handleSort(colIndex)"
          >
            {{ col }}
            <span v-if="sortColumn === colIndex">
              {{ sortDirection === "asc" ? "🔼" : "🔽" }}
            </span>
            <div class="position-relative d-inline-block ms-2">
              <button
                class="btn btn-sm btn-light p-0 px-1"
                @click.stop="toggleFilterDropdown(colIndex)"
              >
                ⏷
              </button>
              <div
                v-if="showFilterDropdown === colIndex"
                class="position-absolute bg-white border rounded shadow p-2"
                style="
                  z-index: 10;
                  width: 200px;
                  max-height: 200px;
                  overflow-y: auto;
                "
              >
                <div
                  v-for="value in getUniqueValues(colIndex)"
                  :key="value"
                  class="form-check"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`filter-${colIndex}-${value}`"
                    :value="value"
                    :checked="filterOptions[colIndex]?.has(value)"
                    @change="
                      updateFilter(
                        colIndex,
                        value,
                        ($event.target as HTMLInputElement).checked
                      )
                    "
                  />
                  <label
                    class="form-check-label"
                    :for="`filter-${colIndex}-${value}`"
                  >
                    {{
                      typeof value === "number" ? formatNumber(value) : value
                    }}
                  </label>
                </div>
                <button
                  class="btn btn-sm btn-outline-danger mt-2 w-100"
                  @click="clearFilter(colIndex)"
                >
                  Filter zurücksetzen
                </button>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="(row, index) in filteredRows" :key="index">
          <td v-for="cell in row" :key="cell">
            {{ typeof cell === "number" ? formatNumber(cell) : cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
::v-deep(.table-striped tbody tr:nth-of-type(odd)) td {
  background-color: #2494316d !important;
}

::v-deep(.table-striped tbody tr:nth-of-type(even)) td {
  background-color: #1d7327ab !important;
}

::v-deep(.table-hover tbody tr:hover) td {
  background-color: #13c731 !important;
}

.custom-header {
  background-color: #4d2e00bd;
  color: #fff;
  padding: 1rem;
}

.btn-brown {
  background-color: #8b4513;
  color: white;
  border: none;
}

.btn-brown:hover {
  background-color: #5c3210;
  color: white;
}
</style>
