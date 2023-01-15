<template>
    <!-- header -->
    <nav-header />

    <router-view></router-view>

    <!-- footer -->
    <home-footer />

    <!-- aside menu -->
    <aside-menu />
    >
</template>
<script setup>
import NavHeader from '../../components/b2c/nav-header/index.vue';
import HomeFooter from '../../components/b2c/footer/index.vue';
import AsideMenu from '../../components/b2c/aside-menu/index.vue';
</script>
<style lang="less" scoped>

</style>