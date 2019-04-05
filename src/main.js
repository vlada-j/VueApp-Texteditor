import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SETTINGS from './SETTINGS';

import auth from './shared/auth'
auth.initialize();




new Vue({
	router,
	render: h => h(App)
})
	.$mount( SETTINGS.APP_ROOT_ELEMENT );
