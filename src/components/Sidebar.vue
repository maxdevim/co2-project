<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark l-100">
    <hr />
    <ul class="nav nav-pills flex-column mb-auto gap-2">
      <li class="nav-item">
        <RouterLink to="/about/corporate" class="nav-link text-white">
          {{ $t("sidebar.corporate") }}</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/about/legal" class="nav-link text-white">
          {{ $t("sidebar.legal") }}</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/about/faq" class="nav-link text-white">
          {{ $t("sidebar.faq") }}</RouterLink
        >
      </li>
    </ul>
    <hr />
  </div>
</template>

<style scoped>
.nav-item:hover {
  background-color: #1e7e2974;
  border-radius: 5px;
}
.active {
  background-color: #1e7e29 !important;
  border-radius: 5px !important;
}
</style>
