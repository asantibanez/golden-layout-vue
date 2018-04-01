
const $ = require('jquery')
window.jQuery = $
window.$ = $

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import App from './App.vue'
import FormComponent from './FormComponent.vue'
Vue.component('app', App)
Vue.component('form-component', FormComponent)

if(!localStorage.getItem('sharedCount'))	/**/
	localStorage.setItem('sharedCount', 25);

import createMutationsSharer from 'vuex-shared-mutations'
const store = new Vuex.Store({
    state: {
        count: localStorage.getItem('sharedCount')
    },
    mutations: {
        increment (state) {
					localStorage.setItem('sharedCount', ++state.count);
        }
    },
    getters: {
        counter: state => state.count
		},
		plugins: [createMutationsSharer({ predicate: ['increment'] })]
})

new Vue({
    store
}).$mount('#app')
