<template>
    <div class="banner">
        <img class="banner-image"
            src="https://www.tencel.com/images/assets/various/reduce-carbon-emissions-true-carbon-zero-tencel.jpg"
            alt="">
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.banner {
    position: relative;
    padding-top: 36.5%;
    background: linear-gradient(180deg, #9eebd1 0, #6bdbb5 50%, #28d198 100%);
    text-align: center;
    overflow: hidden;

    .banner-image {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        max-height: 100%;
        transform: translate(-50%, -50%);
    }
}
</style>