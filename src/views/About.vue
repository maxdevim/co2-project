<script setup lang="ts">
import Corporate from "@/components/about/Corporate.vue";
import FAQ from "@/components/about/FAQ.vue";
import Legal from "@/components/about/Legal.vue";
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
      <Corporate />
    </div>
    <div v-else-if="$route.params.subpage === 'legal'" class="container">
      <Legal />
    </div>
    <div v-else-if="$route.params.subpage === 'faq'" class="container">
      <FAQ />
    </div>
  </div>
</template>
