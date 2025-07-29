<script setup lang="ts"></script>

<template>
  <footer class="bg-dark text-white py-3 text-center">
    <div class="container">
      &copy; 2025 Ecolis. All rights reserved.
      <RouterLink class="nav-link text-success" to="/about/legal">{{
        $t("sidebar.legal")
      }}</RouterLink>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
