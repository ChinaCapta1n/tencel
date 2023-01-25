<template>
    <div class="sustainable-development-golds">
        <div class="top">
            <img src="https://www.tencel.com/images/assets/various/sustainable-development-goals.png" alt="">
        </div>
        <div class="bottom">
            <div class="box">
                <img src="https://www.tencel.com/images/assets/various/affordable-and-clean-energy.png" alt="">
            </div>
            <div class="box">
                <img src="https://www.tencel.com/images/assets/various/partnership-for-the-goals.png" alt="">
            </div>
            <div class="box">
                <img src="https://www.tencel.com/images/assets/various/climate-action.png" alt="">
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="less" scoped>
.sustainable-development-golds {
    margin-top: 3rem;
    margin-bottom: 3rem;

    .top {
        margin-bottom: 2em;

        &>img {
            max-width: 600px;
            display: block;
            width: auto;
            margin: 0 auto;
            padding: 0 15px;
        }
    }

    .bottom {
        display: flex;

        .box {
            margin-bottom: 30px;
            max-width: 190px;

            &>img {
                width: 100%;
            }
        }
    }
}
</style>