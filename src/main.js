import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Notifications from './components/Notifications.vue';
import Agenda from './components/Agenda.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeContent },
  { path: '/notifications', component: Notifications },
  { path: '/agenda', component: Agenda }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
