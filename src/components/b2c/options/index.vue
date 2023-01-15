<template>
    <div class="options">
        <ul class="options-wrapper" ref="optionsWrapper">
            <li class="animate__animated animate__bounceIn"><a href="javascript:;">
                    <div class="image-box">
                        <img src="/images/aside/icon-email.svg" alt="" />
                    </div>
                    <div class="text-wrapper">
                        <p>Newsletter Subscription</p>
                    </div>
                </a></li>
            <li class="animate__animated animate__bounceIn"><a href="javascript:;">
                    <div class="image-box">
                        <img src="/images/aside/icon-facebook.svg" alt="" />
                    </div>
                    <div class="text-wrapper">
                        <p>Facebook</p>
                    </div>
                </a></li>
            <li class="animate__animated animate__bounceIn"><a href="javascript:;">
                    <div class="image-box">
                        <img src="/images/aside/sticky_ig.svg" alt="" />
                    </div>
                    <div class="text-wrapper">
                        <p>Instagram</p>
                    </div>
                </a></li>
        </ul>
        <div class="options-dropdown">
            <div class="dots" ref="dots" @click="showCloseOrDotsFn">
                <span class="close"></span><span class="close"></span><span class="dot"></span><span
                    class="dot"></span><span class="dot"></span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const dots = ref(null);
const optionsWrapper = ref(null);
const timer = ref(null);

const showCloseOrDotsFn = () => {
    if (dots.value.classList.contains('show-dot')) {
        clearTimeout(timer.value);
        dots.value.classList.remove('show-dot');
        Array.from(optionsWrapper.value.children).forEach(item => {
            item.classList.add('animate__bounceOut');
        })
        timer.value = setTimeout(() => {
            optionsWrapper.value.classList.remove('show');
        }, 750)
    } else {
        Array.from(optionsWrapper.value.children).forEach(item => {
            item.classList.remove('animate__bounceOut');
        })
        dots.value.classList.add('show-dot');
        optionsWrapper.value.classList.add('show');
    }

}
</script>
<style lang="less" scoped>
.options {
    position: absolute;
    bottom: 8.2rem;

    .options-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        display: none;

        &.show {
            display: block;
        }

        li {
            border-radius: 10rem;
            height: 5rem;
            text-align: right;
            cursor: pointer;
            margin-bottom: 2rem;
            user-select: none;

            &:nth-of-type(1):hover {
                a {
                    max-width: 240px;
                    width: 240px;
                }
            }

            &:nth-of-type(2):hover {
                a {
                    max-width: 150px;
                    width: 150px;
                }
            }

            &:nth-of-type(3):hover {
                a {
                    max-width: 150px;
                    width: 150px;
                }
            }

            a {
                position: absolute;
                right: 0;
                min-width: 5rem;
                max-height: 5rem;
                background-color: #fff;
                box-shadow: 3px 3px 15px #3b8f6b;
                transition: .3s all;
                border-radius: 100px;
                height: 5rem;
                text-align: right;
                cursor: pointer;
                max-width: 50px;
                width: 50px;
                overflow: hidden;



                .text-wrapper {
                    display: inline-block;
                    width: auto;
                    margin-left: 55px;
                    margin-right: 0;
                    transition: .3s all;

                    p {
                        display: inline-block;
                        padding-top: 6px;
                        transition: all .3s;
                        font-family: circular-book;
                        font-size: 14px;
                        margin-top: 9px;
                        margin-right: 30px;
                        white-space: nowrap;
                        right: 0;
                        color: #52b68b;
                    }
                }

                .image-box {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translate(0, -50%);
                    width: 50px;
                    height: 50px;
                    border-radius: 25px;
                    background-color: #fff;

                    img {
                        position: absolute;
                        top: 50%;
                        right: 12px;
                        transform: translate(0, -50%);
                        width: 25px;
                        height: 25px;
                        background-attachment: #fff;
                        z-index: 99;
                    }
                }
            }
        }
    }
}

.options-dropdown {
    position: relative;

    &:hover {
        .dots {
            background: #fff;
            color: #52b68b;

            span {
                background-color: var(--primary-color);
            }
        }
    }

    .dots {
        position: relative;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        background: #52b68b;
        color: #fff;
        padding: 5px 15px 15px;
        font-weight: 700;
        text-align: center;
        font-size: 25px;
        box-shadow: 3px 3px 15px #3b8f6b;
        cursor: pointer;

        &.show-dot {
            background-color: #fff;

            .close {
                display: block;
                z-index: 99999999999;
                width: 20px;
                height: 1px;
                position: absolute;
                border-radius: 3px;
                background: #52b68b;
                bottom: 24px;
                left: 15px;

                &:nth-child(1) {
                    transform: rotate(-45deg);
                }

                &:nth-child(2) {
                    transform: rotate(45deg);
                }
            }

            .dot {
                display: none;
            }
        }

        .dot {
            display: block;
            position: absolute;
            width: .5rem;
            height: .5rem;
            border-radius: 10rem;
            background-color: #fff;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &:nth-child(3) {
                left: 1.4rem;
            }

            &:nth-child(5) {
                left: 3.6rem;
            }
        }

        .close {
            display: block;
        }

    }
}
</style>