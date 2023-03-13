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




    </div>
</template>
<script setup>
</script>
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

    @media screen and (max-width: 930px) {
        .photos {
            flex-direction: column;
            margin: 20px !important;
            padding-bottom: 0 !important;
            .column {
                display: flex;
                flex-direction: column;
                    & > a {
                        margin: 0 0 30px !important;
                    height: 160px;
                    img {
                        object-fit: cover;
                    }
                };
            }
        }

        .discover-tencel-tm {
            background-size: 140px 140px;
            padding-top: 80px;
            padding-bottom: 30px;
            & > .h2 {
                font-size: 50px;
                margin: 0;
                padding-left: 40px;
                .discover {
                    font-size: 3.4rem;
                }
                display: flex;
                flex-direction: column;
            }

            .description {
                margin: 0;
                padding: 0 20px;
                max-width: 683px;
                p {
                    font-size: 1.8rem;
                    font-family: lenzing;
                }
            }
        }
    }


}
</style>