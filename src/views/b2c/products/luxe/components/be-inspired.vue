<template>
    <div class="be-inspired">
        <h2>Be inspired</h2>
        <div class="box">
            <div class="left">
                <img v-for="url in BeInspiredData" :src="url.img" alt="">
            </div>
            <div class="right">
                <h2>@tencel_luxe</h2>
                <a href="javascript:;">follow us</a>
            </div>
        </div>
        <og-button>contact us</og-button>
    </div>
</template>
<script setup>
import OgButton from '../../../../../components/commons/visit-button/index.vue';

const BeInspiredData = [
    {
        "id": 0,
        "img": "/images/products/luxe/be-inspired/1.jpg"
    },
    {
        "id": 1,
        "img": "/images/products/luxe/be-inspired/2.jpg"
    },
    {
        "id": 2,
        "img": "/images/products/luxe/be-inspired/3.jpg"
    },
    {
        "id": 3,
        "img": "/images/products/luxe/be-inspired/4.jpg"
    },
    {
        "id": 4,
        "img": "/images/products/luxe/be-inspired/5.jpg"
    },
    {
        "id": 5,
        "img": "/images/products/luxe/be-inspired/6.jpg"
    }
]
</script>
<style lang="less" scoped>
.be-inspired {
    padding: 8vh 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>button {
        margin-top: 16vh;
    }

    &>h2 {
        color: #52b58a;
        margin-top: 2.5rem;
        margin-bottom: 1.5em;
        font-family: circular-book;
        align-self: flex-start;
        font-size: 3rem;
    }

    .box {
        display: flex;

        .left {
            width: 60%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            img {
                display: block;
                margin-left: 2%;
                margin-bottom: 2%;
                width: 31.3333333333%;

                &:nth-child(1),
                &:nth-child(4) {
                    margin-left: 0;
                }
            }
        }

        .right {
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2 {
                margin: 2em 0 1.2em;
                text-align: center;
                color: #52b58a;
                font-family: circular-book;
                line-height: 2;
                font-weight: 500;
                font-size: 2.8rem;
            }

            a {
                background-color: #52b68b;
                color: #fff;
                border-color: #4cbd91;
                border-style: solid;
                border-radius: 100px;
                border-width: 3px;
                padding: 6px 42px;
                transition: background-color .3s, color .3s;
                font-family: circular-bold;
                line-height: 1.5;
                display: inline-block;

                @media screen and (min-width: 1920px) {
                    font-size: 20px;
                }

                @media screen and (min-width: 930px) {
                    font-size: calc(18px + 2 * ((100vw - 930px)/990));
                }

                &:hover {
                    background-color: #fff;
                    color: #52b68b;
                }
            }
        }
    }
}
</style>