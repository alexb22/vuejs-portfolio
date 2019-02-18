import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {faHandPointer} from '@fortawesome/free-solid-svg-icons';
import {faRocket} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Vue.use(waypoint);
library.add(faArrowDown);
library.add(faMobileAlt);
library.add(faHandPointer);
library.add(faRocket);
library.add(faGraduationCap);
library.add(faLaptop);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

var data = {
	loading: true
}

router.beforeEach((to, from, next) => {
	data.loading = true;
	next();
});

router.afterEach((to, from) => {
	setTimeout(function() {data.loading = false;}, 2000);
});

var vm = new Vue({
  data: data,
  components: {
  	App
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// console.log(vm.$data.loading);


