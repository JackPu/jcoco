import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/pages/Home.vue';
import History from 'components/pages/History.vue';
import Settings from 'components/pages/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/history',
      component: History,
    },
    {
      path: '/settings',
      component: Settings,
    },
  ],
});
