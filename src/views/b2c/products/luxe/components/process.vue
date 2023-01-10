<template>
    <div class="process">
        <div class="process-left">
            <div class="left">
                <p>The innovation in Eco Filament Technology transforming wood pulp directly to filament obtaining a
                    silk like quality.</p>
            </div>
            <div class="right">
                <swiper :slides-per-view="4.5" :space-between="50">
                    <swiper-slide v-for="slide in processData" :key="slide.id">
                        <img :src="slide.img" alt="">
                        <h2>{{ slide.text }}</h2>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="process-right">
            <a class="read-more-process">Read more about our Process</a>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/less';

const processData = [
    {
        "id": 0,
        "text": "NATURAL RESOURCES",
        "img": "/images/products/luxe/process/1.jpg"
    },
    {
        "id": 1,
        "text": "RAW MATERIALS",
        "img": "/images/products/luxe/process/2.jpg"
    },
    {
        "id": 2,
        "text": "INNOVATION",
        "img": "/images/products/luxe/process/3.jpg"
    },
    {
        "id": 3,
        "text": "ENVIRONMENTALLY SOUND",
        "img": "/images/products/luxe/process/4.jpg"
    },
    {
        "id": 4,
        "text": "ECO FILAMENT YARN",
        "img": "/images/products/luxe/process/5.jpg"
    },
    {
        "id": 5,
        "text": "FINAL FABRICATION",
        "img": "/images/products/luxe/process/6.jpg"
    },
    {
        "id": 6,
        "text": "BIODEGRADABILITY",
        "img": "/images/products/luxe/process/7.jpg"
    }
]

</script>
<style lang="less" scoped>
.process {
    background-color: #52b58a;
    display: flex;
    padding: 8vh 5%;
    flex-direction: column;

    .process-left {
        display: flex;

        .left {
            width: 40rem;
            color: #fff;

            p {
                font-family: circular-book;
                font-size: 3.2rem;
                line-height: 1.5;
            }

        }

        .right {
            width: calc(100% - 400px);
            margin-left: 4rem;

            .swiper {
                .swiper-wrapper {
                    .swiper-slide {
                        padding: 20px;
                        background-color: #ededeb;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        h2 {
                            text-align: center;
                            font-size: 1.4rem;
                            margin: 1em 0 0;
                            font-family: circular-book;
                        }
                    }
                }
            }

            img {
                width: 100%;
            }
        }
    }

    .process-right {
        margin-top: 1.7em;

        .read-more-process {
            display: inline-block;
            font-size: 2.1rem;
            border-bottom: 1px solid #fff;
            padding-right: 1rem;
            padding-bottom: .4rem;
            line-height: 1.5;
            color: #fff;
        }
    }
}
</style>