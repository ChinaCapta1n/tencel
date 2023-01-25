<template>
    <div class="title-and-img">
        <h2>{{ title }}</h2>
        <img :src="img" alt="">
    </div>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})
</script>
<style lang="less" scoped>
.title-and-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;

    &>h2 {
        display: inline-block;
        margin: 0 auto 5px;
        font-family: circular-bold;
        font-size: 5.6rem;
        line-height: 5.6rem;
        white-space: nowrap;
    }

    &>img {
        display: block;
        margin: 0 auto;
        max-width: 75%;
    }
}
</style>