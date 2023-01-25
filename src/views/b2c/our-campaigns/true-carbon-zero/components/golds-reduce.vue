<template>
    <div class="golds-reduce">
        <div class="container">
            <div class="text">
                <title-and-image title="reduce"
                    img="https://www.tencel.com/images/assets/various/header_line_orange2.svg" />
                <div class="desc">
                    <p>We have our sights set on net-zero emissions by 2050, so we prioritize the continuous reduction
                        of carbon emissions through efficient production, new technologies and renewable energy sources
                        to meet targets set through the Science Based Targets initiative. The resulting carbon-zero
                        TENCEL™ fibers: </p>
                    <ul>
                        <li>TENCEL™ Lyocell fibers,</li>
                        <li>TENCEL™ Modal fibers,</li>
                        <li>TENCEL™ Lyocell x Micro fibers, and</li>
                        <li>TENCEL™ Modal x Micro fibers,</li>
                    </ul>
                    <p>are certified to reduce climate impact by various global standards of sustainability.</p>
                </div>
            </div>
            <div class="charts"></div>
        </div>
    </div>
</template>
<script setup>
import TitleAndImage from './title-and-image.vue';
</script>
<style lang="less" scoped>
.golds-reduce {
    margin-top: 6.5rem;
    padding: 0 10rem;

    .container {
        display: flex;

        .text {
            flex: 1;



            .desc {
                p {
                    line-height: 30px;
                    margin: 2em 0;

                    @media screen and (min-width: 930px) {
                        font-size: calc(18px + 2 * ((100vw - 930px)/990));
                    }
                }

                ul {
                    margin: 1.2em 0;
                    margin-left: 4rem;

                    li {
                        list-style: disc;

                        @media screen and (min-width: 930px) {
                            font-size: calc(18px + 2 * ((100vw - 930px)/990));
                        }
                    }
                }
            }
        }
    }

    .charts {
        flex: 2;
    }
}
</style>