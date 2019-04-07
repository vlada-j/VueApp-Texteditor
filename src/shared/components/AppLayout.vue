<script>
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'

export default {
	name: 'AppLayout',

	components: {
		AppHeader,
		AppSidebar
	},

	data() {
		return {
			msgBoxOpen: false,
			sideMenuOpen: false
		};
	},

	methods: {
		toggleMessageBox() { this.msgBoxOpen = !this.msgBoxOpen; },
		toggleSideMenu() { this.sideMenuOpen = !this.sideMenuOpen; },
		closeSideMenu() { this.sideMenuOpen = false; }
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<div class="main-wrapper" :class="{'slide-nav': sideMenuOpen, 'open-msg-box': msgBoxOpen}">
		<app-header @onMenuToggle="toggleSideMenu()" @onMessageBoxToggle="toggleMessageBox()"></app-header>

		<app-sidebar></app-sidebar>

		<aside class="notification-box"></aside>

		<main class="page-wrapper"><router-view></router-view></main>

		<div class="sidebar-overlay" :class="{opened: sideMenuOpen}" @click="closeSideMenu()"></div>
	</div>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped>
.page-wrapper {
	top:50px;
	left:200px;
	right:0;
	bottom:0;
	padding:10px;
	position:absolute;
}
</style>