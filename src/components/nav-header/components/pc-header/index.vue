<template>
    <div class="top-menu">
        <ul class="menu-list" :class="searchBtn === true ? 'opacity-0' : ''">
            <li class="menu-item"><a href="javascript:;">news & events</a></li>
            <li class="menu-item"><a href="javascript:;">contact us</a></li>
            <li class="menu-item dropdown-menu" @click.stop="showDropdownMenuFn">
                <a href="javascript:;">
                    English
                    <span class="arrow-down">
                        <img src="/images/arrow-down.svg" alt="">
                    </span>
                </a>
                <div class="dropdown-menu-items" :class="dropdownMenuHeight === true ? 'height-0' : ''">
                    <a class="dropdown-menu-item" href="javascript:;">English</a>
                    <a class="dropdown-menu-item" href="javascript:;">Deutsch</a>
                    <a class="dropdown-menu-item" href="javascript:;">简体中文</a>
                    <a class="dropdown-menu-item" href="javascript:;">Türkçe</a>
                    <a class="dropdown-menu-item" href="javascript:;">Español</a>
                    <a class="dropdown-menu-item" href="javascript:;">日本语</a>
                    <a class="dropdown-menu-item" href="javascript:;">한국어</a>
                    <a class="dropdown-menu-item" href="javascript:;">繁體中文</a>
                    <a class="dropdown-menu-item" href="javascript:;">Bahasa Indonesia</a>
                </div>
            </li>
        </ul>
        <div class="search" :class="searchBtn === true ? 'show' : ''">
            <img @click="showSearchInputFn" class="search-svg" src="/images/search.svg" alt="">
            <input class="search-input" type="text" placeholder="Type your search criteria here...">
            <img @click="hideSearchInputFn" class="close-gray" src="/images/close-gray.svg" alt="">
        </div>
    </div>
    <div class="bottom-menu">

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// search button
const searchBtn = ref(false);
const showSearchInputFn = () => {
    searchBtn.value = true;
}
const hideSearchInputFn = () => {
    searchBtn.value = false;
}

// dropdown menu
const dropdownMenuHeight = ref(true);
const showDropdownMenuFn = () => {
    dropdownMenuHeight.value = !dropdownMenuHeight.value;
}
const hideDropdownMenuFn = () => {
    dropdownMenuHeight.value = true;
}

onMounted(() => {
    window.addEventListener('click', hideDropdownMenuFn);
})

onUnmounted(() => {
    window.removeEventListener('click', hideDropdownMenuFn);
})


</script>

<style lang="less" scoped>
.top-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .menu-list {
        display: flex;
        transform: translateX(43rem);

        &.opacity-0 {
            transform: translateX(0);
            opacity: 0;
        }

        .menu-item {
            margin-right: 1rem;

            a {
                font-size: 1.4rem;
                color: #b1b1b1;
                display: block;
                font-family: circular-book;
            }
        }

        .dropdown-menu {
            position: relative;

            .dropdown-menu-items {
                width: 20rem;
                background-color: #fff;
                transition: all .2s;
                height: 356.33px;
                overflow: hidden;

                &.height-0 {
                    height: 0;
                    overflow: hidden;
                }

                position: absolute;
                top: 3rem;
                right: 1rem;

                .dropdown-menu-item {
                    border: 1px solid #ddd;
                    display: block;
                    padding: 1rem;
                    text-align: center;
                    color: #b1b1b1;

                    &:not(:nth-child(1)) {
                        border-top: none;
                    }

                    &:hover {
                        background-color: var(--primary-color);
                        color: #fff;
                    }
                }
            }

            a {
                color: var(--primary-color);
                display: flex;
                align-items: center;

                .arrow-down {
                    height: 0.7rem;
                    padding-left: .4rem;

                    img {
                        width: 1rem;
                        height: 0.7rem;
                    }
                }
            }
        }
    }

    .search {
        margin-left: 0rem;
        padding: 1rem 2.2rem;
        width: 52rem;
        display: flex;
        transition: transform .3s;
        transform: translateX(43rem);

        &.show {
            transform: translateX(0);

            .close-gray,
            .search-input {
                opacity: 1;
            }
        }


        .search-svg {
            width: 4rem;
            height: 3.3rem;
            cursor: pointer;
        }

        .close-gray {
            width: 2rem;
            height: 2rem;
            align-self: center;
            margin-left: 1rem;
            cursor: pointer;
        }

        .search-input {
            border: none;
            border-bottom: 2px solid #52b68b;
            align-self: unset;
            width: 90%;
            padding: 1rem;
            color: #000;
            font-size: 1.8rem;

            &::-webkit-input-placeholder {
                color: #dcdee3;
            }
        }

        .close-gray,
        .search-input {
            opacity: 0;
        }
    }
}
</style>
