<template>
    <div class="golds-engage">
        <div class="container">
            <div class="top">
                <title-and-image title="offset"
                    img="https://www.tencel.com/images/assets/various/header_line_green2.svg" />
                <p>While continuously reducing carbon emissions across the lifecycle of our TENCEL™ fibers, we take
                    responsibility for any residual emissions by supporting verified carbon reduction projects. These
                    global carbon reduction projects are an immediate response to ensure that an equivalent amount of
                    carbon is absorbed or avoided elsewhere. </p>
                <p>TENCEL™ is supporting verified carbon offset projects specifically in communities impacted by the
                    textile industry. These projects are focused on helping ill-prepared communities become more
                    climate-resilient and on introducing new sources of renewable energy, including:</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import TitleAndImage from './title-and-image.vue';
</script>
<style lang="less" scoped>
.golds-engage {
    margin-top: 6.5rem;
    padding: 0 10rem;

    .container {
        .top {
            &>p {
                margin: 2rem 0;
                max-width: 70%;
                line-height: 30px;

                @media screen and (min-width: 930px) {
                    font-size: calc(18px + 2 * ((100vw - 930px)/990));
                }
            }
        }
    }
}
</style>