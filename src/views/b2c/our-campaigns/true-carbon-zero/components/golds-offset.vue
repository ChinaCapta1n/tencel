<template>
    <div class="golds-offset">
        <div class="container">
            <div class="top">
                <title-and-image title="offset"
                    img="https://www.tencel.com/images/assets/various/header_line_green2.svg" />
                <p>While continuously reducing carbon emissions across the lifecycle of our TENCEL™ fibers, we take
                    responsibility for any residual emissions by supporting verified carbon reduction projects. These
                    global carbon reduction projects are an immediate response to ensure that an equivalent amount of
                    carbon is absorbed or avoided elsewhere. </p>
                <p>TENCEL™ is supporting verified carbon offset projects specifically in communities impacted by the
                    textile industry. These projects are focused on helping ill-prepared communities become more
                    climate-resilient and on introducing new sources of renewable energy, including:</p>
            </div>
            <div class="bottom">
                <div class="offset-swiper">
                    <swiper :slides-per-view="3" :space-between="50">
                        <swiper-slide>
                            <div class="img">
                                <img src="https://www.tencel.com/images/assets/various/offset-climatepartner-windenergy-satara-india.jpg"
                                    alt="">
                            </div>
                            <div class="content">
                                <h2>Wind Energy, Satara, India</h2>
                                <p>Wind energy has become one of the most important renewable energy sources for power
                                    generation in India. The project not only contributes to energy security and climate
                                    action, providing a considerable amount of electricity that would otherwise have
                                    been
                                    produced using fossil fuels, but also promotes economic and regional development and
                                    job
                                    creation.</p>
                                <learn-more-button>learn more</learn-more-button>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="img">
                                <img src="https://www.tencel.com/images/assets/various/offset-climatepartner-windenergy-gujarat-india.jpg"
                                    alt="">
                            </div>
                            <div class="content">
                                <h2>Wind Energy, Gujarat, India</h2>
                                <p>The project replaces greenhouse gas emissions by displacing the equivalent amount of
                                    electricity generated mainly by fossil fuel based power plants with wind turbine
                                    generators. The wind farm contributes to reducing the energy demand supply gap
                                    within the state, and stimulates a sustainable economic growth in the region by
                                    providing clean electricity to the state grid.</p>
                                <learn-more-button>learn more</learn-more-button>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="img">
                                <img src="https://www.tencel.com/images/assets/various/offset-climatepartner-biogas-punjab-india.jpg"
                                    alt="">
                            </div>
                            <div class="content">
                                <h2>Biogas, Punjab, India</h2>
                                <p>Using gas from fermented biomass for cooking saves significant amounts of CO2 per
                                    year that would otherwise be emitted when cooking with wood or charcoal. The project
                                    has installed biogas plants of various sizes with a direct outlet to households,
                                    which also significantly reduces indoor air pollution that is harmful to health.</p>
                                <learn-more-button>learn more</learn-more-button>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import TitleAndImage from './title-and-image.vue';
import LearnMoreButton from '../../../../../components/commons/read-more/index.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/less';

</script>
<style lang="less" scoped>
.golds-offset {
    margin-top: 6.5rem;
    padding: 0 10rem;

    .container {
        .top {
            &>p {
                margin: 2rem 0;
                max-width: 70%;
                line-height: 30px;

                @media screen and (min-width: 930px) {
                    font-size: calc(18px + 2 * ((100vw - 930px)/990));
                }
            }
        }

        .bottom {
            margin-top: 4rem;

            .offset-swiper {
                padding: 0 1.8rem;

                .swiper {
                    .swiper-wrapper {
                        .swiper-slide {
                            .img {
                                position: relative;
                                width: 100%;
                                padding-top: 66.4%;
                                overflow: hidden;

                                img {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: auto;
                                }
                            }

                            .content {
                                display: flex;
                                flex-direction: column;
                                padding: 2.5rem 3rem 3.5rem;

                                h2 {
                                    display: flex;
                                    flex-direction: column;
                                    padding: 25px 30px 35px;
                                }

                                p {
                                    margin-top: 0;
                                    margin-bottom: 10px;
                                    font-size: 1.8rem;

                                    @media screen and (min-width: 930px) {
                                        font-size: calc(18px + 2 * ((100vw - 930px)/990));
                                    }
                                }

                                .read-more {
                                    align-self: flex-start;
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