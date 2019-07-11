import Vue from 'vue';
import Vuex from 'vuex';
import machines from './machines'
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        machines
    }
})