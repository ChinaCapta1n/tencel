<template>
    <aside class="b2c-aside">
        <div class="aside-wrapper">
            <options />
            <to-top />
        </div>
    </aside>
</template>
<script setup>
import ToTop from '../to-top/index.vue';
import Options from '../options/index.vue';
</script>
<style lang="less" scoped>
.b2c-aside {
    position: fixed;
    right: 7rem;
    bottom: 2rem;
    width: 5rem;
    height: auto;
    user-select: none;
    z-index: 9999;

    .aside-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }
}
</style>