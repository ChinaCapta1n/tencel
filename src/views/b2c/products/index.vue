<template>
    <div class="products">
        <!-- banner -->
        <div class="banner" :style="{ backgroundImage: `url(/images/products/banner.jpg)` }">
            <h2 class="banner-title">General apparel & outerwear</h2>
        </div>

        <!-- intro -->
        <div class="product-introduction">
            <div class="container">
                <div class="left">
                    <img src="/images/products/1.png" alt="">
                    <p class="text">botanic origin</p>
                </div>
                <div class="right">
                    <h2>feel good with natural touch</h2>
                    <p>
                        feel good with a natural touch
                        TENCEL™ cellulosic fibers of botanic origin define a new standard of sustainability and natural
                        comfort for you, transforming fabrics to ensure their suitability to everyday consumer needs.
                    </p>
                    <read-more-button>view partner brands</read-more-button>
                </div>
            </div>
        </div>

        <!-- detail -->
        <div class="detail" :style="{ backgroundImage: `url(images/products/general.jpg)` }">
            <h2 class="detail-title">our sustainable process</h2>
            <span>botanic origin</span>
            <span>biodegradable</span>
            <span>feels cool and dry / feels warm and dry</span>
            <span>unfavorable for bacterial growth</span>
            <span>sustainable production of lyocell fibers</span>
            <span>environmentally sound production process for modal fibers</span>
            <span>contributes to breathability</span>
            <span>gentle on skin</span>
            <span>minimal static charge</span>
            <span>sheen</span>
            <span>strength</span>
            <span>smoothness</span>
            <span>drape</span>
            <span>color retention</span>
            <span>long-lasting softness</span>
            <span>certified safe</span>
        </div>

        <!-- galleries -->
        <div class="galleries">
            <swiper slides-per-view="auto">
                <swiper-slide v-for="gallery in galleriesData" :key="gallery.id">
                    <img :src="gallery.img" alt="">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script setup>
import ReadMoreButton from '../../../components/read-more/index.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/less';


const galleriesData = [
    {
        "id": 0,
        "img": "/images/products/galleries/1.jpg"
    },
    {
        "id": 1,
        "img": "/images/products/galleries/1.jpg"
    },
    {
        "id": 2,
        "img": "/images/products/galleries/2.jpg"
    }
]

</script>
<style lang="less" scoped>
.products {
    background-color: #f3f3f3;
    max-width: 256rem;

    .banner {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        height: 37.5vw;
        position: relative;

        .banner-title {
            position: absolute;
            top: 40%;
            left: 10%;
            font-size: calc(50px + 40 * ((100vw - 580px)/1340));
            color: #fff;
            font-family: circular-bold
        }
    }

    .product-introduction {
        margin-top: 5rem;

        .container {
            display: flex;
            justify-content: space-between;

            .left {
                display: flex;
                align-items: center;
                width: 50%;

                img {
                    width: 10rem;
                    height: 10rem;
                    margin-right: 5rem;
                }

                .text {
                    font-size: 4.5rem;
                    color: var(--primary-color);
                    font-family: circular-book;
                }
            }

            .right {
                width: 50%;

                h2 {
                    font-size: calc(24px + 4 * ((100vw - 580px)/1340));
                    color: var(--primary-color);
                    font-family: circular-book;
                    margin: 2.3rem 0;
                }

                p {
                    font-size: 1.6rem;
                    line-height: 2.8rem;
                    margin: 1.6rem 0;
                }
            }
        }
    }

    .detail {
        background-position: 0px 0px;
        padding-top: 37%;
        background-size: 100%;
        background-repeat: no-repeat;
        margin-top: 8rem;
        position: relative;

        .detail-title {
            font-size: calc(36px + 20 * ((100vw - 580px)/1340));
            position: absolute;
            left: 50%;
            top: 6vw;
            transform: translateX(-50%);
            font-family: circular-bold;
            color: #fff;
        }

        span {
            display: block;
            position: absolute;
            transition: transform 0.25s ease 0s;
            transform: scale(1);
            background-repeat: no-repeat;
            background-size: 3rem auto;
            background-position: left center;
            padding: .5% 0 .5% 4%;
            margin: -18px 0 0 -17px;
            cursor: pointer;
            color: #fff;
            font-size: 1.6rem;
            background-image: url(/images/products/pointer.png);

            &:nth-of-type(1) {
                left: 41.6667%;
                top: 44.1176%;
            }

            &:nth-of-type(2) {
                left: 13.8889%;
                top: 58.8235%;
            }

            &:nth-of-type(3) {
                left: 55.7639%;
                top: 43.1373%;
            }

            &:nth-of-type(4) {
                left: 58.2292%;
                top: 78.4314%;
            }

            &:nth-of-type(5) {
                left: 24.6181%;
                top: 67.0588%;
            }

            &:nth-of-type(6) {
                left: 59.6875%;
                top: 62.6471%;
            }

            &:nth-of-type(7) {
                left: 17.3611%;
                top: 34.3137%;
            }

            &:nth-of-type(8) {
                left: 13.8889%;
                top: 49.0196%;
            }

            &:nth-of-type(9) {
                left: 52.0833%;
                top: 73.5294%;
            }

            &:nth-of-type(10) {
                left: 41.6667%;
                top: 78.4314%;
            }

            &:nth-of-type(11) {
                left: 22.5694%;
                top: 44.1176%;
            }

            &:nth-of-type(12) {
                left: 27.7778%;
                top: 73.5294%;
            }

            &:nth-of-type(13) {
                left: 10.4167%;
                top: 68.6275%;
            }

            &:nth-of-type(14) {
                left: 41.6667%;
                top: 53.9216%;
            }

            &:nth-of-type(15) {
                left: 55.5556%;
                top: 53.9216%;
            }

            &:nth-of-type(16) {
                left: 13.8889%;
                top: 83.3333%;
            }

            &:hover {
                animation: hoverToScale 0.5s;
            }
        }
    }

    @keyframes hoverToScale {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.2);
        }

        100% {
            transform: scale(1);
        }
    }
}
</style>