<template>
    <div class="luxe">
        <!-- banner -->
        <luxe-banner />

        <!-- tencel-luxe -->
        <tencel-luxe />

        <!-- Process -->
        <process />

        <!-- Innovation -->
        <innovation />

        <!-- be inspired -->
        <be-inspired />
    </div>
</template>
<script setup>
import LuxeBanner from './components/banner.vue';
import TencelLuxe from './components/tencel-luxe.vue';
import Process from './components/process.vue';
import Innovation from './components/innovation.vue';
import BeInspired from './components/be-inspired.vue';

</script>
<style lang="less" scoped>
.luxe {
    margin: 0 auto;
    max-width: 2560px;
    background-color: #f3f3f3;
}
</style>