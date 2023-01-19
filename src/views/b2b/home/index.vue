<template>
    <div class="b2b-home">
        <video-section />
        <define-standard />
        <discover-technologies />
        <benefits />
        <sustainability />
        <news-and-events />
    </div>
</template>
<script setup>
import VideoSection from './components/video/index.vue';
import DefineStandard from './components/define-a-new-standard/index.vue';
import DiscoverTechnologies from './components/discover-technologies/index.vue';
import Benefits from './components/benefits/index.vue';
import Sustainability from './components/sustainability/index.vue';
import NewsAndEvents from '../../../components/commons/news-and-events/index.vue';

</script>
<style lang="less" scoped>
.b2b-home {
    max-width: 1920px;
    margin: 0 auto;
}
</style>