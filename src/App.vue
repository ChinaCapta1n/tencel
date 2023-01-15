<template>

  <!-- header -->
  <nav-header />
  <router-view></router-view>

  <!-- footer -->
  <home-footer />

  <!-- aside menu -->
  <aside-menu />

</template>

<script setup>
import NavHeader from './components/nav-header/index.vue'
import HomeFooter from './components/footer/index.vue';
import AsideMenu from './components/aside-menu/index.vue';


</script>

<style scoped>

</style>
