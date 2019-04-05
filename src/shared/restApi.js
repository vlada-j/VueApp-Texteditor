import SETTINGS from "../SETTINGS";
import auth from './auth';

const API_ROOT = SETTINGS.API_ROOT;


export default {
	send,
	get: sendGet,
	post: sendPost,
	put: sendPut,
	delete: sendDelete
};


//--------------------------------------------------------------------------------------------------

function sendGet(url, data, withoutToken) {
	return send( url, data, { method: 'GET' }, withoutToken)
		.then(handleResponse);
}

//--------------------------------------------------------------------------------------------------

function sendDelete(url, data, withoutToken) {
	return send( url, data, { method: 'DELETE' }, withoutToken)
		.then(handleResponse);
}

//--------------------------------------------------------------------------------------------------

function sendPost(url, data, withoutToken) {
	return send( url, data, { method: 'POST' }, withoutToken)
		.then(handleResponse);
}

//--------------------------------------------------------------------------------------------------

function sendPut(url, data, withoutToken) {
	return send( url, data, { method: 'PUT' }, withoutToken)
		.then(handleResponse);
}
//--------------------------------------------------------------------------------------------------



function send(url, data, options, withoutToken) {
	options.headers = options.headers || {};
	options.headers['Content-Type'] = 'application/json';
	options.headers['Accept'] = 'application/json';
	if (!withoutToken) options.headers['Authorization'] = auth.getToken();

	options.method = options.method ? options.method.toUpperCase() : 'GET';

	if ( options.method === 'GET' || options.method === 'DELETE' ) {
		url += '?' + paramsToQuery(data);
	}
	if ( options.method === 'POST' || options.method === 'PUT' ) {
		options.body = JSON.stringify(data);
	}

	return fetch(API_ROOT + url, options)
		.then(handleGeneralErrors)
	//	.catch(handleError);
}


// Formation parameters to query
function paramsToQuery(data) {
	data = data || {};
	return Object
		.keys(data)
		.map( key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) )
		.join('&');
}



function handleResponse(response) {
	let status = response.status,
		data = response.json(),
		message = response.statusText + ' ' + response.type,
		isOK = 200 <= status && status < 400;

	if ( !isOK ) {
		data = {
			status: status,
			errors: true,
			data: message
		};
	}

	data.status = status;

	return data;
}



function handleGeneralErrors(response) {
	switch(response.status) {
		case 401:
			console.log('Los token, izloguj se');
			break;
		case 404:
			console.log('End point nije nadjen');
			break;
		case 500:
		case 501:
		case 502:
		case 503:
			console.log('Server error: ', response.status, response.statusText);
			break;
	}

	return response;
}