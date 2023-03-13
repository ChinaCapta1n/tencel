<template>
    <div class="instagram-section">
        <div class="container">
            <h2 class="title">@TENCEL_Global</h2>
            <div class="photos">
                <div class="row">
                    <div class="box">
                        <a href="javascript:;">
                            <img src="/images/instagram/home/1.jpg" alt="" />
                        </a>
                    </div>
                    <div class="box">
                        <a href="javascript:;">
                            <img src="/images/instagram/home/2.jpg" alt="" />
                        </a>
                    </div>
                    <div class="box">
                        <a href="javascript:;">
                            <img src="/images/instagram/home/3.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="box">
                        <a href="javascript:;">
                            <img src="/images/instagram/home/4.jpg" alt="" />
                        </a>
                    </div>
                    <div class="box">
                        <a href="javascript:;">
                            <img src="/images/instagram/home/5.jpg" alt="" />
                        </a>
                    </div>
                    <div class="box">
                        <a href="javascript:;">
                            <img src="/images/instagram/home/6.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <read-more-button>more</read-more-button>
        </div>
    </div>
</template>
<script setup>
import ReadMoreButton from '../../commons/read-more/index.vue';
</script>
<style lang="less" scoped>
.instagram-section {
    background-color: #f3f3f3;
    padding-top: 10.9rem;
    padding-bottom: 5rem;
    text-align: center;

    .container {
        padding-left: 2rem;
        padding-right: 2rem;

        .title {
            color: #5cac81;
            font-size: 3rem;
            font-family: circular-bold;
            text-align: center;
            margin-bottom: 4vw;

            @media screen and (min-width: 768px) {
                font-size: calc(30px + 26 * ((100vw - 768px)/ 1152));
            }
        }

        .photos {
            .row {
                width: 94%;
                margin: 0 3%;
                display: flex;
                justify-content: space-around;

                &:nth-child(2) {
                    margin-top: 5%;
                }

                .box {
                    width: 23%;

                    a {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }

        button {
            margin-top: 2vw;
            margin-bottom: 3rem;
        }
    }

    @media screen and (max-width: 930px) {
        padding-top: 5rem;
        .container {
            .title {
                text-align: left;
            }
        }
    }
}
</style>