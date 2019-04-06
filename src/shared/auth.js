/* *********************************************************************************************** *
 * AUTHORIZATION SERVICE
 * =============================================================================================== *
 * Kompletan logika za autorizaciju - token, user, status logovanja, auth gard
 * *********************************************************************************************** */


let token = false;
let expiresAt = false;
let userData = false;

let logoutRedirect = {};


export default {
	initialize,
	getUser,
	setUser,
	getToken,
	setToken,
	decrypt,
	isAuthenticated,
	authGard,
	setLogoutRedirect,
	logout,
	handleLoginRequest
};


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


function initialize() {
	token = localStorage.getItem('token') || '';
	expiresAt = localStorage.getItem('expires_at') || '';
	setUser();
}


//--------------------------------------------------------------------------------------------------


function getUser() {
	return userData ? Object.assign({}, userData) : false;
}


//--------------------------------------------------------------------------------------------------


function setUser(data) {
	let payload = data ? { data: data } : decrypt();
	userData = payload ? payload.data : false;
}


//--------------------------------------------------------------------------------------------------


function getToken() {
	return token;
}


//--------------------------------------------------------------------------------------------------


function setToken(newToken) {
	if (typeof newToken !== 'string' && !newToken) { return false; }

	let payload = decrypt(newToken);
	if (payload) {
		token = newToken;
		localStorage.setItem('token', token);

		expiresAt = payload.exp * 1000;
		localStorage.setItem('expires_at', expiresAt);

	}

	return payload;
}


//--------------------------------------------------------------------------------------------------


function decrypt(_token) {
	_token = _token || token;
	let payload;

	try {
		payload = _token.split('.')[1];
		payload = window.atob(payload);
		payload = JSON.parse(payload);
	}
	catch(e) { return false; }

	return payload;
}


//--------------------------------------------------------------------------------------------------


function isAuthenticated() {
	return !!token && new Date().getTime() < expiresAt;
}


//--------------------------------------------------------------------------------------------------


function authGard(to, from, next) {
	if ( to.name === 'callback' || isAuthenticated() ) { next(); }
	else {
		logout();
		next( logoutRedirect );
	}
}


//--------------------------------------------------------------------------------------------------


function setLogoutRedirect(component) {
	logoutRedirect = component
}


//--------------------------------------------------------------------------------------------------


function logout() {
console.log('logout');
	token = undefined;
	expiresAt = false;
	userData = false;

	localStorage.removeItem('token');
	localStorage.removeItem('expires_at');
}


//--------------------------------------------------------------------------------------------------


function handleLoginRequest( response ) {
	if (typeof response === 'object') {
		let payload = setToken(response.token);
		setUser(payload ? payload.data : false);
	}
	return response;
}