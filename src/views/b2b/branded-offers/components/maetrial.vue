<template>
    <div class="material">
        <div class="material-container">
            <div class="row">
                <div class="left">
                    <div class="img-box"></div>
                </div>
                <div class="right">
                    <h2>applicable products</h2>
                    <p>Garments and general uses.</p>
                </div>
            </div>
            <div class="row">
                <div class="left">
                    <div class="img-box"></div>
                </div>
                <div class="right">
                    <h2>blending partners</h2>
                    <p>TENCEL™ Lyocell fibers are versatile and can be combined with a wide range of textile fibers
                        such as cotton, polyester, acrylic, wool, and silk to enhance fabrics in regard to their
                        aesthetics, performance and functionality.</p>
                    <p>TENCEL™ Modal fibers can be blended with most other fibers and processed using conventional
                        machinery. TENCEL™ Modal is a highly compatible blending partner for cotton, and owing to
                        the fiber’s sleek cross-section, adds long-lasting softness to fabrics, enhancing the touch
                        even after repeated washing. Blending fibers with TENCEL™ Modal fibers significantly
                        improves the softness. Customized colors can also be created using different ratios of
                        blended fibers.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.material {
    background-color: #fff;
    margin-bottom: 3.125vw;
    padding: 12.2vw 7.3vw 50px 100px;
    padding-bottom: 0;

    .material-container {
        margin: 0 auto;
        max-width: 1500px;
        padding-left: 100px;
        padding-right: 100px;

        @media screen and (min-width: 1500px) {
            padding-left: 20px;
            padding-right: 20px;
        }

        .row {
            margin-bottom: 60px;
            font-size: 1.8rem;
            color: #555;
            font-family: lenzing;
            display: flex;

            .left {
                position: relative;
                z-index: 0;
                float: left;
                width: 45%;
                text-align: center;

                .img-box {
                    background-image: url('/images/b2b/branded-offers/general/material/1.jpg');
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 100%;
                    padding-top: 65.5%;
                }
            }

            &:nth-child(even) {
                flex-direction: row-reverse;

                .left {
                    position: relative;
                    width: 55%;
                    padding-right: 8.25%;
                    text-align: right;
                }

                .right {
                    padding-right: 6.9%;

                    &>h2 {
                        text-align: right;

                        &::after {
                            left: 110%;
                        }
                    }

                    &>p {
                        margin-bottom: 2rem;
                    }
                }

                .img-box {
                    background-image: url('/images/b2b/branded-offers/general/material/2.jpg');
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 100%;
                    padding-top: 65.5%;
                }
            }
        }

        .right {
            position: relative;
            z-index: 1;
            width: 55%;
            text-align: left;
            padding-left: 6.9%;

            &>h2 {
                font-size: 1.8rem;
                font-family: circular-bold;
                margin-top: 2.7rem;
                margin-bottom: 3rem;
                position: relative;
                color: #52b68b;

                &::after {
                    content: "";
                    background: #52b68b;
                    width: 23%;
                    height: 2px;
                    position: absolute;
                    left: -26%;
                    top: 50%;
                    transform: translateY(-50%);
                }

                @media screen and (min-width: 930px) {
                    font-size: calc(18px + 24 * ((100vw - 930px) / 990));
                }
            }

            &>p {
                font-family: lenzing;
                color: #555;
                font-size: 1.3rem;
                margin-bottom: 2rem;

                @media screen and (min-width: 930px) {
                    font-size: calc(13px + 5 * ((100vw - 930px) / 990));
                }
            }
        }
    }
}
</style>