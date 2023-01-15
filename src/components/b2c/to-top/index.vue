<template>
    <button class="to-top" ref="toTop" @click="toTopFn">
        <a href="javascript:;"></a>
    </button>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const toTop = ref(null);

const toTopFn = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}



</script>
<style lang="less" scoped>
.to-top {
    position: absolute;
    bottom: 2rem;
    overflow: hidden;
    border-radius: 50%;

    a {
        display: block;
        position: relative;
        width: 5rem;
        height: 5rem;
        background: #ededed;

        &::after {
            position: absolute;
            top: 55%;
            left: 50%;
            display: inline-block;
            border: solid #52b68b;
            border-width: 0 3px 3px 0;
            padding: 5px;
            transform: translate(-50%, -50%) rotate(-135deg);
            content: "";
        }
    }
}
</style>