import { createApp } from 'vue';
import App from './App.vue';

// pinia
import pinia from './stores/index.js';

// router
import router from './router/index.js';

import './assets/css/index.css';

// animate.css
import 'animate.css';

createApp(App).use(router).use(pinia).mount('#app');
