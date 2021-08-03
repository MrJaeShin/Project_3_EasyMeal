import sendRequest from './send-request-api';

const BASE_URL = '/api/items';

export function create(item) {
    return sendRequest(BASE_URL, 'POST', item);
}

export function getAll() {
	return sendRequest(BASE_URL);
}

export function getById(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}
