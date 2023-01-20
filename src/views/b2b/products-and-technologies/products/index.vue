<template>
    <div class="b2b-products">
        <div class="tencel-tm">
            <div class="tencel-tm-desc">
                <h2 class="title">TENCEL™ Lyocell</h2>
                <p class="desc">TENCEL™ Lyocell fibers are extracted from sustainably grown wood using a unique closed
                    loop
                    system
                    which recovers and reuses the solvents used, minimizing the environmental impact of production.
                    Unique physical properties lead to their high tenacity profile, efficient moisture management and
                    gentleness to skin.</p>
            </div>
            <img class="tencel-tm-img" src="" alt="">
        </div>

        <div class="tencel-products">
            <div class="inner">
                <div class="row title">
                    <div class="column">
                        <p>technologies</p>
                    </div>
                    <div class="column">
                        <p>fiber types</p>
                    </div>
                </div>
                <div class="row">
                    <div class="column"></div>
                    <div class="column">
                        <p>LENZING™ Lyocell</p>
                        <p>LENZING™ Lyocell (Standard)</p>
                        <p>LENZING™ Lyocell A100</p>
                        <p>LENZING™ Lyocell LF</p>
                        <p>LENZING™ Lyocell Fill</p>
                        <p>LENZING™ Lyocell Powder</p>
                        <p>LENZING™ Lyocell Sun</p>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p>REFIBRA™</p>
                    </div>
                    <div class="column">
                        <p>LENZING™ Lyocell RB</p>
                        <p>LENZING™ Lyocell RB LF</p>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p>Micro</p>
                    </div>
                    <div class="column">
                        <p>LENZING™ Lyocell Micro</p>
                        <p>LENZING™ Lyocell Micro LF</p>
                        <p>LENZING™ Lyocell Micro A100</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.b2b-products {



    .tencel-tm {
        min-height: 31.5vw;
        background-color: #EEEFE9;
        padding-top: 2.91vw;
        padding-left: 4.16vw;
        padding-right: 4.16vw;
        padding-bottom: 5.2vw;
        margin-bottom: 12.2vw;
        position: relative;

        .tencel-tm-desc {
            overflow-x: hidden;
            max-width: 1740px;
            margin: auto;

            &>.title {
                max-width: 36.4vw;
                margin: 0;
                margin-bottom: 2.4vw;
                font-family: "circular-bold";
                color: #333333;
                font-size: 3.6rem;

                @media screen and (min-width: 930px) {
                    font-size: calc(36px + 54 * ((100vw - 930px) / 990));
                }
            }

            &>.desc {
                line-height: 1.6;
                max-width: 36.4vw;
                margin: 0;
                font-family: "lenzing";
                color: #555555;
                font-size: 1.3rem;

                @media screen and (min-width: 930px) {
                    font-size: calc(13px + 5 * ((100vw - 930px) / 990));
                }
            }
        }

        .tencel-tm-img {
            display: block;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            bottom: 0;
            transform: translateY(6.25vw);
            right: 0;
            width: 53.125vw;
            height: 35.41vw;
            background-image: url('/images/b2b/products/1.jpg');
        }
    }

    .tencel-products {
        margin-top: 5.2vw;
        margin-bottom: 5.2vw;
        width: 100%;
        padding-left: 4.6vw;
        padding-right: 4.6vw;
    }

    .inner {
        padding: 2.3vw 4.1vw;
        padding-bottom: 0;
        max-width: 1740px;
        width: 100%;
        margin: auto;
        background: #F1F1F1;
        display: flex;
        flex-direction: column;

        .row {
            border-bottom-style: solid;
            border-bottom-width: 1px;
            border-bottom-color: #e7e7e7;
            padding: 1.04vw 0;
            display: flex;

            &:nth-child(1) {
                border-color: transparent;
            }

            &:nth-child(4) {
                padding-bottom: 3.125vw;
            }

            .column {
                font-family: "lenzing";
                line-height: 2;
                width: 50%;
                font-family: "lenzing";
                font-size: 1.2rem;

                @media screen and (min-width: 930px) {
                    font-size: calc(12px + 6 * ((100vw - 930px) / 990));
                }

                p {
                    color: #000;
                    font-family: "lenzing";
                    line-height: normal;
                    font-size: 2.8rem;
                    margin-bottom: 1.3rem;

                    &:nth-last-of-type(1) {
                        margin-bottom: 0px;
                    }

                    @media screen and (min-width: 930px) {
                        font-size: calc(12px + 6 * ((100vw - 930px) / 990));
                    }
                }
            }
        }

        .title {
            padding-top: 4.16vw;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            padding: 1.04vw 0;
            display: flex;
            border-color: transparent;

            .column {
                p {
                    color: #52B68B;
                    line-height: 2;
                    font-family: "lenzing";
                    font-size: 2.8rem;
                    position: relative;
                    color: #52B68B;
                    font-family: "circular-bold";
                    line-height: normal;

                    @media screen and (min-width: 930px) {
                        font-size: calc(28px + 28 * ((100vw - 930px) / 990));
                    }
                }

                &:nth-last-of-type(1) {
                    p {
                        color: #333;
                        display: inline-block;

                        &::after {
                            pointer-events: none;
                            content: "";
                            height: 0.15vw;
                            background: #5CAC81;
                            width: 100%;
                            left: 0;
                            bottom: -0.5vw;
                            position: absolute;
                            border-radius: 5.2vw;
                        }
                    }
                }
            }
        }
    }
}
</style>