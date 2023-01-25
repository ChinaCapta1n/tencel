<template>
    <div class="video-section">
        <div class="wrapper">
            <video-section />
        </div>
    </div>
</template>
<script setup>
import VideoSection from '../../../../../components/commons/pop-up-video/index.vue';
</script>
<style lang="less" scoped>
.video-section {
    margin-top: 4.2rem;
    position: relative;

    .wrapper {
        max-width: 90rem;
        margin: 0 auto;

        @media screen and (max-width: 1540px) {
            padding: 0 10rem;
        }
    }
}
</style>