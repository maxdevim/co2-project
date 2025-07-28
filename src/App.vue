<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { rtl_languages } from "./lang/language.ts";
</script>

<template>
  <Navbar />
  <div :class="{ 'text-end': rtl_languages.includes($i18n.locale) }">
    <RouterView />
  </div>
</template>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
