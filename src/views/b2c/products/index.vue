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
        <div class="detail">

        </div>
    </div>
</template>
<script setup>
import ReadMoreButton from '../../../components/read-more/index.vue';
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
            font-family: circular-bold;
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
}
</style>