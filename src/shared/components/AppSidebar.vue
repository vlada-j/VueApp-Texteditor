<script>
import SETTINGS from '../../SETTINGS';

export default {
	name: 'AppSidebar',

	data() {
		return {
			structure: SETTINGS.NAVIGATION
		}
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<aside class="sidebar">

		<div class="sidebar-menu">
			<ul>
				<li class="menu-title">Main</li>

				<router-link tag="li" to="/" exact><a><i class="fa fa-dashboard"></i> Dashboard</a></router-link>

				<router-link tag="li" v-for="(link, i) in structure" :key="i" :to="link.url"><a><i class="fa" :class="link.icon"></i> {{link.label}}</a></router-link>
			</ul>
		</div>
	</aside>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>