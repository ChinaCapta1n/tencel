<template>
    <div class="define-a-new-standard">
        <h2 class="title">TENCEL™ cellulosic fibers of botanic origin define a new standard of sustainability and
            natural comfort for
            your customers</h2>
        <div class="b2b-swiper-container">
            <swiper :slides-per-view="3" :space-between="30">
                <swiper-slide>
                    <a href="javascript:;">
                        <img src="/images/b2b/home/1.jpg" alt="" />
                        <div class="text-box">
                            <h3>TENCEL™ Lyocell</h3>
                            <p>TENCEL™ Lyocell fibers are extracted from sustainably grown wood using a unique closed
                                loop system which recovers and reuses the solvents used, minimizing the environmental
                                impact of production.</p>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="javascript:;">
                        <img src="/images/b2b/home/2.jpg" alt="" />
                        <div class="text-box">
                            <h3>TENCEL™ Modal</h3>
                            <p>TENCEL™ Modal fibers are extracted from naturally grown beech wood by an environmentally
                                responsible integrated pulp-to-fiber process.</p>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="javascript:;">
                        <img src="/images/b2b/home/3.jpg" alt="" />
                        <div class="text-box">
                            <h3>TENCEL™ Lyocell</h3>
                            <p>A new variant of the TENCEL™ Lyocell production process enables Lenzing to produce
                                extremely fine filament yarn, branded as TENCEL™ Luxe.</p>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/less';

</script>
<style lang="less" scoped>
.define-a-new-standard {
    padding-bottom: 5.2vw;
    padding-left: 4.16vw;
    padding-right: 4.16vw;

    .title {
        font-size: 2.6rem;
        font-family: "circular-bold";
        max-width: 1580px;
        text-align: center;
        margin: 4.68vw auto;
        padding: 0 4.16vw;

        @media screen and (min-width: 930px) {
            font-size: calc(26px + 16 * ((100vw - 930px) / 990));
        }
    }

    .b2b-swiper-container {
        max-height: 400px;
        display: flex;
        justify-content: space-between;
        max-width: 1740px;
        min-width: 100%;
        margin: auto;

        .swiper {
            .swiper-wrapper {
                .swiper-slide {
                    border-style: solid;
                    border-color: #DEDEDE;
                    border-width: 1px;

                    &:hover {
                        a {
                            img {
                                opacity: 1;
                            }
                        }
                    }

                    a {
                        display: block;
                        height: 100%;
                        position: relative;

                        img {
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            transition: opacity 0.6s;
                        }

                        .text-box {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            margin-left: 30px;
                            margin-right: 30px;

                            h3 {
                                margin: 0;
                                margin-bottom: 20px;
                                color: #52B68B;
                                font-family: "circular-bold";
                                line-height: 1.2;
                                font-size: 2.8rem;

                                @media screen and (min-width: 930px) {
                                    font-size: calc(28px + 28 * ((100vw - 930px) / 990));
                                }
                            }

                            p {
                                font-family: "lenzing";
                                margin: 0;
                                color: #333;
                                font-size: 1.2rem;

                                @media screen and (min-width: 930px) {
                                    font-size: calc(12px + 6 * ((100vw - 930px) / 990));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>