<template>
    <div class="news-and-events">

        <div class="swiper-container">
            <h2 class="news-and-events-title">news & events</h2>
            <swiper :slides-per-view="3.4" :space-between="80" @swiper="onSwiper" @slideChange="onSlideChange">

                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">13 / 12 / 2022</h3>
                        <p class="swiper-slide-text">TENCEL™ and RCGD Global bring eco-couture to the spotlight at the
                            US
                            and UK
                            premieres of “AVATAR: The
                            Way of Water</p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">13 / 12 / 2022</h3>
                        <p class="swiper-slide-text">TENCEL™ and RCGD Global bring eco-couture to the spotlight at the
                            world
                            premiere of “AVATAR: The Way
                            of Water</p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">13 / 12 / 2022</h3>
                        <p class="swiper-slide-text">In partnership with LENZING™ ECOVERO™ and Textil Carmem, THE
                            PARADISE
                            launches a sustainable
                            collection inspired by Bela Gil</p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">13 / 12 / 2022</h3>
                        <p class="swiper-slide-text">Houdini’s circular sportswear collection “The New Naturals”
                            features
                            TENCEL™ branded fibers with
                            merino wool</p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="read-more-box">
            <read-more-button>view all news</read-more-button>
        </div>
    </div>
</template>
<script setup>
import ReadMoreButton from '../read-more/index.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const onSwiper = swiper => {
    const heightArr = []
    swiper.slides.forEach(item => {
        heightArr.push(parseFloat(window.getComputedStyle(item, null).height));
    })
    let maxHeight = Math.max(...heightArr);
    swiper.slides.forEach(item => {
        item.style.height = maxHeight + 'px';
    })
}

const onSlideChange = () => {
    console.log('slide change');
}
</script>
<style lang="less" scoped>
.news-and-events {
    background-color: #F3F3F3;
    margin-top: 10rem;
    padding: 8.5rem 10rem;
    ;



    .swiper-container {
        cursor: pointer;
        max-width: 1500px;
        margin: 0 auto;

        .news-and-events-title {
            margin-top: 0;
            margin-bottom: 4.16vw;
            font-family: circular-bold;
            font-size: 5.6rem;
            color: var(--primary-color);
        }

        .swiper {
            .news-and-events-swiper-slide {
                width: 25%;

                .box {
                    padding-right: 2.5rem;
                    position: relative;
                    height: 100%;

                    .read-more {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                }

                .swiper-slide-title {
                    font-size: 1.8rem;
                    margin-bottom: 3rem;
                    color: #000000;
                    font-family: lenzing;
                }

                .swiper-slide-text {
                    color: #000;
                    font-size: 2.65rem;
                    font-family: circular-book;
                    margin-bottom: 10rem;
                }
            }
        }
    }

    .read-more-box {
        margin-top: 4rem;
        // margin-bottom: 1.3rem;
        text-align: center;
        // padding-bottom: 8.5rem;
    }
}
</style>