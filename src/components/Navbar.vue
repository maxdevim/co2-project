<script setup lang="ts">
import { useI18n } from "vue-i18n";
const i18n = useI18n();

function onLanguageChange(event: Event) {
  sessionStorage.setItem("language", (event.target as HTMLSelectElement).value);
  i18n.locale.value = (event.target as HTMLSelectElement).value;
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/plant.png" alt="Bootstrap" width="30" height="24" />
        Ecolis
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              {{ $t("navbar.home") }}</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/co2">{{
              $t("navbar.carbon")
            }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">{{
              $t("navbar.about")
            }}</RouterLink>
          </li>
        </ul>
        <select class="form-select language-select" @change="onLanguageChange">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="locale"
            :selected="locale === $i18n.locale"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.language-select {
  max-width: 80px;
}
.nav-item:hover {
  background-color: #1e7e2974;
  border-radius: 5px;
}
.active {
  background-color: #1e7e29 !important;
  border-radius: 5px !important;
}
.navbar-brand {
  background-color: transparent !important;
}
</style>
