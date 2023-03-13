<template>
    <ul class="footer-icons">
        <li><a href="javascript:;">
                <img @mouseenter="footerIconAnimationFn" src="/images/footer-icons/social_linkedin.png" alt="">
            </a></li>
        <li><a href="javascript:;">
                <img @mouseenter="footerIconAnimationFn" src="/images/footer-icons/social_facebook.png" alt="">
            </a></li>
        <li><a href="javascript:;">
                <img @mouseenter="footerIconAnimationFn" src="/images/footer-icons/social_youtube.png" alt="">
            </a></li>
        <li><a href="javascript:;">
                <img @mouseenter="footerIconAnimationFn" src="/images/footer-icons/social_instagram.png" alt="">
            </a></li>
        <li><a href="javascript:;">
                <img @mouseenter="footerIconAnimationFn" src="/images/footer-icons/icon-pinterest.jpg" alt="">
            </a></li>
    </ul>
</template>
<script setup>
import { ref } from 'vue';

const timer = ref(null);
const footerIconAnimationFn = (event) => {
    if (event.srcElement.classList.contains('scale')) {
        event.srcElement.classList.remove('scale');
    } else {
        event.srcElement.classList.add('scale');
        timer.value = setTimeout(() => {
            event.srcElement.classList.remove('scale');
        }, 500)
    }

}
</script>
<style lang="less" scoped>
.footer-icons {
    padding-right: .5rem;
    display: flex;
    justify-content: flex-end;

    li {
        a {
            display: block;
            margin-bottom: 1rem;
            margin-left: 2rem;
            width: 6rem;
            height: 6rem;

            img {
                transform: scale(1);
                transition: transform .5s linear;

                &.scale {
                    animation: scaleAnimation 0.5s linear;
                }
            }

            @keyframes scaleAnimation {
                0% {
                    transform: scale(1);
                }

                50% {
                    transform: scale(1.2);
                }

                100% {
                    transform: scale(1);
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        width: 100% !important;
        justify-content: center;
        padding: 1rem 0;
    }
}
</style>