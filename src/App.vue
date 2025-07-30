<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { rtl_languages } from "./lang/language.ts";
</script>

<template>
  <header><Navbar /></header>
  <main>
    <div :class="{ 'text-end': rtl_languages.includes($i18n.locale) }">
      <RouterView />
    </div>
  </main>
  <footer><Footer /></footer>
</template>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
