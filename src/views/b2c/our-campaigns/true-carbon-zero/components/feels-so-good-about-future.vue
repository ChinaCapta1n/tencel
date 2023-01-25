<template>
    <div class="feels-so-good-about-future">
        <div class="container">
            <h2 class="title">
                feel good about a future
                <br>
                that's true carbon zero
            </h2>
            <p class="desc">
                By reducing carbon emissions and using renewable energy during production, TENCEL™ goes beyond carbon
                offsetting to lower its carbon footprint, offering TENCEL™ fibers certified as carbon neutral.
            </p>
            <div class="two-images">
                <dov class="first">
                    <h3>committed to</h3>
                    <img src="https://www.tencel.com/images/assets/various/tencel-is-committed-to-science-based-targets.png"
                        alt="">
                </dov>
                <dov class="second">
                    <h3>certified as</h3>
                    <img src="https://www.tencel.com/images/assets/various/carbon-zero-tencel-fiber-is-certified-by-climate-neutral.png"
                        alt="">
                </dov>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.feels-so-good-about-future {
    margin: 48px auto 0;
    padding: 0 100px;
    max-width: 980px;
    text-align: center;

    .container {
        .title {
            margin-top: 0;
            margin-bottom: 32px;
            font-family: circular-bold;
            font-size: 45px;
            line-height: 54px;
        }

        .desc {
            margin-top: 0;
            line-height: 30px;
            margin-bottom: 3em;

            @media screen and (min-width: 930px) {
                font-size: calc(18px + 2 * ((100vw - 930px)/990));
            }
        }

        .two-images {
            display: flex;
            justify-content: space-between;
            max-width: 50rem;
            margin: 0 auto;
            margin-top: 32px;
            vertical-align: top;

            .first,
            .second {
                &>h3 {
                    margin-top: 0;
                    margin-bottom: 32px;
                    width: 100%;
                    font-family: circular-bold;
                    text-align: left;

                    @media screen and (min-width: 930px) {
                        font-size: calc(18px + 2 * ((100vw - 930px)/990));
                    }
                }
            }

            img {
                max-width: 200px
            }
        }
    }
}
</style>