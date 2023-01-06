<template>

  <!-- header -->
  <nav-header />
  <router-view></router-view>

  <!-- footer -->
  <home-footer />

</template>

<script setup>
import NavHeader from './components/nav-header/index.vue'
import HomeFooter from './components/footer/index.vue';

</script>

<style scoped>

</style>
