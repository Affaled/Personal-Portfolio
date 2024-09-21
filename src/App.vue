<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@import "src/styles/index.scss";
</style>
