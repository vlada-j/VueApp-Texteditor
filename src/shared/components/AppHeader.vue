<script>
import auth from '../../shared/auth'


export default {
	name: 'AppHeader',

	data() {
		return {
			user: {}
		};
	},

	mounted() {
		this.user = auth.getUser();
	},

	methods: {
		toggleMessageBox() { this.$emit('onMessageBoxToggle'); },
		toggleSideMenu() { this.$emit('onMenuToggle'); },
		logout() {
			auth.logout();
		//	this.$toast.info({ title:'Logout', message:'...' });
			this.$router.push({ name: 'login' });
		}
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<header class="app-header">
		<div class="app-header-left">
			<router-link to="/" class="logo"><img src="/assets/img/logo.png" width="40" height="40" alt=""></router-link>
		</div>
		<div class="page-title-box pull-left">
			<h3>HR Pro</h3>
		</div>
		<a @click="toggleSideMenu()" tabindex class="mobile_btn pull-left"><i class="fa fa-bars" aria-hidden="true"></i></a>


		<ul class="nav user-menu pull-right">
			<li class="nav-item dropdown d-none d-sm-block">
				<div class="btn-group b-dropdown dropdown">
					<button class="btn btn-link dropdown-toggle dropdown-toggle-no-caret dropdown-toggle nav-link"><i class="fa fa-bell-o"></i></button>
				</div>
			</li>
		</ul>

		<div class="dropdown mobile-user-menu pull-right">
			<button class="btn btn-primary dropdown-toggle"><span class="user-img"><img src="/assets/img/user.jpg" width="40" alt="Admin" class="rounded-circle"><span class="status online"></span></span><span> superadmin11</span></button>
		</div>
	</header>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>