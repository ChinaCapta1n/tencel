<template>
    <div class="tencel-luxe">

        <banner />

        <material />

        <key-benefits />

        <download />

        <news-and-events />
    </div>
</template>
<script setup>
import Banner from '../components/banner.vue';
import Material from '../components/maetrial.vue';
import KeyBenefits from '../components/key-benefits.vue';
import Download from '../components/download.vue';

import NewsAndEvents from '../../../../components/commons/news-and-events/index.vue';
</script>
<style lang="less" scoped>
.tencel-luxe {
    position: relative;
    padding-top: 2.9vw;
}
</style>