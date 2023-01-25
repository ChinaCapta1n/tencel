<template>
    <div class="golds-engage">
        <div class="container">
            <title-and-image title="engage" img="https://www.tencel.com/images/assets/various/header_line_blue2.svg" />
            <p>As the first cellulosic fiber producer committed to the Science Based Targets initiative, we are leaders
                steering our industry to change by normalizing data transparency and working exclusively with brands
                that echo our values – implementing carbon neutral practices from cradle to cradle. Our pioneering
                partnership with TextileGenesis™ ensures digital traceability of TENCEL™ fibers and unmatched
                transparency from fiber to finished garment.</p>
            <div class="partners">
                <h2>ingredients brand partners</h2>
                <a href="javascript:;">
                    <img src="https://www.tencel.com/images/assets/various/TENCEL_carbon-neutral_desktop_website_TextileGenesis_200x100.png"
                        alt="" />
                </a>
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
        &>p {
            margin: 2rem 0;
            max-width: 70%;
            line-height: 30px;

            @media screen and (min-width: 930px) {
                font-size: calc(18px + 2 * ((100vw - 930px)/990));
            }
        }

        .partners {
            margin-top: 3rem;

            &>h2 {
                margin-top: 0;
                margin-bottom: 32px;
                width: 100%;
                font-family: circular-bold;
                text-align: left;
            }

            &>a {
                display: block;
                width: 16.6666666667%;
                margin-bottom: 25px;
                width: 150px;
                height: 100px;
            }
        }
    }
}
</style>