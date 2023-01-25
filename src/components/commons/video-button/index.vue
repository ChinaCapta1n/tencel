<template>
    <button class="click-to-pop-up-video"></button>
</template>
<script setup></script>
<style lang="less" scoped>
.click-to-pop-up-video {
    &::before {
        width: 8rem;
        height: 8rem;
        background: #fff;
        border-radius: 50%;
    }

    &::after {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 0 20px 34.6px;
        border-color: transparent transparent transparent #52b68b;

        position: absolute;
        content: "";
        top: 50%;
        left: 50.2%;
        transition: all .3s;
        transform: translate(-50%, -50%);
    }

}
</style>