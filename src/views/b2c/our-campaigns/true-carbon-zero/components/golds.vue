<template>
    <div class="golds">
        <div class="container">
            <p class="desc">Starting with our commitment to the Science Based Targets initiative, our steps support
                actions against global warming in line with UN Sustainable Development Goals.</p>
            <div class="sustainable-development-golds">
                <div class="top">
                    <img src="https://www.tencel.com/images/assets/various/sustainable-development-goals.png" alt="">
                </div>
                <div class="bottom">
                    <div class="box">
                        <img src="https://www.tencel.com/images/assets/various/affordable-and-clean-energy.png" alt="">
                    </div>
                    <div class="box">
                        <img src="https://www.tencel.com/images/assets/various/partnership-for-the-goals.png" alt="">
                    </div>
                    <div class="box">
                        <img src="https://www.tencel.com/images/assets/various/climate-action.png" alt="">
                    </div>
                </div>
            </div>

            <p class="journey-to-zero">
                TENCEL™ is on a journey to True Carbon Zero, contributing to a carbon neutral textile industry. With a
                vision to have net-zero emissions by 2050, our three-step plan is already in action: reduce, engage and
                offset. The resulting carbon-zero TENCEL™ Lyocell and Modal fibers are certified as carbon neutral.
            </p>

            <div class="three-golds">
                <div class="box reduce">
                    <div class="inner">
                        <div class="title">
                            <h2>reduce</h2>
                            <img src="https://www.tencel.com/images/assets/various/header_line_orange.svg" alt="">
                        </div>
                        <p>Our priority is the continuous reduction of carbon emissions through more efficient
                            production methods, using renewable energy sources and embracing new technologies.</p>
                    </div>
                </div>
                <div class="box engage">
                    <div class="inner">
                        <div class="title">
                            <h2>engage</h2>
                            <img src="https://www.tencel.com/images/assets/various/header_line_blue.svg" alt="">
                        </div>
                        <p>Being the first cellulosic fiber producer to commit to the Science Based Targets initiative,
                            we engage and steer our industry to source materials with low carbon footprints and reduce
                            overall carbon emissions.</p>
                    </div>
                </div>
                <div class="box offset">
                    <div class="inner">
                        <div class="title">
                            <h2>offset</h2>
                            <img src="https://www.tencel.com/images/assets/various/header_line_green2.svg" alt="">
                        </div>
                        <p>We offset unavoidable carbon emissions by supporting verified global carbon reduction
                            projects.</p>
                    </div>
                </div>
            </div>

            <div class="flow">
                <div class="part-1">
                    <img src="https://www.tencel.com/images/carbon-zero/chart_line_bg.svg" alt="">
                    <div class="images-1">
                        <img src="https://www.tencel.com/images/carbon-zero/chart_line_reduce.svg" alt="">
                        <img class="arrow-1" src="https://www.tencel.com/images/carbon-zero/chart_line_reduce_arrow.svg"
                            alt="">
                        <img class="arrow-2" src="https://www.tencel.com/images/carbon-zero/chart_line_reduce_arrow.svg"
                            alt="">
                        <img class="arrow-3" src="https://www.tencel.com/images/carbon-zero/chart_line_reduce_arrow.svg"
                            alt="">
                    </div>
                    <div class="images-2">
                        <img src="https://www.tencel.com/images/carbon-zero/chart_line_engage.svg" alt="">
                    </div>
                    <div class="images-3">
                        <img class="tree-1"
                            src="https://www.tencel.com/images/carbon-zero/chart_line_carbonoffset_tree1.svg" alt="">
                        <img class="tree-2"
                            src="https://www.tencel.com/images/carbon-zero/chart_line_carbonoffset_tree2.svg" alt="">
                        <img class="tree-3"
                            src="https://www.tencel.com/images/carbon-zero/chart_line_carbonoffset_tree3.svg" alt="">
                        <img class="tree-4"
                            src="https://www.tencel.com/images/carbon-zero/chart_line_carbonoffset_tree4.svg" alt="">
                    </div>
                </div>
                <div class="part-2">
                    <img src="https://www.tencel.com/images/assets/various/TENCEL_true-carbon-zero_identity_chart-circle.svg"
                        alt="">
                </div>
            </div>

            <div class="logos">
                <h2>certified by global standards of sustainability</h2>
                <div class="logos-container">
                    <img src="https://www.tencel.com/images/assets/various/tencel-is-certified-by-higg-index.png"
                        alt="">
                    <img src="https://www.tencel.com/images/assets/various/tencel-is-certified-by-eu-ecolabel.png"
                        alt="">
                    <img src="https://www.tencel.com/images/assets/various/tencel-is-certified-by-european-business-awards-for-the-environment.png"
                        alt="">
                    <img src="https://www.tencel.com/images/assets/various/tencel-is-certified-by-dark-green-shirt-hot-button-ranking.png"
                        alt="">
                    <img src="https://www.tencel.com/images/assets/various/tencel-is-certified-by-fsc.png" alt="">
                    <img src="https://www.tencel.com/images/assets/various/tencel-is-certified-by-pefc.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.golds {
    padding: 50px 100px 40px;
    background-color: #f8f8f8;
    text-align: center;

    .desc {
        margin: 0 auto 10px;
        max-width: 980px;
        line-height: 30px;

        @media screen and (min-width: 930px) {
            font-size: calc(18px + 2 * ((100vw - 930px)/990));
        }
    }

    .sustainable-development-golds {
        margin-top: 3rem;
        margin-bottom: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .top {
            margin-bottom: 2em;
            width: 100%;
            max-width: 100%;

            &>img {
                max-width: 600px;
                display: block;
                width: auto;
                margin: 0 auto;
                padding: 0 15px;
            }
        }

        .bottom {
            display: flex;

            .box {
                margin-bottom: 30px;
                max-width: 190px;

                &>img {
                    width: 100%;
                    padding: 0 15px;
                }
            }
        }
    }

    .journey-to-zero {
        margin: 0 auto 10px;
        max-width: 980px;
        line-height: 30px;

        @media screen and (min-width: 930px) {
            font-size: calc(18px + 2 * ((100vw - 930px)/990));
        }
    }

    .three-golds {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 35px;

        .box {
            flex: 1;

            .inner {
                padding: 0 15%;

                .title {
                    margin-bottom: 2rem;

                    &>h2 {
                        display: inline-block;
                        margin: 0 auto 5px;
                        font-family: circular-bold;
                        font-size: calc(39px + 6 * (100vw - 930px)/990);
                        line-height: 54px;
                        white-space: nowrap;
                    }

                    &>img {
                        display: block;
                        margin: 0 auto;
                        max-width: 29%;
                        text-align: center;
                    }
                }

                &>p {
                    margin: 0 auto 10px;
                    max-width: 980px;
                    line-height: 30px;

                    @media screen and (min-width: 930px) {
                        font-size: calc(18px + 2 * ((100vw - 930px)/990));
                    }
                }
            }
        }
    }

    .flow {
        position: relative;
        padding-top: 60px;
        padding-bottom: 110px;
        padding-left: 5%;
        padding-right: 5%;
        text-align: left;

        .part-1 {
            position: relative;
            display: inline-block;
            transition: all .3s;

            @media screen and (max-width: 1540px) {
                transform: scale(.85);
                transform-origin: left;
            }

            @media screen and (max-width: 1600px) {
                transform: scale(.9);
                transform-origin: left;
            }

            .images-1 {
                position: absolute;
                top: -52px;
                left: 15%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;

                .arrow-1 {
                    position: absolute;
                    top: -30px;
                    right: 10px;
                }

                .arrow-2 {
                    position: absolute;
                    top: 5px;
                    right: -10px;
                    transform: scale(.75);
                }

                .arrow-3 {
                    position: absolute;
                    top: -25px;
                    right: -25px;
                    transform: scale(.5);
                }
            }

            .images-2 {
                position: absolute;
                top: -5px;
                left: 49%;
                transition: all 1s;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }

            .images-3 {
                position: absolute;
                top: 56px;
                left: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;

                .tree-1 {
                    position: absolute;
                    top: -5px;
                    left: -54px;
                }

                .tree-2 {
                    position: absolute;
                    top: -14px;
                    left: -20px;
                }

                .tree-3 {
                    position: absolute;
                    top: 12px;
                    left: 20px;
                }

                .tree-4 {
                    position: absolute;
                    top: 10px;
                    left: 60px;
                }
            }
        }

        .part-2 {
            position: absolute;
            bottom: 0;
            right: 10rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 22rem;
            height: 22rem;
            transition: all .3s;

            &>img {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 372px;
                height: auto;
                transform: translate(-50%, -50%);
            }
        }
    }

    .logos {
        &>h2 {
            margin-top: 0;
            margin-bottom: 32px;
            width: 100%;
            font-family: circular-bold;
            text-align: left;

            @media screen and (min-width: 930px) {
                font-size: calc(18px + 2 * ((100vw - 930px)/990));
            }
        }

        .logos-container {
            display: flex;

            &>img {
                width: 16.6666666667%;
                margin-bottom: 25px;
                display: block;
                width: auto;
                margin: 0 auto;
                padding: 0 15px;
                max-width: 200px;
                max-height: 100px;
                transition: all .3s;
            }
        }
    }
}
</style>