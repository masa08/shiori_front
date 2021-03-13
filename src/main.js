import Vue from 'vue';
import App from './App.vue';
import vuetify from './config/vuetify';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
