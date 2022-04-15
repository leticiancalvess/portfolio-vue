import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import 'animate.css';

library.add(fas, faYoutube, faGithub, faLinkedin, faFacebook);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
