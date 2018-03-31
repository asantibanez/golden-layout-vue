
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

const store = new Vuex.Store({
    state: {
        count: 25
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        counter: state => state.count
    }
})

new Vue({
    store
}).$mount('#app')
