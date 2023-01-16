<template>
    <div class="video-section">
        <div class="video-wrapper">
            <video-iframe />
        </div>
    </div>
</template>
<script setup>
import VideoIframe from '../../../../../components/commons/video/index.vue';


</script>
<style lang="less" scoped>
.video-section {
    position: relative;
    padding-left: 4.16vw;
    padding-right: 4.16vw;

    .video-wrapper {
        padding-top: 57%;

        iframe {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding-left: 4.16vw;
            padding-right: 4.16vw;
        }
    }
}
</style>