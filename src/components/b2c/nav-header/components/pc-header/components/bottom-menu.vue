<template>
    <div class="bottom-menu">
        <div class="bottom-left">
            <img class="logo" src="/images/tencel-logo.svg" alt="">
        </div>
        <div class="bottom-right">
            <ul class="dropdown-menu">

                <li class="dropdown-menu-item" v-for="(nav, index) in navData">
                    <a class="dropdown-menu-item-link" href="javascript:;">
                        {{ nav.text }}
                        <span class="arrow-down">
                            <img src="/images/arrow-down.svg" alt="">
                        </span>
                    </a>
                    <ul class="dropdown-menu-list">
                        <li v-for="(nav, index) in nav.children">
                            <a href="javascript:;">{{ nav.text }}</a>
                        </li>
                    </ul>
                </li>

                <tencel-for-b2c />
            </ul>
        </div>
    </div>
</template>

<script setup>
import TencelForB2c from '../../../../../commons/tencel-for-b2b-b2c/index.vue'

const navData = [
    {
        "id": 0,
        "text": "our campaigns",
        "path": "javascript:;",
        "children": [
            {
                "id": 1.1,
                "text": "true carbon zero",
                "path": "javascript:;"
            },
            {
                "id": 11,
                "text": "#FeelsSoRight",
                "path": "javascript:;"
            },
            {
                "id": 21,
                "text": "#MakeItFeelRight",
                "path": "javascript:;"
            },
            {
                "id": 31,
                "text": "true transparency",
                "path": "javascript:;"
            },
            {
                "id": 41,
                "text": "TENCEL™ X",
                "path": "javascript:;"
            },
            {
                "id": 51,
                "text": "Feel Good Fibers Since 1992",
                "path": "javascript:;"
            },
            {
                "id": 61,
                "text": "#checkwhatsgood",
                "path": "javascript:;"
            }
        ]
    },
    {
        "id": 1,
        "text": "products",
        "path": "javascript:;",
        "children": [
            {
                "id": 1.1,
                "text": "General",
                "path": "javacript:;"
            },
            {
                "id": 1.2,
                "text": "Denim",
                "path": "javacript:;"
            },
            {
                "id": 1.3,
                "text": "Intimate",
                "path": "javacript:;"
            },
            {
                "id": 1.4,
                "text": "Active",
                "path": "javacript:;"
            },
            {
                "id": 1.5,
                "text": "Luxe",
                "path": "javacript:;"
            },
            {
                "id": 1.6,
                "text": "Home",
                "path": "javacript:;"
            },
            {
                "id": 1.7,
                "text": "Footwear",
                "path": "javacript:;"
            }
        ]
    },
    {
        "id": 2,
        "text": "FERIBRA",
        "path": "javascript:;",
        "children": []
    },
    {
        "id": 3,
        "text": "shop now",
        "path": "javacript:;",
        "children": [
            {
                "id": 3.1,
                "text": "Where to buy",
                "path": "javacript:;"
            },
            {
                "id": 3.2,
                "text": "eShop",
                "path": "javacript:;"
            }
        ]
    },
    {
        "id": 4,
        "text": "explore TENCEL",
        "path": "javascript:;",
        "children": [
            {
                "id": 4.1,
                "text": "about us",
                "path": "javacript:;"
            },
            {
                "id": 4.2,
                "text": "fiber story",
                "path": "javacript:;"
            },
            {
                "id": 4.3,
                "text": "sustainability",
                "path": "javacript:;"
            }
        ]
    }
]


</script>

<style lang="less" scoped>
.bottom-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem 0;

    .bottom-left {
        .logo {
            width: 25rem;
            height: 15rem;
        }
    }

    .bottom-right {
        .dropdown-menu {
            display: flex;
            align-items: center;
            flex-wrap: wrap;



            .dropdown-menu-item {
                margin-right: 4rem;
                position: relative;
                background-color: red;

                .dropdown-menu-item-link {
                    // transition-delay: .3s;

                    &~.dropdown-menu-list.show {
                        transition-delay: .3s;
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .dropdown-menu-list {
                    position: absolute;
                    top: 4rem;
                    transition: all .3s;
                    opacity: 0;
                    transform: translateY(2rem);

                    li {
                        margin-top: 1.5rem;

                        a {
                            font-size: 2.2rem;
                            color: #000;
                            white-space: nowrap
                        }
                    }

                }

                a {
                    display: flex;
                    align-items: center;
                    color: var(--primary-color);
                    font-size: 1.6rem;
                    font-family: circular-book;

                    .arrow-down {
                        width: .9rem;
                        height: .9rem;
                        margin: 0 .3rem;

                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>
