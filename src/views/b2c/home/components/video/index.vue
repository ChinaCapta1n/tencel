<template>
    <div class="home-video">
        <div class="video-wrapper">
            <iframe src="https://player.vimeo.com/video/713160656?autoplay=1&loop=1&controls=true&muted=1"
                frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.home-video {
    .video-wrapper {
        position: relative;
        padding-top: 56.250105%;

        iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }


}
</style>