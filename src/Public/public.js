export default {

	login(username, password) {
		// server request
	},

	validateUsername(username) {
		return username && username.length > 3 ? '' : 'Najmanje 3 karaktera';
	},

	validatePassword(password) {
		return password && password.length > 3 ? '' : 'Najmanje 3 karaktera';
	},

	registration(params) {
		// server request
	}

	// ...
}