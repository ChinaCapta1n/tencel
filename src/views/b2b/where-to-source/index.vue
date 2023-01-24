<template>
    <div class="where-to-source">
        <div class="banner">
            <h2>where to source</h2>
        </div>
        <div class="how-can-i-help-you">
            <div class="inner">
                <h2>How can we help you?</h2>
                <p>Let us know what you are looking for and we’ll send your request to the applicable department.</p>
            </div>

            <div class="tasks">
                <div class="left">
                    <p class="active">First of all, are you a...</p>
                    <p>What segment are you looking for?</p>
                    <p>What type of fibers are you looking for?</p>
                    <p>Where are you sourcing from?</p>
                    <p>Finally, tell us a bit about you.</p>
                    <div class="process">
                        <div class="wrap">
                            <div class="bar"></div>
                            <p>
                                <span class="step">1</span>
                                <span class="of">of</span>
                                <span class="steps">5</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="inner">
                        <div class="selections">
                            <div class="selection-box">
                                <span class="active">brand owner</span>
                                <span>designer</span>
                                <span>sourcing professional</span>
                                <span>student</span>
                                <span>other</span>
                            </div>
                        </div>
                        <div class="controller">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="case-studies">
            <h2>case studies</h2>
            <div class="boxes">
                <div class="box">
                    <a href="javascript:;">
                        <img src="https://www.tencel.com/images/assets/news-images/header_konzernteaser_fasern.jpg"
                            alt="">
                        <div class="mask"></div>
                        <div class="desc">
                            Delta Galil and Lenzing fibers are giving cotton scraps a new life
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="javascript:;">
                        <img src="https://www.tencel.com/images/assets/news-images/header_konzernteaser_fasern.jpg"
                            alt="">
                        <div class="mask"></div>
                        <div class="desc">
                            Delta Galil and Lenzing fibers are giving cotton scraps a new life
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="javascript:;">
                        <img src="https://www.tencel.com/images/assets/news-images/header_konzernteaser_fasern.jpg"
                            alt="">
                        <div class="mask"></div>
                        <div class="desc">
                            Delta Galil and Lenzing fibers are giving cotton scraps a new life
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="javascript:;">
                        <img src="https://www.tencel.com/images/assets/news-images/header_konzernteaser_fasern.jpg"
                            alt="">
                        <div class="mask"></div>
                        <div class="desc">
                            Delta Galil and Lenzing fibers are giving cotton scraps a new life
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="javascript:;">
                        <img src="https://www.tencel.com/images/assets/news-images/header_konzernteaser_fasern.jpg"
                            alt="">
                        <div class="mask"></div>
                        <div class="desc">
                            Delta Galil and Lenzing fibers are giving cotton scraps a new life
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="javascript:;">
                        <img src="https://www.tencel.com/images/assets/news-images/header_konzernteaser_fasern.jpg"
                            alt="">
                        <div class="mask"></div>
                        <div class="desc">
                            Delta Galil and Lenzing fibers are giving cotton scraps a new life
                        </div>
                    </a>
                </div>
            </div>

            <div class="pagination">
                <a href="javascript:;">1</a>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.where-to-source {
    .banner {
        min-height: auto;
        margin-bottom: 0;
        padding-bottom: 2.91vw;
        background-color: #EEEFE9;
        padding-top: 2.91vw;
        padding-left: 4.16vw;
        padding-right: 4.16vw;

        &>h2 {
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
    }

    .how-can-i-help-you {
        padding-top: 4.16vw;
        padding-left: 4.16vw;
        padding-right: 4.16vw;
        overflow: hidden;

        &>.inner {
            color: #303030;
            margin-bottom: 3.8vw;
            padding-left: 8.125vw;

            &>h2 {
                margin: 0 0 1vw;
                font-family: "circular-bold";
                font-size: calc(36px + 20 * ((100vw - 930px) / 990));
                color: #52B68B;
            }

            &>p {
                font-family: "circular-book";
            }
        }

        .tasks {
            display: flex;
            min-height: 41.5vw;

            .left,
            .right {
                padding-left: 4.16vw;
                padding-right: 4.16vw;
                position: relative;
            }

            .left {
                width: 30%;
                padding-top: 6.5vw;
                padding-bottom: 3.125vw;
                color: #fff;
                background: #52B68B;
                font-weight: bold;

                &>p {
                    font-size: calc(36px + 20 * ((100vw - 930px) / 990));
                    display: none;

                    &.active {
                        display: block;
                    }
                }

                .process {
                    position: absolute;
                    left: 0;
                    bottom: 30px;
                    width: 100%;

                    .wrap {
                        padding-left: 4.16vw;
                        padding-right: 4.16vw;
                        text-transform: uppercase;
                        font-size: calc(16px + 12 * ((100vw - 930px) / 990));

                        .bar {
                            position: relative;
                            margin-bottom: 1.4vw;
                            width: 100%;
                            height: 5px;
                            background: #46AA7F;
                        }

                        &>p {

                            span {
                                display: inline-block;
                                text-transform: uppercase;
                                font-size: calc(16px + 12 * ((100vw - 930px) / 990));
                            }
                        }
                    }
                }
            }

            .right {
                width: 70%;
                padding-top: 6.5vw;
                padding-bottom: 6.04vw;
                background: #F6F6F6;
                overflow: hidden;

                .inner {
                    .selections {
                        display: flex;

                        @media screen and (max-width: 1024px) {
                            min-height: 35vw;
                        }

                        .selection-box {
                            width: 100%;
                            height: 100%;
                            flex-shrink: 0;

                            span {
                                display: inline-block;
                                margin-right: 12px;
                                margin-bottom: 20px;
                                padding: 25px 30px;
                                border-radius: 12px;
                                vertical-align: middle;
                                transition: all 0.5s;
                                background: #52B68B;
                                font-size: calc(22px + 20 * ((100vw - 930px) / 990));
                                color: #000;
                                background: #ECECEC;
                                font-family: "circular-bold";

                                @media screen and (max-width: 1024px) {
                                    font-size: 2.4rem;
                                }

                                &.active {
                                    background-color: #52B68B;
                                    color: #fff;
                                }

                                &::before {
                                    display: inline-block;
                                    width: 30px;
                                    height: 30px;
                                    margin-right: 18px;
                                    border-radius: 50%;
                                    background: #DEDEDE;
                                    vertical-align: middle;
                                    transition: all 0.5s;
                                    content: "";
                                }

                                &.active::before {
                                    background: #46AA7F;
                                }
                            }
                        }
                    }
                }
            }
        }


    }
}



.case-studies {
    padding-top: 5.2vw;
    padding-left: 11.285vw;
    padding-right: 11.285vw;
    overflow: hidden;

    &>h2 {
        margin-bottom: 3.8vw;
        font-family: "circular-bold";
        font-size: calc(36px + 20 * ((100vw - 930px) / 990));
        color: #52B68B;
    }

    .boxes {
        display: flex;
        flex-wrap: wrap;

        .box {
            position: relative;
            width: 31%;
            margin-left: 1%;
            margin-right: 1%;
            margin-bottom: 2vw;
            padding-top: 23.8%;
            background: #ECECEC;
            overflow: hidden;

            a {
                &>img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%, -50%);
                }

                &>.mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transition: all 0.5s;
                }

                &:hover .mask {
                    background: rgba(82, 182, 139, 0.5);
                    opacity: 1;
                }

                .desc {
                    position: absolute;
                    bottom: 25%;
                    left: 30px;
                    width: 85%;
                    color: #fff;
                    font-family: "circular-book";
                    font-size: calc(16px + 12 * ((100vw - 930px) / 990));
                }
            }
        }
    }

    .pagination {
        text-align: center;
        padding-top: 1.5vw;
        padding-bottom: 7.8vw;

        &>a {
            display: inline-block;
            width: 76px;
            height: 76px;
            margin-right: 0.52vw;
            border-radius: 50%;
            line-height: 76px;
            vertical-align: middle;
            text-decoration: none;
            font-family: "circular-bold";
            font-size: calc(16px + 2 * ((100vw - 930px)/ 990));
            color: #52B68B;
            background: #F3F3F3;
        }
    }
}
</style>