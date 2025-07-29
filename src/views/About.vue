<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { rtl_languages } from "@/lang/language.ts";
</script>

<template>
  <div
    class="d-flex"
    :class="{
      'flex-row-reverse': rtl_languages.includes($i18n.locale),
    }"
  >
    <Sidebar />
    <div
      v-if="$route.params.subpage === 'corporate' || !$route.params.subpage"
      class="container"
    >
      <h1>corporate</h1>
    </div>
    <div v-else-if="$route.params.subpage === 'legal'" class="container">
      <h1>contact</h1>
    </div>
    <div v-else-if="$route.params.subpage === 'faq'" class="container">
      <h1>faq</h1>
    </div>
  </div>
</template>
