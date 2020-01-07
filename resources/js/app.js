import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes';
import store from './store';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('main-app', require('./components/IndexComponent.vue').default);
Vue.component('replies', require('./components/RepliesComponent.vue'));

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    store: new Vuex.Store(store)
});
