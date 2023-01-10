<template>
    <div class="luxe-banner">
        <img class="luxe-banner-image" src="/images/products/luxe/pc-banner.png" alt="">
        <h2 class="luxe-banner-title">From Nature to Skin to Nature</h2>
        <span class="card" v-for="card in bannerCard" :key="card.id">{{ card.text }}</span>
    </div>
</template>
<script setup>
const bannerCard = [
    {
        "id": 0,
        "text": "Sustainably Managed"
    },
    {
        "id": 1,
        "text": "Liquid Like"
    },
    {
        "id": 2,
        "text": "Silky"
    },
    {
        "id": 3,
        "text": "Biodegradable"
    },
    {
        "id": 4,
        "text": "Biodiversity"
    },
    {
        "id": 5,
        "text": "Transformative"
    },
    {
        "id": 6,
        "text": "Soft"
    },
    {
        "id": 7,
        "text": "Vivid Colour"
    },
    {
        "id": 8,
        "text": "Fine"
    },
    {
        "id": 9,
        "text": "Sensual"
    }
]
</script>
<style lang="less" scoped>
.luxe-banner {
    position: relative;

    .luxe-banner-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 5rem;
        white-space: nowrap;
        font-family: circular-book;
        color: #fff;
    }

    .luxe-banner-image {
        display: block;
        width: 100%;
    }

    .card {
        position: absolute;
        display: block;
        color: #fff;
        padding: 4rem;
        background-color: rgba(255, 255, 255, 0);
        font-size: 2.3rem;
        margin-bottom: .5em;
        font-family: circular-book;

        &:nth-of-type(1) {
            top: 25%;
            left: 10%;
        }

        &:nth-of-type(2) {
            top: 27%;
            left: 81%;
        }

        &:nth-of-type(3) {
            top: 62%;
            left: 65%;
        }

        &:nth-of-type(4) {
            top: 53%;
            left: 17%;
        }

        &:nth-of-type(5) {
            top: 8%;
            left: 28%;
        }

        &:nth-of-type(6) {
            top: 65%;
            left: 2%;
        }

        &:nth-of-type(7) {
            top: 5%;
            left: 55%;
        }

        &:nth-of-type(8) {
            top: 20%;
            left: 63%;
        }

        &:nth-of-type(9) {
            top: 50%;
            left: 77%;
        }

        &:nth-of-type(10) {
            top: 60%;
            left: 38%;
        }
    }
}
</style>