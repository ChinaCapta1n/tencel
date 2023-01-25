<template>
    <div class="video-bg">
        <div class="layer"></div>
        <img class="layer-image"
            src="https://www.tencel.com/images/assets/various/tencel-is-committed-to-standing-against-climate-change.jpg"
            alt="">
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.video-bg {
    position: relative;
    padding-top: 56%;
    overflow: hidden;

    .layer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .28);
        z-index: 1;
        cursor: pointer;

        &::before {
            width: 8rem;
            height: 8rem;
            background: #fff;
            border-radius: 50%;

            position: absolute;
            top: 50%;
            left: 50%;
            transition: all .3s;
            transform: translate(-50%, -50%);
            content: "";
        }

        &::after {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 20px 0 20px 34.6px;
            border-color: transparent transparent transparent #52b68b;

            position: absolute;
            top: 50%;
            left: 50%;
            transition: all .3s;
            transform: translate(-50%, -50%);
            content: "";
        }

        &:hover::before,
        &:hover::after {
            transform: translate(-50%, -50%) scale(1.1);
        }
    }

    .layer-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
}
</style>