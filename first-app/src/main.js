import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import router from './router';

import {sync} from 'vuex-router-sync';
import store from './store/store';
//import Vuetify from 'vuetify';
//import 'vuetify/dist/vuetify.min.css';
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueRouter);

sync(store,router);
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })




//Vue.use(Vuetify);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
