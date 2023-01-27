<template>
    <div class="refibra">

        <div class="banner">
            <div class="container">
                <h2>TENCEL™ x REFIBRA™ technology</h2>
            </div>
        </div>

        <div class="textiles">
            <h2>contributing to the circular economy in textiles</h2>
            <p>The pioneering REFIBRA™ technology involves upcycling cotton scraps from garment production.
                These
                cotton scraps are transformed into cotton pulp. A substantial proportion – up to one third – of
                this
                is added to wood pulp, and the combined raw material is transformed to produce new virgin
                TENCEL™
                Lyocell fibers to make fabrics and garments.</p>
        </div>

        <div class="the-good-loop">
            <div class="container">
                <h2>THE GOOD LOOP</h2>
                <p>On our planet, we take something and we give back. This could start with a simple smile that we get
                    from a stranger in the morning on the subway and we smile back. Or when we plant vegetables in our
                    garden, later we harvest them and use new seeds again to grow something new. You can find THE GOOD
                    LOOP in life everywhere and at TENCEL™ this means that we consciously take from nature and give back
                    to nature. TENCEL™ fibers creating a loop in the fashion supply chain – good for everyone, including
                    consumers, brands, mills and the whole fashion community. We call it THE GOOD LOOP.</p>
                <p>TENCEL™ THE GOOD LOOP is more than a campaign - it’s in our DNA, it’s our mantra and covers three
                    innovative & industry leading approaches:</p>
                <ul>
                    <li>
                        <a href="javascript:;">TENCEL™ x REFIBRA™ technology</a>
                    </li>
                    <li>
                        <a href="javascript:;">Carbon-zero TENCEL™ fibers</a>
                    </li>
                    <li>
                        <a href="javascript:;">TENCEL™’s transparency (fiber ID)</a>
                    </li>
                </ul>
                <p>We just introduced THE GOOD LOOP to our community by focusing on our pioneering REFIBRA™technology.
                    Taking pre- and post-consumer waste and mix it up with wood pulp to create virgin TENCEL™ Lyocell
                    fibers.. The HERO VIDEO of the campaign shows the full loop from forest, to fiber, to fashion and
                    educates & further highlights our brand partners who are already working with TENCEL™ Lyocell fibers
                    with REFIBRA™ technology.</p>
                <p>In addition to the HERO Video, we are working with GANNI, Kings of Indigo and Timberland and their
                    current TENCEL™ x REFIBRA™ key pieces. For GANNI we show the Core Light Shirt with the Signature
                    Peter Pan collar, Kings of Indigo presents the classic five pocket jeans INDIRA and JOHN and
                    Timberland highlights the TRUE CLOUD™ shoes. Watch out for them, we are sure you will love them just
                    as much as we do.</p>
                <p>Have a look and keep THE GOOD LOOP of life flowing.</p>
            </div>
        </div>

        <div class="the-good-loop-video-desktop">
            <div class="video-layer">
                <iframe src="https://player.vimeo.com/video/638968921?controls=true" frameborder="0"></iframe>
            </div>
        </div>

        <div class="the-good-loop-img-desktop">
            <p>
                Based on the same award-winning efficient closed loop production process as standard TENCEL™ Lyocell
                fiber, REFIBRA™ technology is Lenzing’s first step to contribute to the circular economy in the textile
                industry.

                <br>
                <br>
                TENCEL™ fibers with REFIBRA™ technology are identifiable in yarns, fabrics and final garments owing to
                the innovative special identification technology designed to confirm fiber origin. In turn, this
                <a href="javascript:;">
                    improves supply chain transparency
                </a>
            </p>
        </div>

        <div class="chart">
            <div class="container">
                <h2>REFIBRA™</h2>
                <h3>contribution to circular economy</h3>
                <img src="https://www.tencel.com/images/assets/various/RefibraChartUpdated.png" alt="">
            </div>
        </div>

        <news-and-events />
    </div>
</template>
<script setup>
import NewsAndEvents from '../../../components/commons/news-and-events/index.vue';
</script>
<style lang="less" scoped>
.refibra {
    .banner {
        width: 100%;
        height: 720px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        display: table;
        background-image: url(https://www.tencel.com/images/assets/section-backgrounds/recycling-fabric-waste-tencel-refibra.jpg);
        display: flex;
        align-items: center;

        .container {


            &>h2 {
                color: #fff;
                font-family: circular-bold;
                font-size: 1.8rem;

                @media screen and (min-width: 768px) {
                    font-size: calc(50px + 40 * ((100vw - 768px)/ 1152));
                }
            }
        }
    }

    .textiles {
        width: 90.625vw;
        max-width: 1500px;
        margin: auto;
        padding: 32px 32px 0;
        text-align: left;

        &>h2 {
            font-family: circular-bold;
            color: #52B68B;
            margin-bottom: 0;
            margin-top: 5.3rem;
            font-size: 2rem;

            @media screen and (min-width: 580px) {
                font-size: calc(20px + 36 * ((100vw - 580px)/ 1340));
            }
        }

        &>p {
            font-family: circular-book;
            font-size: 1.8rem;
            margin: 1em 0;

            @media screen and (min-width: 930px) {
                font-size: calc(18px + 2 * ((100vw - 930px)/ 990));
            }
        }
    }

    .the-good-loop {
        margin: 60px auto auto;
        width: 90.625vw;
        max-width: 150rem;
        font-family: circular-book;
        font-size: 1.8rem;

        .container {
            ul {
                padding-left: 5rem;

                li {
                    list-style: disc;
                    font-size: 1.8rem;

                    @media screen and (min-width: 930px) {
                        font-size: calc(18px + 2 * ((100vw - 930px)/ 990));
                    }
                }
            }

            p {
                margin: 1em 0;
                font-size: 1.8rem;

                @media screen and (min-width: 930px) {
                    font-size: calc(18px + 2 * ((100vw - 930px)/ 990));
                }
            }
        }
    }

    .the-good-loop-video-desktop {
        margin: 60px auto auto;
        width: 90.625vw;
        max-width: 1500px;
        font-family: circular-book;
        font-size: 18px;

        .video-layer {
            position: relative;
            padding-top: 56%;

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
            }
        }
    }

    .the-good-loop-img-desktop {
        margin: 60px auto auto;
        background-size: cover;
        position: relative;
        padding-left: 11.22vw;
        padding-right: 11.22vw;
        width: 90.625vw;
        max-width: 1500px;
        height: 37.5vw;
        max-height: 620.6px;
        background-image: url(https://www.tencel.com/images/assets/section-backgrounds/eco-friendly-fabric-clothing-tencel-refibra.jpg);

        &>p {
            max-width: 60%;
            color: #fff;
            position: absolute;
            bottom: 10%;
            left: 5.2vw;
            margin: 0;
            font-family: circular-book;
            font-size: 1.8rem;

            @media screen and (min-width: 930px) {
                font-size: calc(18px + 2 * ((100vw - 930px)/ 990));
            }
        }
    }

    .chart {
        margin: 5% auto 50px;

        .container {
            width: 90.625vw;

            &>h2 {
                font-family: circular-bold;
                margin: 0;
                padding: 0;
                color: #52B68B;
                font-size: 3rem;

                @media screen and (min-width: 930px) {
                    font-size: calc(30px + 26 * ((100vw - 580px)/ 1340));
                }
            }

            &>h3 {
                font-family: circular-bold;
                font-size: 16px;

                @media screen and (min-width: 580px) {
                    font-size: calc(16px + 26 * ((100vw - 580px)/ 1340));
                }
            }

            img {
                width: 100%;
            }
        }
    }
}
</style>