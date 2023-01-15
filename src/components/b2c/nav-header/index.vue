<template>
    <header class="header" id="header">
        <pc-header />
    </header>
</template>

<script setup>
import PcHeader from './components/pc-header/index.vue';


</script>

<style lang="less" scoped>
.header {
    position: relative;
    background-color: lightblue;
    transition: all .2s;

    &.delay {
        transition-delay: .3s;
    }
}
</style>
