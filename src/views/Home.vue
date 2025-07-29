<template>
  <div :style="pageWrapperStyle" class="page-wrapper">
    <div class="content-wrapper">
      <h1>{{ $t("home.title") }}</h1>
      <p>{{ $t("home.subtitle") }}</p>
      <p class="slogan">{{ $t("home.slogan") }}</p>
      <p class="source">{{ $t("home.image_source") }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bgImage from "@/assets/pexels-akilmazumder-1072824.jpg";

const pageWrapperStyle = {
  "--bg-image": `url(${bgImage})`,
};
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;

  background-image: var(--bg-image);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-attachment: scroll;

  margin: 0;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 50px auto;
  background-color: rgb(33, 37, 41);
  color: rgba(255, 255, 255, 0.849);
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
}

.slogan {
  color: white !important;
  font-style: italic !important;
}

.source {
  color: white;
  font-size: 0.8rem;
  margin-top: 1rem;
}
</style>
