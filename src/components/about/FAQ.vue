<script setup lang="ts"></script>

<template>
  <div class="faq-container">
    <h2 class="faq-title">{{ $t("faq.title") }}</h2>
    <p class="faq-title">{{ $t("faq.disclaimer") }}</p>
    <div class="faq-box">
      <div class="faq-item">
        <h3 class="faq-question">{{ $t("faq.entry1.question") }}</h3>
        <p class="faq-answer">{{ $t("faq.entry1.answer") }}</p>
      </div>

      <div class="faq-item">
        <h3 class="faq-question">{{ $t("faq.entry2.question") }}</h3>
        <p class="faq-answer">{{ $t("faq.entry2.answer") }}</p>
      </div>

      <div class="faq-item">
        <h3 class="faq-question">{{ $t("faq.entry3.question") }}</h3>
        <p class="faq-answer">{{ $t("faq.entry3.answer") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.faq-title {
  margin-bottom: 20px;
  text-align: center;
}

.faq-box {
  width: 100%;
  max-width: 900px;
  border: 1px solid #ccc;
  padding: 24px;
  background-color: rgb(33, 37, 41);
  color: rgba(255, 255, 255, 0.849);
  border-radius: 8px;
  box-sizing: border-box;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  font-weight: bold;
  margin-bottom: 8px;
}

.faq-answer {
  margin: 0;
}
</style>
