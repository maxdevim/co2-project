<script setup lang="ts"></script>

<template>
  <div class="box-container">
    <div class="text-box">
      <h1>{{ $t("corporate.about_us.title") }}</h1>
      <p>{{ $t("corporate.about_us.content") }}</p>
    </div>
    <div class="text-box">
      <h1>{{ $t("corporate.about_project.title") }}</h1>
      <p>{{ $t("corporate.about_project.content") }}</p>
    </div>
    <div class="text-box">
      <h1>{{ $t("corporate.about_you.title") }}</h1>
      <p>{{ $t("corporate.about_you.content") }}</p>
    </div>
  </div>
</template>

<style scoped>
.box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
  padding: 8px;
}

.text-box {
  border: 1px solid #ccc;
  padding: 20px;
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.849);
  background-color: rgb(33, 37, 41);
  border-radius: 8px;
}
</style>
