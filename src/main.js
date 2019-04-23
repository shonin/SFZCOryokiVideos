import Vue from 'vue'

import 'popper.js'; // needed for tooltip
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/util'; // needed for tooltip
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/tooltip';

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
