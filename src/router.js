import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	// linkActiveClass: 'active',
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

		// Loged modules
		{
			path: '/',
		//	beforeEnter: auth.authGard,
	//		component: AppLayout,
			children: [
				{
					path: '',
					name: 'dashboard',
			//		component: () => import(/* webpackChunkName: "dashboard" */ './Dashboard/TheDashboard.vue'),
				}
			]
		},
	]
});