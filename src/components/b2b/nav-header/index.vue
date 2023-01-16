<template>
    <header class="header" id="header">
        <div class="b2b-container">
            <div class="left">
                <Logo />
            </div>
            <div class="right">
                <div class="top">
                    <ul class="links">
                        <li>
                            <a href="javascript:;">news & events</a>
                        </li>
                        <li>
                            <a href="javascript:;">contact us</a>
                        </li>
                        <li>
                            <a href="javascript:;">English</a>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <ul class="menu-lists">
                        <li><a href="javascript:;">products & technologies</a> <arrow-down /></li>
                        <li><a href="javascript:;">branded offets</a> <arrow-down /></li>
                        <li><a href="javascript:;">where to source</a> <arrow-down /></li>
                        <li><a href="javascript:;">explore TENCEL</a> <arrow-down /></li>
                        <li><a href="javascript:;">trandemark & services</a> <arrow-down /></li>
                        <tencel-for-b2b />
                        <div class="search">
                            <button class="search-btn">
                                <img src="/images/search.svg" alt="">
                            </button>
                            <input class="search-box" placeholder="type your search criteria here" type="text">
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import TencelForB2b from '../../../components/commons/tencel-for-b2b-b2c/index.vue';
import Logo from '../../commons/logo/index.vue';
import ArrowDown from '../../commons/arrow-down/index.vue';


</script>
<style lang="less" scoped>
.header {
    // background-color: #EEEFE9;
    z-index: 999;
    top: 0;
    width: 100%;
    position: fixed;
    padding-left: 4.16vw;
    padding-right: 4.16vw;
    transition: opacity 0.5s;

    @media screen and (min-width: 1920px) {
        padding-left: 80px;
        padding-right: 80px;
    }

    .b2b-container {
        max-width: 1920px;
        margin: 0 auto;
        position: relative;
        display: flex;
        align-items: center;

        .left {
            max-width: 230px;
            height: auto;
            max-height: 82px;
        }

        .right {
            flex: 1;
            display: flex;
            flex-direction: column;

            .top {
                position: relative;
                transition: all 0.5s;
                margin: auto;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                width: 100%;
                height: 2.9vw;
                max-width: 1740px;
                max-height: 55.68px;

                .links {
                    display: flex;
                    justify-content: flex-end;

                    li {
                        a {
                            font-size: 1.1rem;
                            display: flex;
                            align-items: center;
                            font-family: "circular-book";
                            margin-left: 1.04vw;
                            margin-top: 1.92vw;

                            @media screen and (min-width: 930px) {
                                font-size: calc(11px + 3 * ((100vw - 930px) / 990));
                            }
                        }
                    }
                }
            }

            .bottom {
                background: #fff;
                position: relative;
                max-width: 1740px;
                padding-top: 1.04vw;
                padding-bottom: 1.04vw;
                width: 100%;
                margin: auto;

                .menu-lists {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-left: 9.8vw;
                    min-height: 3.125vw;

                    &>li {
                        padding-top: 0.9vw;
                        margin-left: 2.08vw;

                        &:nth-child(1) {
                            margin-left: 0;
                        }

                        a {
                            font-size: 1.1rem;
                            color: #333;
                            font-family: "circular-book";

                            @media screen and (min-width: 930px) {
                                font-size: calc(11px + 7 * ((100vw - 930px) / 990));
                            }
                        }
                    }



                    .search {
                        height: 3.125vw;
                        max-height: 60px;
                        align-items: center;
                        padding-left: 1.04vw;
                        display: flex;
                        position: absolute;
                        bottom: 2rem;
                        right: -5%;

                        .search-btn {
                            img {
                                width: 2.12vw;
                                height: 1.74vw;
                                max-width: 41px;
                                max-height: 33.4px
                            }
                        }

                        .search-box {
                            width: 25vw;
                            height: 1.74vw;
                            max-width: 480px;
                            border-bottom-style: solid;
                            border-bottom-width: 0.104vw;
                            border-bottom-color: #52B68B;
                            // padding-left: 1.04vw;

                            width: 0;

                            @media screen and (min-width: 930px) {
                                font-size: calc(13px + 5 * ((100vw - 930px) / 990));
                            }

                            margin-left: 1.04vw;
                        }
                    }
                }
            }
        }
    }
}
</style>