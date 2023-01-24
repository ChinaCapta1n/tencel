<template>
    <div class="key-benefits">
        <div class="inner">
            <h2>key benefits</h2>
            <div class="boxes">
                <div class="box">
                    <img src="/images/b2b/branded-offers/general/key-benefits/1.png" alt="">
                    <h3>Matte (TENCEL™ Lyocell fibers)</h3>
                    <p>
                        Both indigo-colored dye and lyocell bers have a natural shine. LENZING™ Lyocell Matte bers
                        are specially designed for applications to scatter light and diminish unwanted glare, and
                        can therefore be used in place of standard lyocell bers to reduce the shine of conventional
                        indigo-dyed denim applications made with lyocell bers. Versatility of indigo-dyed denim
                        fabrics is achieved with LENZING Lyocell
                        Matte bers.
                    </p>
                </div>
                <div class="box">
                    <img src="/images/b2b/branded-offers/general/key-benefits/2.png" alt="">
                    <h3>botanic origin</h3>
                    <p>
                        TENCEL™ Lyocell fibers are derived from sustainable wood sources, harvested from certified
                        and controlled sources following the stringent guidelines of the Lenzing Wood and Pulp
                        Policy.*
                    </p>
                    <p>
                        TENCEL™ Modal fibers are mainly manufactured from beech wood, sourced from sustainable
                        forests in Austria and neighboring countries. Beech wood forests are a natural and renewable
                        source of raw material. A big share of the wood used at the Lenzing site comes from Austria,
                        harvested from certified and controlled sources following the stringent guidelines of the
                        Lenzing Wood and Pulp Policy.*
                    </p>
                    <p>
                        Moreover, wood and pulp used by the Lenzing Group comes from sustainably managed forests.
                        TENCEL™ Lyocell and Modal fibers have earned United States Department of Agriculture (USDA)
                        BioPreferred® designation.
                    </p>
                    <p>
                        *These fibers are available with FSC® (FSC-C041246) or PEFC™ (PEFC/ 06-33-92) certification
                        upon request.
                    </p>
                </div>
                <div class="box">
                    <img src="/images/b2b/branded-offers/general/key-benefits/3.png" alt="">
                    <h3>long-lasting softness (TENCEL™ Modal fibers)</h3>
                    <p>
                        TENCEL™ Modal fibers exhibit a smooth surface and high flexibility, resulting in a naturally
                        soft quality of the textile. The softness of TENCEL™ Modal fibers is confirmed by a variety
                        of physical test methods, including Kawabata, TSA, Handle-o-meter, and Phabro-meter:
                    </p>
                    <p>
                        - Measurements and hand evaluations of softness show that fabrics made with TENCEL™ Modal
                        fibers are twice as soft as cotton fabrics.
                    </p>
                    <p>
                        - The softness of TENCEL™ Modal fibers lasts longer and is able to withstand repeated wash
                        and dry cycles compared to cotton.
                    </p>
                    <p>
                        - LENZING™ Modal Micro Air fibers are Lenzing’s finest and lightest wood-based fiber.
                    </p>
                    <p>
                        - The degrees of softness of LENZING™ Modal, LENZING™ Modal Micro and LENZING™ Modal Micro
                        Air can be measured by handfeel assessment as well as various physical test methods such as
                        the Tissue Softness Analyzer, Phabro-meter and Ring pull-through.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.key-benefits {
    border-top: 2px solid #f1f1f1;
    padding-top: 4.42vw;

    .inner {
        margin: auto;
        max-width: 1580px;
        width: 82.2vw;

        &>h2 {
            margin-top: 0;
            color: #52B68B;
            font-family: "circular-bold";
            font-size: 3.6rem;
            margin-bottom: 1em;

            @media screen and (min-width: 930px) {
                font-size: calc(36px + 20 * ((100vw - 930px) / 990));
            }
        }

        .boxes {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .box {
                width: 23.9vw;
                max-width: 460px;
                margin-bottom: 2.08vw;

                &:nth-child(3) {
                    margin-right: 0;
                }

                &>h3 {
                    font-size: 1.8rem;
                    color: #52B68B;
                    font-family: "circular-bold";
                    margin-top: 1em;
                    margin-bottom: 1em;

                    @media screen and (min-width: 930px) {
                        font-size: calc(18px + 10 * ((100vw - 930px) / 990));
                    }
                }

                &>p {
                    color: #333;
                    font-family: "lenzing";
                    font-size: 1.4rem;
                    margin-bottom: 1.5em;

                    @media screen and (min-width: 930px) {
                        font-size: calc(14px + 4 * ((100vw - 930px) / 990));
                    }
                }
            }
        }
    }
}
</style>