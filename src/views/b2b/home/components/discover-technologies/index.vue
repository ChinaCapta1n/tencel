<template>
    <div class="discover-technologies">
        <div class="inner">
            <div class="inner-box">
                <div class="box">
                    <p>discover</p>
                    <h2>technologies</h2>
                </div>
            </div>
        </div>
        <div class="discover-swiper-container">
            <swiper :slides-per-view="3">
                <swiper-slide>
                    <a href="javascript:;">
                        <div class="top">
                            <img src="/images/b2b/home/discover-swiper/1.jpg" alt="">
                        </div>
                        <div class="bottom">
                            <h2>Eco Clean technology</h2>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="javascript:;">
                        <div class="top">
                            <img src="/images/b2b/home/discover-swiper/2.jpg" alt="">
                        </div>
                        <div class="bottom">
                            <h2>Eco Clean technology</h2>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="javascript:;">
                        <div class="top">
                            <img src="/images/b2b/home/discover-swiper/3.jpg" alt="">
                        </div>
                        <div class="bottom">
                            <h2>Eco Clean technology</h2>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="javascript:;">
                        <div class="top">
                            <img src="/images/b2b/home/discover-swiper/4.jpg" alt="">
                        </div>
                        <div class="bottom">
                            <h2>Eco Clean technology</h2>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="javascript:;">
                        <div class="top">
                            <img src="/images/b2b/home/discover-swiper/5.jpg" alt="">
                        </div>
                        <div class="bottom">
                            <h2>Eco Clean technology</h2>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="javascript:;">
                        <div class="top">
                            <img src="/images/b2b/home/discover-swiper/6.jpg" alt="">
                        </div>
                        <div class="bottom">
                            <h2>Eco Clean technology</h2>
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
.discover-technologies {
    position: relative;
    font-size: 1.8rem;
    padding-bottom: 8.75vw;
    margin-bottom: 12rem;

    @media screen and (min-width: 1920px) {
        padding-bottom: 168px;
        font-size: 2rem;
    }

    @media screen and (min-width: 930px) {
        font-size: calc(14px + 6 * ((100vw - 930px) / 990));
    }

    .inner {
        padding-left: 4.16vw;
        padding-right: 4.16vw;
        width: 100%;
        height: 24.73vw;
        max-height: 474.81px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #EEEFE9 50%, #EEEFE9 100%);
        font-size: 1.4rem;

        @media screen and (min-width: 1920px) {
            padding-left: 80px;
            padding-right: 80px;
            font-size: 2rem;
        }

        .inner-box {
            position: relative;
            height: 100%;
            width: 100%;
            max-width: 1740px;
            margin: auto;
            background-color: #EEEFE9;
            background-image: url(/images/b2b/home/white-leaf.svg);
            background-repeat: no-repeat;
            background-position-x: -70px;
            background-size: 98% auto;

            .box {
                position: absolute;
                top: 7.8125vw;
                left: 3.125vw;

                @media screen and (min-width: 1920px) {
                    top: 15rem;
                    left: 6rem;
                }

                p {
                    color: #52B68B;
                    font-family: "circular-bold";
                    font-size: 1.6rem;

                    @media screen and (min-width: 930px) {
                        font-size: calc(16px + 16 * ((100vw - 930px) / 990));
                    }

                    @media screen and (min-width: 1920px) {
                        font-size: 3.2rem;
                    }
                }

                h2 {
                    color: #52B68B;
                    font-family: "circular-bold";
                    font-size: 3.3rem;

                    @media screen and (min-width: 930px) {
                        font-size: calc(33px + 36 * ((100vw - 930px) / 990));
                    }

                    @media screen and (min-width: 1920px) {
                        font-size: 6.9rem;
                    }
                }
            }
        }
    }

    .discover-swiper-container {
        overflow: hidden;
        box-shadow: 5px 14px 45px rgba(0, 0, 0, .6);
        position: absolute;
        right: 0;
        top: 4.9vw;
        background-color: #e7e7e7;
        height: 26.56vw;
        max-height: 510px;
        width: 70.2vw;
        max-width: 1350px;

        .swiper {
            a {
                display: block;
                height: 100%;

                .top {
                    height: 19.79vw;
                    max-height: 380px;
                    overflow: hidden;

                    img {
                        width: auto;
                        height: 19.79vw;
                        max-height: 380px;
                    }
                }

                .bottom {
                    background-color: #fff;
                    border-style: solid;
                    border-width: 0.1px;
                    border-color: #f2f2f2;
                    position: relative;
                    height: 6.7vw;
                    max-height: 130px;
                    padding-left: 4.16vw;
                    padding-right: 4.16vw;
                    margin: auto;

                    h2 {
                        position: absolute;
                        top: 50%;
                        left: 1.5625vw;
                        transform: translateY(-50%);
                        font-family: "circular-bold";
                        color: #555555;
                        font-size: 1.4rem;

                        @media screen and (min-width: 930px) {
                            font-size: calc(14px + 14 * ((100vw - 930px) / 990));
                        }
                    }
                }
            }
        }
    }
}
</style>