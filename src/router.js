import Vue from 'vue'
import Router from 'vue-router'
import auth from './shared/auth'
import ThePageNotFound from './shared/components/ThePageNotFound.vue'


Vue.use(Router);

auth.setLogoutRedirect( { name: 'login' } );


export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [

		// Public module
		{
			path: '/login',
			name: 'login',
			component: () => import(/* webpackChunkName: "public" */ './Public/TheLogin.vue'),
		},
		{
			path: '/registration',
			name: 'registration',
			component: () => import(/* webpackChunkName: "public" */ './Public/TheRegistration.vue'),
		},

		// Logged modules
		{
			path: '/',
//			beforeEnter: auth.authGard,
			component: () => import(/* webpackChunkName: "app-layout" */ './shared/components/AppLayout.vue'),
			children: [
				{
					path: '',
					name: 'dashboard',
					component: () => import(/* webpackChunkName: "dashboard" */ './Dashboard/TheDashboard.vue'),
				}
			]
		},

		{ path: "*", component: ThePageNotFound }
	]
});