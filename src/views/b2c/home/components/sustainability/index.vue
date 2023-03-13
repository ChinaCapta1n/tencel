<template>
    <div class="sustainability">
        <h2 class="sustainability-title">sustainability</h2>
        <p class="sustainability-desc">TENCEL™ fibers help maintain environmental balance by being integrated into
            nature´s cycle</p>
        <div class="btn-box">
            <button class="nature">TENCEL™ & nature’s cycle</button>
            <button class="technology">REFIBRA™ technology</button>
        </div>
        <div class="sustainability-swiper">
            <swiper :modules="modules" :freeMode="true" slidesPerView='auto' :speed="200" :autoplay="{ delay: 0 }"
                :mousewheel="{ mousewheel: true, releaseOnEdges: true }">
                <swiper-slide>
                    <h2>
                        <span class="from">from</span>
                        <br>
                        forest
                        <br>
                        to
                        <br>
                        fashion
                    </h2>
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/sustainability/1.jpg" alt="">
                    <h2>forest</h2>
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/sustainability/2.jpg" alt="">
                    <h2>wood</h2>
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/sustainability/3.jpg" alt="">
                    <h2>pulp</h2>
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/sustainability/4.jpg" alt="">
                    <h2>fiber</h2>
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/sustainability/5.jpg" alt="">
                    <h2>yarn</h2>
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/sustainability/6.jpg" alt="">
                    <h2>fabric</h2>
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/sustainability/7.jpg" alt="">
                    <h2>end <br> application</h2>
                </swiper-slide>
            </swiper>
        </div>
    </div>

</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper';
import 'swiper/css';

const modules = [Mousewheel];



</script>
<style lang="less" scoped>
.sustainability {
    width: 90.4%;
    margin-left: auto;
    margin-right: auto;
    height: 0 auto;
    transform: translateY(-200px);
    padding: 10.15vw 0 0;

    .sustainability-swiper {
        margin-top: 6rem;
        height: 37.5vw;

        .swiper-slide {
            h2 {
                font-size: calc(28px + 17 * ((100vw - 768px)/1152));
                font-family: circular-bold;
                color: #fff;
                position: absolute;
                padding: 3% 18%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                line-height: 1;

                .from {
                    font-size: calc(18px + 10 * ((100vw - 768px)/1152));
                    line-height: .8;
                }
            }
        }
    }

    .sustainability-title {
        margin: 2.4rem 0;
        font-size: 4.8rem;
        color: var(--primary-color);
        font-family: circular-bold;
        text-align: center;
    }

    .sustainability-desc {
        margin: auto;
        text-align: center;
        font-family: lenzing;
        font-size: 1.6rem;
    }

    .btn-box {
        margin-top: 3rem;
        height: 8rem;
        display: flex;
        justify-content: center;

        button {
            display: block;
            margin: 0 1rem;
            line-height: 1.5;
            height: 8rem;
            border: 6px solid var(--primary-color);
            border-radius: 10rem;
            font-size: 2.4rem;
            padding: 1.5rem 4rem;
            font-family: circular-bold;
            cursor: pointer;
            background-color: #fff;
            color: var(--primary-color);
            font-weight: 700;
        }
    }

    @media screen and (max-width: 930px) {
        transform: translateY(0);
        .sustainability-title {
            font-size: 3.2rem;
        }

        .sustainability-title, .sustainability-desc {
            text-align: left;
        }

        .btn-box {
            flex-direction: column;
            height: auto;
            button {
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }
        }
    }
}
</style>