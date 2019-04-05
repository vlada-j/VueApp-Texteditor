<script>
import publicService from './public'


export default {
	name: 'TheLogin',

	data() {
		return {
			username: '',
			password: '',
			errors: {}
		}
	},

	computed: {
		isValid() {
			return this.username && this.password && !this.errors.username && !this.errors.password
		}
	},

	methods: {
		validateUsername() {
			this.errors.username = publicService.validateUsername( this.username )
		},

		validatePassword() {
			this.errors.password = publicService.validatePassword( this.password )
		},

		login() {
			if (this.isValid) {
				publicService.login(this.username, this.password)
					.then( res => {
						if (res.error) {
							this.errors.username = res.errors.username;
							this.errors.password = res.errors.password;
						} else {
							this.$router.push({ name: 'dashboard' })
						}
					})
			}
		}
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<section>
		Login forma

		<label>Username:<br>
			<input type="text" v-model="username" @keypress="validateUsername()">
		</label>
		<p v-if="errors.username">{{errors.username}}</p>

		<label>Password:<br>
			<input type="text" v-model="password" @keypress="validatePassword()">
		</label>
		<p v-if="errors.password">{{errors.password}}</p>

		<hr>

		<button @click="login()" :disabled="!isValid">Login</button>
	</section>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>