<template>
    <div class="discover-tencel">
        <div class="discover-tencel-tm">
            <h2 class="h2">
                <span class="discover">discover</span> TENCEL™
            </h2>
            <div class="description">
                <p class="box">cellulosic fibers of botanic origin define a new standard of sustainability and natural
                    comfort for you.</p>
            </div>
            <div class="photos">
                <div class="column">
                    <a href="javascript:;">
                        <img src="/images/home-photos/1.jpg" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="/images/home-photos/7.jpg" alt="">
                    </a>
                </div>
                <div class="column">
                    <a href="javascript:;">
                        <img src="/images/home-photos/2.jpg" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="/images/home-photos/4.jpg" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="/images/home-photos/6.jpg" alt="">
                    </a>
                </div>
                <div class="column">
                    <a href="javascript:;">
                        <img src="/images/home-photos/3.jpg" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="/images/home-photos/5.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>

        <div class="sustainability">
            <h2 class="sustainability-title">sustainability</h2>
            <p class="sustainability-desc">TENCEL™ fibers help maintain environmental balance by being integrated into
                nature´s cycle</p>
            <div class="btn-box">
                <button class="nature">TENCEL™ & nature’s cycle</button>
                <button class="technology">REFIBRA™ technology</button>
            </div>
        </div>
        <div class="where-to-buy">
            <h2>where to buy us</h2>
            <p>Check out our branding partners who use our TENCEL™ branded fibers in their products!</p>
            <button class="view-all-btn">
                View all brands
            </button>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.discover-tencel {


    .discover-tencel-tm {
        background-image: url(/images/curve.png);
        padding-top: 10rem;
        background-position: left -2px;
        background-repeat: no-repeat;
        background-color: #e3e7e5;

        .h2 {
            color: #333;
            max-width: 78.5%;
            font-family: circular-bold;
            margin: 0 auto;
            font-size: 8.3rem;

            .discover {
                font-size: 5.2rem;
                font-family: circular-bold;
                vertical-align: top;
            }
        }

        .description {
            max-width: 52.4%;
            margin: 0 auto;
            font-size: 2.5rem;
            font-family: circular-book;

            .box {
                max-width: 68.3rem;
            }
        }

        .photos {
            max-width: calc(90.4% + 60px);
            margin: 7rem auto;
            display: flex;
            padding-bottom: 10rem;

            a {
                cursor: pointer;
                display: block;
                background-repeat: no-repeat;
                background-size: 100%;
                background-position: center;
                overflow: hidden;
                object-fit: contain;
                margin: 3rem;
                color: #fff;
                box-shadow: 2rem 2rem 6rem #999;

                &:hover img {
                    transform: scale(1.2) translateZ(1px);
                }

                img {
                    width: 100%;
                    height: 100%;
                    transition: all .4s;
                }
            }

            .column {
                a {
                    margin-bottom: 6rem;
                }
            }
        }
    }

    .sustainability {
        width: 90.4%;
        margin-left: auto;
        margin-right: auto;
        height: 0 auto;
        transform: translateY(-100px);
        padding: calc(10.15vw) 0 0;

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

    }
}
</style>