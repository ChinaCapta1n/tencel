<template>
    <button class="read-more" :style="{ backgroundColor: backgroundColor }">
        <a :href="link">
            <slot></slot>
        </a>
        <span class="green-line"></span>
    </button>
</template>
<script setup>
defineProps({
    link: {
        type: String,
        default: "javascript:;"
    },
    backgroundColor: {
        type: String,
        default: "transparent"
    }
})
</script>
<style lang="less" scoped>
.read-more {
    color: #000;
    font-size: 1.8rem;
    font-family: circular-bold;
    margin-bottom: .5rem;

    position: relative;

    a {
        display: block;
        height: 100%;
        padding: 1rem .2rem;
    }

    .green-line {
        position: absolute;
        bottom: -.5rem;
        left: 0;
        width: 100%;
        height: .3rem;
        background-color: var(--primary-color);
        transition: all .5s;
    }

    &:hover {
        .green-line {
            animation: greenLineAnimation .5s;
        }
    }
}

@keyframes greenLineAnimation {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}
</style>