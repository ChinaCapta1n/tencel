<template>
    <b2b-header />
    <main :style="{ marginTop: store.height }">
        <router-view></router-view>
    </main>
    <b2b-footer />
    <aside-menu />
</template>
<script setup>
import B2bHeader from '../../components/b2b/nav-header/index.vue';
import B2bFooter from '../../components/b2b/footer/index.vue';
import AsideMenu from '../../components/b2c/aside-menu/index.vue';

import useHeader from '../../stores/modules/header.js';
import { onMounted } from 'vue';

const store = useHeader();

onMounted(() => {
    store.setHeight();
})
</script>
<style lang="less" scoped>

</style>