<template>
    <div class="sustainability">
        <h2>sustainability</h2>
        <div class="cards">
            <a class="card">
                <div class="layer"></div>
                <img src="/images/b2b/home/sustainability/1.jpg" alt="">
                <div class="desc">
                    <h2>TENCEL™ & Nature's Cycle</h2>
                    <p>TENCEL™ Lyocell and Modal fibers help to maintain the environmental balance by being integrated
                        into nature's cycle.</p>
                </div>
            </a>
            <a class="card">
                <div class="layer"></div>
                <img src="/images/b2b/home/sustainability/2.jpg" alt="">
                <div class="desc">
                    <h2>REFIBRA™ technology</h2>
                    <p>The pioneering REFIBRA™ technology involves upcycling a substantial proportion of cotton scraps.
                    </p>
                </div>
            </a>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.sustainability {
    padding-left: 4.16vw;
    padding-right: 4.16vw;
    padding-bottom: 5.2vw;

    @media screen and (min-width: 1920px) {
        padding-left: 80px;
        padding-right: 80px;
        padding-bottom: 100px;
    }

    &>h2 {
        font-size: 4.8rem;
        padding-left: 4.16vw;
        padding-right: 4.16vw;
        margin: 0;
        margin-top: 4.16vw;
        margin-bottom: 1.04vw;
        font-family: "circular-bold";
        color: #52B68B;
        text-align: center;

        @media screen and (min-width: 930px) {
            font-size: calc(48px + 20 * ((100vw - 930px) / 990));
        }

        @media screen and (min-width: 1920px) {
            padding-left: 80px;
            padding-right: 80px;
            margin-top: 80px;
            margin-bottom: 20px;
            font-size: 6.8rem;
        }
    }

    .cards {
        margin: auto;
        width: 90.6vw;
        max-width: 1740px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .card {
            overflow: hidden;
            position: relative;
            width: 44.6vw;
            height: 26vw;
            max-width: 857px;
            max-height: 500px;

            &:hover {
                img {
                    transform: scale(1.1);
                }
            }

            .desc {
                z-index: 2;
                position: absolute;
                bottom: 2.08vw;
                left: 0px;
                padding-right: 5.8vw;
                padding-left: 2vw;

                h2 {
                    margin: 0;
                    margin-bottom: 1.3vw;
                    font-family: "circular-bold";
                    color: #fff;
                    font-size: 3.6rem;

                    @media screen and (min-width: 930px) {
                        font-size: calc(36px + 20 * ((100vw - 930px) / 990));
                    }
                }

                p {
                    margin: 0;
                    font-family: "lenzing";
                    color: #fff;
                    font-size: 1.4rem;

                    @media screen and (min-width: 930px) {
                        font-size: calc(14px + 4 * ((100vw - 930px) / 990));
                    }
                }
            }

            img {
                z-index: -1;
                position: absolute;
                height: 100%;
                width: auto;
                transition: transform 0.3s;
                max-width: 857px;
                max-height: 500px;
            }

            .layer {
                opacity: 0.6;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #0C0C0C 100%);
                position: absolute;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>