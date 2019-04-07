<script>
import auth from '../../shared/auth'
import SETTINGS from '../../SETTINGS'


export default {
	name: 'AppHeader',

	data() {
		return {
			user: {}
		};
	},

	mounted() {
		this.user = auth.getUser() || {};
		this.user.avatar = this.user.avatar || SETTINGS.DEFAULT_AVATAR;
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
		<div class="app-header-left" style="float:left">
			<router-link to="/" class="logo"><img src="/assets/logo.png" width="40" height="40" alt=""></router-link>
		</div>
		<div class="page-title-box pull-left" style="float:left">
			<h3>Vue App</h3>
		</div>
		<a @click="toggleSideMenu()" tabindex class="mobile_btn pull-left">#</a>

		<button class="btn" style="float:right" @click="logout()">LOGOUT</button>

		<ul class="nav user-menu pull-right" style="float:right">
			<li class="nav-item dropdown d-none d-sm-block">
				<div class="btn-group b-dropdown dropdown">
					<button class="btn btn-link dropdown-toggle dropdown-toggle-no-caret dropdown-toggle nav-link"><i class="fa fa-bell-o"></i></button>
				</div>
			</li>
		</ul>

		<div class="dropdown mobile-user-menu pull-right" style="float:right">
			<button class="btn btn-primary dropdown-toggle"><span class="user-img"><img :src="user.avatar" width="40" alt="Admin" class="rounded-circle"><span class="status online"></span></span><span> superadmin11</span></button>
		</div>
	</header>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped>
.app-header {
	top:0;
	left:0;
	right:0;
	height:50px;
	position:absolute;
	padding:5px;
	background-color:#009efb;
}
</style>