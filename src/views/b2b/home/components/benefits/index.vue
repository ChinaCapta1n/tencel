<template>
    <div class="benefits">
        <div class="benefits-container">
            <div class="left">
                <h2>TENCEL™ fibers benefits</h2>
            </div>
            <div class="right">
                <div class="box">
                    <img src="/images/b2b/home/benefits/1.png" alt="">
                    <h2>botanic origin</h2>
                </div>
                <div class="box">
                    <img src="/images/b2b/home/benefits/2.png" alt="">
                    <h2>long-lasting softness (TENCEL™ Modal fibers)</h2>
                </div>
                <div class="box">
                    <img src="/images/b2b/home/benefits/3.png" alt="">
                    <h2>gentle on skin (TENCEL™ Lyocell fibers)</h2>
                </div>
                <div class="box">
                    <img src="/images/b2b/home/benefits/4.png" alt="">
                    <h2>color retention (TENCEL™ Modal fibers)</h2>
                </div>
                <div class="box">
                    <img src="/images/b2b/home/benefits/5.png" alt="">
                    <h2>contributes to breathability</h2>
                </div>
                <div class="box">
                    <img src="/images/b2b/home/benefits/6.png" alt="">
                    <h2>strength (TENCEL™ Lyocell fibers)</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.benefits {
    padding: 0;
    padding-left: 4.68vw;
    padding-right: 4.68vw;
    padding-top: 0;
    margin-bottom: 4.16vw;
    margin-top: 0;

    .benefits-container {
        min-height: 23.9vw;
        padding: 0;
        max-width: 1740px;
        margin: 0 auto;
        border-top-color: #ececec;
        border-bottom-color: #f3f3f3;
        border-bottom-style: solid;
        border-top-style: solid;
        display: flex;
        min-height: 20.83vw;
        width: 100%;

        .left {
            display: flex;
            align-items: center;
            color: #fff;
            padding-left: 3.125vw;
            padding-right: 3.125vw;
            transform: translateY(-60px);
            width: 32.29vw;
            height: 20.83vw;
            background: #52B68B;
            background-image: url(/images/b2b/home/benefits/benefits_bg.jpg);
            background-size: cover;

            h2 {
                font-family: "circular-bold";
                font-size: 2.8rem;

                @media screen and (min-width: 930px) {
                    font-size: calc(28px + 28 * ((100vw - 930px) / 990));
                }
            }
        }

        .right {
            padding-top: 2.08vw;
            padding-bottom: 2.08vw;
            padding-left: 4.4vw;
            padding-right: 4.4vw;
            width: 58.3vw;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;

            .box {
                margin-bottom: 2.08vw;
                width: 15.6vw;
                height: 6.25vw;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;

                img {
                    width: 6.25vw;
                    height: 6.25vw;
                    max-width: 89px;
                    max-height: 89px;
                }

                h2 {
                    max-width: 8.3vw;
                    margin-left: 1.04vw;
                    color: #52B68B;
                    font-family: "circular-book";
                    font-weight: 100;
                    font-size: 1.4rem;

                    @media screen and (min-width: 930px) {
                        font-size: calc(14px + 4 * ((100vw - 930px) / 990));
                    }
                }
            }
        }
    }
}
</style>