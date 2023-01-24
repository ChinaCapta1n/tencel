<template>
    <div class="banner">
        <h2>General</h2>
        <div class="inner">

            <div class="box">

                <div class="top">

                    <h3>feel right with a natural touch</h3>
                    <p>TENCEL™ branded cellulosic fibers of botanic origin define a new standard of sustainability
                        and
                        natural comfort for your customers.</p>
                    <p> TENCEL™ Lyocell fibers</p>
                    <p> TENCEL™ branded lyocell
                        fibers are known for their natural comfort and environmentally responsible closed loop
                        production process. They deliver quality, performance and versatility. Unique physical
                        properties lead to their high tenacity profile, efficient moisture management and gentleness
                        to
                        skin.</p>
                    <p>
                        TENCEL™ Modal fibers
                    </p>
                    <p>
                        Brilliant in color and luster, TENCEL™ branded modal fibers
                        are known for being exquisitely soft and pleasant to the skin. TENCEL™ Modal fibers exhibit
                        high
                        flexibility, resulting in a naturally soft quality to the textile. Blending TENCEL™ Modal
                        with
                        other fibers significantly improves the property of softness in fabrics, enhancing overall
                        comfort.
                    </p>
                </div>
                <div class="bottom">
                    <div class="img-text">
                        <img src="/images/b2b/branded-offers/general/1.png" alt="">
                        <p>color retention (TENCEL™ Modal fibers)</p>
                    </div>
                </div>
            </div>
            <img src="/images/b2b/branded-offers/general/tencel-fibers-key-benefits-general-uses-for-business.jpg"
                alt="">
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.banner {
    position: relative;
    background-color: #EEEFE9;
    padding-top: 2.9vw;


    &>h2 {
        color: #333;
        line-height: 1.2;
        font-size: 3.6rem;
        margin: 0 auto;
        margin-bottom: 1.5vw;
        max-width: 1920px;
        font-family: "circular-bold";
        padding-left: 4.68vw;


        @media screen and (min-width: 930px) {
            font-size: calc(36px + 54 * ((100vw - 930px) / 990));
        }
    }

    .inner {
        position: relative;
        max-width: 1920px;
        margin: auto;
        padding-left: 4.68vw;
        padding-right: 4.68vw;
        padding-bottom: 2.08vw;
        display: flex;
        // align-items: center;

        .box {


            .top {
                width: 41.1vw;
                max-width: 790px;



                &>h3 {
                    color: #52B68B;
                    font-family: "circular-book";
                    line-height: 1.6;
                    margin: 0;
                    margin-bottom: 2.8vw;
                    width: 41.1vw;
                    max-width: 790px;
                    padding-right: 1.5vw;

                    @media screen and (min-width: 930px) {
                        font-size: calc(16px + 12 * ((100vw - 930px) / 990));
                    }
                }

                &>p {
                    color: #333;
                    font-family: "lenzing";
                    font-size: 1.4rem;
                    line-height: 1.6;
                    width: 41.1vw;
                    max-width: 790px;
                    padding-right: 1.5vw;
                    margin-bottom: 2rem;


                    @media screen and (min-width: 930px) {
                        font-size: calc(14px + 4 * ((100vw - 930px) / 990));
                    }
                }
            }

            .bottom {
                margin-top: 2.6vw;
                margin-bottom: 2.6vw;
                position: relative;
                width: 36.45vw;
                max-width: 700px;
                max-height: 110px;
                height: 5.72vw;

                &>div {
                    padding-top: 0.54vw;
                    padding-bottom: 0.54vw;
                    height: 100%;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    transition: opacity 0.5s;

                    &>img {
                        width: 4.63vw;
                        max-width: 89px;
                        height: 4.63vw;
                        max-height: 89px;
                        margin-right: 2.1vw;
                    }

                    &>p {
                        max-width: 80%;
                        color: #52B68B;
                        font-family: "circular-bold";
                        display: flex;
                        align-items: center;
                        font-size: 2.4rem;

                        @media screen and (min-width: 930px) {
                            font-size: calc(24px + 18 * ((100vw - 930px) / 990));
                        }
                    }
                }
            }
        }

        &>img {
            display: block;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 35.41vw;
            position: absolute;
            right: 0;
            max-width: 87.5rem;
            width: 50vw;
            height: auto;
        }
    }
}
</style>