import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/custom.css';

import VueGtag from "vue-gtag";


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)

  if(process.env.VUE_APP_GOOGLE_ANALYTICS_ID) {
	  console.log('UA: ', process.env.VUE_APP_GOOGLE_ANALYTICS_ID)
	  app.use(VueGtag, {
		config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID }
	  });
  }
  
router.isReady().then(() => {
  app.mount('#app');
});