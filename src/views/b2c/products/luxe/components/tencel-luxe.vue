<template>
    <div class="tencel-luxe">
        <div class="left">
            <img src="/images/products/luxe/luxe-logo.svg" alt="">
        </div>
        <div class="right">
            <h2>A new botanical alternative to silk, with the properties that make silk so valuable</h2>
            <p>TENCEL™ LUXE is, just as silk, a ne and extremely strong lament. this makes the production of light
                weight, fluid fabrics with liquid like drape possible. The filaments are efficient in regulating
                moisture, creating breathability and adapting to the temperature on the skin.</p>
            <og-button>visit the TENCEL™ LUXE Website</og-button>
        </div>
    </div>
</template>
<script setup>
import OgButton from '../../../../../components/visit-button/index.vue';
</script>
<style lang="less" scoped>
.tencel-luxe {
    padding: 8rem 5%;
    display: flex;
    justify-content: center;

    .left {
        margin-right: 3rem;

        img {
            width: 27.5rem;
        }
    }

    .right {
        h2 {
            font-size: 3.4rem;
            color: #59b38d;
            font-family: circular-book;
        }

        p {
            margin: 4em 0 3em;
            line-height: 1.5;
            font-size: 1.6rem;
        }

        button {
            margin-top: 2.5rem;
        }
    }
}
</style>