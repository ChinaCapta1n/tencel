<template>
    <button class="visit-button">
        <a href="javascript:;">
            <slot></slot>
        </a>
    </button>
</template>
<script setup></script>
<style lang="less" scoped>
.visit-button {
    display: inline-block;
    text-decoration: none;
    line-height: 1.5;
    position: relative;
    color: var(--primary-color);
    border-color: var(--primary-color);
    border-style: solid;
    border-radius: 10rem;
    border-width: 0.3rem;
    padding: 0.6rem 4.2rem;
    transition: background-color .3s, color .3s;
    font-family: circular-bold;
    background-color: #fff;
    font-size: calc(18px + 2 * ((100vw - 930px)/990));
    cursor: pointer;

    a {
        display: block;
    }

    &:hover {
        color: #fff;
        background-color: var(--primary-color);
    }
}
</style>