<template>
    <div class="box">
        <p class="newsletter">newsletter</p>
        <h2 class="about-tencel">get the latest news about TENCEL™</h2>
        <div class="newsletter-input">
            <input type="text" placeholder="Hello@email.com" />
            <img class="arrow-right-white" src="/images/footer-icons/arrow-right-white.svg" alt="">
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.box {
    color: #fff;
    padding-left: 10rem;
    width: 100%;

    .newsletter {
        font-size: 1.4rem;
        text-transform: lowercase;
        font-family: circular-book;
        margin-bottom: 1rem;
    }

    .about-tencel {
        font-size: 2.8rem;
        font-family: circular-bold;
        width: 70%;
        margin-bottom: 3rem;
    }

    .newsletter-input {
        position: relative;
        max-width: 41.9rem;
        width: 90%;

        .arrow-right-white {
            position: absolute;
            top: 50%;
            right: 3rem;
            transform: translateY(-50%);
            width: 2rem;
            height: 1.5rem;
            cursor: pointer;
        }

        input {
            width: 100%;
            height: 7.4rem;
            border-radius: 10rem;
            padding: 2rem 0 2rem 3.5rem;
            background-color: #39926b;
            color: #fff;
            font-size: 1.8rem;
            font-family: circular-book;

            &::-webkit-input-placeholder {
                /*WebKit browsers*/
                color: RGB(127, 185, 159);
                font-size: 2rem;
            }

            &::-moz-input-placeholder {
                /*Mozilla Firefox*/
                color: RGB(127, 185, 159);
                font-size: 2rem;
            }

            &::-ms-input-placeholder {
                /*Internet Explorer*/
                color: RGB(127, 185, 159);
                font-size: 2rem;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .newsletter-input {
            width: 100% !important;
            max-width: 100% !important;
        }
    }
}
</style>