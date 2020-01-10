import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAuthenticate from 'vue-authenticate'
import Vuex from 'vuex';
import routes from './routes';
import store from './store';
import VueAxios from 'vue-axios'
import axios from 'axios';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAuthenticate, {
    baseUrl: 'http://homestead.test/api/',
});


Vue.component('main-app', require('./components/IndexComponent.vue').default);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    store: new Vuex.Store(store),
    auth: new VueAuthenticate(Vue.prototype.$http)

});

export default app;