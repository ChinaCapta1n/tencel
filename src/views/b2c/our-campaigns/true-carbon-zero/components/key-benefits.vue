<template>
    <div class="key-benefits">
        <div class="container">
            <h2>key benefits of carbon-zero TENCEL™ fibers</h2>
            <p>Within the context of True Carbon Zero, we extend our fiber portfolio to new levels of sustainability
                with carbon-zero TENCEL™ fibers. We focus on three advantages where these fibers have the greatest
                distinction.</p>

            <div class="extend-cards">
                <div class="card">
                    <div class="title">
                        <span>carbon neutral</span>
                    </div>
                    <div class="content"></div>
                </div>
            </div>
            <div class="extend-cards">
                <div class="card">
                    <div class="title">
                        <span>engaging suppliers</span>
                    </div>
                    <div class="content"></div>
                </div>
            </div>
            <div class="extend-cards">
                <div class="card">
                    <div class="title">
                        <span>Science Based Targets commitment</span>
                    </div>
                    <div class="content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.key-benefits {
    margin-top: 42px;
    padding: 0 100px;

    .container {
        &>h2 {
            font-family: circular-bold;
            font-size: calc(39px + 6 * (100vw - 930px)/ 990);
            margin: 1em 0;
        }

        &>p {
            line-height: 30px;
            margin: 1em 0;
            font-size: 1.8rem;

            @media screen and (min-width: 930px) {
                font-size: calc(18px + 2 * ((100vw - 930px)/ 990));
            }
        }

        .extend-cards {
            border-top: 1px solid #CCC;

            &:nth-last-child(1) {
                border-bottom: 1px solid #ccc;
            }

            .card {

                .title {
                    position: relative;
                    padding: 40px 0;
                    font-family: circular-book;
                    font-size: calc(35px + 6 * (100vw - 930px)/ 990);
                    color: #52B68B;
                    transition: all .3s;
                    cursor: pointer;

                    &::after {
                        position: absolute;
                        top: 50%;
                        right: 20px;
                        display: inline-block;
                        width: 4em;
                        height: 4em;
                        font-size: 4px;
                        border-top: 5px solid #52B68B;
                        border-left: 5px solid #52B68B;
                        transform: translateY(-50%) rotate(-135deg);
                        transition: all .3s;
                        content: "";
                    }

                    &>span {
                        display: inline-block;
                        width: calc(100% - 30px);
                        position: relative;
                        font-family: circular-book;
                        font-size: calc(35px + 6 * (100vw - 930px)/ 990);
                        color: #52B68B;
                        transition: all .3s;
                        cursor: pointer;
                    }
                }

                .content {
                    display: none;
                    padding-bottom: 6rem;
                }
            }
        }
    }
}
</style>