<template>
    <div class="innovation">
        <div class="left">
            <img src="/images/products/luxe/innovation/1.jpg" alt="">
        </div>
        <div class="right">
            <h2>The innovation in Eco Filament Technology means transforming wood pulp directly to filament obtaining a
                silk like quality.</h2>
            <p>Different to TENCEL™ fiber production, TENCEL™ LUXE technology goes directly from pulp to filament. The
                result is a fine, silk-like thread that brings us the beautiful properties mentioned before.</p>
            <visit-button>visit the TENCEL™ LUXE Website</visit-button>
        </div>
    </div>
</template>
<script setup>
import VisitButton from '../../../../../components/commons/visit-button/index.vue';
</script>
<style lang="less" scoped>
.innovation {
    display: flex;
    padding: 8vh 5%;
    padding-bottom: 3.5rem;

    .left {
        display: flex;
        justify-content: center;
        overflow: hidden;
        margin-right: 5%;
        min-width: 290px;

        img {
            width: 100%;
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            margin-top: 1em;
            font-size: 3.2rem;
            font-family: circular-book;
            text-align: center;
            color: #000;
            line-height: 1.2;
        }

        p {
            font-size: 1.8rem;
            text-align: center;
            font-family: circular-book;
            margin-top: 3em;
        }

        button {
            margin-top: 3em;
        }
    }
}
</style>