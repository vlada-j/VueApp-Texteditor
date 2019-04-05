import auth from '../shared/auth'
import restApi from '../shared/restApi'

const URL_LOGIN = 'users/login';

export default {

	login(username, password) {
		let params = { username: username, password: password };
		let sendingWithoutToken = true;

		return restApi.post( URL_LOGIN, params, sendingWithoutToken )
			.then( auth.handleLoginRequest );
	},

	//--------------------------------------------------------------------------------------------------

	validateUsername(username) {
		return username && username.length > 3 ? '' : 'Najmanje 3 karaktera';
	},

	//--------------------------------------------------------------------------------------------------

	validatePassword(password) {
		return password && password.length > 3 ? '' : 'Najmanje 3 karaktera';
	},

	//--------------------------------------------------------------------------------------------------

	registration(params) {
		// server request
	}

	//--------------------------------------------------------------------------------------------------

	// ...
}