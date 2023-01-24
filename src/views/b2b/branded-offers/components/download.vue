<template>
    <div class="download">
        <div class="download-container">
            <ul>
                <li>
                    <img src="/images/b2b/branded-offers/general/download/TENCEL_General_EN_V1.6_Secured_17062022_thumbnail.jpg"
                        alt="">
                </li>
                <li>
                    <h2>To learn more, please see our TENCEL™ leaflet.</h2>
                </li>
                <li>
                    <a href="javascript:;">
                        download
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.download {
    height: 13.5vw;
    margin-top: 4.1vw;
    margin-bottom: 5.2vw;
    position: relative;

    .download-container {
        background-image: url(https://www.tencel.com/images/assets/downloads/brochure_bg.jpg);
        max-width: 1460px;
        width: 76vw;
        height: 13.5vw;
        top: 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 40px 0;
        box-shadow: 30px 40px 50px rgb(0 0 0 / 16%);
        margin-left: auto;
        margin-right: auto;
        left: 50%;
        background-color: #fff;
        transform: translate(-50%, -9%);
        position: absolute;

        @media screen and (min-width: 930px) {
            padding-left: 20px;
            padding-right: 20px;
        }

        &>ul {
            padding: 0 7.82%;
            margin: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;

            &>li {
                margin: 0;
                padding: 0;
                // vertical-align: middle;
                // text-align: left;

                &:nth-child(1) {
                    width: 15%;

                    img {
                        width: 100%;
                    }
                }

                &:nth-child(2) {
                    padding-left: 48px;

                    h2 {
                        color: #52b68b;
                        font-family: circular-bold;
                        margin: 0;
                        font-size: .8rem;

                        @media screen and (min-width: 580px) {
                            font-size: calc(8px + 48 * ((100vw - 580px)/1340));
                        }
                    }
                }

                &:nth-child(3) {
                    width: 20%;
                    text-align: right;

                    a {
                        font-weight: 700;
                        padding: 10px 2px;
                        background: 0 0;
                        border: none;
                        text-decoration: none;
                        cursor: pointer;
                        color: #000;
                        font-family: circular-bold;
                        font-size: 1.8rem;
                        text-transform: lowercase;
                        transition: .2s color;
                        position: relative;

                        @media screen and (min-width: 930px) {
                            font-size: calc(18px + 10 * ((100vw - 580px)/1340));
                        }

                        &::after {
                            pointer-events: none;
                            height: 3px;
                            background: #5cac81;
                            width: 100%;
                            left: 0;
                            bottom: -5px;
                            position: absolute;
                            content: '';
                            border-radius: 100px;
                        }
                    }
                }
            }
        }
    }
}
</style>