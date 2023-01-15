<template>
    <div class="news-and-events">

        <div class="swiper-container">
            <h2 class="news-and-events-title">news & events</h2>
            <swiper :modules="modules" :watch-slides-progress="true" :slides-per-view="3.4" :space-between="80"
                @swiper="onSwiper">

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
                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">27 / 10 / 2022</h3>
                        <p class="swiper-slide-text">The trailblazing trends and innovations creating a sustainable
                            future with TENCEL™</p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">10 / 10 / 2022</h3>
                        <p class="swiper-slide-text">Championing a sustainable vision with next-gen fashion talents</p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">29 / 09 / 2022</h3>
                        <p class="swiper-slide-text">TENCEL™ joins forces with MUUN to connect with nature through
                            capsule collection</p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
                <swiper-slide class="news-and-events-swiper-slide">
                    <div class="box">
                        <h3 class="swiper-slide-title">26 / 09 / 2022</h3>
                        <p class="swiper-slide-text">Jacaranda and TENCEL™ launch carbon zero carpet and rug collection
                        </p>
                        <read-more-button>more</read-more-button>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="navigation-bar">

        </div>

        <div class="progress-bar">
            <div ref="progress" class="progress"></div>
        </div>

        <div class="read-more-box">
            <read-more-button>view all news</read-more-button>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ReadMoreButton from '../read-more/index.vue';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/less';

const modules = [Navigation];
const allSwipers = ref(0)
const progress = ref(null);


const onSwiper = swiper => {
    // calculateProgress(swiper)
    allSwipers.value = swiper.$wrapperEl[0].children.length;
    const heightArr = []
    swiper.slides.forEach(item => {
        heightArr.push(parseFloat(window.getComputedStyle(item, null).height));
    })
    let maxHeight = Math.max(...heightArr);
    swiper.slides.forEach(item => {
        item.style.height = maxHeight + 'px';
    })
}

// const calculateProgress = (swiper) => {
//     progress.value.style.width = (swiper.activeIndex + 1) / (allSwipers.value * 100) + 'px';
// }

onMounted(() => {
    // calculateProgress();
})


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

                &:hover .box .read-more,
                &:hover .box .swiper-slide-title,
                &:hover .box .swiper-slide-text {
                    color: var(--primary-color);
                }

                .box {
                    padding-right: 2.5rem;
                    position: relative;
                    height: 100%;

                    .read-more {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        transition: all 0.5s;
                    }
                }

                .swiper-slide-title {
                    font-size: 1.8rem;
                    margin-bottom: 3rem;
                    color: #000000;
                    font-family: lenzing;
                    transition: all 0.5s;
                }

                .swiper-slide-text {
                    color: #000;
                    font-size: 2.65rem;
                    font-family: circular-book;
                    margin-bottom: 10rem;
                    transition: all 0.5s;
                }
            }
        }
    }

    .progress-bar {
        background-color: #e2e2e2;
        margin-top: 1rem;
        height: .2rem;

        .progress {
            width: 20%;
            height: 100%;
            background-color: var(--primary-color);
        }
    }

    .read-more-box {
        margin-top: 4rem;
        text-align: center;

        &:hover button {
            color: var(--primary-color);
        }
    }
}
</style>