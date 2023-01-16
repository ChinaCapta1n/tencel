<template>
    <li class="tencel-for-business">
        <a href="javascript:;" class="left-business">
            TENCEL™ for business
        </a>
        <a href="javascript:;" class="right-business">
            TENCEL™ for business
        </a>
    </li>
</template>
<script setup></script>
<style lang="less" scoped>
.tencel-for-business {
    max-width: 240px;
    max-height: 60px;
    min-width: 180px;
    width: 12.5vw;
    height: 3.125vw;
    background-color: #fff;
    border-radius: 10rem;
    border: 1px solid var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    z-index: 9999;
    line-height: 2.1;

    font-size: 1.1rem;

    padding-top: 0 !important;



    &:hover {
        .left-business {
            left: 0;
        }

        .right-business {
            transform: translateX(100%);
        }
    }

    .left-business {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        transition: all .3s;
        color: #fff;
        background-color: var(--primary-color);
    }

    .right-business {
        transition: all .3s;
    }


    a {
        color: var(--primary-color);
        font-weight: 400;
        font-family: circular-book;
        display: block;
        height: 100%;
        padding: 1.2rem;
        text-align: center;
        font-size: 1.5rem;
        letter-spacing: 1px;
        text-shadow: rgba(255, 255, 255, .3);

        @media screen and (min-width: 930px) {
            font-size: calc(11px + 5 * ((100vw - 930px) / 990));
        }
    }
}
</style>