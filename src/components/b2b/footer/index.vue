<template>
    <footer class="b2b-footer" id="b2b-footer">
        <div class="top">
            <div class="left">
                <div class="box">
                    <h2>get connected with us</h2>
                    <contact-us>contact us</contact-us>
                </div>
            </div>
            <div class="right">
                <get-the-latest-newsletter></get-the-latest-newsletter>
            </div>
        </div>
        <div class="bottom"></div>

        <footer-icons></footer-icons>
    </footer>
</template>
<script setup>
import GetTheLatestNewsletter from '../../commons/footer/get-the-latest-newsletter.vue';
import FooterIcons from '../../commons/footer/footer-icons.vue';
import ContactUs from '../../commons/visit-button/index.vue';
</script>
<style lang="less" scoped>
.b2b-footer {
    background-color: #f2f2f2;

    .top {
        position: relative;
        height: 23.8vw;
        background-color: #f3f3f3;
        background-image: url(/images/b2b/footer/1.jpg);
        background-position: left;
        background-size: 71%;
        background-repeat: no-repeat;

        .left {
            width: 100%;
            height: 100%;
            top: 0;
            left: 7.8125vw;
            position: absolute;
            max-width: 1740px;

            .box {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                &>h2 {
                    margin: 0;
                    margin-bottom: 1.56vw;
                    font-family: "circular-bold";
                    font-size: 2rem;


                    @media screen and (min-width: 930px) {
                        font-size: calc(20px + 22 * ((100vw - 930px) / 990));
                    }
                }

                &>button {
                    padding-top: 0.7vw;
                    padding-bottom: 0.7vw;
                    text-align: center;
                    text-decoration: none;
                    color: #52B68B;
                    background-color: #fff;
                    font-family: "circular-bold";
                    border-style: solid;
                    border-width: 0.4vw;
                    border-color: #52B68B;
                    border-radius: 100px;
                    font-size: 1.2rem;
                    width: 25vw;

                    @media screen and (min-width: 930px) {
                        font-size: calc(12px + 16 * ((100vw - 930px) / 990));
                    }
                }
            }
        }

        .right {
            right: 0;
            top: 0;
            position: absolute;
            width: 29.6vw;
            height: 100%;
            background-color: #52B68B;

            color: #fff;
            background-color: var(--primary-color);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: left;
        }
    }
}
</style>