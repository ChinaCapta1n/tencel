<template>
    <div class="where-to-buy">
        <div class="container">
            <h2 class="where-to-buy-title">where to buy us</h2>
            <p class="where-to-buy-desc">Check out our branding partners who use our TENCEL™ branded fibers in their
                products!</p>
            <div class="brands-swiper">
                <swiper :space-between="100" :slides-per-view="7">
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/1.png" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/2.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/3.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/4.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/5.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/6.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/7.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/8.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="javascript:;">
                            <img src="/images/brands-swiper/9.jpg" alt="">
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
            <view-all-brands>View all brands</view-all-brands>
        </div>
    </div>
</template>
<script setup>
import ViewAllBrands from '../../../../../components/commons/read-more/index.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/less';
</script>
<style lang="less" scoped>
.where-to-buy {
    margin-bottom: 10.5rem;

    .container {
        max-width: 84.4%;

        .where-to-buy-title {
            color: #5CAC81;
            font-size: calc(30px + 26 * ((100vw - 768px)/ 1152));
            font-family: circular-bold;
        }

        .brands-swiper {
            height: 8rem;
            margin-bottom: 5.5rem;

            .swiper-wrapper {
                align-items: center;

                .swiper-slide {

                    a {
                        img {
                            max-width: 20rem;
                            max-height: 6rem;
                        }
                    }
                }
            }


        }
    }

    .where-to-buy-desc {
        color: #555;
        font-size: 1.8rem;
        font-family: lenzing;
        margin-top: 1.45rem;
        margin-bottom: 6rem;
    }

    @media screen and (max-width: 930px) {
        margin-top: 2rem;
        .container {
            margin: 0;

            .where-to-buy-title {
                font-size: 3rem;
            }
        }
    }
}
</style>