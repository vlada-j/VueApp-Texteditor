<script>
import auth from '../shared/auth'


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
				<b-dropdown variant="link" no-caret toggle-class="dropdown-toggle nav-link" menu-class="dropdown-menu notifications">
					<template slot="button-content">
						<i class="fa fa-bell-o"></i> <span class="badge badge-pill bg-primary pull-right">3</span>
					</template>
					<div class="topnav-dropdown-header">Notifications</div>
					<div class="drop-scroll">
						<ul class="notification-list">
							<li class="notification-message">
								<a tabindex>
									<div class="media">
										<span class="avatar">
											<img alt="John Doe" src="/assets/img/user.jpg" class="img-fluid">
										</span>
										<div class="media-body">
											<p class="noti-details"><span class="noti-title">John Doe</span> added new task <span class="noti-title">Patient appointment booking</span></p>
											<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="topnav-dropdown-footer">
						<a>View all Notifications</a>
					</div>
				</b-dropdown>
			</li>

			<li class="nav-item dropdown has-arrow">
				<b-dropdown right variant="primary">
					<template slot="button-content">
							<span class="user-img"><img class="rounded-circle" src="/assets/img/user.jpg" width="40" alt="Admin">
								<span class="status online"></span>
							</span>
						<span> {{user.username}}</span>
					</template>
					<router-link tag="b-dropdown-item" :to="'/users/'+ user.id">Profile</router-link>
					<router-link tag="b-dropdown-item" to="/settings">Settings</router-link>
					<b-dropdown-item @click="logout()">Logout</b-dropdown-item>
				</b-dropdown>
			</li>

		</ul>

		<div class="dropdown mobile-user-menu pull-right">
			<b-dropdown variant="link" no-caret toggle-class="nav-link dropdown-toggle" menu-class="dropdown-menu-right">
				<template slot="button-content">
					<i class="fa fa-ellipsis-v"></i>
				</template>
				<router-link tag="b-dropdown-item" to="/profile">Profile</router-link>
				<router-link tag="b-dropdown-item" to="/settings">Settings</router-link>
				<b-dropdown-item @click="logout()">Logout</b-dropdown-item>
			</b-dropdown>
		</div>
	</header>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>