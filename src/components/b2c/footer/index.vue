<template>
    <footer class="footer" id="footer">
        <div class="left">
            <div class="link">
                <div class="regular">
                    <div class="regular-wrapper">
                        <ul class="regular-link-1">
                            <li><a href="javascript:;">General</a></li>
                            <li><a href="javascript:;">Denim</a></li>
                            <li><a href="javascript:;">Intimate</a></li>
                            <li><a href="javascript:;">Active</a></li>
                        </ul>
                        <ul class="regular-link-2">
                            <li><a href="javascript:;">Home</a></li>
                            <li><a href="javascript:;">Luxe</a></li>
                            <li><a href="javascript:;">Footwear</a></li>
                        </ul>
                    </div>
                    
                    <ul class="special-link">
                        <li><a href="javascript:;">REFIBRA™</a></li>
                        <li><a href="javascript:;">where to buy</a></li>
                        <li><a href="javascript:;">about TENCEL™</a></li>
                        <li><a href="javascript:;">sustainability</a></li>
                        <li><a href="javascript:;">news & events</a></li>
                    </ul>
                </div>
                <footer-icons />
            </div>
            <div class="contact-us">
                <div class="contact-us-left">
                    <div class="dropdown-select">
                        Austria
                    </div>
                </div>
                <div class="contact-us-middle">
                    <p>Lenzing Aktiengesellschaft</p>
                    <p>Werkstraße 2, 4860 Lenzing, Austria</p>
                </div>
                <div class="contact-us-right">
                    <p>T: +43 7672 701 0</p>
                    <p>F: +43 7672 701 3880</p>
                    <p>E: office@lenzing.com</p>
                </div>
            </div>
            <div class="copyright">
                <p class="copyright-text">Copyright 2022 TENCEL™</p>
                <ul class="copyright-links">
                    <li><a href="javascript:;">Data Policy</a></li>
                    <li><a href="javascript:;">Terms of Use</a></li>
                    <li><a href="javascript:;">GTC</a></li>
                    <li><a href="javascript:;">Imprint</a></li>
                </ul>
            </div>
        </div>
        <div class="right">
            <get-the-latest-newsletter />
        </div>
    </footer>
</template>

<script setup>
import GetTheLatestNewsletter from '../../commons/footer/get-the-latest-newsletter.vue';
import FooterIcons from '../../commons/footer/footer-icons.vue';


</script>

<style lang="less" scoped>
.footer {
    background-color: #fff;
    display: flex;

    .left {
        width: 70.5%;
        display: flex;
        flex-direction: column;

        .contact-us,
        .copyright,
        .link {
            border-bottom: 1px solid #ddd;
            width: 90%;
            margin-left: 10%;
            padding-right: 5.9%;
        }

        .link {
            padding-top: 10rem;
            padding-bottom: 5rem;
        }

        .contact-us {
            margin-top: 5rem;
            padding-bottom: 5rem;
            display: flex;

            .contact-us-left {
                width: 15%;
            }

            .contact-us-middle {
                width: 26.25%;
                padding-top: 3rem;
                padding-right: 3rem;
            }

            .contact-us-right {
                width: 26.25%;
                padding-top: 3rem;
            }
        }

        .copyright {
            padding-top: 3rem;
            padding-bottom: 3rem;
            display: flex;
            align-items: center;
            color: #b1b1b1;

            .copyright-text {
                width: 30%;
                font-size: 1.3rem;
            }

            .copyright-links {
                display: flex;
                width: 70%;
                margin: 1.95rem;
                padding-left: 4rem;
                justify-content: flex-end;

                li {
                    margin-right: 8%;
                }
            }
        }

        .special-link {
            li {
                color: var(--primary-color);
            }
        }

        .link {
            display: flex;
            .regular-link-1,
            .regular-link-2,
            .special-link {
                font-weight: 700;
                font-family: circular-bold;
                color: #333;
                font-size: 1.6rem;

                li {
                    padding: .6rem 0;
                }
            }

            .regular {
                display: flex;
                width: 100%;
                .regular-wrapper {
                    display: flex;
                    width: 50%;
                    .regular-link-1, .regular-link-2 {
                        width: 100%;
                    }
                }

                .regular-link-1 {
                    width: 15%;
                }

                .regular-link-2 {
                    width: 100% !important;
                }
            }

            .footer-icons {
                width: 45%;
                display: flex;
                flex-wrap: wrap;

                @media screen and (min-width: 801px) {
                    min-width: 180px;
                }
            }
        }
    }

    .right {
        width: 29.5%;
        color: #fff;
        background-color: var(--primary-color);
        background-image: url(/images/footer-icons/footer_newsletter.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        .left, .right {
            width: 100%;
        }

        .left {
            flex-direction: column;

            .link {
                flex-direction: column-reverse;
                margin-left: 0;
                width: 100%;
                padding: 20px 40px;
                .regular {
                    width: 100%;
                    .regular-wrapper {
                        flex-direction: column;
                    }
                    .regular-wrapper, .special-link {
                        width: 50% !important;
                    }
                }
            }

            .contact-us {
                padding: 20px 40px;
                margin-bottom: 20px;
                margin-left: 0;
                width: 100%;
                flex-direction: column;
            }

            .copyright {
                padding: 0 40px;
                margin-left: 0;
                flex-direction: column-reverse;
                align-items: flex-start;

                .copyright-links {
                    margin-left: 0;
                    padding-left: 0;
                    justify-content: flex-start;
                }

                .copyright-text {
                    margin-bottom: 1.95rem;
                }
            }
        }
        
        .right {
            padding: 30px 0 40px;

            .box {
                width: 100%;
                padding: 0 20px;
            }
        }
    }

    @media screen and (max-width: 1400px) {
        .right {
            padding-left: 30px;
            text-align: left;
            .box {
                padding-left: 0;
            }
        }
    }
}
</style>
